export type Lang = 'ca' | 'es'

export const translations = {
  ca: {
    // Nav
    nav: {
      services: 'Serveis',
      coverage: 'Zones',
      gallery: 'Galeria',
      contact: 'Contacte',
      cta: 'Demana pressupost',
    },
    // Hero
    hero: {
      badge: 'Servei professional al Vallès Occidental',
      title: 'El seu jardí,',
      titleHighlight: 'la nostra passió',
      subtitle:
        'Jardineria, desbrossament i manteniment de parcel·les a Terrassa i el Vallès Occidental. Pressupost gratuït en 24 hores.',
      cta: 'Demana pressupost gratuït',
      ctaSecondary: 'Veure serveis',
      stats: [
        { value: '+500', label: 'Clients satisfets' },
        { value: '+10', label: 'Anys d\'experiència' },
        { value: '24h', label: 'Resposta garantida' },
      ],
    },
    // Services
    services: {
      badge: 'El que fem',
      title: 'Serveis professionals de jardineria',
      subtitle:
        'Oferim una àmplia gamma de serveis per mantenir el seu jardí i parcel·la en perfecte estat durant tot l\'any.',
      items: [
        {
          icon: '🌿',
          title: 'Manteniment de jardins',
          desc: 'Cura integral del seu jardí: tall de gespa, reg, abonat i tractaments fitosanitaris.',
        },
        {
          icon: '🪚',
          title: 'Desbrossament de parcel·les',
          desc: 'Neteja i desbrossament de terrenys, parcel·les i solars de qualsevol mida.',
        },
        {
          icon: '✂️',
          title: 'Poda d\'arbres i arbusts',
          desc: 'Poda professional d\'arbres ornamentals, fruiters i arbusts amb criteris tècnics.',
        },
        {
          icon: '🏡',
          title: 'Disseny de jardins',
          desc: 'Creem jardins a mida adaptats al seu espai, gustos i pressupost.',
        },
        {
          icon: '🍂',
          title: 'Neteja de terrenys',
          desc: 'Recollida de fulles, restes vegetals i neteja general de terrenys i finques.',
        },
        {
          icon: '💧',
          title: 'Sistemes de reg',
          desc: 'Instal·lació i manteniment de sistemes de reg automàtic eficients.',
        },
      ],
    },
    // Why us
    whyUs: {
      badge: 'Per què nosaltres',
      title: 'Professionals de confiança al Vallès',
      subtitle: 'Portem més de 10 anys cuidant jardins i parcel·les a la comarca.',
      items: [
        {
          icon: '⭐',
          title: 'Experiència contrastada',
          desc: 'Més de 10 anys de trajectòria i centenars de clients satisfets a tot el Vallès Occidental.',
        },
        {
          icon: '📋',
          title: 'Pressupost sense compromís',
          desc: 'Visita i pressupost completament gratuïts, sense sorpreses ni costos ocults.',
        },
        {
          icon: '🛡️',
          title: 'Empresa assegurada',
          desc: 'Disposem de totes les assegurances i certificacions professionals necessàries.',
        },
        {
          icon: '🌱',
          title: 'Productes ecològics',
          desc: 'Utilitzem productes respectuosos amb el medi ambient sempre que és possible.',
        },
      ],
    },
    // Gallery
    gallery: {
      badge: 'Els nostres treballs',
      title: 'Resultats que parlen per si mateixos',
      subtitle: 'Una mostra dels jardins i terrenys que hem transformat.',
    },
    // Coverage
    coverage: {
      badge: 'Zones de servei',
      title: 'Treballem a tot el Vallès Occidental',
      subtitle:
        'Cobrim Terrassa i tots els municipis de la comarca. Si no veus el teu municipi, contacta\'ns igualment.',
      municipalities: [
        'Terrassa', 'Sabadell', 'Rubí', 'Sant Cugat del Vallès',
        'Cerdanyola del Vallès', 'Barberà del Vallès', 'Ripollet',
        'Montcada i Reixac', 'Badia del Vallès', 'Castellbisbal',
        'El Papiol', 'Molins de Rei', 'Sant Quirze del Vallès',
        'Ullastrell', 'Viladecavalls', 'Matadepera',
      ],
    },
    // Contact form
    contact: {
      badge: 'Contacte',
      title: 'Demana el teu pressupost gratuït',
      subtitle:
        'Omple el formulari i et contactarem en menys de 24 hores per concertar una visita sense compromís.',
      form: {
        name: 'Nom i cognoms',
        namePlaceholder: 'Joan Garcia López',
        phone: 'Telèfon',
        phonePlaceholder: '600 000 000',
        municipality: 'Municipi',
        municipalityPlaceholder: 'Selecciona el teu municipi',
        service: 'Servei d\'interès',
        servicePlaceholder: 'Selecciona un servei',
        services: [
          'Manteniment de jardins',
          'Desbrossament de parcel·les',
          'Poda d\'arbres i arbusts',
          'Disseny de jardins',
          'Neteja de terrenys',
          'Sistemes de reg',
          'Altres',
        ],
        submit: 'Enviar sol·licitud',
        submitting: 'Enviant...',
        success: '✅ Sol·licitud enviada! Et contactarem aviat.',
        error: '❌ Hi ha hagut un error. Torna-ho a provar o truca\'ns.',
        privacy: 'Les teves dades seran tractades de forma confidencial. Només les usarem per contactar-te.',
      },
      info: {
        title: 'Informació de contacte',
        phone: '93 XXX XX XX',
        phoneMobile: '600 XXX XXX',
        email: 'info@jardineriavalles.cat',
        hours: 'Dl–Dv: 8:00–19:00 · Ds: 9:00–14:00',
        zone: 'Terrassa i Vallès Occidental',
      },
    },
    // Footer
    footer: {
      tagline: 'Professionals de la jardineria al Vallès Occidental des de 2014.',
      links: 'Enllaços',
      legal: 'Avís legal · Política de privacitat',
      rights: 'Tots els drets reservats.',
    },
  },

  es: {
    nav: {
      services: 'Servicios',
      coverage: 'Zonas',
      gallery: 'Galería',
      contact: 'Contacto',
      cta: 'Pedir presupuesto',
    },
    hero: {
      badge: 'Servicio profesional en el Vallès Occidental',
      title: 'Tu jardín,',
      titleHighlight: 'nuestra pasión',
      subtitle:
        'Jardinería, desbroce y mantenimiento de parcelas en Terrassa y el Vallès Occidental. Presupuesto gratuito en 24 horas.',
      cta: 'Pedir presupuesto gratuito',
      ctaSecondary: 'Ver servicios',
      stats: [
        { value: '+500', label: 'Clientes satisfechos' },
        { value: '+10', label: 'Años de experiencia' },
        { value: '24h', label: 'Respuesta garantizada' },
      ],
    },
    services: {
      badge: 'Lo que hacemos',
      title: 'Servicios profesionales de jardinería',
      subtitle:
        'Ofrecemos una amplia gama de servicios para mantener su jardín y parcela en perfecto estado durante todo el año.',
      items: [
        {
          icon: '🌿',
          title: 'Mantenimiento de jardines',
          desc: 'Cuidado integral de su jardín: corte de césped, riego, abonado y tratamientos fitosanitarios.',
        },
        {
          icon: '🪚',
          title: 'Desbroce de parcelas',
          desc: 'Limpieza y desbroce de terrenos, parcelas y solares de cualquier tamaño.',
        },
        {
          icon: '✂️',
          title: 'Poda de árboles y arbustos',
          desc: 'Poda profesional de árboles ornamentales, frutales y arbustos con criterios técnicos.',
        },
        {
          icon: '🏡',
          title: 'Diseño de jardines',
          desc: 'Creamos jardines a medida adaptados a su espacio, gustos y presupuesto.',
        },
        {
          icon: '🍂',
          title: 'Limpieza de terrenos',
          desc: 'Recogida de hojas, restos vegetales y limpieza general de terrenos y fincas.',
        },
        {
          icon: '💧',
          title: 'Sistemas de riego',
          desc: 'Instalación y mantenimiento de sistemas de riego automático eficientes.',
        },
      ],
    },
    whyUs: {
      badge: 'Por qué nosotros',
      title: 'Profesionales de confianza en el Vallès',
      subtitle: 'Llevamos más de 10 años cuidando jardines y parcelas en la comarca.',
      items: [
        {
          icon: '⭐',
          title: 'Experiencia contrastada',
          desc: 'Más de 10 años de trayectoria y cientos de clientes satisfechos en todo el Vallès Occidental.',
        },
        {
          icon: '📋',
          title: 'Presupuesto sin compromiso',
          desc: 'Visita y presupuesto completamente gratuitos, sin sorpresas ni costes ocultos.',
        },
        {
          icon: '🛡️',
          title: 'Empresa asegurada',
          desc: 'Disponemos de todos los seguros y certificaciones profesionales necesarios.',
        },
        {
          icon: '🌱',
          title: 'Productos ecológicos',
          desc: 'Utilizamos productos respetuosos con el medio ambiente siempre que es posible.',
        },
      ],
    },
    gallery: {
      badge: 'Nuestros trabajos',
      title: 'Resultados que hablan por sí solos',
      subtitle: 'Una muestra de los jardines y terrenos que hemos transformado.',
    },
    coverage: {
      badge: 'Zonas de servicio',
      title: 'Trabajamos en todo el Vallès Occidental',
      subtitle:
        'Cubrimos Terrassa y todos los municipios de la comarca. Si no ves tu municipio, contáctanos igualmente.',
      municipalities: [
        'Terrassa', 'Sabadell', 'Rubí', 'Sant Cugat del Vallès',
        'Cerdanyola del Vallès', 'Barberà del Vallès', 'Ripollet',
        'Montcada i Reixac', 'Badia del Vallès', 'Castellbisbal',
        'El Papiol', 'Molins de Rei', 'Sant Quirze del Vallès',
        'Ullastrell', 'Viladecavalls', 'Matadepera',
      ],
    },
    contact: {
      badge: 'Contacto',
      title: 'Pide tu presupuesto gratuito',
      subtitle:
        'Rellena el formulario y te contactaremos en menos de 24 horas para concertar una visita sin compromiso.',
      form: {
        name: 'Nombre y apellidos',
        namePlaceholder: 'Joan García López',
        phone: 'Teléfono',
        phonePlaceholder: '600 000 000',
        municipality: 'Municipio',
        municipalityPlaceholder: 'Selecciona tu municipio',
        service: 'Servicio de interés',
        servicePlaceholder: 'Selecciona un servicio',
        services: [
          'Mantenimiento de jardines',
          'Desbroce de parcelas',
          'Poda de árboles y arbustos',
          'Diseño de jardines',
          'Limpieza de terrenos',
          'Sistemas de riego',
          'Otros',
        ],
        submit: 'Enviar solicitud',
        submitting: 'Enviando...',
        success: '✅ ¡Solicitud enviada! Te contactaremos pronto.',
        error: '❌ Ha habido un error. Vuelve a intentarlo o llámanos.',
        privacy: 'Tus datos serán tratados de forma confidencial. Solo los usaremos para contactarte.',
      },
      info: {
        title: 'Información de contacto',
        phone: '93 XXX XX XX',
        phoneMobile: '600 XXX XXX',
        email: 'info@jardineriavalles.cat',
        hours: 'Lun–Vie: 8:00–19:00 · Sáb: 9:00–14:00',
        zone: 'Terrassa y Vallès Occidental',
      },
    },
    footer: {
      tagline: 'Profesionales de la jardinería en el Vallès Occidental desde 2014.',
      links: 'Enlaces',
      legal: 'Aviso legal · Política de privacidad',
      rights: 'Todos los derechos reservados.',
    },
  },
} as const

export type Translations = typeof translations['ca']
