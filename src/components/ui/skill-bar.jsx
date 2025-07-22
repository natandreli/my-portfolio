export const SkillBar = ({ label, percentage }) => {
  return (
    <div className="flex flex-col">
      <span className="mb-2 text-sm text-primary-300">{label}</span>
      <div className="w-full bg-primary-800 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-rose-300 to-indigo-300 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};
