export const Footer = () => {
  return (
    <footer className="bg-primary-800 text-primary-300 px-8 md:px-16 lg:px-24 py-6">
      <div className="text-center text-sm text-primary-400">
        This portfolio is open source! Check out the code on{" "}
        <a
          href="https://github.com/natandreli/my-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary-300 transition-colors"
        >
          GitHub
        </a>
        .
      </div>
    </footer>
  );
};
