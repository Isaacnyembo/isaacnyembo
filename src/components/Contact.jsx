import React, { useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Création de l'email avec les données du formulaire
    const emailTo = "Isaacnyembo1@gmail.com"
    const subject = encodeURIComponent(formData.subject || "Nouveau message depuis le portfolio")
    const body = encodeURIComponent(
      `Bonjour Isaac,\n\n` +
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Sujet: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `Ce message a été envoyé depuis votre portfolio.`
    )
    
    // Création du lien mailto
    const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${body}`
    
    // Ouverture du client email
    window.location.href = mailtoLink
    
    // Simulation de soumission pour l'UI
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset après 3 secondes
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-blue-600" />,
      title: 'Email',
      value: 'Isaacnyembo1@gmail.com',
      link: 'mailto:Isaacnyembo1@gmail.com'
    },
    {
      icon: <FaWhatsapp className="text-green-600" />,
      title: 'WhatsApp',
      value: '+243 972 000 809',
      link: 'https://wa.me/243972000809'
    },
    {
      icon: <FaMapMarkerAlt className="text-red-600" />,
      title: 'Localisation',
      value: 'Lubumbashi, RDC',
      link: '#'
    },
    {
      icon: <FaLinkedin className="text-blue-700" />,
      title: 'LinkedIn',
      value: 'Isaac Nyembo',
      link: 'https://linkedin.com/in/isaac-nyembo'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={16} />,
      link: 'https://github.com/isaacnyembo',
      bg: 'bg-gradient-to-r from-gray-800 to-black'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={16} />,
      link: 'https://x.com/FreeThi23554652?s=09',
      bg: 'bg-gradient-to-r from-sky-400 to-blue-500'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={16} />,
      link: 'https://linkedin.com/in/isaac-nyembo',
      bg: 'bg-gradient-to-r from-blue-700 to-blue-900'
    },
    {
      name: 'YouTube',
      icon: <FaYoutube size={16} />,
      link: 'https://youtube.com/@isaac-nyembo',
      bg: 'bg-gradient-to-r from-red-600 to-red-700'
    }
  ]

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-gradient-to-br from-light-900 to-light-700" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-500 mb-4">
            Contactez-<span className="text-primary">moi</span>
          </h2>
          <p className="text-base md:text-lg text-secondary-600 max-w-2xl mx-auto px-4">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. 
            Je serais ravi de vous aider à donner vie à vos idées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-primary-300">
            <h3 className="text-xl md:text-2xl font-bold text-dark-500 mb-4 md:mb-6">Envoyez-moi un message</h3>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-xl text-green-700">
                ✅ Votre client email s'est ouvert ! Vérifiez et envoyez le message pré-rempli.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-dark-500 font-semibold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 focus:border-primary transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-dark-500 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 focus:border-primary transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-dark-500 font-semibold mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 focus:border-primary transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-500 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-300 focus:ring-opacity-50 ${
                  isSubmitting
                    ? 'bg-secondary-400 text-secondary-600 cursor-not-allowed'
                    : 'bg-primary hover:bg-primary-600 text-dark-500 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : (
                  '📧 Envoyer par email'
                )}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Contact direct */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary-300">
              <h3 className="text-2xl font-bold text-dark-500 mb-6">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center group hover:bg-primary-100 p-4 rounded-xl transition-all duration-300"
                  >
                    <div className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-500 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-secondary-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary-300">
              <h3 className="text-2xl font-bold text-dark-500 mb-6">Retrouvez-moi sur</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} text-white flex items-center justify-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg group overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <span className="text-2xl mr-2 transition-transform duration-300 relative z-10">
                      {social.icon}
                    </span>
                    <span className="font-semibold relative z-10">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl p-8 text-dark-500 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Disponibilité</h3>
              <p className="text-lg leading-relaxed">
                Je suis actuellement disponible pour de nouveaux projets. 
                Temps de réponse habituel : <strong>24-48h</strong>
              </p>
              <div className="flex items-center mt-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="font-semibold">Disponible maintenant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact