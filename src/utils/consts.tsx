import { Aliada, Proyecta, Semblante } from './types'

export const links = {
  instagram: 'https://www.instagram.com/micalle_nuestracalle',
  linkedin:
    'https://www.linkedin.com/in/mi-calle-nuestra-calle-my-street-our-street-b25b64217/',
  dm: 'https://ig.me/m/micalle_nuestracalle',
  mail: 'mailto:hola@micallenuestracalle.com',
  herramientas:
    'https://drive.google.com/drive/folders/1r2ljvVj0eLhAoLwSNU96u7ZWdmhX6qLV',
  metodologias:
    'https://drive.google.com/drive/folders/1DU8jrbb9Ur4148BMcWoKs7zr6rZPNe4L',
  merch:
    'https://drive.google.com/drive/folders/1EAV7tm2uBR2IAznLxy8vokRfMvgRpkBp?usp=drive_link',
}

export const equipa: Semblante[] = [
  {
    slug: 'sophia-arrazola',
    nombre: 'Sophia Arrazola',
    correo: 'sophia@micallenuestracalle.com',
    instagram: 'https://www.instagram.com/sopharrazola_/?hl=es-la',
    linkedin: 'https://www.linkedin.com/in/sophia-arrazola-63667189/',
    proyectosRecientes: [
      'tendedero-vernaculo',
      'lab-futuros-comunitarios',
      'tejiendo-nuevos-futuros',
    ],
    conferencias: [
      {
        nombre: 'Institute for the future',
        url: '',
      },
    ],
    moodboard: [
      '/img/sophia/1-moodsoph.jpg',
      '/img/sophia/2-moodsoph.jpg',
      '/img/sophia/3-moodsoph.jpg',
      '/img/sophia/4-moodsoph.jpg',
      '/img/sophia/5-moodsoph.jpg',
      '/img/sophia/6-moodsoph.jpg',
      '/img/sophia/7-moodsoph.jpg',
      '/img/sophia/8-moodsoph.jpg',
    ],
  },
  {
    slug: 'jesica-bastidas',
    nombre: 'Jesica Bastidas',
    correo: 'jesica@micallenuestracalle.com',
    instagram: 'https://www.instagram.com/jesica.bastidas/',
    linkedin: 'https://www.linkedin.com/in/jesica-bastidas/',
    proyectosRecientes: ['historias-desde-la-risa', 'tendedero-vernaculo'],
    conferencias: [
      {
        nombre: 'Institute for the future',
        url: '',
      },
    ],
    moodboard: [
      '/img/jes/1-moodjes.jpg',
      '/img/jes/2-moodjes.jpg',
      '/img/jes/3-moodjes.jpg',
      '/img/jes/4-moodjes.jpg',
      '/img/jes/5-moodjes.jpg',
      '/img/jes/6-moodjes.jpg',
      '/img/jes/7-moodjes.jpg',
      '/img/jes/8-moodjes.jpg',
    ],
  },
]

