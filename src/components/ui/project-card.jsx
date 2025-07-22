import { IconBrandGithub } from "@tabler/icons-react";

export const ProjectCard = ({
  title,
  year,
  description,
  technologies = [],
  repoUrl,
  videoUrl,
}) => {
  return (
    <div className="max-w-4xl mx-auto bg-primary-800 rounded-xl shadow-md p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-primary-300">{title}</h3>
        <span className="text-sm text-primary-400">{year}</span>
      </div>
      {(repoUrl || technologies.length > 0) && (
        <div className="flex items-center flex-wrap gap-2">
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 transition-colors"
              title="View Repository"
            >
              <IconBrandGithub size={20} />
            </a>
          )}
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-primary-700 text-primary-200 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <p className="text-primary-300 text-justify">{description}</p>

      {videoUrl && (
        <div className="aspect-video w-full mt-2">
          <video
            src={videoUrl}
            controls
            className="w-full h-full rounded-md object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};
