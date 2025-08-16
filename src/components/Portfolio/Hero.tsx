import { Github, Linkedin, Download } from "lucide-react";
import avatarImage from "@/assets/avatar.jpg";
import Pawan_Pawar_Simple_Clean from "@/assets/Pawan_Pawar_Simple_Clean.png";
import { Button } from "@/components/ui/button";

export function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/PawanPawar11",
      description: "GitHub",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pawanpawarofficial",
      description: "LinkedIn",
    },
    {
      name: "X",
      icon: "X", // Custom X icon
      href: "https://x.com/PawanPawar111",
      description: "X",
    },
  ];

  return (
    <section className="py-24 text-center">
      <div className="mb-8">
        <img
          src={Pawan_Pawar_Simple_Clean}
          alt="Pawan Pawar - Developer Avatar"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 border-2 border-border shadow-lg transition-smooth hover:glow"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Pawan Pawar</h1>
      </div>

      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        MERN Full Stack Developer
      </h2>

      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
        I like keeping things simple. I build web apps that work smooth, look
        clean, and are actually useful.
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mb-12">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary/50 border border-border/50 hover:bg-primary hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
              title={social.description}
            >
              {social.name === "X" ? (
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              ) : (
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              )}
            </a>
          );
        })}
      </div>

      {/* Resume Download */}
      <div className="flex justify-center">
        <Button
          asChild
          size="lg"
          className="hero-gradient hover:opacity-90 transition-smooth font-medium shadow-lg hover:shadow-xl"
        >
          <a
            href="/pawan_pawar_resume_v1.pdf"
            download="Pawan_Pawar_Resume.pdf"
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
