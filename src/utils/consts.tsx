import Link from 'next/link'
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
  merch: 'https://www.instagram.com/stories/highlights/17945019269657420/',
}

export const aliadas: Record<string, Aliada> = {
  violetaRadio: {
    nombre: 'Violeta Radio',
    url: 'https://violetaradio.org/',
  },
  placemaking: {
    nombre: 'Placemaking México',
    url: 'https://lugarespublicos.org/',
  },
  unidadDeGenero: {
    nombre: 'Unidad de Género Azcapotzalco',
    url: 'https://azcapotzalco.cdmx.gob.mx/iguales/',
  },
  laNuevaFabrica: {
    nombre: 'La Nueva Fábrica',
    url: 'https://lanuevafabrica.org/es/',
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
  },
  superaccio: {
    nombre: 'Superaccio',
    url: 'https://superaccio.org/',
  },
  lagunaMX: {
    nombre: 'Laguna MX',
    url: 'https://lagunombrexico.com/',
  },
  disenaColectiva: {
    nombre: 'Diseña Colectiva',
    url: 'https://www.instagram.com/disenacolectiva/',
  },
}

export const proyectas: Proyecta[] = [
  {
    slug: 'la-voz-de-las-mujeres',
    lugar: 'Violeta Radio, CDMX',
    fecha: '2020',
    tags: [
      '2020',
      'CDMX',
      'Género',
      'Arte comunitario',
      'Muralismo',
      'Taller',
      'Ciudad',
      'Presencial',
    ],
    titulo: 'La voz de las mujeres',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Feminismos',
      'Violencia de género',
      'Urbanismo feminista',
    ],
    alianzas: [aliadas.violetaRadio],
    descripcion: `Serie de talleres de co-diseño para visualizar el futuro preferido de las radioescuchas,
      vecinas e integrantes de Violeta Radio.  
      Como resultado de este proceso de vinculación comunitaria, se intervinieron las instalaciones 
      de la radio para llenarlas de colores y consignas mediante un mural participativo.`,
    metodos: 'Futuros aspiracionales',
    pedagogias:
      'vinculación comunitaria, diseño participativo, arte comunitario',
    medio: 'mural comunitario, arte urbano',
    cambios: 'tejido social, espacios seguros, feminismos',
    creditos:
      'Sophia Arrazola, Sophie Greenspan, Jesica Bastidas y comunidad de Violeta Radio',
    images: [
      'violeta_radio_1.jpg',
      'violeta_radio_2.jpg',
      'violeta_radio_4.jpg',
      'violeta_radio_5.jpg',
    ],
  },
  {
    slug: 'los-futuros-de-las-mujeres',
    tags: [
      '2021',
      'CDMX',
      'Género',
      'Futuros',
      'Educación',
      'Muralismo',
      'Taller',
      'Ciudad',
    ],
    titulo: 'Los futuros de las mujeres',
    lugar: 'Azcapotzalco, CDMX',
    fecha: '2021',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Espacio público',
      'Violencia de género',
      'Urbanismo feminista',
    ],
    alianzas: [aliadas.placemaking, aliadas.unidadDeGenero],
    descripcion: `Programa de formación comunitaria en perspectiva de género, derechos humanos 
    de las mujeres y diseño de futuros para la Alcaldía y Red de vecinas de Azcapotzalco. 
    A través de futuros participativos y arte comunitario, se creó y plasmó un escenario 
    futurible en murales para la fachada de su mercado.`,
    metodos:
      'Antropología anticipatoria, visualizaciones de ciclos, análisis causal por capas, escaneo del horizonte, creación de escenarios futuros, planeación prospectiva estratégica',
    pedagogias:
      'vinculación comunitaria, teatro del oprimido, arte comunitario, futuros participativos, tendedero de ideas',
    medio: 'futuros experienciales, mural comunitario, arte urbano',
    cambios:
      'calles limpias y seguras, nuevas masculinidades, derecho al descanso y tiempo libre',
    creditos:
      'Sophia Arrazola, Jesica Bastidas, Sophie Greenspan, Veronica Navarro, Red de vecinas y Unidad de Género de Azcapotzalco',
    images: [
      'azcapotzalco_0.jpg',
      'azcapotzalco_1.jpg',
      'azcapotzalco_2.jpg',
      'azcapotzalco_3.jpg',
      'azcapotzalco_4.jpg',
      'azcapotzalco_5.jpg',
    ],
    reporte:
      'https://drive.google.com/file/d/1C5Vsuon8zRiZ_CoXKznT2SpSXtYWwftS/view?usp=sharing',
  },
  {
    slug: 'tejiendo-futuros',
    tags: [
      'Género',
      'Futuros',
      'Arte Comunitario',
      'Narrativas',
      'Instalación',
      'Taller',
    ],
    titulo: 'Tejiendo futuros',
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Violencia de género',
      'Formación ciudadana',
      'Pensamiento prospectivo',
    ],
    alianzas: [aliadas.laNuevaFabrica],
    descripcion: `Talleres creativos en pensamiento prospectivo y formación ciudadana para vecinas 
    de la galería La Nueva Fábrica. Sus experiencias del pasado, presente, y anhelos futuros se 
    plasmaron en arte textil y se exhibió en la galería. Con un mural interactivo se inició la 
    conversación con el resto de la comunidad.`,
    metodos:
      'Visualizaciones de ciclos, creación de escenarios futuros, antropología anticipatoria, etnografía poética',
    pedagogias:
      'vinculación comunitaria, futuros participativos, arte participativo, prácticas narrativas ',
    medio:
      'mural interactivo, tendedero comunitario, bordado, arte textil, instalación de arte',
    cambios:
      'autonomía económica, derecho al descanso y tiempo libre, nuevas masculinidades',
    creditos:
      'Sophia Arrazola, Jesica Bastidas, La Nueva Fábrica y comunidad de vecinas de la aldea Santa Ana',
    images: [
      'tejiendo_futuros_0.jpg',
      'tejiendo_futuros_1.jpg',
      'tejiendo_futuros_3.jpg',
    ],
    reporte:
      'https://docs.google.com/document/d/1Fi-FJ2C-VRnLzvDC1DACnzRSavGnslfNdJGkh8cYRe8/edit?usp=sharing',
  },
  {
    slug: 'educating-the-young',
    tags: [
      '2022',
      'CDMX',
      'GT',
      'TW',
      'Futuros',
      'Educación',
      'Investigación',
      'Taller',
      'Ciudad',
      'Híbrido',
    ],
    titulo: 'Educating The Young',
    lugar: 'México - Guatemala - Taiwán',
    fecha: '2022',
    temas: [
      'Juventudes',
      'Alfabetización de futuros',
      'Aprendizaje colaborativo',
      'Pedagogía crítica',
      'Estudio comparativo',
    ],
    alianzas: [aliadas.draAnisah, aliadas.journalOfFutureStudies],
    descripcion: `Investigación en colaboración con la Dra. Anisah Abdullah 
    (Universidad de Tamkang - Taiwán). Mediante talleres para la alfabetización 
    de futuros con educadores y jóvenes, se reportan hallazgos y recomendaciones 
    que servirán para el diseño de herramientas pedagógicas adecuadas al contexto 
    Latinoaméricano.`,
    metodos:
      ' Triángulo de futuros, escaneo del Horizonte, metáforas del futuro, NotYetPossible Futures Card Game',
    pedagogias: 'futuros participativos',
    medio: 'escritura creativa ',
    cambios: 'gamificación, futuros locales, reconocimiento de saberes',
    creditos: 'Jesica Bastidas, Sophia Arrazola y Dra. Anisah Abdullah',
    images: [
      'educating_the_young_0.JPG',
      'educating_the_young_1.JPG',
      'educating_the_young_2.jpg',
      'educating_the_young_3.JPG',
      'educating_the_young_4.jpg',
    ],
    reporte:
      'https://jfsdigital.org/navigating-possible-futures-a-comparative-study/',
  },
  {
    slug: 'laboratoria-de-futuros-comunitarios',
    tags: [
      'Género',
      'Futuros',
      'Educación',
      'Narrativas',
      'Téxtil',
      'Instalación',
      'Taller',
      'Rural',
      'Hibrido',
    ],
    titulo: 'Laboratoria de futuros comunitarios',
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Autonomías',
      'Formación ciudadana',
      'Pensamiento crítico',
    ],
    alianzas: [aliadas.laNuevaFabrica],
    descripcion: `Modelo pedagógico y gestión cultural de un espacio de diálogo 
    y empoderamiento de las líderes comunitarias de Santa Ana. En talleres de 
    bordado experimental, se a-bordó la perspectiva de género, derechos humanos, 
    futuros y la conquista de sus autonomías. Se abrieron bazares para la venta 
    de estos productos.`,
    metodos:
      'Etnografía poética, visualizaciones de ciclos, ¿futuros aspiracionales?',
    pedagogias:
      'vinculación comunitaria, diseño de modelo pedagógico, planeación prospectiva estratégica, teoría de cambio ',
    medio:
      'taller productivo de bordado, agenda cultural, instalación de arte, arte textil',
    cambios:
      'autonomía económica, tejido social, empoderamiento de las mujeres',
    creditos:
      'Sophia Arrazola, La Nueva Fábrica y la comunidad de vecinas y estudiantes de Santa Ana',
    images: [
      'laboratoria_de_futuros_comunitarios_0.JPG',
      'laboratoria_de_futuros_comunitarios_1.JPG',
      'laboratoria_de_futuros_comunitarios_2.jpg',
      'laboratoria_de_futuros_comunitarios_3.JPG',
      'laboratoria_de_futuros_comunitarios_4.jpg',
      'laboratoria_de_futuros_comunitarios_5.jpg',
    ],
  },
  {
    slug: 'historias-desde-la-risa',
    tags: [
      '2023',
      'CDMX',
      'Género',
      'Arte comunitario',
      'Narrativas',
      'Clown',
      'Taller',
      'Ciudad',
      'Presencial',
    ],
    titulo: 'Historias desde la risa',
    lugar: 'Las Panas, CDMX',
    fecha: '2023',
    temas: [
      'Resiliencia',
      'Redes de apoyo',
      'Expresión corporal',
      'Narración de historias',
      'Perspectiva de género',
    ],
    alianzas: [aliadas.lasPanas],
    descripcion: `Taller de narraciones escénicas y anhelos futuros para el programa 
    de atención a mujeres de escasos recursos de Las Panas. A través de un tendedero 
    de ideas y la representación de sketches cómicos, se narran historias personales 
    desde otras perspectivas e identifican los temores y anhelos futuros de las mujeres.`,
    metodos: 'Futures wheel',
    pedagogias:
      'prácticas narrativas, soundpainting, clown social, teatro del oprimido',
    medio: 'teatro, clown, improvisación, expresión corporal',
    cambios: 'salud mental, autonomías, tejido social',
    creditos:
      'Jesica Bastidas, Sophia Arrazola, Itzel Enciso y comunidad de Las Panas',
    images: [
      'las_panas_0.JPG',
      'las_panas_1.JPG',
      'las_panas_2.jpg',
      'las_panas_3.JPG',
    ],
  },
  {
    slug: 'futuros-desde-el-cuerpo',
    tags: [
      'Futuros',
      'Arte comunitario',
      'Narrativas',
      'Corporal',
      'Performance',
      'Ciudad',
      'Presencial',
    ],
    titulo: 'Futuros desde el cuerpo',
    lugar: 'Superacció, Barcelona',
    fecha: '2023',
    temas: [
      'Espacio público',
      'Migración',
      'Empatía',
      'Integración grupal',
      'Diversidad cultural',
    ],
    alianzas: [aliadas.superaccio],
    descripcion: `Taller de empatía y vinculación con jóvenes migrantes 
    de origen norteafricano en Superaccio Barcelona. Con dibujos, impro 
    y expresión corporal, se toma el espacio público y construyen viñetas 
    de un sueño futuro que integra a todxs. Un tendedero de viñetas del 
    futuro seguirá recopilando señales y visiones.`,
    metodos: 'Visualizaciones de ciclos ',
    pedagogias:
      'viñetas colectivas, prácticas narrativas, Teatro del Oprimido, tendedero de ideas',
    medio: 'Dibujo, improvisación, expresión corporal y narración vocal',
    cambios: 'tejido social, migración , desarraigo',
    creditos:
      'Sophia Arrazola, Jesica Bastidas, Carolina Gonzáles, Ana Solano y comunidad de Superacció',
    images: [
      'superaccio_0.JPG',
      'superaccio_1.JPG',
      'superaccio_2.jpg',
      'superaccio_3.JPG',
    ],
  },
  {
    slug: 'tendedero-vernaculo',
    tags: [
      '2023',
      'CDMX',
      'Futuros',
      'Ficción',
      'Narrativas',
      'Investigación',
      'Instalación',
      'Escenarios',
      'Ciudad',
      'Presencial',
    ],
    titulo: 'Tendedero vernáculo',
    lugar: 'Laguna, CDMX',
    fecha: '2023',
    temas: [
      'Espacio público',
      'Gentrificación',
      'Disidencias',
      'Urbanismo feminista',
      'Diseño participativo',
    ],
    alianzas: [aliadas.lagunaMX, aliadas.disenaColectiva],
    descripcion: `Instalación de arte que exhibe las respuestas de 100 chilangxs 
    (mujeres, hombres y personas no binarias) en la Colonia Doctores, para conocer 
    qué padecen, disfrutan y anhelan para sus espacios públicos. Se delinean cuatro 
    escenarios futuros y, mediante un muro interactivo, se abre la votación a la comunidad.`,
    metodos:
      'Escaneo del horizonte, futures wheel, creación de escenarios futuros',
    pedagogias:
      'vinculación comunitaria, futuros participativos, mapeo comunitario, visualización análoga de datos, encuestas',
    medio:
      'dibujo, audio ficción, instalación participativa, tendedero de ideas',
    cambios: 'calles limpias y seguras, derecho a la ciudad, tejido social',
    creditos:
      'Sophia Arrazola,  Jesica Bastidas, Monse Padilla, Ilaria Palermo, Chris van Balen, Rosi Álvarez, Johana Trujillo y Esteban Ruiz-Velasco',
    images: [
      'tendedero_vernaculo_0.JPG',
      'tendedero_vernaculo_1.JPG',
      'tendedero_vernaculo_2.jpg',
      'tendedero_vernaculo_3.JPG',
    ],
  },
]

