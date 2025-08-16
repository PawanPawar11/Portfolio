import { Github, Linkedin, X } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/PawanPawar11" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pawanpawarofficial",
    },
    { name: "X", icon: X, href: "https://x.com/PawanPawar111" },
  ];

  return (
    <footer className="border-t border-border mt-16 bg-card/50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Pawan Pawar. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-lg hover:bg-secondary"
                  title={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
