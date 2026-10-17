
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="min-h-screen bg-black px-6 py-16 text-white sm:px-12 lg:px-20">
      <Link to="/" className="text-green-400 hover:text-green-300">
        ← Back to Home
      </Link>

      <div className="mx-auto mt-16 max-w-5xl">
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-green-400">
          Get to know me
        </p>

        <h1 className="text-4xl font-bold sm:text-6xl">
          About <span className="text-green-400">Me.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Hi, I'm Ashif, a passionate web developer who enjoys
          building modern, responsive, and user-friendly websites.
          I love turning ideas into clean and interactive web
          experiences using React and Tailwind CSS.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["01", "Frontend Development", "Building websites with HTML, CSS, JavaScript and React."],
            ["02", "Responsive Design", "Creating layouts that work on mobile, tablet and desktop."],
            ["03", "Continuous Learning", "Improving my skills by building projects and solving problems."]
          ].map(([number, title, description]) => (
            <div key={number}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-green-400">
              <span className="text-3xl font-bold text-green-400">
                {number}
              </span>
              <h2 className="mt-5 text-xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
