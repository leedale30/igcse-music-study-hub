import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { instrumentsData, getAllFamilies, searchInstruments, getInstrumentsByFamily, InstrumentData } from '../data/instrumentsData'

const InstrumentsListPage: React.FC = () => {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFamily, setSelectedFamily] = useState('all')

  const families = getAllFamilies()

  const filteredInstruments = useMemo(() => {
    let results: InstrumentData[] = instrumentsData

    // Apply search filter
    if (searchQuery.trim()) {
      results = searchInstruments(searchQuery)
    }

    // Apply family filter
    if (selectedFamily !== 'all') {
      results = results.filter(instrument => instrument.family === selectedFamily)
    }

    return results
  }, [searchQuery, selectedFamily])

  const groupedInstruments = useMemo(() => {
    const groups: { [key: string]: InstrumentData[] } = {}
    filteredInstruments.forEach(instrument => {
      const family = instrument.family
      if (!groups[family]) {
        groups[family] = []
      }
      groups[family].push(instrument)
    })
    return groups
  }, [filteredInstruments])

  const SearchIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )

  const FilterIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
    </svg>
  )

  const MusicIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MusicIcon />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white ml-3">
              {language === 'en-zh' ? '乐器百科 / Musical Instruments' : 'Musical Instruments'}
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {language === 'en-zh' 
              ? '探索世界各地的乐器，了解它们的历史、构造和音色特点 / Explore instruments from around the world and learn about their history, construction, and unique sounds'
              : 'Explore instruments from around the world and learn about their history, construction, and unique sounds'
            }
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder={language === 'en-zh' ? '搜索乐器... / Search instruments...' : 'Search instruments...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Family Filter */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FilterIcon />
              </div>
              <select
                value={selectedFamily}
                onChange={(e) => setSelectedFamily(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white min-w-[200px]"
              >
                <option value="all">
                  {language === 'en-zh' ? '所有类别 / All Families' : 'All Families'}
                </option>
                {families.map(family => (
                  <option key={family} value={family}>
                    {family}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {language === 'en-zh' 
              ? `找到 ${filteredInstruments.length} 个乐器 / Found ${filteredInstruments.length} instruments`
              : `Found ${filteredInstruments.length} instruments`
            }
          </div>
        </div>

        {/* Instruments Grid */}
        {Object.keys(groupedInstruments).length === 0 ? (
          <div className="text-center py-12">
            <MusicIcon />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              {language === 'en-zh' ? '未找到乐器 / No instruments found' : 'No instruments found'}
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              {language === 'en-zh' 
                ? '请尝试不同的搜索词或筛选条件 / Try different search terms or filters'
                : 'Try different search terms or filters'
              }
            </p>
          </div>
        ) : (
          Object.entries(groupedInstruments).map(([family, instruments]) => (
            <div key={family} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-blue-500 pb-2">
                {family}
                <span className="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                  ({instruments.length} {language === 'en-zh' ? '个乐器 / instruments' : 'instruments'})
                </span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {instruments.map(instrument => (
                  <Link
                    key={instrument.id}
                    to={`/instrument/${instrument.id}`}
                    className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Instrument Image */}
                    <div className="aspect-w-16 aspect-h-12 bg-gray-200 dark:bg-gray-700">
                      {instrument.imageUrl ? (
                        <img
                          src={instrument.imageUrl}
                          alt={instrument.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            target.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                      ) : null}
                      <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-700 dark:to-gray-600">
                        <MusicIcon />
                        <span className="text-gray-600 dark:text-gray-400 ml-2">
                          {language === 'en-zh' ? '暂无图片 / No Image' : 'No Image'}
                        </span>
                      </div>
                    </div>

                    {/* Instrument Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {language === 'en-zh' && instrument.name_zh 
                          ? `${instrument.name_zh} / ${instrument.name}`
                          : instrument.name
                        }
                      </h3>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
                        {language === 'en-zh' && instrument.description_zh 
                          ? instrument.description_zh
                          : instrument.description
                        }
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                          {instrument.family}
                        </span>
                        {instrument.audioUrl && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793l-4-3.2A1 1 0 013 13V7a1 1 0 01.383-.924l4-3.2z" clipRule="evenodd" />
                              <path d="M14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z" />
                            </svg>
                            {language === 'en-zh' ? '音频 / Audio' : 'Audio'}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default InstrumentsListPage