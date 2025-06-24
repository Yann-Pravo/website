"use client"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Linkedin, Calendar, Building, Github, School } from "lucide-react"

interface CVPrintableProps {
  language: "fr" | "en"
}

export default function CVPrintable({ language }: CVPrintableProps) {
  const content = {
    fr: {
      title: "Développeur Fullstack React/Typescript/Node",
      summary: "Résumé",
      summaryText:
        "🖥 Développeur fullstack avec 10+ ans d'expérience, spécialisé dans l'écosystème React/Next.js et Typescript. J'ai dirigé le développement de plateformes cryptocurrency, d'applications gaming et de solutions fintech pour des startups internationales.",
      subText: "📈 Mon approche : combiner expertise technique et vision produit pour livrer des applications robustes et scalables. Expérience prouvée dans le recrutement et management d'équipes tech multiculturelles.",
      skills: "Stack principale",
      experience: "Expérience",
      education: "Formation",
      educations: [
        {
          title: "Ingénieur en informatique",
          diploma: "Polytech Montpellier - École polytechnique universitaire de Montpellier",
          location: "Montpellier, France",
          period: "2009 - 2013"
        },
        {
          title: "IUT informatique",
          diploma: "IUT Montpellier",
          location: "Montpellier, France",
          period: "2007 - 2009"
        }
      ],
      experiences: [
        {
          title: "Lead Fullstack Developer",
          company: "Memorisely",
          location: "London, United Kingdom",
          period: "2024 - Présent",
          description:
            "Direction technique d'une équipe de développement pour construire et améliorer des fonctionnalités clés de la plateforme d'apprentissage UX/UI. Développement d'un job board complet avec des centaines de cas d'usage. Architecture avec TypeScript, Tailwind CSS et Next.js. Mise en place de bonnes pratiques pour la sécurité, les performances et la scalabilité.",
        },
        {
          title: "Fullstack Engineer",
          company: "X-Studio",
          location: "Paris, France",
          period: "2024",
          description:
            "Développeur fullstack au sein d'un collectif d'experts freelances. Développement d'applications web scalables avec Next.js, TypeScript, Tailwind, Prisma et Supabase déployées sur Vercel. Focus sur la création d'un environnement freelance collaboratif et durable.",
        },
        {
          title: "Senior Frontend Developer",
          company: "Mass",
          location: "Paris, France",
          period: "2023",
          description:
            "Développement et amélioration des fonctionnalités d'une plateforme de cryptomonnaie avec React.js, TypeScript et TailwindCSS. Collaboration avec l'équipe backend pour l'intégration Express. Résolution de bugs et optimisation des performances.",
        },
        {
          title: "Senior Frontend Developer",
          company: "Rapsodie",
          location: "Paris, France",
          period: "2023",
          description:
            "Amélioration d'une plateforme de jeux avec développement de nouvelles fonctionnalités (onboarding, ligues, chat). Intégration d'APIs REST et collaboration avec l'équipe design pour une expérience utilisateur fluide.",
        },
        {
          title: "Senior Frontend Developer",
          company: "Block Earner",
          location: "Sydney, Australia",
          period: "2021 - 2023",
          description:
            "Construction d'une application web de cryptomonnaie from scratch. Recrutement et management d'équipe frontend. Développement de fonctionnalités DeFi critiques. Coordination entre équipes frontend et backend.",
        },
        {
          title: "Frontend Developer",
          company: "Soundcharts",
          location: "Paris, France",
          period: "2019 - 2021",
          description:
            "Maintenance, refactorisation et ajout de nouvelles fonctionnalités à l'application web avec React.js et diverses librairies de data visualisation.",
        },
        {
          title: "Frontend Developer",
          company: "Adomik",
          location: "Paris, France",
          period: "2013 - 2019",
          description:
            "J'ai commencé en tant que stagiaire et ai évolué vers un poste de lead frontend, où j'ai recruté une équipe de 4 développeurs et dirigé la refactorisation de l'application vers une stack moderne utilisant React.js, Redux et TypeScript.",
        },
      ],
    },
    en: {
      title: "Fullstack NextJS/React/NodeJS Developer",
      summary: "Summary",
      summaryText:
        "🖥 Fullstack developer with 10+ years of experience, specialized in React/Next.js ecosystem and Web3 technologies. I've led development of cryptocurrency platforms, gaming applications, and fintech solutions for international startups.",
      subText: "📈 My approach: combining technical expertise with product vision to deliver robust and scalable applications. Proven experience in recruiting and managing multicultural tech teams.",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      educations: [
        {
          title: "Master of Science (MS), Computer Science",
          diploma: "Polytech Montpellier - École polytechnique universitaire de Montpellier",
          location: "Montpellier, France",
          period: "2009 - 2013"
        },
        {
          title: "DUT, Computer Science",
          diploma: "IUT Montpellier",
          location: "Montpellier, France",
          period: "2007 - 2009"
        }
      ],
      experiences: [
        {
          title: "Lead Fullstack Developer",
          company: "Memorisely",
          location: "London, United Kingdom",
          period: "2024 - Present",
          description:
            "Leading technical development team to build and enhance key features of the UX/UI learning platform. Built comprehensive Job Board with hundreds of use cases. Architected solutions using TypeScript, Tailwind CSS, and Next.js. Established best practices for security, performance, and scalability.",
        },
        {
          title: "Full Stack Engineer",
          company: "X-Studio",
          location: "Paris, France",
          period: "2024",
          description:
            "Fullstack developer within a collective of freelance experts. Built scalable web applications using Next.js, TypeScript, Tailwind, Prisma, and Supabase deployed on Vercel. Focused on creating sustainable and collaborative freelancing environment.",
        },
        {
          title: "Senior Frontend Developer",
          company: "Mass",
          location: "Paris, France",
          period: "2023",
          description:
            "Developed and enhanced cryptocurrency platform features using React.js, TypeScript, and TailwindCSS. Collaborated with backend team for Express integration. Resolved bugs and optimized performance for optimal user experience.",
        },
        {
          title: "Senior Frontend Developer",
          company: "Rapsodie",
          location: "Paris, France",
          period: "2023",
          description:
            "Enhanced gaming platform by developing new features (onboarding, leagues, chat). Integrated REST APIs and collaborated with design team for seamless user experience.",
        },
        {
          title: "Senior Frontend Developer",
          company: "Block Earner",
          location: "Sydney, Australia",
          period: "2021 - 2023",
          description:
            "Built cryptocurrency web application from scratch. Recruited and managed frontend team. Developed critical DeFi functionalities. Coordinated between frontend and backend teams.",
        },
        {
          title: "Frontend Developer",
          company: "Soundcharts",
          location: "Paris, France",
          period: "2019 - 2021",
          description:
            "Maintained, refactored and added new features to the web application using React.js and multiple libraries.",
        },
        {
          title: "Frontend Developer",
          company: "Adomik",
          location: "Paris, France",
          period: "2013 - 2019",
          description:
            "Began as an intern and progressed to frontend lead, where I recruited a team of 4 developers and led the refactoring of the application to a modern stack using React.js, Redux, and TypeScript.",
        },
      ],
    },
  }

  const skills = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Vercel",
    "Prisma",
    "PostgreSQL",
  ]

  const t = content[language]

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black print:p-4 print:max-w-none">
      <style jsx global>{`
        @media print {
          body { margin: 0; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2 mt-4">YANN PRAVOSSOUDOVITCH</h1>
        <h2 className="text-xl text-gray-600 mb-4">{t.title}</h2>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            yann.pravo@gmail.com
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Marseille, France
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            https://lked.in/yannp
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            github.com/Yann-Pravo
          </div>
        </div>
      </div>

      <Separator className="mb-6" />

      {/* Summary */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t.summary}</h3>
        <div className="space-y-2">
        <p className="text-gray-700 leading-relaxed">{t.summaryText}</p>
        <p className="text-gray-700 leading-relaxed">{t.subText}</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t.skills}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 print:bg-gray-100 text-gray-700 text-sm rounded"
              style={{
                printColorAdjust: 'exact',
                WebkitPrintColorAdjust: 'exact'
              }}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">{t.experience}</h3>
        <div className="space-y-6">
          {t.experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div className="flex space-x-4">
                  <h4 className="font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-600 flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">{t.education}</h3>
        <div className="space-y-6">
          {t.educations.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <div className="flex space-x-4">
                  <h4 className="font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-600 flex items-center gap-1">
                    <School className="w-3 h-3" />
                    {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 flex items-center gap-1 mt-1 sm:mt-0">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.diploma}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
