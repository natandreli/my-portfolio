export const Navbar = () => {
  return (
    <nav className="bg-primary-900 text-primary-300 px-8 md:px-16 lg:px-24">
      <div className="container py-6 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">
          Natalia García
        </div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-primary-200 transition-colors">
            Home
          </a>
          <a href="#about-me" className="hover:text-primary-200 transition-colors">
            About Me
          </a>
          <a href="#experience" className="hover:text-primary-200 transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-primary-200 transition-colors">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};
