// HTML Parser utility for extracting instrument data from original HTML files
import * as fs from 'fs'
import * as path from 'path'
import { InstrumentData, QuizQuestion } from '../data/sampleInstrumentData'

export interface ParsedInstrumentData {
  id: string
  name: string
  description: string
  family: string
  pitchRange: string
  material: string
  size: string
  origins: string
  classification: string
  additionalNotes?: string
  audioUrl?: string
  imageUrl?: string
  videoUrl?: string
  previousInstrument?: string
  nextInstrument?: string
}

export class InstrumentHTMLParser {
  private instrumentsPath: string

  constructor(instrumentsPath: string) {
    this.instrumentsPath = instrumentsPath
  }

  /**
   * Parse a single HTML file and extract instrument data
   */
  parseInstrumentFile(filename: string): ParsedInstrumentData | null {
    try {
      const filePath = path.join(this.instrumentsPath, filename)
      const htmlContent = fs.readFileSync(filePath, 'utf-8')
      
      // Extract instrument name from title
      const titleMatch = htmlContent.match(/<title>(.*?) - Instruments of the world<\/title>/)
      const name = titleMatch ? titleMatch[1].trim() : ''
      
      // Extract description
      const descriptionMatch = htmlContent.match(/<p class="descri">(.*?)<\/p>/)
      const description = descriptionMatch ? this.cleanText(descriptionMatch[1]) : ''
      
      // Extract audio URL
      const audioMatch = htmlContent.match(/<source src="sons\/(.*?)" type="audio\/mp3"/)
      const audioUrl = audioMatch ? `/audio/${audioMatch[1]}` : undefined
      
      // Extract image URL
      const imageMatch = htmlContent.match(/<img alt="picture of .*?" src="(?:images\/|http:\/\/www\.instrumentsoftheworld\.com\/instrument\/images\/)(.*?)"/)
      const imageUrl = imageMatch ? `/images/${imageMatch[1]}` : undefined
      
      // Extract video URL
      const videoMatch = htmlContent.match(/<iframe.*?src="https:\/\/www\.youtube\.com\/embed\/(.*?)"/)
      const videoUrl = videoMatch ? `https://www.youtube.com/embed/${videoMatch[1]}` : undefined
      
      // Extract navigation links
      const prevMatch = htmlContent.match(/<a href="(.*?)"><img alt="previous instrument"/)
      const nextMatch = htmlContent.match(/<a href="(.*?)"><img alt="next instrument"/)
      const previousInstrument = prevMatch ? this.extractInstrumentId(prevMatch[1]) : undefined
      const nextInstrument = nextMatch ? this.extractInstrumentId(nextMatch[1]) : undefined
      
      // Extract table data
      const tableData = this.extractTableData(htmlContent)
      
      // Generate ID from filename
      const id = this.generateId(filename)
      
      return {
        id,
        name,
        description,
        family: tableData.family || '',
        pitchRange: tableData.pitchRange || '',
        material: tableData.material || '',
        size: tableData.size || '',
        origins: tableData.origins || '',
        classification: tableData.classification || '',
        additionalNotes: tableData.additionalNotes,
        audioUrl,
        imageUrl,
        videoUrl,
        previousInstrument,
        nextInstrument
      }
    } catch (error) {
      console.error(`Error parsing ${filename}:`, error)
      return null
    }
  }

