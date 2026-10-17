
import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "React Router",
    "Git & GitHub",
  ];

  const journey = [
    {
      date: "01",
      title: "Frontend Development",
      type: "Learning & Building",
      description:
        "Learning to create modern, responsive websites using HTML, CSS, JavaScript and React.",
    },
    {
      date: "02",
      title: "React Projects",
      type: "Personal Projects",
      description:
        "Building interactive web applications using reusable components, React Router and Tailwind CSS.",
    },
    {
      date: "03",
      title: "Continuous Growth",
      type: "Currently Learning",
      description:
        "Improving my development skills, exploring API integration and learning new ways to build better web experiences.",
    },
  ];

  return (
    <section className="min-h-screen overflow-hidden bg-black px-5 py-12 text-white sm:px-10 md:px-16 lg:px-24">

      {/* Header */}
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="text-sm text-gray-400 transition hover:text-green-400"
        >
          ← Back to Home
        </Link>

        <div className="mt-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
            My Journey
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
            Experience
            <span className="text-green-400"> & Skills.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            My journey in web development is driven by curiosity,
            creativity, and a passion for building meaningful digital
            experiences. Every project helps me learn something new.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Technologies I Use
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm text-gray-200 transition hover:border-green-400 hover:bg-green-400/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Development Journey
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            What I've Been Working On
          </h2>

          <div className="mt-10 space-y-6">
            {journey.map((item) => (
              <div
                key={item.date}
                className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-green-400/50 sm:gap-8 sm:p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-400/30 bg-green-400/10 font-bold text-green-400">
                  {item.date}
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                    {item.type}
                  </p>

                  <h3 className="mt-2 text-xl font-bold transition group-hover:text-green-400 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 rounded-2xl border border-green-400/20 bg-green-400/[0.05] p-7 sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Always Learning.
            <span className="text-green-400"> Always Building.</span>
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-gray-400">
            My goal is to become a skilled developer by building
            useful projects, improving my problem-solving abilities,
            and exploring modern web technologies.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-lg bg-green-400 px-6 py-3 font-semibold text-black transition hover:bg-green-300"
          >
            Let's Connect ↗
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;

