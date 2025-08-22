import React from 'react'

function Services() {
  const handleContactClick = () => {
    // Ouvre WhatsApp Business avec le numéro spécifié
    const phoneNumber = "243972000809" // Numéro sans le +
    const message = "Bonjour Isaac ! Je souhaite démarrer un projet avec vous."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    
    // Ouvre WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
  }

  const services = [
    {
      id: 1,
      title: "Développement Web",
      description: "Création d'applications web modernes et responsives avec React, Vue.js, et les dernières technologies front-end. Sites web optimisés pour la performance et l'expérience utilisateur.",
      icon: "🌐",
      technologies: ["React", "Vue.js", "JavaScript", "CSS3"],
      color: "from-primary-400 to-primary-600"
    },
    {
      id: 2,
      title: "Développement Mobile",
      description: "Applications mobiles natives et cross-platform pour iOS et Android. Développement avec React Native, Flutter pour une expérience utilisateur optimale sur tous les appareils.",
      icon: "📱",
      technologies: ["React Native", "iOS", "Android"],
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Consultation en Technologie",
      description: "Conseil stratégique et audit technique pour optimiser vos projets digitaux. Architecture logicielle, choix technologiques et amélioration des performances de vos applications.",
      icon: "🚀",
      technologies: ["Performance", "SEO", "Audit"],
      color: "from-secondary-400 to-secondary-600"
    }
  ]

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-light-900 to-light-700" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-500 mb-4">
            Mes <span className="text-primary">Services</span>
          </h2>
          <p className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            Je propose des solutions complètes pour donner vie à vos projets digitaux, 
            de la conception au déploiement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-white rounded-2xl md:rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative p-6 md:p-8">
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-bold text-dark-500 mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-secondary-600 leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6">
                  {service.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 md:px-3 py-1 bg-primary-100 text-primary-700 text-xs md:text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Button -> ouvre WhatsApp */}
                <a
                  href={`https://wa.me/243972000809?text=${encodeURIComponent(`Bonjour, je souhaite en savoir plus sur ${service.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center bg-gradient-to-r from-primary-500 to-primary-600 text-dark-500 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-xl hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 text-sm md:text-base"
                >
                  En savoir plus
                </a>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-200 to-primary-400 rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-secondary-600 mb-4 md:mb-6 px-4">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-primary hover:bg-primary-600 text-dark-500 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 text-sm md:text-base"
          >
            Démarrer un projet
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services