export const equipa: Semblante[] = [
  {
    slug: 'sophia-arrazola',
    nombre: 'Sophia Arrazola',
    correo: 'sophia@micallenuestracalle.com',
    instagram: 'https://www.instagram.com/sopharrazola_/?hl=es-la',
    linkedin: 'https://www.linkedin.com/in/sophia-arrazola-63667189/',
    intereses: [
      'Género',
      'Migración climática',
      'Aprender de otras formas',
      'Arte comunitario',
      'Ciudades comunes',
    ],
    proyectosRecientes: [
      {
        nombre: 'Tendedero Vernaculo',
        url: '/proyecta/tendedero-vernaculo',
      },
      {
        nombre: 'Lab La Nueva Fábrica',
        url: '/proyecta/laboratoria-de-futuros-comunitarios',
      },
      {
        nombre: 'Tejiendo futuros',
        url: '/proyecta/tejiendo-futuros',
      },
    ],
    conferencias: [
      {
        nombre: 'Institute for the future',
        url: '',
      },
    ],
    semblante: `Sophia es fundadora de Mi Calle, Nuestra Calle. Con más de 8 años de experiencia 
    desarrollando proyectos de innovación social y liderando procesos de investigación antropológica 
    y arte participativo, diseño de experiencias de inteligencia colectiva con enfoque de género y 
    derechos humanos en América Latina y Europa. Desde un enfoque creativo, ético y crítico, ha 
    colaborado como consultora independiente con proyectos de base, ONG's de impacto sostenible y 
    organizaciones de cooperación internacional, entre otros.

    Con alma de antropóloga urbana y una personalidad curiosa que la ha impulsado a explorar, 
    descubrir e interesarse por los futuros como oficio, el arte comunitario-participativo como 
    medio y el diseño de experiencias culturales antropológicas como vocación, combinado con un 
    pensamiento crítico agudo.`,
  },
  {
    slug: 'jesica-bastidas',
    nombre: 'Jesica Bastidas',
    correo: 'jesica@micallenuestracalle.com',
    instagram: 'https://www.instagram.com/jesica.bastidas/',
    linkedin: 'https://www.linkedin.com/in/jesica-bastidas/',
    intereses: [
      'Interdisciplina y colaboración',
      'Arte comunitario',
      'Futuros participativos',
      'Clown y artes escénicas',
      'Arte especulativo',
    ],
    proyectosRecientes: [
      {
        nombre: 'Las Panas',
        url: '/proyecta/historias-desde-la-risa',
      },
      {
        nombre: 'Tendedero Vernaculo',
        url: '/proyecta/tendedero-vernaculo',
      },
    ],
    conferencias: [
      {
        nombre: 'Institute for the future',
        url: '',
      },
    ],
    semblante: `Jesica es co-fundadora de Mi Calle, Nuestra Calle. 
    Artista escénica, clown y futurista con más de 9 años de experiencia en el 
    acompañamiento comunitario a través del arte participativo, sus cruces con otras 
    disciplinas y una dosis de buen humor. Se especializa en el trabajo con grupos 
    para fomentar espacios de inclusión, inteligencia colectiva, colaboración y empatía. 
    Su más reciente trabajo explora el arte especulativo en búsqueda de futuros participativos y nuevos anhelos. 
    Encuentra en el humor una herramienta poderosa para el entretenimiento educativo, 
    la crítica, la orientación comunitaria y la facilitación creativa. Colabora con 
    instituciones científicas y ONGs para la divulgación lúdica de conocimientos, 
    presentando su trabajo en México y extranjero.`,
  },
]