export const aliadas: Record<string, Aliada> = {
  gobiernoMX: {
    nombre: 'Gobierno de México',
    url: '',
    logo: '/img/logos/gob_mexico.png',
  },
  gobiernoCDMX: {
    nombre: 'Gobierno CDMX',
    url: '',
    logo: '/img/logos/cdmx.png',
  },
  ONUMujeres: {
    nombre: 'ONU Mujeres México',
    url: '',
    logo: '/img/logos/un_women.png',
  },
  laNana: {
    nombre: 'La Nana',
    url: '',
    logo: '/img/logos/la_nana.jpg',
  },
  centro: {
    nombre: 'CENTRO',
    url: '',
    logo: '/img/logos/centro.png',
  },
  ibero: {
    nombre: 'Ibero',
    url: '',
    logo: '/img/logos/ibero.png',
  },
  detde: {
    nombre:
      'DETDE (Dirección de Emprendimiento, Talento y Desarrollo Empresarial)',
    url: '',
    logo: '/img/logos/detde.jpg',
  },
  andar: {
    nombre: 'Andar Consultorías',
    url: '',
    logo: '/img/logos/andar.png',
  },
  uvg: {
    nombre: 'Universidad del Valle de Guatemala',
    url: '',
    logo: '/img/logos/uvg.png',
  },
  uniRL: {
    nombre: 'Universidad Rafael Landivar',
    url: '',
    logo: '/img/logos/universidad_rafael_landivar.png',
  },
  violetaRadio: {
    nombre: 'Violeta Radio',
    url: 'https://violetaradio.org/',
    logo: '/img/logos/violeta_radio.jpg',
  },
  placemaking: {
    nombre: 'Placemaking México',
    url: 'https://lugarespublicos.org/',
    logo: '/img/logos/placemakingmx.png',
  },
  unidadDeGenero: {
    nombre: 'Unidad de Género Azcapotzalco',
    url: 'https://azcapotzalco.cdmx.gob.mx/iguales/',
  },
  laNuevaFabrica: {
    nombre: 'La Nueva Fábrica',
    url: 'https://lanuevafabrica.org/es/',
    logo: '/img/logos/la_nueva_fabrica.png',
  },
  draAnisah: {
    nombre: 'Dra. Anisah Abdullah',
    url: 'https://www.linkedin.com/in/anisah/?originalSubdomain=tw',
  },
  journalOfFutureStudies: {
    nombre: 'Journal of Future Studies',
    url: 'https://jfsdigital.org/',
  },
  lasPanas: {
    nombre: 'Las Panas',
    url: 'https://www.laspanasmx.com/',
    logo: '/img/logos/las_panas.png',
  },
  superaccio: {
    nombre: 'Superaccio',
    url: 'https://superaccio.org/',
    logo: '/img/logos/superaccio.png',
  },
  lagunaMX: {
    nombre: 'Laguna MX',
    url: 'https://lagunombrexico.com/',
    logo: '/img/logos/laguna.png',
  },
  disenaColectiva: {
    nombre: 'Diseña Colectiva',
    url: 'https://www.instagram.com/disenacolectiva/',
    logo: '/img/logos/disena_colectiva.jpg',
  },
}

export const tags = [
  'a2020',
  'a2021',
  'a2022',
  'a2023',
  'cdmx',
  'gt',
  'barcelona',
  'tw',
  'arte_comunitario',
  'educacion',
  'futuros',
  'genero',
  'investigacion',
  'narrativas',
  'ciudad',
  'clown',
  'corporal',
  'escenarios',
  'ficcion',
  'hibrido',
  'instalacion',
  'muralismo',
  'online',
  'performance',
  'presencial',
  'rural',
  'taller',
  'textil',
]

