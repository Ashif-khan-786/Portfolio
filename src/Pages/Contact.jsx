
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href =
      `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#080c0e] px-5 py-12 text-white sm:px-10 lg:px-16">

      {/* Heading */}
      <div className="mb-12">
        <p className="font-semibold uppercase tracking-widest text-green-400">
          Get in Touch
        </p>

        <h1 className="mt-4 text-5xl font-bold sm:text-7xl">
          Contact <span className="text-green-400">Me.</span>
        </h1>

        <p className="mt-5 max-w-xl leading-7 text-gray-400">
          Have a project idea, a question, or just want to say hello?
          I'd love to hear from you. Feel free to contact me or send
          me a message.
        </p>
      </div>

      {/* Main Section */}
      <div className="grid gap-8 lg:grid-cols-2">

        {/* Contact Information */}
        <div className="space-y-5">

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="mt-2 text-green-400">
              Ashifkhan1746@gmail.com
            </p>
            <p className="mt-2 text-gray-400">
              Feel free to email me anytime.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="mt-2 text-green-400">
              +91 6202766177
            </p>
            <p className="mt-2 text-gray-400">
              Available for project discussions and collaboration.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 p-6">
            <h2 className="text-xl font-semibold">Noida</h2>
            <p className="mt-2 text-green-400">India</p>
            <p className="mt-2 text-gray-400">
              Open to remote opportunities.
            </p>
          </div>

          {/* Social Links */}
          <div className="pt-5">
            <h2 className="text-2xl font-bold">Follow Me</h2>
            <p className="mt-2 text-gray-400">
              Let's connect on social media.
            </p>

            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 hover:border-green-400 hover:text-green-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 hover:border-green-400 hover:text-green-400"
              >
                LinkedIn
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 hover:border-green-400 hover:text-green-400"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 p-6 sm:p-8"
        >
          <h2 className="text-2xl font-bold">
            Send Me a Message
          </h2>

          <p className="mt-3 text-gray-400">
            Fill out the form to prepare your message.
          </p>

          <label className="mt-6 block">Your Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="mt-2 w-full rounded-lg border border-white/10 bg-black p-3 outline-none focus:border-green-400"
          />

          <label className="mt-5 block">Your Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="mt-2 w-full rounded-lg border border-white/10 bg-black p-3 outline-none focus:border-green-400"
          />

          <label className="mt-5 block">Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-black p-3 outline-none focus:border-green-400"
          >
            <option value="">Choose a subject</option>
            <option value="Project Inquiry">Project Inquiry</option>
            <option value="Collaboration">Collaboration</option>
            <option value="General Message">General Message</option>
          </select>

          <label className="mt-5 block">Message *</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="5"
            placeholder="Write your message here..."
            className="mt-2 w-full rounded-lg border border-white/10 bg-black p-3 outline-none focus:border-green-400"
          />

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-green-400 p-4 font-semibold text-black hover:bg-green-300"
          >
            Send Message ↗
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 sm:flex-row">
        <h2 className="text-lg font-bold text-white">
          Ashif <span className="text-green-400">Khan</span>
        </h2>

        <p>
          © {new Date().getFullYear()} Ashif Khan. All rights reserved.
        </p>

        <a href="#" className="text-green-400 hover:text-green-300">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
};

export default Contact;
