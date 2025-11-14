import './style.css'

const contentByLanguage = {
  es: {
    billingSuffix: '/ mes',
    nav: {
      languageToggleLabel: 'Cambiar idioma',
      cta: 'Ver precios',
      links: [
        { href: '#features', label: 'Características' },
        { href: '#how', label: 'Cómo funciona' },
        { href: '#testimonials', label: 'Testimonios' },
        { href: '#about', label: 'Equipo' },
        { href: '#pricing', label: 'Planes' },
        { href: '#faq', label: 'Preguntas' },
        { href: '#contact', label: 'Contacto' }
      ]
    },
    hero: {
      eyebrow: 'SIMPLIFICA TU GESTIÓN',
      title: 'Lleva tu ganado al siguiente nivel',
      lead:
        'GanLink centraliza el ganado para falicitar la toma de métricas, valores y gestión eficiente.'
    },
    sections: {
      features: {
        eyebrow: 'GanLink en acción',
        title: 'Características que resuelven lo de hoy y mañana'
      },
      how: {
        eyebrow: 'Cómo funciona',
        title: 'Haz que cada operación fluya'
      },
      testimonials: {
        eyebrow: 'Testimonios',
        title: 'Historias que inspiran'
      },
      about: {
        eyebrow: 'Conoce al equipo',
        title: 'Personas reales detrás de cada release'
      },
      teamVideo: {
        eyebrow: 'About The Team',
        title: 'Video del equipo',
        description: 'A continuación, se presenta el video About The Team.'
      },
      pricing: {
        eyebrow: 'Planes',
        title: 'La inversión correcta para cada etapa',
        subheading: 'Optimiza la administración de tu academia con un paquete flexible y escalable.'
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        title: 'Preguntas & Respuestas'
      }
    },
    features: [
      {
        title: 'Registro inteligente de bovinos',
        description:
          'Administra información individual de cada animal: raza, edad, peso, estado reproductivo e historial de eventos. La plataforma centraliza datos críticos para una gestión ordenada y confiable.',
        icon: '📅'
      },
      {
        title: 'Control sanitario con alertas automáticas',
        description:
          'Recibe notificaciones sobre vacunas, tratamientos, partos y cualquier evento sanitario relevante. El sistema reduce errores y ayuda a cumplir con lineamientos sanitarios.',
        icon: '💳'
      },
      {
        title: 'Reportes productivos y económicos',
        description:
          'La plataforma genera reportes visuales y descargables sobre productividad, costos, ingresos y métricas clave. Ayuda a los ganaderos a tomar decisiones informadas.',
        icon: '📊'
      },
      {
        title: 'Academia ganadera y educación digital',
        description: 'Acceso a contenido educativo práctico para mejorar la productividad, trazabilidad y buenas prácticas ganaderas.',
        icon: '🧑‍🤝‍🧑'
      }
    ],
    howSteps: [
      {
        step: '1',
        title: 'Crea tu cuenta ganadera',
        copy: 'Ingresa creando tu cuenta ganadera y configura tu perfil en minutos con plantillas guiadas.'
      },
      {
        step: '2',
        title: 'Crea tu granja',
        copy: 'Ingresa los datos necesarios para tener un granja en la palma de tu mano.'
      },
      {
        step: '3',
        title: 'Recibe alertas sanitarias',
        copy: 'El sistema genera notificaciones automáticas según vacunas, tratamientos o eventos reproductivos programados.'
      }
    ],
    testimonials: [
      {
        quote:
          'Ahora sé exactamente qué vacuna le toca a cada vaca. Ya no hay confusiones. GanLink me ha facilitado mucho la gestión de mi ganado.',
        name: 'María Ibáñez',
        role: 'Ganadero, Lima'
      },
      {
        quote:
          'Los reportes y las alertas me ayudan a explicar mejor el manejo a los productores. He mejorado la productividad de mis clientes.',
        name: 'Luis Aguilar',
        role: 'écnica agropecuaria, Cajamarca'
      },
      {
        quote: 'Es fácil de usar. Registro todo y evito problemas por falta de datos. La recomiendo a todos los pequeños productores.',
        name: 'Daniela Paredes',
        role: 'Pequeño productor, Junín'
      }
    ],
    teamMembers: [
      { name: 'Diego', role: 'Líder de ingeniería', image: '/team-diego.png', linkedin: '#', x: '#' },
      { name: 'Ernesto', role: 'Arquitecto de software', image: '/team-ernesto.jpg', linkedin: '#', x: '#' },
      { name: 'Fabrizio', role: 'Ingeniero backend', image: '/team-fabrizio.jpeg', linkedin: '#', x: '#' },
      { name: 'Milenio', role: 'Ingeniera frontend', image: '/team-milenio.png', linkedin: '#', x: '#' },
      { name: 'Nelson', role: 'Ingeniero de infraestructura', image: '/team-nelson.jpg', linkedin: '#', x: '#' }
    ],
    pricingPlans: [
      {
        name: 'Essentials',
        price: '$29.90',
        badge: '',
        description: 'Para pequeños productores.',
        perks: ['1 granja', 'Hasta 100 bovinos', 'Hasta 10 empleados', 'Registro y pagos básicos'],
        buttonLabel: 'Comenzar hoy'
      },
      {
        name: 'Pro',
        price: '$59.90',
        badge: 'Más popular',
        description: 'Para medianos productores.',
        perks: ['Hasta 2 granjas', 'Hasta 500 bovinos', 'Hasta 50 empleados', 'Automatizaciones avanzadas'],
        buttonLabel: 'Comenzar hoy'
      },
      {
        name: 'Elite',
        price: '$199.90',
        badge: '',
        description: 'Para operaciones grandes.',
        perks: ['Hasta 2000 bovinos', 'Hasta 200 empleados', 'Soporte prioritario', 'Partner Success dedicado'],
        buttonLabel: 'Hablar con ventas'
      }
    ],
    faqs: [
      {
        question: '¿Qué tan difícil es usar la plataforma?',
        answer: 'La interfaz está diseñada para ser simple y accesible incluso para usuarios con poca experiencia digital.'
      },
      {
        question: '¿Puedo gestionar toda la información de mis animales?',
        answer: 'Sí. Puedes registrar datos sanitarios, reproductivos, productivos y económicos de cada animal.'
      },
      {
        question: '¿La plataforma envía recordatorios automáticos?',
        answer: 'Sí, recibirás alertas para vacunas, tratamientos y eventos reproductivos.'
      },
      {
        question: '¿Mis datos están seguros?',
        answer: 'La plataforma está construida siguiendo buenas prácticas técnicas y se almacena en entornos confiables.'
      }
    ],
    contact: {
      eyebrow: 'Contacto',
      title: '¿Cómo podemos ayudarte?',
      subheading:
        'Completa el formulario para agendar una demo o resolver cualquier duda. Nos pondremos en contacto muy pronto.',
      form: {
        nameLabel: 'Tu nombre',
        emailLabel: 'Tu correo',
        messageLabel: 'Tu mensaje',
        namePlaceholder: 'Nombre completo',
        emailPlaceholder: 'correo@ejemplo.com',
        messagePlaceholder: 'Hola, quiero saber más sobre...',
        buttonLabel: 'Enviar mensaje'
      },
      thankYou: 'Gracias, {name}. Revisaremos tu mensaje apenas podamos.',
      nameFallback: 'allí',
      info: [
        { label: 'Dirección', value: 'Av. San Luis 128, San Borja' },
        { label: 'Teléfono', value: '+51 942 393 102' },  
        { label: 'Email', value: 'contacto@ganlink.com' }
      ]
    },
    footer: {
      columns: [
        {
          title: 'Producto',
          links: [
            { label: 'Características', href: '#features' },
            { label: 'Cómo funciona', href: '#how' },
            { label: 'Planes', href: '#pricing' }
          ]
        },
        {
          title: 'Compañía',
          links: [
            { label: 'Equipo', href: '#about' },
            { label: 'Historia', href: '#about' }
          ]
        },
        {
          title: 'Soporte',
          links: [
            { label: 'FAQ', href: '#faq' },
            { label: 'Contacto', href: '#contact' }
          ]
        },
        {
          title: 'Legal',
          links: [
            { label: 'Términos', href: '#' },
            { label: 'Privacidad', href: '#' }
          ]
        }
      ],
      bottom: '© 2025 GanLink. Todos los derechos reservados.'
    }
  },
  en: {
    billingSuffix: '/ month',
    nav: {
      languageToggleLabel: 'Change language',
      cta: 'See pricing',
      links: [
        { href: '#features', label: 'Features' },
        { href: '#how', label: 'How it works' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#about', label: 'Team' },
        { href: '#pricing', label: 'Pricing' },
        { href: '#faq', label: 'FAQ' },
        { href: '#contact', label: 'Contact' }
      ]
    },
    hero: {
      eyebrow: 'SIMPLIFY YOUR MANAGEMENT',
      title: 'Take your herd to the next level',
      lead:
        'GanLink centralizes herd information to simplify metrics, valuations, and efficient day-to-day management.'
    },
    sections: {
      features: {
        eyebrow: 'GanLink in action',
        title: "Features that solve today's and tomorrow's challenges"
      },
      how: {
        eyebrow: 'How it works',
        title: 'Make every operation flow'
      },
      testimonials: {
        eyebrow: 'Testimonials',
        title: 'Stories that inspire'
      },
      about: {
        eyebrow: 'Meet the team',
        title: 'Real people behind every release'
      },
      teamVideo: {
        eyebrow: 'About The Team',
        title: 'Team video',
        description: "Below you'll find the About The Team video."
      },
      pricing: {
        eyebrow: 'Plans',
        title: 'The right investment for every stage',
        subheading: 'Optimize your ranch administration with a flexible, scalable package.'
      },
      faq: {
        eyebrow: 'Frequently asked questions',
        title: 'Questions & Answers'
      }
    },
    features: [
      {
        title: 'Smart cattle records',
        description:
          'Manage individual data for each animal—breed, age, weight, reproductive status, and event history. The platform centralizes critical information for organized, reliable management.',
        icon: '📅'
      },
      {
        title: 'Health control with automatic alerts',
        description:
          'Receive notifications for vaccines, treatments, calvings, and any relevant health event. The system reduces mistakes and keeps you compliant with sanitary guidelines.',
        icon: '💳'
      },
      {
        title: 'Productivity and financial reports',
        description:
          'Generate visual, downloadable reports on productivity, costs, income, and key metrics so ranchers can make informed decisions.',
        icon: '📊'
      },
      {
        title: 'Ranching academy and digital learning',
        description: 'Access practical educational content to improve productivity, traceability, and good ranching practices.',
        icon: '🧑‍🤝‍🧑'
      }
    ],
    howSteps: [
      {
        step: '1',
        title: 'Create your ranch account',
        copy: 'Sign up with your ranch account and configure your profile in minutes using guided templates.'
      },
      {
        step: '2',
        title: 'Set up your farm',
        copy: 'Enter the required data so you can manage your farm from the palm of your hand.'
      },
      {
        step: '3',
        title: 'Receive health alerts',
        copy: 'The system sends automatic notifications for scheduled vaccines, treatments, or reproductive events.'
      }
    ],
    testimonials: [
      {
        quote: 'Now I know exactly which vaccine each cow needs. No more confusion. GanLink has made managing my herd so much easier.',
        name: 'María Ibáñez',
        role: 'Rancher, Lima'
      },
      {
        quote: "Reports and alerts help me explain best practices to producers. I have improved my clients' productivity.",
        name: 'Luis Aguilar',
        role: 'Agricultural technician, Cajamarca'
      },
      {
        quote: 'It is easy to use. I log everything and avoid issues caused by missing data. I recommend it to every small producer.',
        name: 'Daniela Paredes',
        role: 'Small producer, Junín'
      }
    ],
    teamMembers: [
      { name: 'Diego', role: 'Engineering Lead', image: '/team-diego.png', linkedin: '#', x: '#' },
      { name: 'Ernesto', role: 'Software Architect', image: '/team-ernesto.jpg', linkedin: '#', x: '#' },
      { name: 'Fabrizio', role: 'Backend Engineer', image: '/team-fabrizio.jpeg', linkedin: '#', x: '#' },
      { name: 'Milenio', role: 'Frontend Engineer', image: '/team-milenio.png', linkedin: '#', x: '#' },
      { name: 'Nelson', role: 'Infrastructure Engineer', image: '/team-nelson.jpg', linkedin: '#', x: '#' }
    ],
    pricingPlans: [
      {
        name: 'Essentials',
        price: '$29.90',
        badge: '',
        description: 'For small ranchers.',
        perks: ['1 farm', 'Up to 100 cattle', 'Up to 10 staff members', 'Basic records and payments'],
        buttonLabel: 'Start today'
      },
      {
        name: 'Pro',
        price: '$59.90',
        badge: 'Most popular',
        description: 'For mid-sized operations.',
        perks: ['Up to 2 farms', 'Up to 500 cattle', 'Up to 50 staff members', 'Advanced automations'],
        buttonLabel: 'Start today'
      },
      {
        name: 'Elite',
        price: '$199.90',
        badge: '',
        description: 'For large operations.',
        perks: ['Up to 2000 cattle', 'Up to 200 staff members', 'Priority support', 'Dedicated Partner Success'],
        buttonLabel: 'Talk to sales'
      }
    ],
    faqs: [
      {
        question: 'Is the platform hard to use?',
        answer: 'The interface is simple and accessible even for users with little digital experience.'
      },
      {
        question: 'Can I manage all the information for my animals?',
        answer: 'Yes. You can log sanitary, reproductive, productivity, and financial data for each animal.'
      },
      {
        question: 'Does the platform send automatic reminders?',
        answer: 'Yes, you will receive alerts for vaccines, treatments, and reproductive events.'
      },
      {
        question: 'Are my records secure?',
        answer: 'The platform follows solid engineering practices and is hosted in reliable environments.'
      }
    ],
    contact: {
      eyebrow: 'Contact',
      title: 'How can we help you?',
      subheading: 'Complete the form to schedule a demo or resolve any question. We will reach out very soon.',
      form: {
        nameLabel: 'Your name',
        emailLabel: 'Your email',
        messageLabel: 'Your message',
        namePlaceholder: 'Full name',
        emailPlaceholder: 'you@example.com',
        messagePlaceholder: 'Hi, I would love to know more about...',
        buttonLabel: 'Send message'
      },
      thankYou: 'Thank you, {name}. We will review your message as soon as we can.',
      nameFallback: 'there',
      info: [
        { label: 'Address', value: 'Av. San Luis 128, San Borja' },
        { label: 'Phone', value: '+51 942 393 102' },
        { label: 'Email', value: 'contacto@ganlink.com' }
      ]
    },
    footer: {
      columns: [
        {
          title: 'Product',
          links: [
            { label: 'Features', href: '#features' },
            { label: 'How it works', href: '#how' },
            { label: 'Pricing', href: '#pricing' }
          ]
        },
        {
          title: 'Company',
          links: [
            { label: 'Team', href: '#about' },
            { label: 'Our story', href: '#about' }
          ]
        },
        {
          title: 'Support',
          links: [
            { label: 'FAQ', href: '#faq' },
            { label: 'Contact', href: '#contact' }
          ]
        },
        {
          title: 'Legal',
          links: [
            { label: 'Terms', href: '#' },
            { label: 'Privacy', href: '#' }
          ]
        }
      ],
      bottom: '© 2025 GanLink. All rights reserved.'
    }
  }
}

const linkedinIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.853-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.602 0 4.267 2.37 4.267 5.456v6.286zM5.337 7.433a2.062 2.062 0 11.004-4.124 2.062 2.062 0 01-.004 4.124zm-1.777 13.019h3.554V9H3.56v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .77 23.2 0 22.222 0h.003z"
    ></path>
  </svg>
`

const xIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M18.244 2H21.5l-7.42 8.487L22 22h-5.656l-4.43-5.787L6.77 22H3.5l7.898-9.037L2 2h5.812l3.987 5.314L18.244 2zm-1.078 18h1.184L7.91 4h-1.27l10.525 16z"
    ></path>
  </svg>
`

const worldIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm7.938 9h-3.292a15.7 15.7 0 00-1.12-5.065A8.03 8.03 0 0119.938 11zm-5.169 0h-3.538A13.73 13.73 0 019.5 5.198 13.73 13.73 0 0111.231 11zm-4.687 2h3.514A13.588 13.588 0 0111.23 18.8 13.588 13.588 0 019.044 13zm4.69 0h3.537c-.373 1.84-1.069 3.633-1.768 4.983A13.73 13.73 0 0113.735 13zm-2.351-8.935A15.7 15.7 0 009.354 11H6.062a8.03 8.03 0 015.322-6.935zM4.062 13h3.292a15.7 15.7 0 001.12 5.065A8.03 8.03 0 014.062 13zm11.586 6.737a15.7 15.7 0 001.74-4.737h2.55a8.03 8.03 0 01-4.29 4.737zM6.062 15h2.55a15.7 15.7 0 001.741 4.737A8.03 8.03 0 016.062 15z"
    ></path>
  </svg>
`

let currentLanguage = 'es'

const render = () => {
  const content = contentByLanguage[currentLanguage]
  const sections = content.sections

  const navLinks = content.nav.links
    .map((link) => `<a href="${link.href}">${link.label}</a>`)
    .join('')

  const featureCards = content.features
    .map(
      (feature) => `
        <article class="feature-card">
          <span class="feature-icon" aria-hidden="true">${feature.icon}</span>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </article>
      `
    )
    .join('')

  const howCards = content.howSteps
    .map(
      (step) => `
        <article class="how-card">
          <span class="step">${step.step}</span>
          <h3>${step.title}</h3>
          <p>${step.copy}</p>
        </article>
      `
    )
    .join('')

  const testimonialCards = content.testimonials
    .map(
      (item) => `
        <article class="testimonial-card">
          <p class="quote">“${item.quote}”</p>
          <p class="author">${item.name}</p>
          <span class="role">${item.role}</span>
        </article>
      `
    )
    .join('')

  const teamCards = content.teamMembers
    .map(
      (member) => `
        <article class="team-card">
          <div class="avatar">
            <img src="${member.image}" alt="${member.name}" loading="lazy" />
          </div>
          <h3>${member.name}</h3>
          <p class="role">${member.role}</p>
          <div class="team-links">
            <a href="${member.linkedin}" aria-label="LinkedIn profile">${linkedinIcon}</a>
            <a href="${member.x}" aria-label="X profile">${xIcon}</a>
          </div>
        </article>
      `
    )
    .join('')

  const pricingCards = content.pricingPlans
    .map(
      (plan) => `
        <article class="pricing-card ${plan.badge ? 'featured' : ''}">
          ${plan.badge ? `<span class="badge">${plan.badge}</span>` : ''}
          <h3>${plan.name}</h3>
          <p class="price">${plan.price} <span>${content.billingSuffix}</span></p>
          <p class="description">${plan.description}</p>
          <ul>
            ${plan.perks.map((perk) => `<li>${perk}</li>`).join('')}
          </ul>
          <button type="button" class="primary-btn">${plan.buttonLabel}</button>
        </article>
      `
    )
    .join('')

  const faqItems = content.faqs
    .map(
      (faq, index) => `
        <article class="faq-item">
          <button class="faq-question" aria-expanded="false" aria-controls="faq-panel-${index}" id="faq-${index}">
            <span>${faq.question}</span>
            <span class="faq-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" id="faq-panel-${index}" role="region" aria-labelledby="faq-${index}">
            <p>${faq.answer}</p>
          </div>
        </article>
      `
    )
    .join('')

  const contactInfoList = content.contact.info
    .map((item) => `<li><strong>${item.label}:</strong> ${item.value}</li>`)
    .join('')

  const footerColumns = content.footer.columns
    .map(
      (column) => `
        <div>
          <p>${column.title}</p>
          ${column.links.map((link) => `<a href="${link.href}">${link.label}</a>`).join('')}
        </div>
      `
    )
    .join('')

  document.querySelector('#app').innerHTML = `
    <div class="page">
      <header class="hero" id="hero">
        <nav class="top-nav">
          <a class="brand" href="#hero">
            <img src="/logo-agrotrace.png" alt="GanLink logo" class="brand-logo" />
            <span class="brand-name">GanLink</span>
          </a>
          <div class="nav-links">
            ${navLinks}
          </div>
          <div class="nav-actions">
            <button type="button" class="lang-switch" aria-label="${content.nav.languageToggleLabel}">
              ${worldIcon}
              <span>${currentLanguage.toUpperCase()}</span>
            </button>
            <a class="primary-btn" href="#pricing">${content.nav.cta}</a>
          </div>
        </nav>
        <div class="hero-content">
          <div class="hero-text">
            <p class="eyebrow">${content.hero.eyebrow}</p>
            <h1>${content.hero.title}</h1>
            <p class="lead">${content.hero.lead}</p>
            <div class="store-buttons">
              <a href="https://play.google.com/" class="store-btn" target="_blank" rel="noreferrer noopener">
                <img src="/07335cd8-47d5-51a0-a07b-125195eb4cea.svg" alt="Google Play" />
              </a>
              <a href="https://www.apple.com/la/app-store/" class="store-btn" target="_blank" rel="noreferrer noopener">
                <img src="/apple_store.svg" alt="App Store" />
              </a>
            </div>
          </div>
          <div class="hero-media">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=80"
              alt="GanLink team working together"
            />
          </div>
        </div>
      </header>

      <main>
        <section id="features" class="section">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.features.eyebrow}</p>
              <h2>${sections.features.title}</h2>
            </div>
            <div class="grid features-grid">
              ${featureCards}
            </div>
          </div>
        </section>

        <section id="how" class="section surface">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.how.eyebrow}</p>
              <h2>${sections.how.title}</h2>
            </div>
            <div class="grid how-grid">
              ${howCards}
            </div>
          </div>
        </section>

        <section id="testimonials" class="section">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.testimonials.eyebrow}</p>
              <h2>${sections.testimonials.title}</h2>
            </div>
            <div class="grid testimonial-grid">
              ${testimonialCards}
            </div>
          </div>
        </section>

        <section id="about" class="section surface">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.about.eyebrow}</p>
              <h2>${sections.about.title}</h2>
            </div>
            <div class="grid team-grid">
              ${teamCards}
            </div>
          </div>
        </section>

        <section id="team-video" class="section video-section">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.teamVideo.eyebrow}</p>
              <h2>${sections.teamVideo.title}</h2>
              <p class="subheading">${sections.teamVideo.description}</p>
            </div>
            <div class="video-card">
              <video controls playsinline poster="/logo-agrotrace.png">
                <source src="/about-the-team.mp4" type="video/mp4" />
                ${currentLanguage === 'es' ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}
              </video>
            </div>
          </div>
        </section>

        <section id="pricing" class="section">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.pricing.eyebrow}</p>
              <h2>${sections.pricing.title}</h2>
              <p class="subheading">
                ${sections.pricing.subheading}
              </p>
            </div>
            <div class="grid pricing-grid">
              ${pricingCards}
            </div>
          </div>
        </section>

        <section id="faq" class="section surface">
          <div class="section-shell">
            <div class="section-heading">
              <p class="eyebrow">${sections.faq.eyebrow}</p>
              <h2>${sections.faq.title}</h2>
            </div>
            <div class="faq-list">
              ${faqItems}
            </div>
          </div>
        </section>

        <section id="contact" class="section">
          <div class="section-shell contact">
            <div class="contact-card">
              <div>
                <p class="eyebrow">${content.contact.eyebrow}</p>
                <h2>${content.contact.title}</h2>
                <p class="subheading">
                  ${content.contact.subheading}
                </p>
              </div>
              <form id="contact-form" class="contact-form">
                <label>
                  ${content.contact.form.nameLabel}
                  <input type="text" name="name" placeholder="${content.contact.form.namePlaceholder}" required />
                </label>
                <label>
                  ${content.contact.form.emailLabel}
                  <input type="email" name="email" placeholder="${content.contact.form.emailPlaceholder}" required />
                </label>
                <label>
                  ${content.contact.form.messageLabel}
                  <textarea name="message" rows="4" placeholder="${content.contact.form.messagePlaceholder}" required></textarea>
                </label>
                <button type="submit" class="primary-btn">${content.contact.form.buttonLabel}</button>
                <p class="form-status" aria-live="polite"></p>
              </form>
            </div>
            <div class="contact-info">
              <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
                alt="Customer success team"
                loading="lazy"
              />
              <ul>
                ${contactInfoList}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <div class="footer-brand">
          <div class="brand">
            <img src="/logo-agrotrace.png" alt="GanLink logo" class="brand-logo" />
            <span class="brand-name">GanLink</span>
          </div>
          <div class="store-buttons small">
            <a href="https://play.google.com/" class="store-btn" target="_blank" rel="noreferrer noopener">
              <img src="/07335cd8-47d5-51a0-a07b-125195eb4cea.svg" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/la/app-store/" class="store-btn" target="_blank" rel="noreferrer noopener">
              <img src="/apple_store.svg" alt="App Store" />
            </a>
          </div>
        </div>
        <div class="footer-columns">
          ${footerColumns}
        </div>
        <div class="footer-bottom">
          <small>${content.footer.bottom}</small>
          <div class="social-links">
            <a href="#" aria-label="Follow on X">${xIcon}</a>
            <a href="#" aria-label="Follow on LinkedIn">${linkedinIcon}</a>
            <a href="#" aria-label="Follow on Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.778 1.153 4.92 4.92 0 011.153 1.778c.163.457.349 1.257.403 2.427.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.153 1.778 4.92 4.92 0 01-1.778 1.153c-.457.163-1.257.349-2.427.403-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 01-1.778-1.153 4.92 4.92 0 01-1.153-1.778c-.163-.457-.349-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 011.153-1.778A4.92 4.92 0 015.5 1.805c.457-.163 1.257-.349 2.427-.403C9.193 1.344 9.573 1.333 12 1.333s2.807.012 4.073.07c1.17.054 1.97.24 2.427.403a3.1 3.1 0 011.125.732 3.1 3.1 0 01.732 1.125c.163.457.349 1.257.403 2.427.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.054 1.17-.24 1.97-.403 2.427a3.1 3.1 0 01-.732 1.125 3.1 3.1 0 01-1.125.732c-.457.163-1.257.349-2.427.403-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.17-.054-1.97-.24-2.427-.403a3.1 3.1 0 01-1.125-.732 3.1 3.1 0 01-.732-1.125c-.163-.457-.349-1.257-.403-2.427-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.054-1.17.24-1.97.403-2.427a3.1 3.1 0 01.732-1.125 3.1 3.1 0 011.125-.732c.457-.163 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163z"
                ></path>
                <path
                  d="M12 5.838A6.162 6.162 0 005.838 12 6.162 6.162 0 0012 18.162 6.162 6.162 0 0018.162 12 6.162 6.162 0 0012 5.838zm0 10.162A4 4 0 118 12a4 4 0 014 4zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Follow on Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22 12a10 10 0 10-11.5 9.874v-6.987H8.428V12h2.072V9.797c0-2.045 1.218-3.177 3.084-3.177.894 0 1.829.16 1.829.16v2.013h-1.03c-1.016 0-1.334.632-1.334 1.28V12h2.271l-.363 2.887h-1.908v6.987A10.001 10.001 0 0022 12z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  `

  initializeInteractions(content)
}

const initializeInteractions = (content) => {
  document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true'
      button.setAttribute('aria-expanded', String(!expanded))
      button.closest('.faq-item')?.classList.toggle('open')
      const icon = button.querySelector('.faq-icon')
      if (icon) icon.textContent = expanded ? '+' : '−'
    })
  })

  const form = document.querySelector('#contact-form')
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const name = (formData.get('name') || '').toString().trim()
    const status = event.target.querySelector('.form-status')
    if (status) {
      const message =
        content.contact.thankYou.replace('{name}', name || content.contact.nameFallback)
      status.textContent = message
    }
    event.target.reset()
  })

  document.querySelector('.lang-switch')?.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es'
    render()
  })
}

render()