export const proyectas: Proyecta[] = [
  {
    slug: 'la-voz-de-las-mujeres',
    lugar: 'Violeta Radio, CDMX',
    fecha: '2020',
    tags: [
      'a2020',
      'cdmx',
      'genero',
      'arte_comunitario',
      'muralismo',
      'taller',
      'ciudad',
      'presencial',
    ],
    alianzas: [aliadas.violetaRadio],
    images: [
      '/img/proyectas/violeta_radio_5.jpg',
      '/img/proyectas/violeta_radio_0.jpg',
      '/img/proyectas/violeta_radio_3.jpg',
      '/img/proyectas/violeta_radio_1.jpg',
    ],
  },
  {
    slug: 'los-futuros-de-la-calle-de-las-mujeres',
    tags: [
      'a2021',
      'cdmx',
      'genero',
      'futuros',
      'educacion',
      'muralismo',
      'taller',
      'ciudad',
    ],
    lugar: 'Azcapotzalco, CDMX',
    fecha: '2021',
    alianzas: [aliadas.placemaking, aliadas.unidadDeGenero],
    images: [
      '/img/proyectas/azcapotzalco_0.jpg',
      '/img/proyectas/azcapotzalco_1.jpg',
      '/img/proyectas/azcapotzalco_2.jpg',
      '/img/proyectas/azcapotzalco_3.jpg',
      '/img/proyectas/azcapotzalco_4.jpg',
      '/img/proyectas/azcapotzalco_5.jpg',
    ],
    reporte:
      'https://drive.google.com/file/d/1C5Vsuon8zRiZ_CoXKznT2SpSXtYWwftS/view?usp=sharing',
  },
  {
    slug: 'tejiendo-nuevos-futuros',
    tags: [
      'a2022',
      'gt',
      'investigacion',
      'presencial',
      'rural',
      'textil',
      'genero',
      'futuros',
      'arte_comunitario',
      'narrativas',
      'instalacion',
      'taller',
    ],
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    alianzas: [aliadas.laNuevaFabrica],
    images: [
      '/img/proyectas/tejiendo_futuros_0.jpg',
      '/img/proyectas/tejiendo_futuros_1.jpg',
      '/img/proyectas/tejiendo_futuros_3.jpg',
    ],
    reporte:
      'https://docs.google.com/document/d/1Fi-FJ2C-VRnLzvDC1DACnzRSavGnslfNdJGkh8cYRe8/edit?usp=sharing',
  },
  {
    slug: 'educating-the-young',
    tags: [
      'a2022',
      'cdmx',
      'gt',
      'tw',
      'futuros',
      'educacion',
      'investigacion',
      'taller',
      'ciudad',
      'hibrido',
    ],
    lugar: 'México - Guatemala - Taiwán',
    fecha: '2022',
    alianzas: [aliadas.draAnisah, aliadas.journalOfFutureStudies],
    images: [
      '/img/proyectas/educating_the_young_0.JPG',
      '/img/proyectas/educating_the_young_1.JPG',
      '/img/proyectas/educating_the_young_2.jpg',
      '/img/proyectas/educating_the_young_3.JPG',
      '/img/proyectas/educating_the_young_4.jpg',
    ],
    reporte:
      'https://jfsdigital.org/navigating-possible-futures-a-comparative-study/',
  },
  {
    slug: 'lab-futuros-comunitarios',
    tags: [
      'a2022',
      'gt',
      'arte_comunitario',
      'investigacion',
      'ficcion',
      'genero',
      'futuros',
      'educacion',
      'narrativas',
      'textil',
      'instalacion',
      'taller',
      'rural',
      'hibrido',
    ],
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    alianzas: [aliadas.laNuevaFabrica],
    images: [
      '/img/proyectas/laboratoria_de_futuros_comunitarios_0.JPG',
      '/img/proyectas/laboratoria_de_futuros_comunitarios_1.JPG',
      '/img/proyectas/laboratoria_de_futuros_comunitarios_2.jpg',
      '/img/proyectas/laboratoria_de_futuros_comunitarios_3.JPG',
      '/img/proyectas/laboratoria_de_futuros_comunitarios_4.jpg',
      '/img/proyectas/laboratoria_de_futuros_comunitarios_5.jpg',
    ],
  },
  {
    slug: 'historias-desde-la-risa',
    tags: [
      'a2023',
      'cdmx',
      'genero',
      'arte_comunitario',
      'corporal',
      'ficcion',
      'narrativas',
      'clown',
      'taller',
      'ciudad',
      'presencial',
    ],
    lugar: 'Las Panas, CDMX',
    fecha: '2023',
    alianzas: [aliadas.lasPanas],
    images: [
      '/img/proyectas/las_panas_0.JPG',
      '/img/proyectas/las_panas_1.JPG',
      '/img/proyectas/las_panas_2.jpg',
      '/img/proyectas/las_panas_3.JPG',
    ],
  },
  {
    slug: 'futuros-desde-el-cuerpo',
    tags: [
      'a2023',
      'barcelona',
      'ficcion',
      'taller',
      'futuros',
      'arte_comunitario',
      'narrativas',
      'corporal',
      'performance',
      'ciudad',
      'presencial',
    ],
    lugar: 'Superacció, Barcelona',
    fecha: '2023',
    alianzas: [aliadas.superaccio],
    images: [
      '/img/proyectas/superaccio_0.JPG',
      '/img/proyectas/superaccio_1.JPG',
      '/img/proyectas/superaccio_2.jpg',
      '/img/proyectas/superaccio_3.JPG',
    ],
  },
  {
    slug: 'tendedero-vernaculo',
    tags: [
      'a2023',
      'cdmx',
      'genero',
      'futuros',
      'ficcion',
      'investigacion',
      'instalacion',
      'ciudad',
      'presencial',
    ],
    lugar: 'Laguna, CDMX',
    fecha: '2023',
    alianzas: [aliadas.lagunaMX, aliadas.disenaColectiva],
    images: [
      '/img/proyectas/tendedero_vernaculo_0.JPG',
      '/img/proyectas/tendedero_vernaculo_1.JPG',
      '/img/proyectas/tendedero_vernaculo_2.jpg',
      '/img/proyectas/tendedero_vernaculo_3.JPG',
    ],
  },
]

