import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Code2,
  Database,
  ExternalLink,
  Eye,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Radar,
  Router,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/portfolio/SectionTitle";
import SpiderCursor from "@/components/portfolio/SpiderCursor";
import SpiderLoader from "@/components/portfolio/SpiderLoader";

const navItems = [
  { label: "Origin", href: "#about" },
  { label: "Jutsu", href: "#skills" },
  { label: "Path", href: "#experience" },
  { label: "Missions", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const highlights = [
  { label: "CGPA", value: "7.75", note: "B.Tech CSE" },
  { label: "Internship", value: "6 mo", note: "Network Engineer" },
  { label: "Project", value: "1 flagship", note: "Inventory system" },
];

const skills = [
  { name: "Java", value: 86, icon: Code2, note: "Object-oriented logic & problem solving" },
  { name: "SQL / DBMS", value: 84, icon: Database, note: "Queries, schema thinking, reporting" },
  { name: "Web Craft", value: 82, icon: Sparkles, note: "HTML, CSS, JavaScript, responsive UI" },
  { name: "Networking", value: 89, icon: Router, note: "TCP/IP, subnetting, routing, switching" },
];

const experiences = [
  {
    title: "Network Engineer Intern",
    period: "May 2024 – Nov 2024",
    icon: Radar,
    points: [
      "Built and tested enterprise-grade network topologies in Cisco Packet Tracer.",
      "Configured routing and switching while troubleshooting real connectivity scenarios.",
      "Analyzed packets with Wireshark and implemented basic network security practices.",
    ],
  },
  {
    title: "Computer Lab Management",
    period: "Nov 2024 – Apr 2025",
    icon: ShieldCheck,
    points: [
      "Managed lab systems, software setup, and day-to-day machine configurations.",
      "Provided technical support and kept the environment reliable for learners.",
    ],
  },
];

const education = [
  { title: "B.Tech in Computer Science & Engineering", period: "2025–2028", score: "CGPA: 7.75" },
  { title: "Diploma in Computer Engineering", period: "2022–2025", score: "86.06%" },
  { title: "SSC", period: "2022", score: "87.83%" },
];

const certifications = ["Network Engineering Program (2024)", "Best Final Year Project (2025)"];

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const heroTransform = useMemo(
    () => ({ transform: `translateY(${Math.max(scrollY * -0.12, -36)}px)` }),
    [scrollY],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio enquiry for Panjam Rudra Prathap`);
    const body = encodeURIComponent(
      `Hi Rudra,\n\nI'm reaching out regarding an opportunity.\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    toast.success("Tsukuyomi activated — opening your mail client.");
    window.location.href = `mailto:rudraprathap369@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell min-h-screen overflow-x-hidden">
      <SpiderLoader visible={loading} />
      <SpiderCursor />

      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="web-grid absolute inset-0" />
        <div className="hero-orb left-[-12rem] top-8 h-80 w-80" />
        <div className="hero-orb bottom-24 right-[-8rem] h-72 w-72" />
      </div>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 py-4">
          <a href="#home" className="headline-display text-2xl">PRP</a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild variant="signal" size="sm">
            <a href="#contact"><Eye className="h-4 w-4" /> Sharingan</a>
          </Button>
        </div>
      </header>

      <main id="home" className="relative z-10">
        {/* ─── HERO ─── */}
        <section className="container grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-8 animate-web-swing">
            <span className="eyebrow-label">
              <Eye className="h-4 w-4 text-primary" /> Uchiha Prodigy
            </span>

            <div className="space-y-5">
              <p className="text-lg font-semibold uppercase tracking-[0.32em] text-primary">Panjam Rudra Prathap</p>
              <h1 className="headline-display text-5xl leading-[0.92] sm:text-6xl lg:text-8xl">
                Sharingan-sharp systems, silent precision, and flawless execution.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Computer Science Engineer crafting decisive interfaces, strategic network architectures, and database-driven solutions — with the quiet mastery and foresight of Itachi Uchiha.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="hero" size="xl">
                <a href="#projects">
                  View Missions <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="signal" size="xl">
                <a href="#contact">Tsukuyomi</a>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="section-shell p-4 text-left">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-3xl font-bold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" style={heroTransform}>
            <div className="section-shell comic-dot relative mx-auto max-w-xl overflow-hidden p-8 sm:p-10">
              <div className="absolute inset-0 bg-hero-radial opacity-90" />
              <div className="relative flex flex-col gap-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">Naruto-inspired portfolio</p>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Itachi Uchiha edition</p>
                    <p className="headline-display mt-3 text-4xl sm:text-5xl">Rudra //</p>
                  </div>
                  <div className="animate-amaterasu-flicker rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                    Open to roles
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-xl border border-border/70 bg-background/70 p-6 backdrop-blur-md">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Shinobi brief</p>
                    <p className="mt-3 text-2xl font-bold text-foreground">Java • SQL • Networking • Responsive Design</p>
                    <p className="mt-3 text-base text-muted-foreground">
                      "Those who cannot acknowledge themselves will eventually fail." I turn quiet discipline into decisive, fast, and dependable solutions.
                    </p>
                  </div>
                  <div className="rounded-xl border border-border/70 bg-background/70 p-6 backdrop-blur-md">
                    <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Kekkei Genkai</p>
                    <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" /> Frontend engineering</li>
                      <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" /> Network operations</li>
                      <li className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" /> Database clarity</li>
                    </ul>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <a href="tel:+918106963592" className="rounded-xl border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground transition-transform hover:-translate-y-1 hover:text-foreground">
                    <Phone className="mb-3 h-4 w-4 text-primary" /> +91-8106963592
                  </a>
                  <a href="mailto:rudraprathap369@gmail.com" className="rounded-xl border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground transition-transform hover:-translate-y-1 hover:text-foreground">
                    <Mail className="mb-3 h-4 w-4 text-primary" /> Email
                  </a>
                  <a href="https://linkedin.com/in/rudraprathap" target="_blank" rel="noreferrer" className="rounded-xl border border-border/70 bg-background/60 p-4 text-sm text-muted-foreground transition-transform hover:-translate-y-1 hover:text-foreground">
                    <Linkedin className="mb-3 h-4 w-4 text-primary" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT / ORIGIN ─── */}
        <section id="about" className="container py-8 sm:py-12">
          <div className="web-divider" />
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Clan Origin"
              title="Forged through sacrifice, silence, and relentless mastery"
              kicker="A recruiter-friendly origin arc showing how Rudra channels Uchiha-level discipline across software, systems, and technical support."
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {[
                "Started with a strong base in computer engineering, building discipline across hardware, software, and structured problem solving — like graduating from the Academy as a prodigy.",
                "Expanded into networking through hands-on simulations, packet analysis, and secure infrastructure — sharpening perception with Sharingan-like precision.",
                "Now focused on delivering polished digital products and reliable technical support with Itachi-level foresight to anticipate, adapt, and execute flawlessly.",
              ].map((copy, index) => (
                <article key={index} className="group rounded-xl border border-border/70 bg-background/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
                  <p className="text-sm uppercase tracking-[0.24em] text-primary">Scroll 0{index + 1}</p>
                  <p className="mt-4 text-lg text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SKILLS / JUTSU ─── */}
        <section id="skills" className="container py-8 sm:py-12">
          <div className="web-divider" />
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Forbidden Jutsu"
              title="Technical strengths honed like Sharingan tomoe"
              kicker="Each capability reflects battle-tested field experience, from routing packets to building responsive interfaces — all wielded with deadly precision."
            />

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article key={skill.name} className="rounded-xl border border-border/70 bg-background/60 p-6 transition-transform duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-glow">
                    <div className="mb-6 flex items-center justify-between">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="panel-badge">{skill.value}%</span>
                    </div>
                    <div
                      className="radial-skill mx-auto"
                      style={{ ["--skill-value" as string]: `${skill.value}%` } as React.CSSProperties}
                    >
                      <span>
                        <strong className="text-2xl font-bold text-foreground">{skill.value}</strong>
                        <small className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">Power</small>
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-foreground">{skill.name}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{skill.note}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── EXPERIENCE / PATH ─── */}
        <section id="experience" className="container py-8 sm:py-12">
          <div className="web-divider" />
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Shinobi Path"
              title="Hands-on experience earned in the shadows of real systems"
              kicker="A timeline centered on responsibility, troubleshooting, and flawless execution — every mission completed like a true ANBU operative."
            />

            <div className="relative space-y-6 before:absolute before:left-[1.15rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border/70 sm:before:left-1/2 sm:before:-translate-x-1/2">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="relative grid gap-4 sm:grid-cols-2 sm:gap-10">
                    <div className={`section-shell p-6 ${index % 2 === 0 ? "sm:mr-10" : "sm:order-2 sm:ml-10"}`}>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="rounded-full border border-primary/50 bg-primary/10 p-3">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.2em] text-primary">{item.period}</p>
                          <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        {item.points.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative hidden sm:block" />
                    <span className="absolute left-[1.15rem] top-10 h-4 w-4 -translate-x-1/2 rounded-full border border-primary/60 bg-background shadow-glow sm:left-1/2" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── PROJECTS / MISSIONS ─── */}
        <section id="projects" className="container py-8 sm:py-12">
          <div className="web-divider" />
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="S-Rank Mission"
              title="Inventory Management System"
              kicker="A web-based build focused on asset visibility, responsive usability, and actionable reporting — executed with surgical Uchiha precision."
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="group rounded-xl border border-border/70 bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-glow">
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "SQL", "Responsive UI", "Reporting"].map((tag) => (
                    <span key={tag} className="panel-badge">{tag}</span>
                  ))}
                </div>
                <h3 className="mt-6 text-3xl font-bold text-foreground">Mission scroll</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  Designed to automate asset tracking with a clean UI, data-driven reporting, and alert-oriented workflows — no detail escapes the Sharingan.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Automated asset tracking and record visibility.",
                    "Responsive layouts for desktop and mobile access.",
                    "Reporting and alert mechanisms for quick action.",
                    "Structured SQL-backed logic for inventory data.",
                  ].map((feature) => (
                    <div key={feature} className="rounded-xl border border-border/70 bg-panel/60 p-4 text-muted-foreground transition-all duration-300 group-hover:border-primary/60">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="hero" size="lg">
                    <a href="#contact">
                      Demo on request <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="signal" size="lg">
                    <a href="#contact">Discuss the build</a>
                  </Button>
                </div>
              </article>

              <aside className="space-y-6">
                <div className="section-shell p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Sharingan insights</p>
                  <div className="mt-4 space-y-4">
                    {[
                      "UI adapts cleanly across breakpoints for recruiter-friendly demos.",
                      "Asset data stays organized for speed, clarity, and reporting.",
                      "Alert workflows improve response time when stock issues appear.",
                    ].map((item) => (
                      <div key={item} className="animate-amaterasu-flicker rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm text-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section-shell p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Certifications & wins</p>
                  <div className="mt-4 space-y-3">
                    {certifications.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/60 p-4">
                        <Award className="mt-0.5 h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ─── EDUCATION ─── */}
        <section id="education" className="container py-8 sm:py-12">
          <div className="web-divider" />
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Academy Records"
              title="Academic progression built on prodigy-level discipline"
              kicker="A path through school, diploma, and engineering — each rank achieved with Uchiha-level mastery and quiet determination."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {education.map((item) => (
                <article key={item.title} className="rounded-xl border border-border/70 bg-background/60 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <p className="mt-5 text-sm uppercase tracking-[0.24em] text-muted-foreground">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-4 inline-flex rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{item.score}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="container py-8 pb-20 sm:py-12 sm:pb-24">
          <div className="web-divider" />
          <div className="section-shell p-6 sm:p-8 lg:p-10">
            <SectionTitle
              eyebrow="Summoning Jutsu"
              title="Let's connect for internships, collaborations, or recruiter conversations"
              kicker="Send a quick message and launch a direct mail draft with the Amaterasu signal below."
            />

            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: "+91-8106963592", href: "tel:+918106963592" },
                  { icon: Mail, label: "Email", value: "rudraprathap369@gmail.com", href: "mailto:rudraprathap369@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/rudraprathap", href: "https://linkedin.com/in/rudraprathap" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-border/70 bg-background/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow">
                      <div className="rounded-full border border-primary/50 bg-primary/10 p-3">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                        <p className="text-lg font-semibold text-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <form onSubmit={handleSubmit} className="rounded-xl border border-border/70 bg-background/60 p-6 sm:p-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="space-y-2 sm:col-span-1">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Name</span>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/40"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="space-y-2 sm:col-span-1">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/40"
                      placeholder="you@example.com"
                    />
                  </label>
                  <label className="space-y-2 sm:col-span-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Message</span>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-xl border border-input bg-surface px-4 py-3 text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/40"
                      placeholder="Tell me about the role, mission, or collaboration."
                    />
                  </label>
                </div>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">Fast response, clear communication, and recruiter-friendly follow-up.</p>
                  <Button variant="hero" size="xl" type="submit">
                    Amaterasu <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="container relative z-10 pb-8 text-center text-sm text-muted-foreground">
        Built for Panjam Rudra Prathap — recruiter-ready, responsive, and forged with Itachi Uchiha's silent mastery. 写輪眼
      </footer>
    </div>
  );
};

export default Index;
