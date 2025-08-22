import React, { useEffect, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Body() {
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [subtitleRef, subtitleVisible] = useScrollAnimation({ delay: 400 })
  const [buttonRef, buttonVisible] = useScrollAnimation({ delay: 600 })
  const [imageRef, imageVisible] = useScrollAnimation({ delay: 800 })
  const [typewriterText, setTypewriterText] = useState('')
  const fullText = 'Développeur web et mobile'

  // Effet typewriter pour le sous-titre
  useEffect(() => {
    if (subtitleVisible) {
      let index = 0
      const interval = setInterval(() => {
        if (index < fullText.length) {
          setTypewriterText(fullText.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 80)
      
      return () => clearInterval(interval)
    }
  }, [subtitleVisible])

  const handleContactClick = () => {
    // Ouvre WhatsApp Business avec le numéro spécifié
    const phoneNumber = "243972000809" // Numéro sans le +
    const message = "Bonjour Isaac ! Je suis intéressé(e) par vos services de développement web et mobile."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="home" className='relative min-h-screen overflow-hidden'>
      {/* Fond avec particules animées */}
      <div className="absolute inset-0 particle-bg">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className='relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-8 pt-4 px-4 sm:px-6 md:px-12 min-h-screen'>
        {/* Section texte */}
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1 space-y-4 md:space-y-6 pt-16 md:pt-24'>
          
          {/* Titre principal avec animation */}
          <div 
            ref={titleRef}
            className={`transition-all duration-1000 ease-out ${
              titleVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
          >
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-2'>
              <span className="inline-block animate-fadeInLeft">Bonjour,</span>
              <span className="inline-block animate-fadeInRight animation-delay-200"> je suis{' '}</span>
              <span className='text-primary bg-light px-4 py-2 rounded-xl shadow-lg
                             animate-pulse-glow inline-block animation-delay-400'>
                Isaac Nyembo
              </span>
            </h1>
          </div>
          
          {/* Sous-titre avec effet typewriter */}
          <div 
            ref={subtitleRef}
            className={`transition-all duration-1000 ease-out ${
              subtitleVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center md:justify-start">
              <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary-700 dark:text-secondary-300 px-2'>
                <span className="border-r-2 border-primary animate-pulse pr-1">
                  {typewriterText}
                </span>
              </h2>
            </div>
          </div>
          
          {/* Description */}
          <div 
            className={`transition-all duration-1000 ease-out animation-delay-400 ${
              subtitleVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <p className='text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl leading-relaxed px-4 md:px-0'>
              Je crée des applications web et mobiles modernes, performantes et accessibles.
            </p>
          </div>
          
          {/* Bouton d'action */}
          <div 
            ref={buttonRef}
            className={`mt-6 md:mt-8 w-full flex justify-center md:justify-start transition-all duration-1000 ease-out ${
              buttonVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
          >
            <button 
              onClick={handleContactClick}
              className='group relative bg-primary hover:bg-primary-600 text-dark-500 font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full 
                       transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift
                       focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 animate-pulse-glow
                       flex items-center gap-2 md:gap-3 text-base md:text-lg w-auto'
              aria-label="Me contacter sur WhatsApp"
            >
              <span className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300">💬</span>
              <span className="relative z-10">Contactez-moi</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Section image avec animation */}
        <div 
          ref={imageRef}
          className={`flex justify-center items-center w-full md:w-auto bg-primary rounded-3xl mt-8 md:mt-0 
                     transition-all duration-1000 ease-out ${
            imageVisible 
              ? 'opacity-100 transform translate-x-0 scale-100' 
              : 'opacity-0 transform translate-x-8 scale-95'
          }`}
        >
          <div className='relative group animate-float'>
            <img 
              src="/src/assets/image.png" 
              alt="Isaac Nyembo - Développeur web et mobile" 
              className='w-48 h-56 sm:w-64 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover 
                       shadow-2xl transform group-hover:scale-105 transition-all duration-500 hover-lift
                       rounded-3xl'
              loading="lazy"
            />
            {/* Effet de gradient décoratif avec animation */}
            <div className='absolute -inset-4 bg-gradient-to-r from-primary-400 to-purple-400 rounded-3xl 
                           opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500 animate-pulse-glow'></div>
            
            {/* Effet de particules autour de l'image */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
                style={{
                  left: `${-10 + Math.random() * 120}%`,
                  top: `${-10 + Math.random() * 120}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Indicateur de scroll animé */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="text-primary animate-pulse cursor-pointer" 
             onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <svg className="w-6 h-6 mx-auto hover:scale-110 transition-transform duration-300" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm mt-2 text-secondary-500 hover:text-primary transition-colors duration-300">Découvrir</p>
        </div>
      </div>
    </section>
  )
}

export default Body