export const escenarios: Proyecta[] = [
  {
    slug: 'la-calle-de-las-mujeres',
    lugar: 'Azcapotzalco, CDMX',
    fecha: '2021',
    tags: [
      'a2021',
      'cdmx',
      'arte_comunitario',
      'investigacion',
      'hibrido',
      'genero',
      'futuros',
      'ficcion',
      'narrativas',
      'escenarios',
      'ciudad',
      'online',
    ],
    // temas: [
    //   'Perspectiva de género',
    //   'Derechos humanos',
    //   'Espacio público',
    //   'Violencia de género',
    //   'Urbanismo feminista',
    // ],
    alianzas: [aliadas.placemaking, aliadas.unidadDeGenero],
    // descripcion: [
    //   <>
    //     <span>Calles para nutrirnos y aprender</span>
    //     <br />
    //   </>,
    //   `Calles con espacios de aprendizaje comunitario para producir y crear soluciones innovadoras
    // y conectar con la naturaleza en armonía.`,
    //   <>
    //     <br />
    //     <br />
    //     Calles para convivir libres de violencia
    //     <br />
    //   </>,
    //   `Calles para que niñxs y mujeres tengan una vida llena de equidad y gozo libres de violencia.
    // Donde las mujeres son valoradas y reconocidas por su agencia y liderazgo.`,
    //   <>
    //     <br />
    //     <br />
    //     <span>
    //       Lee los escenarios completos{' '}
    //       <Link
    //         target="_blank"
    //         href="https://docs.google.com/presentation/d/1ijUsY8DVAGaeatr5fGefiuanOpYxr_fwlMxZQtc3hnE/edit?usp=sharing"
    //       >
    //         aquí
    //       </Link>
    //     </span>
    //   </>,
    // ],
    images: [
      '/img/escenarios/futuros_1.jpg',
      '/img/escenarios/futuros_2.jpg',
      '/img/escenarios/futuros_3.jpg',
      '/img/escenarios/futuros_4.jpg',
    ],
  },
  {
    slug: 'tendedero-vernaculo',
    lugar: 'Laguna, CDMX',
    fecha: '2023',
    tags: [
      'a2023',
      'cdmx',
      'futuros',
      'ficcion',
      'narrativas',
      'escenarios',
      'ciudad',
      'presencial',
    ],
    // temas: [
    //   'Espacio público',
    //   'Gentrificación',
    //   'Disidencias',
    //   'Urbanismo feminista',
    //   'Diseño participativo',
    // ],
    alianzas: [aliadas.lagunaMX, aliadas.disenaColectiva],
    // descripcion: [
    //   <>
    //     <span>Calles verdes</span>
    //     <br />
    //   </>,
    //   'Calles verdes con árboles, jardines y equipamiento para jugar y descansar. ',

    //   <>
    //     <br />
    //     <br />
    //     <span>Calles limpias y seguras</span>
    //     <br />
    //   </>,
    //   'Calles limpias y seguras para que todas las edades transitemos de forma libre, a pie o en bici. ',

    //   <>
    //     <br />
    //     <br />
    //     <span>Calles para compartir/gozar</span>
    //     <br />
    //   </>,
    //   'Calles para gozar y compartir sin discriminación entre vecinxs, visitantes y población migrante. ',

    //   <>
    //     <br />
    //     <br />
    //     <span>Calles que cuentan historias</span>
    //     <br />
    //   </>,
    //   'Calles que cuentan historias a través de murales y albergan espacios comunitarios con talleres. ',

    //   <>
    //     <br />
    //     <br />
    //     Lee los escenarios completos{' '}
    //     <Link href="https://docs.google.com/document/d/1pe1lS2s83Cixo9caKME7lui_CoWgGj1ef1_Nuj_Bx6o/edit?usp=sharing">
    //       aquí
    //     </Link>
    //   </>,
    // ],
    images: [
      '/img/escenarios/tendedero_1.jpg',
      '/img/escenarios/tendedero_2.jpg',
      '/img/escenarios/tendedero_3.jpg',
      '/img/escenarios/tendedero_4.jpg',
    ],
  },
]

