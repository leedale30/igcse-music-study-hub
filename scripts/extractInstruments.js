#!/usr/bin/env node

// Script to extract instrument data from HTML files and generate TypeScript data
import fs from 'fs'
import path from 'path'

// Configuration
const INSTRUMENTS_PATH = '/Users/antonyleedale/Downloads/igcse-music-study-hub (1)/TEST/instruments_test/www.instrumentsoftheworld.com/instrument'
const OUTPUT_PATH = '/Users/antonyleedale/Downloads/igcse-music-study-hub (1)/src/data/instrumentsData.ts'
const QUIZ_OUTPUT_PATH = '/Users/antonyleedale/Downloads/igcse-music-study-hub (1)/src/data/quizData.ts'

class InstrumentExtractor {
  constructor() {
    this.instruments = []
    this.quizQuestions = []
  }

  /**
   * Parse a single HTML file and extract instrument data
   */
  parseInstrumentFile(filename) {
    try {
      const filePath = path.join(INSTRUMENTS_PATH, filename)
      const htmlContent = fs.readFileSync(filePath, 'utf-8')
      
      // Extract instrument name from title
      const titleMatch = htmlContent.match(/<title>(.*?) - Instruments of the world<\/title>/)
      const name = titleMatch ? titleMatch[1].trim() : ''
      
      // Extract description
      const descriptionMatch = htmlContent.match(/<p class="descri">(.*?)<\/p>/s)
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
        name_zh: this.generateChineseName(name),
        description: this.simplifyText(description),
        description_zh: '', // Placeholder for translation
        family: tableData.family || '',
        family_zh: this.translateFamily(tableData.family || ''),
        pitchRange: this.simplifyText(tableData.pitchRange || ''),
        pitchRange_zh: '', // Placeholder for translation
        material: this.simplifyText(tableData.material || ''),
        material_zh: '', // Placeholder for translation
        size: this.simplifyText(tableData.size || ''),
        size_zh: '', // Placeholder for translation
        origins: this.simplifyText(tableData.origins || ''),
        origins_zh: '', // Placeholder for translation
        classification: this.simplifyText(tableData.classification || ''),
        classification_zh: '', // Placeholder for translation
        additionalNotes: tableData.additionalNotes ? this.simplifyText(tableData.additionalNotes) : undefined,
        additionalNotes_zh: '', // Placeholder for translation
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
  extractTableData(htmlContent) {
    const tableMatch = htmlContent.match(/<div id="notes"><table>(.*?)<\/table><\/div>/s)
    if (!tableMatch) return {}
    
    const tableContent = tableMatch[1]
    const data = {}
    
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
  cleanText(text) {
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
  generateId(filename) {
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
  extractInstrumentId(href) {
    const filename = href.split('/').pop() || ''
    return this.generateId(filename)
  }

  /**
   * Simplify text for grade 7 non-native speakers
   */
  simplifyText(text) {
    if (!text) return text
    
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
   * Basic family name translation (placeholder)
   */
  translateFamily(family) {
    const translations = {
      'Woodwinds': '木管乐器',
      'Strings': '弦乐器',
      'Keyboards': '键盘乐器',
      'Brass': '铜管乐器',
      'Percussion': '打击乐器',
      'Winds': '管乐器',
      'Plucked strings': '拨弦乐器',
      'Bowed strings': '拉弦乐器'
    }
    return translations[family] || family
  }

  /**
   * Generate Chinese name (placeholder - would need proper translation)
   */
  generateChineseName(name) {
    const translations = {
      'Flute': '长笛',
      'Violin': '小提琴',
      'Piano, Upright': '立式钢琴',
      'Accordion': '手风琴',
      'Guitar': '吉他',
      'Trumpet': '小号',
      'Drums': '鼓',
      'Saxophone': '萨克斯风',
      'Clarinet': '单簧管',
      'Cello': '大提琴'
    }
    return translations[name] || name
  }

  /**
   * Generate quiz questions for an instrument
   */
  generateQuizQuestions(instrument) {
    const questions = []
    
    // Question about family
    if (instrument.family) {
      questions.push({
        id: `${instrument.id}-family`,
        question: `What family does the ${instrument.name} belong to?`,
        question_zh: `${instrument.name_zh}属于哪个乐器族？`,
        options: [
          instrument.family,
          this.getRandomFamily(instrument.family),
          this.getRandomFamily(instrument.family),
          this.getRandomFamily(instrument.family)
        ],
        options_zh: [
          instrument.family_zh,
          this.getRandomFamilyZh(instrument.family_zh),
          this.getRandomFamilyZh(instrument.family_zh),
          this.getRandomFamilyZh(instrument.family_zh)
        ],
        correctAnswer: 0,
        explanation: `The ${instrument.name} belongs to the ${instrument.family} family.`,
        explanation_zh: `${instrument.name_zh}属于${instrument.family_zh}。`
      })
    }

    // Question about material
    if (instrument.material) {
      questions.push({
        id: `${instrument.id}-material`,
        question: `What is the ${instrument.name} typically made of?`,
        question_zh: `${instrument.name_zh}通常由什么材料制成？`,
        options: [
          instrument.material,
          this.getRandomMaterial(instrument.material),
          this.getRandomMaterial(instrument.material),
          this.getRandomMaterial(instrument.material)
        ],
        options_zh: [
          instrument.material_zh || instrument.material,
          this.getRandomMaterial(instrument.material),
          this.getRandomMaterial(instrument.material),
          this.getRandomMaterial(instrument.material)
        ],
        correctAnswer: 0,
        explanation: `The ${instrument.name} is typically made of ${instrument.material}.`,
        explanation_zh: `${instrument.name_zh}通常由${instrument.material_zh || instrument.material}制成。`
      })
    }

    // Question about origins
    if (instrument.origins) {
      questions.push({
        id: `${instrument.id}-origins`,
        question: `Where does the ${instrument.name} originate from?`,
        question_zh: `${instrument.name_zh}起源于哪里？`,
        options: [
          instrument.origins,
          this.getRandomOrigin(instrument.origins),
          this.getRandomOrigin(instrument.origins),
          this.getRandomOrigin(instrument.origins)
        ],
        options_zh: [
          instrument.origins_zh || instrument.origins,
          this.getRandomOrigin(instrument.origins),
          this.getRandomOrigin(instrument.origins),
          this.getRandomOrigin(instrument.origins)
        ],
        correctAnswer: 0,
        explanation: `The ${instrument.name} originates from ${instrument.origins}.`,
        explanation_zh: `${instrument.name_zh}起源于${instrument.origins_zh || instrument.origins}。`
      })
    }

    return questions
  }

  getRandomFamily(exclude) {
    const families = ['Woodwinds', 'Strings', 'Brass', 'Percussion', 'Keyboards']
    const filtered = families.filter(f => f !== exclude)
    return filtered[Math.floor(Math.random() * filtered.length)]
  }

  getRandomFamilyZh(exclude) {
    const families = ['木管乐器', '弦乐器', '铜管乐器', '打击乐器', '键盘乐器']
    const filtered = families.filter(f => f !== exclude)
    return filtered[Math.floor(Math.random() * filtered.length)]
  }

  getRandomMaterial(exclude) {
    const materials = ['Wood', 'Metal', 'Plastic', 'Bamboo', 'Leather', 'Synthetic materials']
    const filtered = materials.filter(m => m !== exclude)
    return filtered[Math.floor(Math.random() * filtered.length)]
  }

  getRandomOrigin(exclude) {
    const origins = ['Europe', 'Asia', 'Africa', 'Americas', 'Middle East', 'Australia']
    const filtered = origins.filter(o => o !== exclude)
    return filtered[Math.floor(Math.random() * filtered.length)]
  }

  /**
   * Process all instrument files
   */
  processAllInstruments() {
    try {
      console.log('Reading instruments directory...')
      const files = fs.readdirSync(INSTRUMENTS_PATH)
      const htmlFiles = files.filter(file => file.endsWith('.html'))
      
      console.log(`Found ${htmlFiles.length} HTML files`)
      
      for (const file of htmlFiles) {
        console.log(`Processing ${file}...`)
        const instrumentData = this.parseInstrumentFile(file)
        if (instrumentData) {
          this.instruments.push(instrumentData)
          
          // Generate quiz questions for this instrument
          const questions = this.generateQuizQuestions(instrumentData)
          this.quizQuestions.push(...questions)
        }
      }
      
      // Sort instruments by ID for consistent ordering
      this.instruments.sort((a, b) => a.id.localeCompare(b.id))
      
      console.log(`Successfully processed ${this.instruments.length} instruments`)
      console.log(`Generated ${this.quizQuestions.length} quiz questions`)
      
    } catch (error) {
      console.error('Error processing instruments:', error)
    }
  }

  /**
   * Generate TypeScript data file
   */
  generateDataFile() {
    const content = `// Auto-generated instrument data from HTML files
// Generated on ${new Date().toISOString()}

export interface InstrumentData {
  id: string
  name: string
  name_zh: string
  description: string
  description_zh: string
  family: string
  family_zh: string
  pitchRange: string
  pitchRange_zh: string
  material: string
  material_zh: string
  size: string
  size_zh: string
  origins: string
  origins_zh: string
  classification: string
  classification_zh: string
  additionalNotes?: string
  additionalNotes_zh?: string
  audioUrl?: string
  imageUrl?: string
  videoUrl?: string
  previousInstrument?: string
  nextInstrument?: string
}

export const instrumentsData: InstrumentData[] = ${JSON.stringify(this.instruments, null, 2)}

export function getInstrumentById(id: string): InstrumentData | undefined {
  return instrumentsData.find(instrument => instrument.id === id)
}

export function getInstrumentsByFamily(family: string): InstrumentData[] {
  return instrumentsData.filter(instrument => instrument.family === family)
}

export function getAllFamilies(): string[] {
  const families = new Set(instrumentsData.map(instrument => instrument.family))
  return Array.from(families).sort()
}

export function searchInstruments(query: string): InstrumentData[] {
  const lowercaseQuery = query.toLowerCase()
  return instrumentsData.filter(instrument =>
    instrument.name.toLowerCase().includes(lowercaseQuery) ||
    instrument.description.toLowerCase().includes(lowercaseQuery) ||
    instrument.family.toLowerCase().includes(lowercaseQuery) ||
    instrument.origins.toLowerCase().includes(lowercaseQuery)
  )
}
`

    fs.writeFileSync(OUTPUT_PATH, content, 'utf-8')
    console.log(`Generated data file: ${OUTPUT_PATH}`)
  }

  /**
   * Generate quiz data file
   */
  generateQuizFile() {
    const content = `// Auto-generated quiz data from instrument information
// Generated on ${new Date().toISOString()}

export interface QuizQuestion {
  id: string
  question: string
  question_zh: string
  options: string[]
  options_zh: string[]
  correctAnswer: number
  explanation: string
  explanation_zh: string
}

export const quizQuestions: QuizQuestion[] = ${JSON.stringify(this.quizQuestions, null, 2)}

export function getQuestionsByInstrument(instrumentId: string): QuizQuestion[] {
  return quizQuestions.filter(question => question.id.startsWith(instrumentId))
}

export function getRandomQuestions(count: number = 20): QuizQuestion[] {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export function getQuestionsByFamily(family: string): QuizQuestion[] {
  // This would need to be implemented based on instrument family mapping
  return []
}
`

    fs.writeFileSync(QUIZ_OUTPUT_PATH, content, 'utf-8')
    console.log(`Generated quiz file: ${QUIZ_OUTPUT_PATH}`)
  }

  /**
   * Run the extraction process
   */
  run() {
    console.log('Starting instrument data extraction...')
    console.log(`Source: ${INSTRUMENTS_PATH}`)
    console.log(`Output: ${OUTPUT_PATH}`)
    console.log(`Quiz Output: ${QUIZ_OUTPUT_PATH}`)
    
    this.processAllInstruments()
    this.generateDataFile()
    this.generateQuizFile()
    
    console.log('Extraction completed successfully!')
  }
}

// Run the extractor
const extractor = new InstrumentExtractor()
extractor.run()