  /**
   * Extract structured data from the HTML table
   */
  private extractTableData(htmlContent: string): {
    family?: string
    pitchRange?: string
    material?: string
    size?: string
    origins?: string
    classification?: string
    additionalNotes?: string
  } {
    const tableMatch = htmlContent.match(/<div id="notes"><table>(.*?)<\/table><\/div>/s)
    if (!tableMatch) return {}
    
    const tableContent = tableMatch[1]
    const data: any = {}
    
    // Extract Family
    const familyMatch = tableContent.match(/<td class="intitule">Family<\/td>.*?<td class="content">(?:<a.*?>)?(.*?)(?:<\/a>)?<\/td>/s)
    if (familyMatch) data.family = this.cleanText(familyMatch[1])
    
    // Extract Pitch range
    const pitchMatch = tableContent.match(/<td class="intitule">Pitch range<\/td>.*?<td class="content">(.*?)<\/td>/s)
    if (pitchMatch) data.pitchRange = this.cleanText(pitchMatch[1])
    
    // Extract Material
    const materialMatch = tableContent.match(/<td class="intitule">Material<\/td>.*?<td class="content">(.*?)<\/td>/s)
    if (materialMatch) data.material = this.cleanText(materialMatch[1])
    
    // Extract Size
    const sizeMatch = tableContent.match(/<td class="intitule">Size<\/td>.*?<td class="content">(.*?)<\/td>/s)
    if (sizeMatch) data.size = this.cleanText(sizeMatch[1])
    
    // Extract Origins
    const originsMatch = tableContent.match(/<td class="intitule">Origins<\/td>.*?<td class="content">(.*?)<\/td>/s)
    if (originsMatch) data.origins = this.cleanText(originsMatch[1])
    
    // Extract Classification
    const classificationMatch = tableContent.match(/<td class="intitule">Classification<\/td>.*?<td class="content">(.*?)<\/td>/s)
    if (classificationMatch) data.classification = this.cleanText(classificationMatch[1])
    
    // Extract And also...
    const alsoMatch = tableContent.match(/<td class="intitule">And also\.\.\.<\/td>.*?<td class="content">(.*?)<\/td>/s)
    if (alsoMatch) data.additionalNotes = this.cleanText(alsoMatch[1])
    
    return data
  }

  /**
   * Clean HTML text by removing tags and decoding entities
   */
  private cleanText(text: string): string {
    return text
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim()
  }

