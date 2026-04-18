import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight, Terminal } from "lucide-react";
import { AmbientScene } from "./Scene3D";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const contacts = [
  { icon: Mail, label: "Email", value: "leosherry2004@gmail.com", href: "mailto:leosherry2004@gmail.com" },
  { icon: MapPin, label: "Located", value: "Karachi, Pakistan", href: null },
  { icon: Terminal, label: "Status", value: "Open to SOC roles", href: null },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 opacity-50">
        <AmbientScene />
      </div>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, oklch(0.78 0.22 145 / 0.12), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            // 05 — establish_connection()
          </span>
          <h2 className="mt-4 font-mono text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-foreground text-glow">$</span>{" "}
            <span className="text-gradient">connect</span>
            <span className="ml-1 inline-block h-12 w-3 -translate-y-1 bg-primary animate-blink align-middle" />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Looking for a passionate <span className="text-primary">SOC Analyst</span>?
            Whether it's an internship, junior role, or just talking security — let's open
            a session.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="mailto:leosherry2004@gmail.com"
            className="group inline-flex items-center gap-3 rounded-sm border border-primary bg-primary/10 px-8 py-4 font-mono text-base font-semibold uppercase tracking-wider text-primary shadow-terminal transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 animate-pulse-terminal"
          >
            [ ssh leosherry2004@gmail.com ]
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {contacts.map((c) => {
            const Comp = c.href ? "a" : "div";
            return (
              <Comp
                key={c.label}
                {...(c.href ? { href: c.href } : {})}
                className="terminal-card group rounded-sm p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-terminal"
              >
                <c.icon className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  [{c.label}]
                </div>
                <div className="mt-1 font-mono text-sm font-medium text-foreground">
                  {c.value}
                </div>
              </Comp>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { icon: GithubIcon, href: "https://github.com/M-Abdullah2004", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/muhammad-abdullah0000", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-card/40 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-terminal"
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="mx-auto mt-24 max-w-5xl border-t border-primary/20 px-6 pt-8 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo "© {new Date().getFullYear()} Muhammad
          Abdullah — Built with React, Three.js & 🛡️"
        </p>
      </footer>
    </section>
  );
}
