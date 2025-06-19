"use client"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Linkedin, Calendar, Building, Github } from "lucide-react"

interface CVPrintableProps {
  language: "fr" | "en"
}

export default function CVPrintable({ language }: CVPrintableProps) {
  const content = {
    fr: {
      title: "Fullstack NextJS/React/NodeJS Developer",
      summary: "Résumé",
      summaryText:
        "Ingénieur fullstack avec plus de 10 ans d'expérience, spécialisé en JavaScript avec une expertise approfondie en développement frontend. Expérience dans diverses entreprises et industries, avec succès dans la direction de projets technologiques et la gestion d'équipes. Expertise dans la création de fonctionnalités pour plateformes de cryptomonnaie, applications de jeux, et applications web robustes.",
      skills: "Compétences",
      experience: "Expérience",
      education: "Formation",
      notableExperience: "Expérience Notable",
      googleSummerOfCode:
        "Participation au programme Google Summer of Code en tant que développeur logiciel, contribuant à des projets open source.",
      experiences: [
        {
          title: "Lead Fullstack Developer",
          company: "Memorisely",
          location: "London, United Kingdom",
          period: "2024 - Présent",
          description:
            "Direction technique d'une équipe de développement pour construire et améliorer des fonctionnalités clés de la plateforme d'apprentissage UX/UI. Développement d'un Job Board complet avec des centaines de cas d'usage. Architecture avec TypeScript, Tailwind CSS et Next.js. Mise en place de bonnes pratiques pour la sécurité, les performances et la scalabilité.",
        },
        {
          title: "Full Stack Engineer",
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
            "Maintenance, refactorisation et ajout de nouvelles fonctionnalités à l'application web avec React.js et diverses librairies.",
        },
      ],
    },
    en: {
      title: "Fullstack NextJS/React/NodeJS Developer",
      summary: "Summary",
      summaryText:
        "Fullstack engineer with over 10 years of experience, specializing in JavaScript with deep expertise in frontend development. Experience across various companies and industries, with success in leading tech projects and managing teams. Expertise in creating features for cryptocurrency platforms, gaming applications, and robust web applications.",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      notableExperience: "Notable Experience",
      googleSummerOfCode:
        "Participated in Google Summer of Code program as a software developer, contributing to open source projects.",
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
    "Supabase",
    "Express.js",
    "REST APIs",
    "PostgreSQL",
    "GraphQL",
    "MongoDB",
    "Web3",
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">YANN PRAVOSSOUDOVITCH</h1>
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
            linkedin.com/in/yann-pravossoudovitch-55883881
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
        <p className="text-gray-700 leading-relaxed">{t.summaryText}</p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t.skills}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
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
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-gray-600 flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500 flex items-center gap-1 mt-1 md:mt-0">
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
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t.education}</h3>
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">Master of Science (MS), Computer Science</h4>
            <p className="text-gray-600 text-sm">École polytechnique universitaire de Montpellier • 2009 - 2013</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">DUT, Computer Science</h4>
            <p className="text-gray-600 text-sm">IUT Montpellier • 2007 - 2009</p>
          </div>
        </div>
      </section>

      {/* Notable Experience */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase tracking-wide">{t.notableExperience}</h3>
        <div className="text-sm text-gray-700">
          <p className="mb-2">
            <strong>Google Summer of Code</strong> - Software Developer (2012) - Montpellier, France
          </p>
          <p>{t.googleSummerOfCode}</p>
        </div>
      </section>
    </div>
  )
}
