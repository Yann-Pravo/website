import {
  Briefcase,
  MapPin,
  Mail,
  Linkedin,
  Github,
  GraduationCap,
} from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div className="bg-white shadow-lg p-8 rounded-lg max-w-3xl mx-auto text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center pb-6 border-b border-gray-300">
        <h1 className="text-3xl font-bold">Yann Pravossoudovitch</h1>
        <p className="text-lg text-gray-600 mt-2 flex items-center justify-center">
          FULL STACK WEB DEVELOPER <MapPin className="ml-2" size={18} /> FRANCE
        </p>
      </header>

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-8">
          {/* Details */}
          <section>
            <h2 className="text-lg font-semibold mb-2">◦ DETAILS ◦</h2>
            <p>France</p>
            <p className="flex items-center mt-1">
              <Mail className="mr-2" size={16} /> yann.pravo@gmail.com
            </p>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-lg font-semibold mb-2">◦ LINKS ◦</h2>
            <a
              href="https://www.linkedin.com/in/yann-pravossoudovitch-55883881"
              className="flex items-center text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2" size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/Yann-Pravo"
              className="flex items-center text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2" size={16} /> GitHub
            </a>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-lg font-semibold mb-2">◦ SKILLS ◦</h2>
            <ul className="list-disc list-inside space-y-1 mt-1">
              {[
                "User Experience",
                "Data visualization",
                "REST APIs",
                "Relational databases",
                "Continuous deployment",
                "Communication",
                "Git",
              ].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="lg:w-2/3 space-y-8">
          {/* Profile */}
          <section>
            <h2 className="text-lg font-semibold mb-2">PROFILE</h2>
            <p>
              I'm a fullstack engineer with over 10 years of experience,
              specializing in React.js, Next.js, Node.js, and Typescript with a
              deep expertise in frontend development.
            </p>
          </section>

          {/* Employment History with Vertical Timeline */}
          <section>
            <h2 className="text-lg font-semibold mb-2">EMPLOYMENT HISTORY</h2>
            <ul
              role="list"
              className="space-y-8 relative border-l-2 border-gray-200 pl-8"
            >
              {[
                {
                  role: "Freelance, Fullstack developer at X-Studio, France",
                  date: "2024 - 2024",
                  description:
                    "Built scalable, efficient web applications using Next.js, TypeScript, and Tailwind.",
                },
                {
                  role: "Freelance, Senior Frontend developer at Mass, France",
                  date: "2023",
                  description:
                    "Developed functionalities such as buy, sell, and bridge between cryptocurrencies.",
                },
                {
                  role: "Senior Frontend developer at Rapsodie, France",
                  date: "2023",
                  description:
                    "Developed new functionalities, refactoring code, ensuring seamless integration.",
                },
                {
                  role: "Lead Frontend Developer at Block Earner, Australia",
                  date: "2021 - 2023",
                  description:
                    "Created cryptocurrency web application and led frontend team.",
                },
                {
                  role: "Frontend developer at Soundcharts, France",
                  date: "2019 - 2021",
                  description:
                    "Maintenance, refactoring, and developing new features at the web app.",
                },
                {
                  role: "Lead frontend developer at Adomik, France",
                  date: "2013 - 2018",
                  description:
                    "Started as an intern, led frontend app development using React/Redux.",
                },
              ].map((job, index) => (
                <li key={index} className="relative">
                  <div className="absolute -left-8 top-1 flex items-center justify-center h-4 w-4 rounded-full bg-white border border-gray-300">
                    <Briefcase size={12} className="text-gray-600" />
                  </div>
                  <h3 className="font-semibold">{job.role}</h3>
                  <p className="text-gray-600 text-sm">{job.date}</p>
                  <p className="mt-1">{job.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold mb-2">EDUCATION</h2>
            <div className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-8 top-1 flex items-center justify-center h-4 w-4 rounded-full bg-white border border-gray-300">
                <GraduationCap size={12} className="text-gray-600" />
              </div>
              <p className="font-semibold">
                Master of Science, Ecole polytechnique universitaire de
                Montpellier, France
              </p>
              <p className="text-gray-600 text-sm">2009 - 2013</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
