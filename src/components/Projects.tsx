import { motion } from "framer-motion";
import { Activity, FileSearch, Radio, ShieldAlert } from "lucide-react";

const projects = [
  {
    icon: Activity,
    title: "Wazuh SOC Home Lab",
    tag: "SIEM · Detection",
    desc: "Built a complete SOC environment using Wazuh — agents on Linux/Windows endpoints, log ingestion, alert dashboards, and a full triage workflow simulating real-world monitoring.",
    stack: ["Wazuh", "Elastic", "Linux", "Windows"],
  },
  {
    icon: FileSearch,
    title: "File Integrity Monitoring",
    tag: "FIM · Forensics",
    desc: "Configured FIM rules to detect unauthorized file changes across critical system paths. Tuned alerts to reduce noise and surface meaningful security events.",
    stack: ["Wazuh FIM", "Syscheck", "Bash"],
  },
  {
    icon: ShieldAlert,
    title: "Custom Detection Rules",
    tag: "Threat Detection",
    desc: "Authored custom decoders and rules for Wazuh to detect brute-force attempts, suspicious process execution, and privilege escalation indicators.",
    stack: ["XML Rules", "Regex", "MITRE ATT&CK"],
  },
  {
    icon: Radio,
    title: "Active Response Automation",
    tag: "Incident Response",
    desc: "Implemented basic active response — automated IP blocking on repeated failed logins, account lockouts, and alerting hooks for rapid containment.",
    stack: ["Bash", "iptables", "Wazuh AR"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, oklch(0.78 0.22 145 / 0.08), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            // 03 — ./projects
          </span>
          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What I've <span className="text-gradient">deployed</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="terminal-card relative h-full overflow-hidden rounded-sm p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-terminal">
                {/* Header bar */}
                <div className="mb-4 flex items-center justify-between border-b border-primary/20 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-secondary">
                        {p.tag}
                      </div>
                      <h3 className="font-mono text-lg font-bold text-foreground">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    live
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-sm border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[11px] text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