export const historias: Proyecta[] = [
  {
    slug: 'angelica-b',
    lugar: 'Azcapotzalco, CDMX',
    fecha: '2021',
    tags: [
      '2021',
      'CDMX',
      'Género',
      'Futuros',
      'Educación',
      'Muralismo',
      'Taller',
      'Ciudad',
    ],
    titulo: 'Angélica B',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Espacio público',
      'Violencia de género',
      'Urbanismo feminista',
    ],
    alianzas: [aliadas.placemaking, aliadas.unidadDeGenero],
    descripcion: `Joven madre que había dejado la escuela y su práctica como artista urbana para atender 
    los cuidados de su familia y hogar. Se unió al equipo de MCNC como líder, mediadora y artista local 
    para la creación de murales en su colonia.  Más tarde retomó sus estudios, realizó murales en su 
    institución académica y sigue cuidando de su familia. `,
  },
  {
    slug: 'ana-v',
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    tags: [
      'Género',
      'Futuros',
      'Educación',
      'Narrativas',
      'Téxtil',
      'Instalación',
      'Taller',
      'Rural',
      'Hibrido',
    ],
    titulo: 'Ana V',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Violencia de género',
      'Formación ciudadana',
      'Pensamiento prospectivo',
    ],
    alianzas: [aliadas.laNuevaFabrica],
    descripcion: `Líder comunitaria, artista textil y maestra local de bordado que había 
    perdido su trabajo a raíz de la crisis por COVID-19. Se unió al equipo de MCNC como 
    maestra de bordado y mediadora de procesos para  las mujeres de la comunidad. Más 
    tarde se integró a un programa de gobierno para la facilitación de artes en diversas aldeas.`,
  },
  {
    slug: 'marcela-b',
    lugar: 'La Nueva Fábrica, Santa Ana',
    fecha: '2022',
    tags: [
      'Género',
      'Futuros',
      'Educación',
      'Narrativas',
      'Téxtil',
      'Instalación',
      'Taller',
      'Rural',
      'Hibrido',
    ],
    titulo: 'Marcela B',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Violencia de género',
      'Formación ciudadana',
      'Pensamiento prospectivo',
    ],
    alianzas: [aliadas.laNuevaFabrica],
    descripcion: `Artista textil colombiana, local, interesada por detonar y guiar espacios 
    de creación experimental y reflexión. Se unió al equipo de MCNC como líder y mediadora de 
    espacios de creación y encuentro a través del arte. Inició una alianza con el Instituto 
    Municipal de Educación Básica de la aldea para brindar a sus jóvenes una agenda cultural.`,
  },
]

