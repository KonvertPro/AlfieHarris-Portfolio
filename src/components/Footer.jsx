import React from "react";
import { navLinks } from "../constants";
import { github } from "../assets";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/10 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-black font-semibold text-lg">AH</div>

        <ul className="flex flex-wrap items-center justify-center gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="px-3 py-2 rounded-md text-black hover:bg-black/5 transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>


        <div className="flex items-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-80"
          >
            <img src={github} alt="GitHub" className="w-8 h-8 object-contain invert" />
          </a>
          <a
            href="https://www.linkedin.com/in/alfieharris1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-black"
              aria-hidden="true"
            >
              <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM7.5 8H12v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.6c0-1.81-.03-4.14-2.52-4.14-2.53 0-2.92 1.98-2.92 4.01V24h-5z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-black/60 text-sm pb-6">
        © {new Date().getFullYear()} Alfie Harris. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
