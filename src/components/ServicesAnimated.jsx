import React from 'react'
import { FaCode, FaMobile, FaGlobe, FaDatabase, FaRocket, FaShoppingCart } from 'react-icons/fa'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'

function Services() {
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [servicesContainerRef, visibleServices] = useStaggeredAnimation(6, 200)

  const services = [
    {
      icon: FaGlobe,
      title: "Développement Web",
      description: "Sites web modernes, responsifs et performants avec les dernières technologies.",
      features: ["React/Next.js", "Design responsive", "SEO optimisé", "Performance maximale"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-500"
    },
    {
      icon: FaMobile,
      title: "Applications Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android.",
      features: ["React Native", "Flutter", "UI/UX moderne", "Performance native"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-500"
    },
    {
      icon: FaDatabase,
      title: "API & Backend",
      description: "APIs robustes et scalables avec bases de données optimisées.",
      features: ["Node.js/Express", "MongoDB/PostgreSQL", "Architecture REST", "Sécurité avancée"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      iconColor: "text-purple-500"
    },
    {
      icon: FaShoppingCart,
      title: "E-commerce",
      description: "Solutions e-commerce complètes avec gestion des paiements et inventaire.",
      features: ["Boutique en ligne", "Paiements sécurisés", "Gestion stock", "Analytics"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      iconColor: "text-orange-500"
    },
    {
      icon: FaRocket,
      title: "Optimisation",
      description: "Amélioration des performances et de l'expérience utilisateur.",
      features: ["Audit de performance", "Optimisation SEO", "Accessibilité", "Tests utilisateur"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 hover:bg-red-100",
      iconColor: "text-red-500"
    },
    {
      icon: FaCode,
      title: "Consulting",
      description: "Conseil technique et accompagnement dans vos projets digitaux.",
      features: ["Architecture système", "Code review", "Formation équipe", "Stratégie tech"],
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50 hover:bg-gray-100",
      iconColor: "text-gray-500"
    }
  ]

  const handleContactClick = () => {
    const phoneNumber = "243972000809"
    const message = "Bonjour Isaac ! Je suis intéressé(e) par vos services de développement."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="services" className="relative min-h-screen py-16 lg:py-24 bg-gradient-to-br from-white to-light/30 overflow-hidden">
      
      {/* Particules de fond */}
      <div className="absolute inset-0 particle-bg opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 lg:mb-20 transition-all duration-1000 ease-out ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4 lg:mb-6">
            Mes <span className="text-primary animate-pulse-glow">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions digitales sur mesure pour transformer vos idées en succès
          </p>
        </div>

        {/* Grille de services */}
        <div 
          ref={servicesContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isVisible = visibleServices.has(index)
            
            return (
              <div
                key={service.title}
                className={`group relative p-6 lg:p-8 bg-white rounded-3xl shadow-lg border border-gray-100 
                          hover-lift transition-all duration-500 ease-out cursor-pointer overflow-hidden
                          ${isVisible 
                            ? 'opacity-100 transform translate-y-0 scale-100' 
                            : 'opacity-0 transform translate-y-12 scale-95'
                          }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Effet de gradient animé en arrière-plan */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 
                               group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Particules spécifiques à la carte */}
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float opacity-0 
                             group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}

                <div className="relative z-10">
                  {/* Icône */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} 
                                 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className={`text-2xl ${service.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl lg:text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Liste des fonctionnalités */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-sm text-secondary-500 group-hover:text-secondary-700 transition-colors duration-300"
                        style={{ transitionDelay: `${featureIndex * 0.05}s` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Bouton d'action */}
                  <button
                    onClick={handleContactClick}
                    className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold 
                             rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 
                             hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/20 
                             group-hover:animate-pulse-glow`}
                  >
                    En savoir plus
                  </button>
                </div>

                {/* Indicateur de coin animé */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 
                               group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 
                               animate-pulse"></div>
              </div>
            )
          })}
        </div>

        {/* Call to action global */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple/20 rounded-3xl blur-xl opacity-0 
                           group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 group hover-lift">
              <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
                Discutons de vos besoins et créons ensemble une solution sur mesure pour votre entreprise.
              </p>
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-600 
                         text-dark font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 
                         transform hover:scale-105 hover:-translate-y-1 animate-pulse-glow"
              >
                <span>💬</span>
                <span>Contactez-moi maintenant</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
