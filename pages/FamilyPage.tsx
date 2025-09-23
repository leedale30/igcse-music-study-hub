import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getInstrumentFamily, getInstrumentsByFamily } from '../data/instruments'

const FamilyPage: React.FC = () => {
  const { familyId } = useParams<{ familyId: string }>()
  const family = getInstrumentFamily(familyId)
  const instruments = getInstrumentsByFamily(familyId)

  if (!family) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center">Family not found</h1>
        <div className="text-center mt-4">
          <Link to="/instruments" className="text-[var(--primary-500)] hover:underline">
            Return to Instruments Page
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/instruments" className="text-[var(--primary-500)] hover:underline inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Instruments
          </Link>
        </div>
        
        {/* Hero Section */}
        <div 
          className="relative rounded-xl overflow-hidden mb-12 h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${family.imagePath})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{family.name}</h1>
          </div>
        </div>
        
        {/* Description Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">About {family.name} Instruments</h2>
          <p className="text-gray-700">{family.description}</p>
        </div>
        
        {/* Instruments Grid */}
        <h2 className="text-2xl font-bold mb-6">Instruments in the {family.name} Family</h2>
        {instruments.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {instruments.map(instrument => (
              <div key={instrument.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={instrument.imagePath} 
                    alt={instrument.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{instrument.name}</h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">{instrument.description}</p>
                  <Link 
                    to={`/instruments/${instrument.id}`}
                    className="block text-center bg-[var(--primary-500)] text-white py-2 px-4 rounded-md hover:bg-[var(--primary-600)] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <p className="text-gray-700">No instruments found in this family. Check back later!</p>
          </div>
        )}
      </div>
  )
}

export default FamilyPage