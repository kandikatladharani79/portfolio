const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-400">
          Dharani
        </h1>

        <ul className="flex gap-8 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-blue-400">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;