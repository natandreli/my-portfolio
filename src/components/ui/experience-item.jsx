export const ExperienceItem = ({ title, company, period, description }) => {
  return (
    <div className="relative pl-6 border-l-2 border-rose-400">
      <h4 className="text-lg font-semibold text-primary-300">
        {title} – <span className="text-rose-300">{company}</span>
      </h4>
      <span className="text-sm text-primary-400">{period}</span>
      <p className="text-primary-300 mt-2 text-justify">{description}</p>
    </div>
  );
};
