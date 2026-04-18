import { motion } from "framer-motion";
import { ShieldCheck, Bug, Network } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "SOC Home Lab",
    desc: "Built & expanded a Wazuh-based SOC lab — log monitoring, FIM, custom rules, active response.",
  },
  {
    icon: Bug,
    title: "Ethical Hacker",
    desc: "CEH + Pentesting certified. Hands-on with vulnerability assessment and offensive security basics.",
  },
  {
    icon: Network,
    title: "Linux & Networking",
    desc: "Comfortable in Linux environments. Networking foundations from CCNA / Huawei tracks.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, oklch(0.78 0.22 145 / 0.08), transparent 60%)",
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
            // 01 — about.md
          </span>
          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Defending the perimeter, <span className="text-gradient">one log at a time</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a Computer Science student at NED University focused on{" "}
            <span className="text-primary">cybersecurity</span> and{" "}
            <span className="text-primary">SOC operations</span>. I've built and expanded
            a Wazuh SIEM home lab to practice real-world workflows — log monitoring, alert
            triage, File Integrity Monitoring, custom detection rules, and basic active
            response automation. Skilled in C/C++, Python, SQL, comfortable in Linux, and
            constantly sharpening my analytical skills on LeetCode.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group terminal-card relative overflow-hidden rounded-sm p-6 transition-all hover:-translate-y-1 hover:shadow-terminal"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary opacity-0 blur-3xl transition-opacity group-hover:opacity-20" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                  <h.icon className="h-6 w-6" />
                </div>
                <div className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  [{String(i + 1).padStart(2, "0")}]
                </div>
                <h3 className="font-mono text-lg font-bold text-primary">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
