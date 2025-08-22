import React from 'react'
import { FaLaptopCode, FaUsers, FaLightbulb, FaReact, FaNodeJs } from 'react-icons/fa'
import logo from '../assets/react.svg'

function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-light-900 to-light-700">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-500 mb-4">
            À propos <span className="text-primary">de moi</span>
          </h2>
          <p className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            Je suis développeur full‑stack basé en RDC. Je conçois et développe des
            applications web performantes et accessibles, en mettant l'accent sur
            l'expérience utilisateur et la maintenabilité.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: details */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-primary-300">
            <h3 className="text-xl md:text-2xl font-bold text-dark-500 mb-4">Qui je suis</h3>
            <p className="text-sm md:text-base text-secondary-600 mb-6">
              J'accompagne les entreprises et les indépendants dans la conception
              et le développement de produits numériques : sites, applications
              web et mobile, API et outils internes. J'aime transformer des idées
              en produits fiables et faciles à utiliser.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-primary-100 text-primary flex-shrink-0">
                  <FaLaptopCode size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-500 text-sm md:text-base">Développement</h4>
                  <p className="text-secondary-600 text-xs md:text-sm">React, Node.js, API REST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-primary-100 text-primary flex-shrink-0">
                  <FaUsers size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-500 text-sm md:text-base">Collaboration</h4>
                  <p className="text-secondary-600 text-xs md:text-sm">Design system, pair-programming</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-primary-100 text-primary flex-shrink-0">
                  <FaLightbulb size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-500 text-sm md:text-base">Conseil</h4>
                  <p className="text-secondary-600 text-xs md:text-sm">Architecture & optimisation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 md:p-3 rounded-lg bg-primary-100 text-primary flex-shrink-0 text-sm md:text-base">💡</div>
                <div>
                  <h4 className="font-semibold text-dark-500 text-sm md:text-base">Approche</h4>
                  <p className="text-secondary-600 text-xs md:text-sm">Accessible, maintenable, scalable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: illustration & skills */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <img src={logo} alt="illustration" className="w-32 h-32 md:w-40 md:h-40 mb-6" />

            <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-primary-100 w-full">
              <h4 className="font-semibold text-dark-500 mb-3 text-sm md:text-base">Compétences clés</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full flex items-center">
                  <FaReact className="mr-1 md:mr-2" size={12} /> React
                </span>
                <span className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full flex items-center">
                  <FaNodeJs className="mr-1 md:mr-2" size={12} /> Node.js
                </span>
                <span className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full flex items-center">
                  🎨 Tailwind
                </span>
                <span className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full flex items-center">
                  ⚡ Vite
                </span>
                <span className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full flex items-center">
                  📘 TypeScript
                </span>
                <span className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full flex items-center">
                  🧪 Testing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About