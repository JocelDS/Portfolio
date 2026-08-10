import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/JocelDS",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "ttps://www.linkedin.com/in/jaurigue-delos-santos-77582b368/",
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://www.facebook.com/jaurigue.delossantos25",
    label: "Facebook",
    icon: FaFacebookF,
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="min-h-[100px] py-7 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left min-w-fit">
            <a
              href="#home"
              className="text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              JocelDS
            </a>

            <p className="text-xs text-muted-foreground mt-2">
              © {currentYear} Jocel Delos Santos. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  text-xs
                  text-muted-foreground
                  hover:text-primary
                  transition-colors
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    w-9
                    h-9
                    rounded-full
                    border
                    border-border/60
                    flex
                    items-center
                    justify-center
                    text-muted-foreground
                    hover:text-primary
                    hover:border-primary/40
                    hover:bg-primary/5
                    transition-all
                    duration-300
                  "
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
};
