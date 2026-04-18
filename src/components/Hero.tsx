import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Shield, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroScene } from "./Scene3D";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import abdullahImg from "@/assets/abdullah.jpg";

const TYPED = [
  "SOC Analyst",
  "Penetration Tester",
  "SIEM Engineer",
  "Threat Hunter",
];

export function Hero() {
  const [typed, setTyped] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = TYPED[idx];
    const timeout = setTimeout(() => {
      if (!del) {
        setTyped(word.slice(0, typed.length + 1));
        if (typed.length + 1 === word.length) setTimeout(() => setDel(true), 1400);
      } else {
        setTyped(word.slice(0, typed.length - 1));
        if (typed.length - 1 === 0) {
          setDel(false);
          setIdx((idx + 1) % TYPED.length);
        }
      }
    }, del ? 50 : 90);
    return () => clearTimeout(timeout);
  }, [typed, del, idx]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden scanlines"
    >
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      <div className="absolute inset-0 z-0 grid-pattern opacity-30" />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.78 0.22 145 / 0.18), transparent 60%)",
        }}
      />

      {/* Scan line */}
      <div className="pointer-events-none absolute left-0 right-0 z-0 h-32 animate-scan bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/5 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-primary backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-primary" />
              </span>
              [STATUS] Open to SOC roles
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-3 font-mono text-sm text-primary"
            >
              <span className="text-muted-foreground">root@kali</span>:
              <span className="text-secondary">~</span>$ whoami
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-mono text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-7xl"
            >
              <span className="block text-foreground text-glow">Muhammad</span>
              <span className="block text-gradient">Abdullah_</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 font-mono text-xl text-secondary sm:text-2xl"
            >
              <span className="text-muted-foreground">&gt;_ </span>
              {typed}
              <span className="ml-0.5 inline-block h-5 w-2 -translate-y-0.5 bg-primary animate-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Computer Science student at <span className="text-primary">NED University</span>{" "}
              specializing in <span className="text-foreground">Security Operations</span>,
              SIEM workflows with Wazuh, threat detection & incident response.{" "}
              <span className="text-secondary">CEH</span>-certified ethical hacker.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-sm border border-primary bg-primary/10 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-primary shadow-terminal transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
                <span className="relative z-10">[ Run Portfolio ]</span>
              </a>
              <a
                href="#contact"
                className="rounded-sm border border-border bg-card/50 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-foreground backdrop-blur-sm transition-all hover:border-secondary hover:text-secondary"
              >
                ./contact.sh
              </a>
              <a
                href="/Muhammad_Abdullah_Resume.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-sm border border-secondary/60 bg-secondary/10 px-7 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-secondary backdrop-blur-sm transition-all hover:bg-secondary hover:text-secondary-foreground hover:scale-105"
              >
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                wget resume.pdf
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex items-center gap-5"
            >
              {[
                { icon: GithubIcon, href: "https://github.com/", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:abdullah@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex h-11 w-11 items-center justify-center rounded-sm border border-border bg-card/40 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-terminal"
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Terminal card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="terminal-card relative rounded-sm p-6 animate-float crt-flicker">
              {/* Header */}
              <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/80" />
                  <div className="h-3 w-3 rounded-full bg-secondary/80" />
                  <div className="h-3 w-3 rounded-full bg-primary/80" />
                </div>
                <span className="ml-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Terminal className="h-3 w-3" />
                  bash — analyst@soc-lab
                </span>
              </div>

              {/* Photo */}
              <div className="mb-4 flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-sm bg-gradient-matrix opacity-50 blur" />
                  <img
                    src={abdullahImg}
                    alt="Muhammad Abdullah — SOC Analyst"
                    className="relative h-24 w-24 rounded-sm border border-primary/40 object-cover"
                    loading="eager"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-muted-foreground">[ID] 0x4D41</div>
                  <div className="font-mono text-base font-bold text-primary text-glow">
                    M. Abdullah
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1 rounded-sm border border-primary/30 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                    <Shield className="h-2.5 w-2.5" /> CEH Certified
                  </div>
                </div>
              </div>

              {/* Output */}
              <pre className="font-mono text-[12px] leading-relaxed text-muted-foreground">
{`$ cat ./profile.json
{
  `}<span className="text-secondary">"alias"</span>{`: `}<span className="text-primary">"abdullah"</span>{`,
  `}<span className="text-secondary">"role"</span>{`:  `}<span className="text-primary">"SOC Analyst"</span>{`,
  `}<span className="text-secondary">"loc"</span>{`:   `}<span className="text-primary">"Karachi, PK"</span>{`,
  `}<span className="text-secondary">"edu"</span>{`:   `}<span className="text-primary">"NED University"</span>{`,
  `}<span className="text-secondary">"siem"</span>{`:  `}<span className="text-primary">"Wazuh"</span>{`,
  `}<span className="text-secondary">"langs"</span>{`: [`}<span className="text-primary">"C"</span>{`, `}<span className="text-primary">"C++"</span>{`, `}<span className="text-primary">"py"</span>{`, `}<span className="text-primary">"sql"</span>{`],
  `}<span className="text-secondary">"status"</span>{`: `}<span className="text-accent">"hunting_threats"</span>{`
}`}
              </pre>

              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-primary/20 pt-3">
                {[
                  { v: "5+", l: "Certs" },
                  { v: "24/7", l: "SOC Lab" },
                  { v: "100%", l: "Curious" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="font-mono text-xl font-bold text-primary text-glow">
                      {s.v}
                    </div>
                    <div className="mt-0.5 text-[9px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 font-mono text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">[ scroll ]</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
