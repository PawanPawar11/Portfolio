import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description:
      "I built a real-time chat app with the MERN stack where people can just send messages instantly using Socket.io. For security, I added JWT auth, and the UI is kept simple and responsive with TailwindCSS and DaisyUI. I used Zustand to handle state without headaches, Cloudinary to store media, and made sure errors are handled properly on both ends. Deployed it for free just to show the whole thing actually works end to end.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "JWT",
      "TailwindCSS",
      "DaisyUI",
      "Zustand",
      "Cloudinary",
    ],
    liveUrl: "https://chat-app-jb6n.onrender.com/",
    githubUrl: "https://github.com/PawanPawar11/chat-app",
  },
  {
    id: 2,
    title: "Notes Web App",
    description:
      "I built a notes web app with full CRUD features using TypeScript and React. The UI is clean and responsive thanks to TailwindCSS and shadcn/ui, plus there’s a dark/light mode toggle and a simple “New Note” button for quick note-taking. I used React Router v7 for smooth navigation, added editing with a dedicated update page, and made deletion work without breaking the UI. Axios handles API calls, with CORS set up for frontend-backend talk. The backend runs on Express with MongoDB, connected through REST APIs, and I deployed the whole thing on Render, both client and server.",
    technologies: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "shadcn/ui",
      "React Router v7",
      "Axios",
      "CORS",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Render",
    ],
    liveUrl: "https://example-frontend-ske5.onrender.com/",
    githubUrl: "https://github.com/PawanPawar11/NotesBox-V2",
  },
  {
    id: 3,
    title: "Real-Time Chess Web App ",
    description:
      "I made a two-player online chess game where moves update live for both players. I used chess.js to handle all the chess rules, and a simple Express backend to manage who’s playing and the game state. Socket.io takes care of sending moves back and forth in real time. The first two people who join get the white and black pieces, and everyone else can just watch. You can drag and drop pieces, and the board flips if you’re playing black. The UI is built with EJS and plain CSS, and I deployed the whole thing on Render so anyone can play online.",
    technologies: [
      "JavaScript",
      "Express.js",
      "Socket.io",
      "chess.js",
      "EJS",
      "CSS",
      "Render",
    ],
    liveUrl: "https://chess-game-cduv.onrender.com/",
    githubUrl: "https://github.com/PawanPawar11/Chess-Game",
  },
  {
    id: 4,
    title: "Gemini Clone",
    description:
      "I built a Gemini clone using React and Vite. It uses Google’s GenAI package to connect with the Gemini API. TailwindCSS handles the styling, Lucide React gives me icons, and I added React Markdown with Remark GFM and Rehype Highlight so the bot’s responses show up nicely. dotenv is for API keys, and ESLint keeps the code clean.",
    technologies: [
      "React.js",
      "Vite",
      "TailwindCSS",
      "Lucide React",
      "React Markdown",
      "Remark GFM",
      "Rehype Highlight",
      "@google/genai (Gemini API)",
      "dotenv",
    ],
    liveUrl: "https://basic-gemini-clone-with-ui-modification.vercel.app/",
    githubUrl: "https://github.com/PawanPawar11/gemini-clone",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <h3 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h3>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-card border border-border rounded-xl p-6 transition-smooth hover:card-hover hover:border-primary/20"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                {project.title}
              </h4>
              <div className="flex space-x-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground hover:text-primary"
                  title="Live Demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-smooth text-muted-foreground hover:text-primary"
                  title="View Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
