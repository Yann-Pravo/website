'use client'

import classNames from "classnames";
import React from "react";
import { JOBS } from "../data/data";
import ProfileDesc from "../data/profile.mdx"
import { AcademicCapIcon, AtSymbolIcon, BriefcaseIcon, EnvelopeIcon, MapPinIcon, UserIcon } from "@heroicons/react/16/solid";

const Home = () => {
  return (
    <div id="printable-content" className="bg-white lg:shadow-lg p-8 rounded-lg lg:max-w-5xl mx-auto text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center pb-6">
        <h1 className="uppercase text-2xl font-bold">Yann Pravossoudovitch</h1>
        <p className="mt-2 flex items-center justify-center">
          FULL STACK WEB DEVELOPER
        </p>
      </header>

      <div className="mt-6 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="flex justify-center space-x-16 lg:space-x-0 lg:block lg:space-y-8 px-4">
          {/* Details */}
          <section className="flex flex-col items-center">
            <h2 className="font-semibold mb-2">◦ DETAILS ◦</h2>
            <p className="flex items-center mt-1">
            <EnvelopeIcon className="mr-2 size-4" /> yann.pravo<AtSymbolIcon className="size-4" />gmail.com
            </p>
            <p className="flex items-center"><MapPinIcon className="ml-4 mr-0.5 size-4" />France</p>
          </section>

          {/* Links */}
          <section className="flex flex-col items-center">
            <h2 className="font-semibold mb-2">◦ LINKS ◦</h2>
            <a
              href="https://www.linkedin.com/in/yann-pravossoudovitch-55883881"
              className="flex items-center underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Yann-Pravo"
              className="flex items-center underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </section>

          {/* Skills */}
          <section className="hidden lg:flex flex-col items-center">
            <h2 className="font-semibold mb-2">◦ SKILLS ◦</h2>
            <ul className="space-y-1 mt-1 list-none flex flex-col items-center">
              {[
                "Continuous deployment",
                "Relational databases",
                "Data visualization",
                "User Experience",
                "Communication",
                "REST APIs",
                "Git",
              ].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="lg:flex-grow space-y-8">
          {/* Profile */}
          <section>
            <h2 className="font-semibold mb-2 flex items-center"><UserIcon className="mr-2 size-4" />PROFILE</h2>
            <div className="relative flex gap-x-4">
              <div
                className="absolute left-0 top-0 flex w-6 bottom-1 justify-center"
              >
                <div className="w-px bg-gray-200" />
              </div>
              <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
              </div>
              <div className="space-y-2">
                <ProfileDesc />
              </div>
            </div>
          </section>

          {/* Employment History with Vertical Timeline */}
          <section>
            <h2 className="font-semibold mb-2 flex items-center"><BriefcaseIcon className="mr-2 size-4" />EMPLOYMENT HISTORY</h2>
            <ul
              role="list"
              className="space-y-8"
            >
              {JOBS.map(({role, location, type, date, description: Description}, index) => (
                <li key={index} className="relative flex gap-x-4">
                  <div
                    className={classNames(
                      index === JOBS.length - 1 ? 'h-6' : '-bottom-6',
                      'absolute left-0 top-0 flex w-6 justify-center',
                    )}
                  >
                    <div className="w-px bg-gray-200" />
                  </div>
                  <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                    <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold">{role}</h3>
                      <div className="flex items-center ml-2 space-x-1 text-gray-600 text-sm">
                        {type && <p>{type}, </p>}
                        <p>{location}, </p>
                        <p>{date}</p>
                      </div>
                    </div>
                    <div className="mt-1 space-y-2 desc"><Description /></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Education */}
          <section>
            <h2 className="font-semibold mb-2 flex items-center"><AcademicCapIcon className="mr-2 size-4" />EDUCATION</h2>
            <div className="relative flex gap-x-4">
              <div
                className="absolute left-0 top-0 flex w-6 bottom-1 justify-center"
              >
                <div className="w-px bg-gray-200" />
              </div>
              <div className="relative flex size-6 flex-none items-center justify-center bg-white">
                <div className="size-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
              </div>
              <div>
                <p className="font-semibold">
                  Master of Science, Ecole polytechnique universitaire de
                  Montpellier, France
                </p>
                <p className="text-gray-600 text-sm">2009 - 2013</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
