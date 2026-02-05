import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Rakesh G</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#experience" className="hover:text-blue-400">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3 px-6">
          <a href="#experience" className="hover:text-blue-400">
            Experience
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
        </div>
      )}
    </nav>
  );
}
