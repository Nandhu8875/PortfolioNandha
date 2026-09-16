export interface Social {
  github: string
  linkedin: string
  email: string
  phone: string
  resume: string
}

export interface SpecItem { label: string; value: string }

export interface Profile {
  name: string
  shortName: string
  role: string
  tagline: string
  specialization: string
  location: string
  availability: string
  photo: string
  bio: string[]
  social: Social
  specStrip: SpecItem[]
}

export interface SkillGroup { name: string; items: string[] }

export interface Role {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
}

export interface Media { src: string; caption: string }

export interface Project {
  id: string
  title: string
  subtitle: string
  year: string
  context: string
  description: string
  stack: string[]
  highlights: string[]
  media: Media[]
  link: string
  highlight: boolean
}

export interface Recommendation {
  quote: string
  note: string
  name: string
  role: string
  date: string
  url?: string
}

export interface EducationItem {
  title: string
  org: string
  period: string
  note: string
  url?: string
}

export interface Portfolio {
  profile: Profile
  skills: SkillGroup[]
  experience: Role[]
  projects: Project[]
  recommendation: Recommendation
  education: EducationItem[]
}
