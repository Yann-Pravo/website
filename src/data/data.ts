import AdomikDesc from './jobs/adomik.mdx'
import SoundchartsDesc from './jobs/soundcharts.mdx'
import BlockEarnerDesc from './jobs/blockearner.mdx'
import RapsodieDesc from './jobs/rapsodie.mdx'
import MassDesc from './jobs/mass.mdx'
import XStudioDesc from './jobs/xstudio.mdx'
import MemoriselyDesc from './jobs/memorisely.mdx'
import ProfileDesc from "./profile.mdx"

export const JOBS = [
  {
    name: "Memorisely",
    role: "Senior developer at",
    location: "United-Kingdom",
    type: "Freelance",
    date: "2025",
    description: MemoriselyDesc,
    short: "Built critical features such as Job Board using Next.js, TypeScript, Stripe, forms and validation.",
    website: "https://www.memorisely.com/"
  },
  {
    name: "X-Studio",
    role: "Fullstack developer at",
    location: "France",
    type: "Freelance",
    date: "2024",
    description: XStudioDesc,
    short: "Built scalable, efficient web applications using Next.js, TypeScript, and Tailwind.",
    website: "https://www.x-studio.fr/"
  },
  {
    name: "Mass",
    role: "Senior Frontend developer at",
    location: "France",
    type: "Freelance",
    date: "2023",
    description: MassDesc,
    short: "Developed functionalities such as buy, sell, and bridge between cryptocurrencies.",
    website: "https://mass.money/"
  },
  {
    name: "Rapsodie",
    role: "Senior Frontend developer at",
    location: "France",
    type: "Freelance",
    date: "2023",
    description: RapsodieDesc,
    short: "Developed new functionalities, refactoring code, ensuring seamless integration.",
    website: "https://rapsodie.co/"
  },
  {
    name: "Block Earner",
    role: "Lead Frontend Developer at",
    location: "Australia",
    type: "Freelance",
    date: "2021 - 2023",
    description: BlockEarnerDesc,
    short: "Created cryptocurrency web application and led frontend team.",
    website: "https://blockearner.com.au/"
  },
  {
    name: "Soundcharts",
    role: "Frontend developer at",
    location: "France",
    date: "2019 - 2021",
    description: SoundchartsDesc,
    short: "Maintenance, refactoring, and developing new features at the web app.",
    website: "https://soundcharts.com/"
  },
  {
    name: "Adomik",
    role: "Lead frontend developer at",
    location: "France",
    date: "2013 - 2018",
    description: AdomikDesc,
    short: "Started as an intern, led frontend app development using React/Redux.",
    website: "https://www.adomik.com/"
  },
]

export const PROFILE = {
  short: "I'm a fullstack engineer with over 10 years of experience, specializing in React.js, Next.js, Node.js, and Typescript with a deep expertise in frontend development.",
  description: ProfileDesc
}