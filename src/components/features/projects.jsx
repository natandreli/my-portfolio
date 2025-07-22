import { ProjectCard } from "@/components/ui/project-card";

export const Projects = () => {
  return (
    <section
      className="bg-primary-900 px-6 md:px-20 text-primary-300 py-16"
      id="projects"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="max-w-5xl mx-auto space-y-10">
        <ProjectCard
          title="EchoHostAI"
          year="2025"
          description="EchoHostAI is an AI-powered platform designed to generate and manage virtual meeting agents. These agents are capable of joining meetings, tracking engagement levels, providing real-time feedback, and producing post-meeting summaries. The platform includes modules for agent creation, meeting orchestration, scoring, and analytics."
          technologies={[
            "React",
            "NextJS",
            "TypeScript",
            "FastAPI",
            "Azure Database",
          ]}
          videoUrl="/videos/echo-host-ai.mp4"
        />
        <ProjectCard
          title="TodoApp"
          year="2024 - Still in development"
          description="TodoApp is a task management application built with React and NestJS. It allows users to create, update, and delete tasks, as well as mark them as complete. The app features a clean and intuitive interface, real-time updates, and a robust backend for managing user data and task states."
          repoUrl="https://github.com/natandreli/to-do-list-front"
          technologies={["React", "NestJS", "TypeScript"]}
          videoUrl="/videos/todo-app.mp4"
        />
        <ProjectCard
          title="My ChatSocket"
          year="2024"
          description="My ChatSocket is a real-time chat platform developed with Angular and Spring Boot, using WebSocket and STOMP protocols for bidirectional communication. The app allows multiple users to join a shared room, exchange messages instantly, and see live updates in a sleek chat interface. The frontend handles stateful UI rendering and message flow, while the backend manages socket connections and message broadcasting, providing a responsive and scalable chat experience."
          repoUrl="https://github.com/natandreli/chatsocket-front"
          technologies={[
            "Angular",
            "TypeScript",
            "SpringBoot",
            "WebSocket",
            "STOMP",
          ]}
          videoUrl="/videos/my-chat-socket.mp4"
        />
      </div>
    </section>
  );
};
