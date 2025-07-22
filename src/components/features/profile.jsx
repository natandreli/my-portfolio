import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileDownload,
} from "@tabler/icons-react";

export const Profile = () => {
  return (
    <div
      className="bg-primary-800 px-6 md:px-20 text-primary-300 text-center py-16"
      id="home"
    >
      <img
        src="/images/profile.jpeg"
        alt="Profile"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-indigo-300">
            Natalia García
          </span>
          , Full-Stack Developer
        </h1>
        <p className="mt-6 text-lg text-primary-300">
          I design and develop scalable, user-focused web applications. Always
          looking to solve real problems with clean and efficient code.
        </p>
        <div className="mt-8 flex justify-center gap-5">
          <a
            href="https://github.com/natandreli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors"
            title="GitHub"
          >
            <IconBrandGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/natalia-andrea-garcia-rios/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 hover:text-primary-300 transition-colors"
            title="LinkedIn"
          >
            <IconBrandLinkedin size={24} />
          </a>
          <a
            href="mailto:ngarciarios2001@gmail.com"
            className="text-primary-400 hover:text-primary-300 transition-colors"
            title="Email"
          >
            <IconMail size={24} />
          </a>
          <a
            href="/files/natalia-garcia-cv.pdf"
            download
            className="text-primary-400 hover:text-primary-300 transition-colors"
            title="Download CV"
          >
            <IconFileDownload size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};
