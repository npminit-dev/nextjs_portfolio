import { BiLogoCss3, BiLogoNodejs, BiLogoJavascript, BiLogoTypescript, BiLogoReact, BiLogoHtml5 } from 'react-icons/bi'
import { FaBootstrap } from 'react-icons/fa'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { SiJest, SiExpo } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { ProjectProps } from '@/typedefs/Projects_Types'
import { v4 as uuid } from 'uuid'

export const projectsdata: ProjectProps[] = [
  {
    name: 'BookNexus',
    info: 'Web de libros con React/TS/Ant-Design (prueba tecnica de @midudev)',
    cover: 'https://i.ibb.co/T1CX7Ln/Book-Nexus.webp',
    thumbnail: 'https://i.ibb.co/J245vDK/Book-Nexus-tn.webp',
    link: 'https://booknexus.netlify.app',
    tecs: ['HTML5', 'CSS3', 'React', 'TypeScript', 'Ant-Design', 'Jest'],
    repo: 'https://github.com/npminit-dev/npminit-dev.git'
  },
  {
    name: 'ByteBlog',
    info: 'Sencilla aplicación fullstack de administración de blogs',
    cover: 'https://i.ibb.co/b1320qy/ByteBlog.webp',
    thumbnail: 'https://i.ibb.co/wcBVs19/Byte-Blog-tn.webp',
    link: 'https://byteblog.adaptable.app',
    tecs: ['HTML5', 'CSS3', 'React', 'Typescript', 'NodeJS', 'MongoDB'],
    repo: 'https://github.com/npminit-dev/ByteBlog.git'
  },
  {
    name: 'Nasa APOD',
    info: 'App de las fotos astronómicas de los ultimos 6 dias, usando la API NASA-APOD',
    cover: 'https://i.ibb.co/2vgyjxY/Nasa-App.webp',
    thumbnail: 'https://i.ibb.co/S6yYbWs/Nasa-App-tn.webp',
    tecs: ['TypeScript', 'React Native', 'Jest'],
    repo: 'https://github.com/npminit-dev/NASA-App.git'
  },
  {
    name: 'DailyFuel',
    info: 'App para controlar el consumo diario de calorías',
    cover: 'https://i.ibb.co/8cXYDbL/Daily-Fuel.webp',
    thumbnail: 'https://i.ibb.co/cvkzHCr/Daily-Fuel-tn.webp',
    tecs: ['React Native', 'Expo Go'],
    repo: 'https://github.com/npminit-dev/DailyFuel.git'
  },
  {
    name: 'Landing Page',
    info: 'Landing page con Bootstrap5',
    cover: 'https://i.ibb.co/80kqmpC/Landing-Page-BS5.webp',
    thumbnail: 'https://i.ibb.co/Z2r64Zw/Landing-Page-BS5-tn.webp',
    link: 'https://capable-kringle-1fe2b3.netlify.app/',
    tecs: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap5'],
    repo: 'https://github.com/npminit-dev/BSLandingPage.git'
  },
  {
    name: 'Football teams CRUD',
    info: 'CRUD de equipos de fútbol con React y Bootstrap5',
    cover: 'https://i.ibb.co/GJzRpjC/CRUDBS5.webp',
    thumbnail: 'https://i.ibb.co/Jk753ZR/CRUDBS5-tn.webp',
    link: 'https://melodious-licorice-c983f3.netlify.app/',
    tecs: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap5'],
    repo: 'https://github.com/npminit-dev/BS5-React-CRUD.git'
  },
  {
    name: 'IndexedDB CRUD',
    info: 'CRUD con VainillaJS y IndexedDB',
    cover: 'https://i.ibb.co/ZGvBy74/Indexed-DBCRUD.webp',
    thumbnail: 'https://i.ibb.co/S5XQpnZ/Indexed-DBCRUD-tn.webp',
    link: 'https://fluffy-snickerdoodle-8f13a1.netlify.app/',
    tecs: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/npminit-dev/Vainilla-CRUD.git'
  },
  {
    name: 'RealTime Chat',
    info: 'Chat en tiempo real entre 2 pestañas con Vainilla y Service Workers',
    cover: 'https://i.ibb.co/fGn6skd/Real-Time-Chat.webp',
    thumbnail: 'https://i.ibb.co/rs0W6y1/Real-Time-Chat-tn.webp',
    link: 'https://kaleidoscopic-muffin-fe5fc9.netlify.app/',
    tecs: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/npminit-dev/RealTimeChat.git'
  }
]

export const tecs = [
  {
    name: 'HTML5',
    icon: <BiLogoHtml5 color='#f64a1d' title='HTML5' className='h-6 w-6 mx-1' key={uuid()}/>
  },
  {
    name: 'CSS3',
    icon: <BiLogoCss3 color='#254bdc' title='CSS3' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'NodeJS',
    icon: <BiLogoNodejs color='#87cf30' title='NodeJS' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'JavaScript',
    icon: <BiLogoJavascript color='#e6a42d' title='JavaScript' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'TypeScript',
    icon: <BiLogoTypescript color='#377cc8' title='TypeScript' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'React',
    icon: <BiLogoReact color='#1ba1cc' title='React' className='h-6 w-6 mx-1 animate-[spin_4500ms_linear_infinite]' key={uuid()} />,
  },
  {
    name: 'Bootstrap5',
    icon: <FaBootstrap color='#7b18f7' title='Boostrap5' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'Ant-Design',
    icon: <AiOutlineAntDesign color='#f6293b' title='Ant-Design' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'Jest',
    icon: <SiJest color='#8f1844' title='Jest' className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'Expo Go',
    icon: <SiExpo color='#333' title='Expo'  className='h-6 w-6 mx-1' key={uuid()} />
  },
  {
    name: 'React Native',
    icon: <TbBrandReactNative color='#1977f2' title='React-Native' className='h-6 w-6 mx-1 animate-[spin_4500ms_linear_infinite]' key={uuid()} />
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb color='#116149' title='MongoDB' className='h-6 w-6 mx-1' key={uuid()} />
  }
]

export const projectswithicons: ProjectProps[] = projectsdata.map(project => {
  let projectWithIcon = { ...project }
  projectWithIcon.tecs = projectWithIcon.tecs.map(tecname => tecs.find(tec => tec.name === tecname)?.icon)
  return projectWithIcon
})