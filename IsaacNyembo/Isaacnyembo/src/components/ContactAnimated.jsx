import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function Contact() {
  const [titleRef, titleVisible] = useScrollAnimation({ delay: 200 })
  const [formRef, formVisible] = useScrollAnimation({ delay: 400 })
  const [infoRef, infoVisible] = useScrollAnimation({ delay: 600 })
  const [socialRef, socialVisible] = useScrollAnimation({ delay: 800 })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "Isaacnyembo1@gmail.com",
      link: "mailto:Isaacnyembo1@gmail.com",
      color: "text-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: FaPhone,
      label: "Téléphone",
      value: "+243 972 000 809",
      link: "tel:+243972000809",
      color: "text-green-500",
      bgColor: "bg-green-50 hover:bg-green-100"
    },
    {
      icon: FaMapMarkerAlt,
      label: "Localisation",
      value: "Lubumbashi, RDC",
      link: "#",
      color: "text-red-500",
      bgColor: "bg-red-50 hover:bg-red-100"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+243 972 000 809",
      link: "https://wa.me/243972000809",
      color: "text-green-600",
      bgColor: "bg-green-50 hover:bg-green-100"
    }
  ]

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/isaac-nyembo",
      color: "text-blue-600 hover:text-blue-700",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/isaacnyembo",
      color: "text-gray-700 hover:text-gray-900",
      bgColor: "bg-gray-50 hover:bg-gray-100"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://twitter.com/isaacnyembo",
      color: "text-blue-400 hover:text-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100"
    },
    {
      icon: FaWhatsapp,
      name: "WhatsApp",
      url: "https://wa.me/243972000809",
      color: "text-green-600 hover:text-green-700",
      bgColor: "bg-green-50 hover:bg-green-100"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Création du lien mailto avec les données du formulaire
    const subject = encodeURIComponent(formData.subject || 'Nouveau message depuis votre site web')
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:Isaacnyembo1@gmail.com?subject=${subject}&body=${body}`

    // Ouvre le client de messagerie
    window.location.href = mailtoLink

    // Reset du formulaire après un délai
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <section id="contact" className="relative min-h-screen py-16 lg:py-24 bg-gradient-to-br from-dark via-dark-600 to-dark-700 overflow-hidden">
      
      {/* Particules de fond */}
      <div className="absolute inset-0 particle-bg opacity-20">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 5}s`
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Prenons <span className="text-primary animate-pulse-glow">Contact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-light/90 max-w-3xl mx-auto leading-relaxed">
            Vous avez un projet en tête ? Discutons-en ! Je suis toujours ravi d'échanger sur de nouvelles idées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Formulaire de contact */}
          <div 
            ref={formRef}
            className={`transition-all duration-1000 ease-out ${
              formVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}
          >
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-xl border border-primary/20 group hover-lift">
              
              {/* Effet de gradient animé */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple/5 
                             rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
                  Envoyez-moi un message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nom */}
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-light/90 mb-2 group-focus-within:text-primary transition-colors duration-300">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-primary/30 rounded-xl text-white 
                                 placeholder-light/50 focus:border-primary focus:ring-4 focus:ring-primary/20 
                                 transition-all duration-300 hover:bg-white/15"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-light/90 mb-2 group-focus-within:text-primary transition-colors duration-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-primary/30 rounded-xl text-white 
                                 placeholder-light/50 focus:border-primary focus:ring-4 focus:ring-primary/20 
                                 transition-all duration-300 hover:bg-white/15"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                  </div>

                  {/* Sujet */}
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-light/90 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-primary/30 rounded-xl text-white 
                               placeholder-light/50 focus:border-primary focus:ring-4 focus:ring-primary/20 
                               transition-all duration-300 hover:bg-white/15"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-light/90 mb-2 group-focus-within:text-primary transition-colors duration-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-primary/30 rounded-xl text-white 
                               placeholder-light/50 focus:border-primary focus:ring-4 focus:ring-primary/20 
                               transition-all duration-300 hover:bg-white/15 resize-none"
                      placeholder="Décrivez votre projet ou posez vos questions..."
                    />
                  </div>

                  {/* Bouton d'envoi */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-primary to-primary-600 text-dark 
                             font-bold text-lg rounded-xl hover:shadow-xl transition-all duration-300 
                             transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 
                             focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed 
                             animate-pulse-glow group"
                  >
                    <span className="flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <FaEnvelope className="group-hover:scale-110 transition-transform duration-300" />
                          Envoyer le message
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Informations de contact */}
          <div 
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 ease-out ${
              infoVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8'
            }`}
          >
            {/* Informations de contact */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                Informations de <span className="text-primary">contact</span>
              </h3>

              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`group flex items-center p-4 lg:p-6 bg-white/10 backdrop-blur-md rounded-2xl 
                              border border-primary/20 hover-lift transition-all duration-300 cursor-pointer
                              hover:bg-white/15 ${info.bgColor.replace('bg-', 'hover:bg-').replace('100', '20')}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex items-center justify-center w-12 h-12 ${info.bgColor.replace('hover:bg-', 'bg-').replace('100', '20')} 
                                   rounded-xl mr-4 group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className={`text-xl ${info.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <p className="text-sm text-light/70 group-hover:text-light transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Réseaux sociaux */}
            <div 
              ref={socialRef}
              className={`transition-all duration-1000 ease-out ${
                socialVisible 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform translate-y-4'
              }`}
            >
              <h4 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Suivez-moi sur les <span className="text-primary">réseaux</span>
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-center p-4 bg-white/10 backdrop-blur-md 
                                rounded-xl border border-primary/20 hover-lift transition-all duration-300 
                                hover:bg-white/15 ${social.bgColor.replace('bg-', 'hover:bg-').replace('100', '20')}`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className={`text-2xl ${social.color} group-hover:scale-125 transition-all duration-300`} />
                      <span className="ml-3 text-white font-medium group-hover:text-primary transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16 lg:mt-24">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple/20 rounded-3xl blur-xl 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-primary/20 group hover-lift">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-lg text-light/90 mb-6 max-w-2xl mx-auto">
                Contactez-moi dès aujourd'hui et transformons vos idées en réalité !
              </p>
              <a
                href="https://wa.me/243972000809"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 
                         text-white font-bold text-lg rounded-full hover:shadow-xl transition-all duration-300 
                         transform hover:scale-105 hover:-translate-y-1 animate-pulse-glow"
              >
                <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Discuter sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
