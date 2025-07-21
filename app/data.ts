type Project = {
  name: string
  description: string
  link: string
  image?: string // optional
  video?: string // optional
  id: string
}
type Education = {
  institute: string
  title: string
  start: string
  end: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Whey Better',
    description:
      'Designed to analyze and rate whey protein supplements based on their ingredients.',
    link: 'https://wheybetter.org/',
    image:
      '/wheybetterdashboard.png',
    id: 'project1',
  },
  {
    name: 'Drive-Assist',
    description:
      'Real-Time Object Detection with Raspberry Pi & Coral USB.',
    link: 'https://github.com/lakhwindersinghx/Drive-Assist',
    video:
      'https://res.cloudinary.com/dagivyfp3/video/upload/f_webm,vc_vp9/v1753110665/cropped_yfjpy2',
    id: 'project2',
  },
  {
    name: 'Asteroids',
    description:
      'The classic Asteroids game using Java and JavaFX',
    link: 'projects/asteroids',
    video:
      'https://res.cloudinary.com/dagivyfp3/video/upload/v1742679465/jyhl0vaq5b7npbp3ntax.mp4',
    id: 'project3',
  },
  
]
export const EDUCATION: Education[] = [
  {
    institute: 'Concordia University',
    title: 'MEng. electrical and computer engineering',
    start: '2022/09',
    end: '2024/12',
    id: 'study1',
  },
    {
      institute: 'Guru Nanak Dev Engineering College',
      title: 'BTech. Electrical engineering',
      start: '2017/04',
      end: '2021/5',
      id: 'study2',
    },
]


export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Kozano Seating Systems',
    title: 'Software Developer',
    start: '2021/06',
    end: '2022/08',
    id: 'work1',
  },
    {
    company: 'Redsens',
    title: 'Software Developer',
    start: '2025/02',
    end: 'present',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Accelerating Data-Driven Communication with gRPC and Redis Cloud',
    description: 'A study on achieving rapid, scalable data queries with gRPC and Redis Cloud.',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Event-Driven Microservices with Docker and CI/CD',
    description:
      ' A robust architecture ensuring real-time data synchronization, scalable deployments, and automated pipelines for seamless updates.',
    link: '/blog/rest-api',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/lakhwindersinghx',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lakhwindersinghx/',
  },
  {
    label: 'Youtube',
    link: 'https://www.youtube.com/@myardubots6513',
  },
]

export const EMAIL = 'singhlakhwinderx@gmail.com'