export const escenarios: Proyecta[] = [
  {
    slug: 'los-futuros-de-las-mujeres',
    lugar: 'Azcapotzalco, CDMX',
    fecha: '2021',
    tags: [
      '2021',
      'CDMX',
      'Género',
      'Futuros',
      'Ficción',
      'Narrativas',
      'Escenarios',
      'Ciudad',
      'Online',
    ],
    titulo: 'Los futuros de las mujeres',
    temas: [
      'Perspectiva de género',
      'Derechos humanos',
      'Espacio público',
      'Violencia de género',
      'Urbanismo feminista',
    ],
    alianzas: [aliadas.placemaking, aliadas.unidadDeGenero],
    descripcion: [
      <>
        <span>Calles para nutrirnos y aprender</span>
        <br />
      </>,
      `Calles con espacios de aprendizaje comunitario para producir y crear soluciones innovadoras 
    y conectar con la naturaleza en armonía.`,
      <>
        <br />
        <br />
        Calles para convivir libres de violencia
        <br />
      </>,
      `Calles para que niñxs y mujeres tengan una vida llena de equidad y gozo libres de violencia. 
    Donde las mujeres son valoradas y reconocidas por su agencia y liderazgo.`,
      <>
        <br />
        <br />
        <span>
          Lee los escenarios completos{' '}
          <Link
            target="_blank"
            href="https://docs.google.com/presentation/d/1ijUsY8DVAGaeatr5fGefiuanOpYxr_fwlMxZQtc3hnE/edit?usp=sharing"
          >
            aquí
          </Link>
        </span>
      </>,
    ],
    images: [
      'futuros_1.jpg',
      'futuros_2.jpg',
      'futuros_3.jpg',
      'futuros_4.jpg',
    ],
  },
  {
    slug: 'tendedero-vernaculo',
    lugar: 'Laguna, CDMX',
    fecha: '2023',
    tags: [
      '2023',
      'CDMX',
      'Futuros',
      'Ficción',
      'Narrativas',
      'Escenarios',
      'Ciudad',
      'Presencial',
    ],
    titulo: 'Tendedero vernáculo ',
    temas: [
      'Espacio público',
      'Gentrificación',
      'Disidencias',
      'Urbanismo feminista',
      'Diseño participativo',
    ],
    alianzas: [aliadas.lagunaMX, aliadas.disenaColectiva],
    descripcion: [
      <>
        <span>Calles verdes</span>
        <br />
      </>,
      'Calles verdes con árboles, jardines y equipamiento para jugar y descansar. ',

      <>
        <br />
        <br />
        <span>Calles limpias y seguras</span>
        <br />
      </>,
      'Calles limpias y seguras para que todas las edades transitemos de forma libre, a pie o en bici. ',

      <>
        <br />
        <br />
        <span>Calles para compartir/gozar</span>
        <br />
      </>,
      'Calles para gozar y compartir sin discriminación entre vecinxs, visitantes y población migrante. ',

      <>
        <br />
        <br />
        <span>Calles que cuentan historias</span>
        <br />
      </>,
      'Calles que cuentan historias a través de murales y albergan espacios comunitarios con talleres. ',

      <>
        <br />
        <br />
        Lee los escenarios completos{' '}
        <Link href="https://docs.google.com/document/d/1pe1lS2s83Cixo9caKME7lui_CoWgGj1ef1_Nuj_Bx6o/edit?usp=sharing">
          aquí
        </Link>
      </>,
    ],
    images: [
      'tendedero_1.jpg',
      'tendedero_2.jpg',
      'tendedero_3.jpg',
      'tendedero_4.jpg',
    ],
  },
]
