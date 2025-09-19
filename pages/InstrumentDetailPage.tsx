import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { getInstrumentById, getInstrumentFamily } from '../data/instruments'

const InstrumentDetailPage: React.FC = () => {
  const { instrumentId } = useParams<{ instrumentId: string }>()
  const instrument = instrumentId ? getInstrumentById(instrumentId) : undefined
  const family = instrument ? getInstrumentFamily(instrument.familyId) : null

  if (!instrument || !family) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-red-600">Instrument not found</h1>
          <p className="mt-4">The instrument you are looking for does not exist or has been removed.</p>
          <div className="text-center mt-4">
            <Link to="/instruments" className="text-[var(--primary-500)] hover:underline">
              Return to Instruments Page
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/instruments" className="text-[var(--primary-500)] hover:underline inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Instruments
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{instrument.name}</h1>
          <div className="h-1 w-20 bg-[var(--primary-500)] mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Image and audio */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <img 
                src={instrument.imagePathDetail || instrument.imagePath} 
                alt={`${instrument.name} instrument`} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {instrument.audioPath && (
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <h3 className="text-lg font-semibold mb-3">Listen to the {instrument.name}</h3>
                <audio controls className="w-full">
                  <source src={instrument.audioPath} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}
          </div>

          {/* Right column - Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">About the {instrument.name}</h2>
              <p className="text-gray-700 mb-6">{instrument.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Family</h3>
                  <Link to={`/instruments/family/${family.id}`} className="text-[var(--primary-500)] hover:underline">
                    {family.name}
                  </Link>
                </div>
                
                {instrument.range && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Pitch Range</h3>
                    <p className="text-gray-700">{instrument.range}</p>
                  </div>
                )}
                
                {instrument.material && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Material</h3>
                    <p className="text-gray-700">{instrument.material}</p>
                  </div>
                )}
                
                {instrument.size && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Size</h3>
                    <p className="text-gray-700">{instrument.size}</p>
                  </div>
                )}
                
                {instrument.origin && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Origin</h3>
                    <p className="text-gray-700">{instrument.origin}</p>
                  </div>
                )}
                
                {instrument.classification && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Classification</h3>
                    <p className="text-gray-700">{instrument.classification}</p>
                  </div>
                )}
              </div>
              
              {instrument.funFact && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Did you know?</h3>
                  <p className="text-blue-700">{instrument.funFact}</p>
                </div>
              )}
            </div>
            
            {instrument.videoUrl && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Watch the {instrument.name} in Action</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src={instrument.videoUrl}
                    title={`${instrument.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InstrumentDetailPage