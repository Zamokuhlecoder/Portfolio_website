import { Github, Linkedin } from "lucide-react";

export default function SocialLinks({ className = "", size = 18 }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://github.com/Zamokuhlecoder"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="text-ink-muted transition-colors hover:text-accent"
      >
        <Github size={size} aria-hidden="true" />
      </a>
      <a
        href="https://linkedin.com/in/zamokuhle-mazibuko-a571702a3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="text-ink-muted transition-colors hover:text-accent"
      >
        <Linkedin size={size} aria-hidden="true" />
      </a>
    </div>
  );
}
