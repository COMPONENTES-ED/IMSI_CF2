export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Marco normativo del cableado estructurado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estándares Internacionales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normativa nacional',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Certificaciones y cumplimiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de instalación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de cableado y categorías',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas y materiales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedimientos de instalación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentación técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planos y diagramas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Especificaciones técnicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos de verificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad y buenas prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normas de seguridad en instalación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Gestión de riesgos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Control de calidad',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Conclusiones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228142_CF02_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name: 'Cableado estructurado: instalación y cumplimiento normativo',
    Description:
      'El contenido aborda aspectos de la instalación de cableado estructurado y las normativas internacionales y nacionales que regulan la instalación para asegurar la calidad y seguridad del sistema. Se abordan procedimientos de instalación, selección de materiales y herramientas, así como interpretación de planos y documentación técnica. Finalmente, se subraya la importancia del control de calidad y la gestión de riesgos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
}
