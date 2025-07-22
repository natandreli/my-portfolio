import { SkillBar } from "@/components/ui/skill-bar";

export const AboutMe = () => {
  return (
    <div
      className="bg-primary-900 px-6 md:px-20 text-primary-300 py-16"
      id="about-me"
    >
      <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-10 text-primary-300 leading-relaxed text-justify">
          I'm a Full-Stack Developer with a strong focus on frontend
          technologies like React and Next.js. I've built dynamic, responsive
          web apps with integrated features such as authentication, product
          recommendations, and real-time interaction. I enjoy crafting intuitive
          user interfaces and robust backends using tools like FastAPI, always
          aiming for clean code and great user experience.
        </p>

        <div className="w-full bg-primary-800 p-6 rounded-xl shadow-md space-y-5">
          <SkillBar label="React / Next.js" percentage={90} />
          <SkillBar label="JavaScript / TypeScript" percentage={85} />
          <SkillBar label="FastAPI / Python" percentage={85} />
          <SkillBar label="C# / .NET" percentage={80} />
          <SkillBar label="HTML & CSS" percentage={90} />
          <SkillBar
            label="SQL (PostgreSQL / MySQL / SQL Server)"
            percentage={75}
          />
          <SkillBar label="Angular / SpringBoot / NestJS" percentage={70} />
          <SkillBar label="MongoDB / OracleDB" percentage={65} />
        </div>
      </div>
    </div>
  );
};