  /**
   * Generate instrument ID from filename
   */
  private generateId(filename: string): string {
    return filename
      .replace(/^\d+-/, '') // Remove number prefix
      .replace(/\.html$/, '') // Remove extension
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, '') // Remove leading/trailing hyphens
  }

  /**
   * Extract instrument ID from navigation link
   */
  private extractInstrumentId(href: string): string {
    const filename = href.split('/').pop() || ''
    return this.generateId(filename)
  }

  /**
   * Parse all instrument files in the directory
   */
  parseAllInstruments(): ParsedInstrumentData[] {
    try {
      const files = fs.readdirSync(this.instrumentsPath)
      const htmlFiles = files.filter(file => file.endsWith('.html'))
      
      const instruments: ParsedInstrumentData[] = []
      
      for (const file of htmlFiles) {
        const instrumentData = this.parseInstrumentFile(file)
        if (instrumentData) {
          instruments.push(instrumentData)
        }
      }
      
      // Sort by filename number for consistent ordering
      instruments.sort((a, b) => {
        const aNum = this.extractFileNumber(a.id)
        const bNum = this.extractFileNumber(b.id)
        return aNum - bNum
      })
      
      return instruments
    } catch (error) {
      console.error('Error parsing instruments directory:', error)
      return []
    }
  }

  /**
   * Extract file number for sorting
   */
  private extractFileNumber(id: string): number {
    // This is a simplified approach - in practice you'd need to map back to original filenames
    return 0
  }

  /**
   * Simplify text for grade 7 non-native speakers
   */
  simplifyText(text: string): string {
    // Basic text simplification rules
    return text
      .replace(/\b(utilizes|utilised)\b/gi, 'uses')
      .replace(/\b(approximately)\b/gi, 'about')
      .replace(/\b(subsequently)\b/gi, 'then')
      .replace(/\b(consequently)\b/gi, 'so')
      .replace(/\b(nevertheless)\b/gi, 'but')
      .replace(/\b(furthermore)\b/gi, 'also')
      .replace(/\b(therefore)\b/gi, 'so')
      .replace(/\b(however)\b/gi, 'but')
      .replace(/\b(although)\b/gi, 'even though')
      .replace(/\b(whereas)\b/gi, 'while')
      .replace(/\b(comprise)\b/gi, 'include')
      .replace(/\b(constitute)\b/gi, 'make up')
      .replace(/\b(demonstrate)\b/gi, 'show')
      .replace(/\b(facilitate)\b/gi, 'help')
      .replace(/\b(predominantly)\b/gi, 'mostly')
      .replace(/\b(substantial)\b/gi, 'large')
      .replace(/\b(significant)\b/gi, 'important')
      .replace(/\b(numerous)\b/gi, 'many')
      .replace(/\b(various)\b/gi, 'different')
      .replace(/\b(particular)\b/gi, 'special')
      .replace(/\b(specific)\b/gi, 'exact')
      .replace(/\b(individual)\b/gi, 'single')
      .replace(/\b(traditional)\b/gi, 'old')
      .replace(/\b(contemporary)\b/gi, 'modern')
      .replace(/\b(sophisticated)\b/gi, 'complex')
      .replace(/\b(fundamental)\b/gi, 'basic')
      .replace(/\b(essential)\b/gi, 'important')
      .replace(/\b(distinctive)\b/gi, 'special')
      .replace(/\b(characteristic)\b/gi, 'typical')
      .replace(/\b(exceptional)\b/gi, 'very good')
      .replace(/\b(remarkable)\b/gi, 'amazing')
      .replace(/\b(extraordinary)\b/gi, 'very special')
      // Simplify complex sentence structures
      .replace(/; /g, '. ') // Replace semicolons with periods
      .replace(/\b(which|that) (is|are|was|were) /gi, ' ') // Simplify relative clauses
      // Break long sentences
      .replace(/,\s*and\s+/g, '. ') // Some comma-and combinations become new sentences
  }

  /**
   * Generate simplified instrument data with bilingual support
   */
  generateSimplifiedInstrument(parsed: ParsedInstrumentData): InstrumentData {
    return {
      id: parsed.id,
      name: parsed.name,
      name_zh: this.generateChineseName(parsed.name), // Placeholder - would need translation service
      description: this.simplifyText(parsed.description),
      description_zh: '', // Would need translation service
      family: parsed.family,
      family_zh: this.translateFamily(parsed.family),
      pitchRange: this.simplifyText(parsed.pitchRange),
      pitchRange_zh: '', // Would need translation service
      material: this.simplifyText(parsed.material),
      material_zh: '', // Would need translation service
      size: this.simplifyText(parsed.size),
      size_zh: '', // Would need translation service
      origins: this.simplifyText(parsed.origins),
      origins_zh: '', // Would need translation service
      classification: this.simplifyText(parsed.classification),
      classification_zh: '', // Would need translation service
      additionalNotes: parsed.additionalNotes ? this.simplifyText(parsed.additionalNotes) : undefined,
      additionalNotes_zh: '', // Would need translation service
      audioUrl: parsed.audioUrl,
      imageUrl: parsed.imageUrl,
      videoUrl: parsed.videoUrl,
      previousInstrument: parsed.previousInstrument,
      nextInstrument: parsed.nextInstrument
    }
  }

  /**
   * Basic family name translation (placeholder)
   */
  private translateFamily(family: string): string {
    const translations: { [key: string]: string } = {
      'Woodwinds': '木管乐器',
      'Strings': '弦乐器',
      'Keyboards': '键盘乐器',
      'Brass': '铜管乐器',
      'Percussion': '打击乐器'
    }
    return translations[family] || family
  }

  /**
   * Generate Chinese name (placeholder - would need proper translation)
   */
  private generateChineseName(name: string): string {
    const translations: { [key: string]: string } = {
      'Flute': '长笛',
      'Violin': '小提琴',
      'Piano, Upright': '立式钢琴',
      'Accordion': '手风琴'
    }
    return translations[name] || name
  }
}

// Export utility functions
export function parseInstrumentsFromDirectory(instrumentsPath: string): ParsedInstrumentData[] {
  const parser = new InstrumentHTMLParser(instrumentsPath)
  return parser.parseAllInstruments()
}

export function generateInstrumentData(instrumentsPath: string): InstrumentData[] {
  const parser = new InstrumentHTMLParser(instrumentsPath)
  const parsedInstruments = parser.parseAllInstruments()
  
  return parsedInstruments.map(parsed => parser.generateSimplifiedInstrument(parsed))
}