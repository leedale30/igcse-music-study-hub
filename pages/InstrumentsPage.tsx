import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { instrumentFamilies } from '../data/instruments'

const InstrumentsPage: React.FC = () => {
  return (
    <Layout>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden" style={{fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'}}>
        <main className="flex-1">
          <section className="relative py-20 md:py-32">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1q0kYBkyCjyiTTlsi21QB5G0oR6KcPqB2nw-tJi-V9gOswJ8MhJDOc1IX_DD14ArR-BuBUxQt4OE3IHwNoLoOchV2ihiT8fpWRUn1-q5HImpRu7Hi53BWLNOFAVq52oTJizUb5Uus872DXnn1YH_fVyrLqno374pOHcMZOiWbw_QyNqFgPSpvYGM_c6B5L54zTUqk6PDlDJffihQwqdtOlM91mxCz3tz_QueOrOqtGIYZeUBkMix0bsZp3j4NaWGrPOLxGPgd-dEI")'}}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
            <div className="relative container mx-auto px-4 text-center text-white">
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-4">Explore the World of Music</h1>
              <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8">Discover instruments from every corner of the globe, learn their history, and hear their unique sounds.</p>
              <button className="px-8 py-4 bg-[var(--primary-500)] text-white text-lg font-bold rounded-xl hover:bg-[var(--primary-600)] transition-transform transform hover:scale-105">
                Start Exploring
              </button>
            </div>
          </section>
          
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Instrument of the Day</h2>
              <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-full h-64 md:h-80 bg-cover bg-center rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeedSJKTYBwq_RwC3IZcQIEDlBs5e4GC7FSe0nH-l7EZM_HGtVHRLgeAvtUNira0yBOKJCSihid1W2_qeIU8BWcAZZg7ThmSmknbwxne5Lh-xKO36jiT2qbmv-jHMNDISR8HBGPxJCxE0scAhfbSGTL5VHC_lar2Ebzat5BZ8aLWhTeFgkyPFPs5OTOy96YCqxIcWImpFr-GYXgg-I5FQFvfa0IPHzLqYiODx0B1-BOMlPqjgBamgc6YUjTA_iM2GAp7RLWiXeFJej")'}}></div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The Sitar</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    A plucked stringed instrument used in Hindustani classical music. Its distinctive sound and rich history make it a fascinating instrument to explore.
                  </p>
                  <Link to="/instruments/sitar" className="self-start px-6 py-3 bg-[var(--primary-500)] text-white text-base font-semibold rounded-lg hover:bg-[var(--primary-600)] transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Browse by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {instrumentFamilies.map(family => (
                  <Link 
                    to={`/instruments/family/${family.id}`} 
                    key={family.id}
                    className="group flex flex-col items-center text-center cursor-pointer"
                  >
                    <div 
                      className="w-full aspect-square bg-cover bg-center rounded-2xl mb-4 overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
                      style={{backgroundImage: `url(${family.imagePath})`}}
                    ></div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[var(--primary-500)] transition-colors">
                      {family.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default InstrumentsPage