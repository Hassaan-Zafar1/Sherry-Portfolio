import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Certs", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "glass rounded-sm px-6 py-3" : "px-2"
          }`}
        >
          <a href="#top" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-primary bg-primary/10 text-primary shadow-terminal">
              <Shield className="h-4 w-4" />
            </span>
            <span className="hidden font-mono text-sm tracking-wider text-primary sm:block">
              <span className="text-muted-foreground">~/</span>abdullah
              <span className="ml-0.5 inline-block h-3.5 w-1.5 -translate-y-0.5 bg-primary animate-blink" />
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-primary/60">[{String(i + 1).padStart(2, "0")}]</span>{" "}
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-sm border border-primary bg-primary/10 px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary shadow-terminal transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            ./connect
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
