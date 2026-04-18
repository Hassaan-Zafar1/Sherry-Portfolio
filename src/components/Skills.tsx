import { motion } from "framer-motion";
import { Lock, Code2, Server, Search } from "lucide-react";

const groups = [
  {
    icon: Lock,
    title: "Security",
    items: [
      "SOC Concepts",
      "SIEM",
      "Wazuh",
      "Log Analysis",
      "Threat Detection",
      "FIM",
      "Incident Response",
      "Vulnerability Assessment",
      "Pentesting",
    ],
  },
  {
    icon: Server,
    title: "Systems & Network",
    items: [
      "Linux Fundamentals",
      "Windows",
      "Networking (CCNA)",
      "Huawei track",
      "Bash",
    ],
  },
  {
    icon: Code2,
    title: "Languages",
    items: ["C", "C++", "Python", "SQL"],
  },
  {
    icon: Search,
    title: "Analytical & Tools",
    items: ["LeetCode", "Problem Solving", "MS Office", "Cybersecurity Fundamentals"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            // 04 — toolkit.sh
          </span>
          <h2 className="mt-4 font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My <span className="text-gradient">arsenal</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="terminal-card rounded-sm p-6"
            >
              <div className="mb-4 flex items-center gap-3 border-b border-primary/20 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/40 bg-primary/10 text-primary">
                  <g.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    [{String(i + 1).padStart(2, "0")}]
                  </div>
                  <h3 className="font-mono text-base font-bold text-primary">{g.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-primary/25 bg-primary/5 px-3 py-1.5 font-mono text-xs text-foreground transition-all hover:border-primary hover:bg-primary/15 hover:text-primary hover:shadow-terminal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
