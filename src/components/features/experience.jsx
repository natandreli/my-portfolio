import { ExperienceItem } from "@/components/ui/experience-item";

export const Experience = () => {
  return (
    <div
      className="bg-primary-800 px-6 md:px-20 text-primary py-16"
      id="experience"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        <ExperienceItem
          title="Fullstack Developer"
          company="PiTransform"
          period="Oct 2024 – Present"
          description="Worked as a Full-Stack Developer on multiple projects, including the development of an AI-powered platform for generating virtual meeting agents capable of providing feedback and engagement scoring. Also contributed to internal platforms like the Security Office App and a CRM/CLM system. Built frontends with React, Next.js, JavaScript, and TypeScript."
        />
        <ExperienceItem
          title="Developer"
          company="Bits&Bots"
          period="Feb 2023 – May 2025"
          description="Developed and maintained voice and WhatsApp bots for customer support using .NET and the Noble platform. Integrated backend logic with Azure Database and delivered scalable automation solutions for clients like Sura's IPS, focusing on seamless user interaction and process efficiency."
        />
      </div>
    </div>
  );
};
