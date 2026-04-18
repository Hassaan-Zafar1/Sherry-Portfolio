import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "CEH + Pentesting",
    issuer: "Corvit Systems Karachi",
    date: "Jan 2025",
    code: "CEH-001",
  },
  {
    title: "Pentesting",
    issuer: "Packt",
    date: "Feb 2025",
    code: "PKT-002",
  },
  {
    title: "Linux Fundamentals",
    issuer: "TCM Security",
    date: "Jul 2025",
    code: "TCM-003",
  },
  {
    title: "Security Operations (SOC) 101",
    issuer: "TCM Security",
    date: "Mar 2026",
    code: "SOC-004",
  },
  {
    title: "Google Cybersecurity Specialization",
    issuer: "Google",
    date: "Mar 2026",
    code: "GGL-005",
  },
  {
    title: "SQL Certification",
    issuer: "UC Davis",
    date: "—",
    code: "UCD-006",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            // 02 — credentials.log
          </span>
          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Verified <span className="text-gradient">credentials</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Industry-recognized certifications spanning ethical hacking, penetration testing,
            Linux, and security operations.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group terminal-card relative overflow-hidden rounded-sm p-5 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-terminal"
            >
              {/* Corner brackets */}
              <span className="absolute left-2 top-2 h-3 w-3 border-l border-t border-primary/40 transition-colors group-hover:border-primary" />
              <span className="absolute right-2 top-2 h-3 w-3 border-r border-t border-primary/40 transition-colors group-hover:border-primary" />
              <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-primary/40 transition-colors group-hover:border-primary" />
              <span className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-primary/40 transition-colors group-hover:border-primary" />

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-secondary">
                    [{c.code}]
                  </div>
                  <h3 className="font-mono text-base font-bold leading-tight text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{c.issuer}</p>
                  <div className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {c.date}
                  </div>
                </div>
              </div>

              {/* Verified badge */}
              <div className="mt-4 flex items-center justify-between border-t border-primary/15 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  status
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
