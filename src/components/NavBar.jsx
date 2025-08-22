import React, { useState, useEffect } from 'react'

function NavBar() {
  const [activeLink, setActiveLink] = useState('Home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  // Détection automatique de la section visible et état de scroll
  useEffect(() => {
    const sections = [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
    ]

    const handleScroll = () => {
      // Détection du scroll pour l'effet de fond
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      const sectionsWithElements = sections.map(item => ({
        name: item.name,
        element: document.querySelector(item.href)
      })).filter(section => section.element)

      let currentSection = 'Home'
      
      sectionsWithElements.forEach(section => {
        const rect = section.element.getBoundingClientRect()
        // Si la section est visible dans la partie supérieure de l'écran
        if (rect.top <= 150 && rect.bottom >= 150) {
          currentSection = section.name
        }
      })

      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Vérifier la position initiale
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (linkName, href) => {
    setActiveLink(linkName)
    setMobileMenuOpen(false)
    
    // Défilement fluide vers la section avec offset pour la navbar sticky
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const navBarHeight = 100 // Hauteur approximative de la navbar
      const elementPosition = targetElement.offsetTop - navBarHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ease-out m-2 sm:m-4 rounded-2xl sm:rounded-3xl shadow-lg backdrop-blur-md ${
      isScrolled 
        ? 'bg-primary/95 shadow-xl' 
        : 'bg-primary shadow-lg'
    }`}>
      <div className="flex justify-between items-center p-2 sm:p-4">
        {/* Logo avec animation */}
        <div className="flex-shrink-0 group md:hidden lg:block">
          <h1 className="text-lg sm:text-xl font-bold text-dark transition-transform duration-300 group-hover:scale-105">
            Isaac <span className="animate-pulse-glow">Nyembo</span>
          </h1>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex justify-center flex-1 space-x-1 sm:space-x-2 lg:space-x-4">
          {menuItems.map((item, index) => (
            <li key={item.name} className="relative">
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(item.name, item.href)
                }}
                className={`
                  block px-2 sm:px-3 lg:px-4 py-2 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 ease-out
                  transform hover:scale-105 hover:-translate-y-1 cursor-pointer text-sm sm:text-base relative overflow-hidden group
                  ${activeLink === item.name 
                    ? 'bg-light text-dark shadow-md ring-2 ring-light ring-opacity-50 animate-fadeInUp' 
                    : 'text-dark-500 hover:bg-light hover:text-dark hover:shadow-sm'
                  }
                  focus:outline-none focus:ring-2 focus:ring-light focus:ring-opacity-50
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-current={activeLink === item.name ? 'page' : undefined}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Effet de fond animé au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-light/20 to-light/10 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></div>
                
                {/* Indicateur actif */}
                {activeLink === item.name && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-dark rounded-full animate-pulse"></div>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-light hover:bg-dark/10 focus:outline-none transition-all duration-300 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 top-3 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile avec animation */}
      <div className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${
        mobileMenuOpen 
          ? 'max-h-64 opacity-100' 
          : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pb-4 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(item.name, item.href)
              }}
              className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 transform ${
                activeLink === item.name
                  ? 'text-dark bg-light/20 translate-x-2 shadow-sm'
                  : 'text-dark hover:text-light hover:bg-dark/10 hover:translate-x-2'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: mobileMenuOpen ? 'translateY(0) translateX(0)' : 'translateY(-10px)'
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavBar