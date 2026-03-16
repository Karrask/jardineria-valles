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
      title: 'La seva finca,',
      titleHighlight: 'neta i segura',
      subtitle:
        'Desbrossament, tala d\'arbres i neteja de parcel·les a Terrassa i el Vallès Occidental. Pressupost gratuït en 24 hores.',
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
      title: 'Treballs forestals i de jardineria',
      subtitle:
        'Desbrossament, tala, poda i neteja de parcel·les i terrenys a tot el Vallès Occidental.',
      cta: 'Demana pressupost gratuït',
      items: [
        {
          icon: '🌿',
          title: 'Desbrossament de parcel·les',
          desc: 'Neteja i desbrossament de terrenys, parcel·les i solars descuidats amb maquinària professional.',
        },
        {
          icon: '🪚',
          title: 'Tala i poda d\'arbres',
          desc: 'Tala, desbrancat i poda d\'arbres de qualsevol mida amb les mesures de seguretat adequades.',
        },
        {
          icon: '✂️',
          title: 'Poda d\'arbusts i bardisses',
          desc: 'Poda, retall i acondicionament d\'arbusts, bardisses i vegetació ornamental de qualsevol tipus.',
        },
        {
          icon: '🍂',
          title: 'Neteja de finques i solars',
          desc: 'Retirada de restes vegetals, brossa i residus de terrenys, finques i solars privats.',
        },
        {
          icon: '🌱',
          title: 'Tall de gespa i manteniment',
          desc: 'Tall i adobat de gespa, retall de vores i cura bàsica de zones enjardinades.',
        },
      ],
    },
    // Why us
    whyUs: {
      badge: 'Per què nosaltres',
      title: 'Professionals de confiança al Vallès',
      subtitle: 'Portem més de 10 anys treballant parcel·les i terrenys a la comarca.',
      years: 'anys d\'experiència',
      cta: 'Demana pressupost gratuït',
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
      ],
    },
    // Gallery
    gallery: {
      badge: 'Els nostres treballs',
      title: 'Resultats que parlen per si mateixos',
      subtitle: 'Una mostra dels terrenys i parcel·les que hem transformat.',
      cta: 'Demana el teu pressupost',
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
          'Desbrossament de parcel·les',
          'Tala i poda d\'arbres',
          'Poda d\'arbusts i bardisses',
          'Neteja de finques i solars',
          'Tall de gespa i manteniment',
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
      tagline: 'Professionals del desbrossament i la tala d\'arbres al Vallès Occidental des de 2014.',
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
      title: 'Su finca,',
      titleHighlight: 'limpia y segura',
      subtitle:
        'Desbroce, tala de árboles y limpieza de parcelas en Terrassa y el Vallès Occidental. Presupuesto gratuito en 24 horas.',
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
      title: 'Trabajos forestales y de jardinería',
      subtitle:
        'Desbroce, tala, poda y limpieza de parcelas y terrenos en todo el Vallès Occidental.',
      cta: 'Pedir presupuesto gratuito',
      items: [
        {
          icon: '🌿',
          title: 'Desbroce de parcelas',
          desc: 'Limpieza y desbroce de terrenos, parcelas y solares descuidados con maquinaria profesional.',
        },
        {
          icon: '🪚',
          title: 'Tala y poda de árboles',
          desc: 'Tala, desrrame y poda de árboles de cualquier tamaño con las medidas de seguridad adecuadas.',
        },
        {
          icon: '✂️',
          title: 'Poda de arbustos y setos',
          desc: 'Poda, recorte y acondicionamiento de arbustos, setos y vegetación ornamental de cualquier tipo.',
        },
        {
          icon: '🍂',
          title: 'Limpieza de fincas y solares',
          desc: 'Retirada de restos vegetales, maleza y residuos de terrenos, fincas y solares privados.',
        },
        {
          icon: '🌱',
          title: 'Corte de césped y mantenimiento',
          desc: 'Corte y abonado de césped, recorte de bordes y cuidado básico de zonas ajardinadas.',
        },
      ],
    },
    whyUs: {
      badge: 'Por qué nosotros',
      title: 'Profesionales de confianza en el Vallès',
      subtitle: 'Llevamos más de 10 años trabajando parcelas y terrenos en la comarca.',
      years: 'años de experiencia',
      cta: 'Pedir presupuesto gratuito',
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
      ],
    },
    gallery: {
      badge: 'Nuestros trabajos',
      title: 'Resultados que hablan por sí solos',
      subtitle: 'Una muestra de los terrenos y parcelas que hemos transformado.',
      cta: 'Pide tu presupuesto',
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
          'Desbroce de parcelas',
          'Tala y poda de árboles',
          'Poda de arbustos y setos',
          'Limpieza de fincas y solares',
          'Corte de césped y mantenimiento',
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
      tagline: 'Profesionales del desbroce y la tala de árboles en el Vallès Occidental desde 2014.',
      links: 'Enlaces',
      legal: 'Aviso legal · Política de privacidad',
      rights: 'Todos los derechos reservados.',
    },
  },
}

export type Translations = typeof translations['ca']