export const historias: Proyecta[] = [
  {
    slug: 'angelica-b',
    lugar: 'Azcapotzalco, CDMX',
    fecha: '2021',
    tags: [
      'a2021',
      'cdmx',
      'genero',
      'futuros',
      'educacion',
      'muralismo',
      'taller',
      'ciudad',
    ],
    // titulo: 'Angélica B',
    // temas: [
    //   'Perspectiva de género',
    //   'Derechos humanos',
    //   'Espacio público',
    //   'Violencia de género',
    //   'Urbanismo feminista',
    // ],
    alianzas: [aliadas.placemaking, aliadas.unidadDeGenero],
    // descripcion: `Joven madre que había dejado la escuela y su práctica como artista urbana para atender
    // los cuidados de su familia y hogar. Se unió al equipo de MCNC como líder, mediadora y artista local
    // para la creación de murales en su colonia.  Más tarde retomó sus estudios, realizó murales en su
    // institución académica y sigue cuidando de su familia. `,
  },
  {
    slug: 'ana-v',
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    tags: [
      'genero',
      'futuros',
      'educacion',
      'narrativas',
      'textil',
      'instalacion',
      'taller',
      'rural',
      'hibrido',
    ],
    // titulo: 'Ana V',
    // temas: [
    //   'Perspectiva de género',
    //   'Derechos humanos',
    //   'Violencia de género',
    //   'Formación ciudadana',
    //   'Pensamiento prospectivo',
    // ],
    alianzas: [aliadas.laNuevaFabrica],
    // descripcion: `Líder comunitaria, artista textil y maestra local de bordado que había
    // perdido su trabajo a raíz de la crisis por COVID-19. Se unió al equipo de MCNC como
    // maestra de bordado y mediadora de procesos para  las mujeres de la comunidad. Más
    // tarde se integró a un programa de gobierno para la facilitación de artes en diversas aldeas.`,
  },
  {
    slug: 'marcela-b',
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    tags: [
      'genero',
      'futuros',
      'educacion',
      'narrativas',
      'textil',
      'instalacion',
      'taller',
      'rural',
      'hibrido',
    ],
    // titulo: 'Marcela B',
    // temas: [
    //   'Perspectiva de género',
    //   'Derechos humanos',
    //   'Violencia de género',
    //   'Formación ciudadana',
    //   'Pensamiento prospectivo',
    // ],
    alianzas: [aliadas.laNuevaFabrica],
    // descripcion: `Artista textil colombiana, local, interesada por detonar y guiar espacios
    // de creación experimental y reflexión. Se unió al equipo de MCNC como líder y mediadora de
    // espacios de creación y encuentro a través del arte. Inició una alianza con el Instituto
    // Municipal de Educación Básica de la aldea para brindar a sus jóvenes una agenda cultural.`,
  },
]
