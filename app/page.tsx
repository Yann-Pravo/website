"use client"

import { useState, createContext, useContext } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  MapPin,
  Linkedin,
  Download,
  ExternalLink,
  Calendar,
  Building,
  GraduationCap,
  Code,
  Printer,
  Github,
  Languages,
} from "lucide-react"
import Link from "next/link"
import CVPrintable from "./components/cv-printable"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Navigation
    about: "À propos",
    experience: "Expérience",
    skills: "Compétences",
    contact: "Contact",
    printCV: "Imprimer CV",

    // Hero
    title: "Fullstack NextJS/Typescript/NodeJS Developer",
    contactMe: "Me contacter",
    downloadCV: "Télécharger CV",

    // About
    aboutTitle: "À propos",
    aboutText1:
      "Je suis un ingénieur fullstack avec plus de 10 ans d'expérience, spécialisé en JavaScript avec une expertise approfondie en développement frontend. Tout au long de ma carrière, j'ai eu l'opportunité de travailler dans diverses entreprises et industries, me permettant de m'adapter facilement à tout projet.",
    aboutText2:
      "J'ai dirigé avec succès des projets technologiques et géré de petites équipes pour développer des applications exceptionnelles. Mon expérience inclut la création de fonctionnalités essentielles pour des plateformes de cryptomonnaie, la refactorisation et l'amélioration d'applications de jeux, et la construction d'applications web robustes à partir de zéro.",

    // Experience
    experienceTitle: "Expérience",

    // Skills
    skillsTitle: "Compétences",
    technologiesTools: "Technologies & Outils",

    // Education
    educationTitle: "Formation",
    masterCS: "Master of Science (MS), Computer Science",
    dutCS: "DUT, Computer Science",

    // Contact
    contactTitle: "Contact",
    linkedinProfile: "Profil LinkedIn",
    githubProfile: "Profil GitHub",
    printMyCV: "Imprimer mon CV",

    // Footer
    allRightsReserved: "Tous droits réservés.",
  },
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
    printCV: "Print resume",

    // Hero
    title: "Fullstack NextJS/Typescript/NodeJS Developer",
    contactMe: "Contact me",
    downloadCV: "Download CV",

    // About
    aboutTitle: "About",
    aboutText1:
      "I'm a fullstack engineer with over 10 years of experience, specializing in JavaScript with deep expertise in frontend development. Throughout my career, I've had the opportunity to work in various companies and industries, allowing me to adapt to any project with ease.",
    aboutText2:
      "I've successfully led tech projects and managed small teams to develop outstanding applications. My experience includes creating essential features for cryptocurrency platforms, refactoring and enhancing gaming applications, and building robust web applications from scratch.",

    // Experience
    experienceTitle: "Experience",

    // Skills
    skillsTitle: "Skills",
    technologiesTools: "Technologies & Tools",

    // Education
    educationTitle: "Education",
    masterCS: "Master of Science (MS), Computer Science",
    dutCS: "DUT, Computer Science",

    // Contact
    contactTitle: "Contact",
    linkedinProfile: "LinkedIn Profile",
    githubProfile: "GitHub Profile",
    printMyCV: "Print my CV",

    // Footer
    allRightsReserved: "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("fr")
  const [showPrintableCV, setShowPrintableCV] = useState(false)

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
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

  const experiences = {
    fr: [
      {
        title: "Lead Fullstack Developer",
        company: "Memorisely",
        location: "London, United Kingdom",
        period: "2024 - Présent",
        description:
          "Direction technique d'une équipe de développement pour construire et améliorer des fonctionnalités clés de la plateforme d'apprentissage UX/UI.",
        highlights: [
          "Développement d'un Job Board complet avec des centaines de cas d'usage livrés en quelques mois",
          "Architecture et implémentation avec TypeScript, Tailwind CSS et Next.js (Server Actions, formulaires, validations)",
          "Mise en place de bonnes pratiques pour améliorer la sécurité, les performances et la scalabilité",
          "Mentorat de l'équipe et partage d'expertise technique",
        ],
      },
      {
        title: "Full Stack Engineer",
        company: "X-Studio",
        location: "Paris, France",
        period: "2024",
        description:
          "Développeur fullstack au sein d'un collectif d'experts freelances spécialisés dans le développement web moderne.",
        highlights: [
          "Développement d'applications web scalables avec Next.js, TypeScript et Tailwind CSS",
          "Intégration de bases de données PostgreSQL via Prisma et Supabase",
          "Déploiement et optimisation sur Vercel",
          "Collaboration dans un environnement freelance innovant et autonome",
        ],
      },
      {
        title: "Senior Frontend Developer",
        company: "Mass",
        location: "Paris, France",
        period: "2023",
        description: "Développement et amélioration des fonctionnalités d'une plateforme de cryptomonnaie innovante.",
        highlights: [
          "Création d'interfaces utilisateur fluides et responsives avec React.js, TypeScript et TailwindCSS",
          "Collaboration avec l'équipe backend pour l'intégration d'APIs Express.js",
          "Résolution de bugs critiques et optimisation des performances",
          "Amélioration de l'expérience utilisateur sur une plateforme financière complexe",
        ],
      },
      {
        title: "Senior Frontend Developer",
        company: "Rapsodie",
        location: "Paris, France",
        period: "2023",
        description:
          "Amélioration d'une plateforme de jeux en développant de nouvelles fonctionnalités et en refactorisant le code existant.",
        highlights: [
          "Développement de fonctionnalités gaming : onboarding, système de ligues, chat en temps réel",
          "Intégration d'APIs REST en collaboration étroite avec l'équipe backend",
          "Collaboration avec l'équipe design pour l'implémentation d'animations et d'interfaces engageantes",
          "Refactorisation du code legacy pour améliorer les performances et la maintenabilité",
          "Participation au processus de déploiement sur les app stores",
        ],
      },
      {
        title: "Senior Frontend Developer",
        company: "Block Earner",
        location: "Sydney, Australia",
        period: "2021 - 2023",
        description:
          "Construction from scratch d'une application web de cryptomonnaie et direction d'une équipe frontend.",
        highlights: [
          "Développement complet d'une plateforme crypto avec React.js, TypeScript, Axios et React Query",
          "Création du site vitrine avec Next.js pour un SEO optimal",
          "Recrutement et management d'une équipe frontend talentueuse",
          "Intégration d'APIs REST et WebSocket pour des fonctionnalités temps réel",
          "Développement de fonctionnalités DeFi critiques (achat, vente, staking)",
          "Coordination inter-équipes pour aligner les objectifs techniques et business",
        ],
      },
    ],
    en: [
      {
        title: "Lead Fullstack Developer",
        company: "Memorisely",
        location: "London, United Kingdom",
        period: "2024 - Present",
        description:
          "Leading technical development team to build and enhance key features of the UX/UI learning platform.",
        highlights: [
          "Built comprehensive Job Board with hundreds of use cases delivered within months",
          "Architected and implemented solutions using TypeScript, Tailwind CSS, and Next.js (Server Actions, forms, validations)",
          "Established best practices to improve security, performance, and scalability",
          "Mentored team members and shared technical expertise",
        ],
      },
      {
        title: "Full Stack Engineer",
        company: "X-Studio",
        location: "Paris, France",
        period: "2024",
        description:
          "Fullstack developer within a collective of freelance experts specialized in modern web development.",
        highlights: [
          "Built scalable web applications using Next.js, TypeScript, and Tailwind CSS",
          "Integrated PostgreSQL databases via Prisma and Supabase",
          "Deployed and optimized applications on Vercel",
          "Collaborated in an innovative and autonomous freelance environment",
        ],
      },
      {
        title: "Senior Frontend Developer",
        company: "Mass",
        location: "Paris, France",
        period: "2023",
        description: "Developed and enhanced features for an innovative cryptocurrency platform.",
        highlights: [
          "Created smooth and responsive user interfaces using React.js, TypeScript, and TailwindCSS",
          "Collaborated with backend team for Express.js API integration",
          "Resolved critical bugs and optimized performance",
          "Enhanced user experience on a complex financial platform",
        ],
      },
      {
        title: "Senior Frontend Developer",
        company: "Rapsodie",
        location: "Paris, France",
        period: "2023",
        description: "Enhanced gaming platform by developing new features and refactoring existing codebase.",
        highlights: [
          "Developed gaming features: onboarding, league system, real-time chat",
          "Integrated REST APIs in close collaboration with backend team",
          "Worked with design team to implement engaging animations and interfaces",
          "Refactored legacy code to improve performance and maintainability",
          "Participated in app store deployment processes",
        ],
      },
      {
        title: "Senior Frontend Developer",
        company: "Block Earner",
        location: "Sydney, Australia",
        period: "2021 - 2023",
        description: "Built cryptocurrency web application from scratch and led a frontend team.",
        highlights: [
          "Developed complete crypto platform using React.js, TypeScript, Axios, and React Query",
          "Created marketing website with Next.js for optimal SEO",
          "Recruited and managed a talented frontend team",
          "Integrated REST and WebSocket APIs for real-time features",
          "Built critical DeFi functionalities (buy, sell, staking)",
          "Coordinated cross-team efforts to align technical and business objectives",
        ],
      },
    ],
  }

  const handlePrintCV = () => {
    setShowPrintableCV(true)
    setTimeout(() => {
      window.print()
      setShowPrintableCV(false)
    }, 100)
  }

  if (showPrintableCV) {
    return <CVPrintable language={language} />
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <div className="font-bold text-xl text-slate-800">YP</div>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t("about")}
                </a>
                <a href="#experience" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t("experience")}
                </a>
                <a href="#skills" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t("skills")}
                </a>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  {t("contact")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                  className="flex items-center gap-1"
                >
                  <Languages className="w-4 h-4" />
                  {language === "fr" ? "EN" : "FR"}
                </Button>
                <Button onClick={handlePrintCV} variant="outline" size="sm">
                  <Printer className="w-4 h-4 mr-2" />
                  {t("printCV")}
                </Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Yann Pravossoudovitch</h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12">{t("title")}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">
                    <Mail className="w-5 h-5 mr-2" />
                    {t("contactMe")}
                  </a>
                </Button>
                <Button variant="outline" size="lg" onClick={handlePrintCV}>
                  <Download className="w-5 h-5 mr-2" />
                  {t("downloadCV")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t("aboutTitle")}</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">{t("aboutText1")}</p>
                  <p className="text-lg text-slate-600 leading-relaxed">{t("aboutText2")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t("experienceTitle")}</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {experiences[language].map((exp, index) => {
                const companyUrls = {
                  Memorisely: "https://memorisely.com/",
                  "X-Studio": "https://x-studio.fr/",
                  Mass: "https://mass.money/",
                  Rapsodie: "https://apps.apple.com/fr/app/rapsodie-jeu-rap-label-manager/id1572281230",
                  "Block Earner": "https://blockearner.com.au/",
                  Soundcharts: "https://soundcharts.com/",
                }

                const companyImages = {
                  Memorisely: "/memorisely.avif?height=400&width=800&text=UX/UI+Learning+Platform",
                  "X-Studio": "/xstudio.png?height=400&width=800&text=Web+Development+Studio",
                  Mass: "/mass.png?height=400&width=800&text=Cryptocurrency+Platform",
                  Rapsodie: "/rapsodie.png?height=400&width=800&text=Gaming+Platform",
                  "Block Earner": "/blockearner.png?height=400&width=800&text=Crypto+Trading+Platform",
                  Soundcharts: "/soundcharts.png?height=400&width=800&text=Music+Analytics+Platform",
                }

                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden relative"
                    onClick={() => window.open(companyUrls[exp.company as keyof typeof companyUrls], "_blank")}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${companyImages[exp.company as keyof typeof companyImages]}')`,
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/60 backdrop-blur-[1px]" />

                    {/* Content */}
                    <div className="relative z-10">
                      <CardHeader className="text-white">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <CardTitle className="text-xl text-white group-hover:text-blue-200 transition-colors">
                              {exp.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 text-base text-slate-200">
                              <Building className="w-4 h-4" />
                              {exp.company} • {exp.location}
                            </CardDescription>
                          </div>
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1 w-fit bg-white/20 text-white border-white/30"
                          >
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="text-white">
                        <p className="text-slate-100 mb-4 drop-shadow-sm">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-200">
                              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full mt-2 flex-shrink-0 shadow-sm" />
                              <span className="drop-shadow-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Click indicator */}
                        <div className="mt-4 flex items-center gap-2 text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">{language === "fr" ? "Visiter le site" : "Visit website"}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t("skillsTitle")}</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {t("technologiesTools")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t("educationTitle")}</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {t("masterCS")}
                  </CardTitle>
                  <CardDescription>École polytechnique universitaire de Montpellier • 2009 - 2013</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {t("dutCS")}
                  </CardTitle>
                  <CardDescription>IUT Montpellier • 2007 - 2009</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t("contactTitle")}</h2>
            <div className="max-w-2xl mx-auto">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-slate-400" />
                      <Link
                        href="mailto:yann.pravo@gmail.com"
                        className="text-slate-200 hover:text-white transition-colors"
                      >
                        yann.pravo (at) gmail.com
                      </Link>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="w-5 h-5 text-slate-400" />
                      <Link
                        href="https://www.linkedin.com/in/yann-pravossoudovitch-55883881/"
                        target="_blank"
                        className="text-slate-200 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {t("linkedinProfile")}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                    <div className="flex items-center gap-4">
                      <Github className="w-5 h-5 text-slate-400" />
                      <Link
                        href="https://github.com/Yann-Pravo"
                        target="_blank"
                        className="text-slate-200 hover:text-white transition-colors flex items-center gap-1"
                      >
                        {t("githubProfile")}
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                  <Separator className="my-8 bg-slate-700" />
                  <div className="text-center">
                    <Button onClick={handlePrintCV} variant="secondary" size="lg">
                      <Printer className="w-5 h-5 mr-2" />
                      {t("printMyCV")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-slate-950 text-slate-400">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Yann Pravossoudovitch. {t("allRightsReserved")}</p>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  )
}
