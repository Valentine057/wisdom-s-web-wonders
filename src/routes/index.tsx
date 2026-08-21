import { createFileRoute } from "@tanstack/react-router";
import { Github, Twitter } from "lucide-react";
import { Navbar } from "@/components/portfolio/Navbar";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { PROFILE, SKILLS, PROJECTS, SERVICES } from "@/components/portfolio/data";

const TITLE = "Wisdom Bassey Johnny — Full-Stack Developer";
const DESCRIPTION =
  "Full-stack developer in Nigeria with four years of experience building fast React interfaces and reliable Node and Django backends.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero */}
        <section id="home" className="px-6 pt-40 pb-20">
          <div className="reveal mx-auto max-w-7xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              AVAILABLE FOR NEW PROJECTS
            </div>
            <h1 className="mb-8 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-8xl">
              Wisdom Bassey <span className="text-muted-foreground">Johnny</span>
            </h1>
            <p className="mb-10 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
              <span className="font-medium text-foreground">Full-Stack Developer</span>{" "}
              specializing in shipping fast interfaces, clean code, and resilient systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border bg-foreground/5 px-8 py-4 font-semibold text-foreground transition-all hover:bg-foreground/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border bg-surface/50 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
                / About Me
              </h2>
              <p className="mb-6 text-2xl leading-snug text-foreground">
                I build digital products that feel fast and codebases that are easy to
                maintain.
              </p>
              <p className="mb-6 text-muted-foreground">
                With four years of experience shipping products for startups and agencies,
                most of my work sits between React on the client and Node or Django on the
                server. I enjoy the parts other people avoid: caching, data modelling, and
                the last 10% of polish.
              </p>
              <p className="text-muted-foreground">
                Based in Nigeria, working globally. My goal is to create technology that
                feels invisible because it just works.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-surface-raised/50 p-6">
                <div className="mb-2 text-3xl font-bold text-foreground">4+</div>
                <div className="font-mono text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-surface-raised/50 p-6">
                <div className="mb-2 text-3xl font-bold text-foreground">13</div>
                <div className="font-mono text-sm text-muted-foreground">
                  Technologies Used
                </div>
              </div>
              <div className="col-span-2 rounded-2xl border border-border bg-surface-raised/50 p-6">
                <div className="mb-2 text-3xl font-bold text-accent">100%</div>
                <div className="font-mono text-sm text-muted-foreground">
                  System Reliability Goal
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 font-mono text-sm uppercase tracking-widest text-primary">
              / Technical Arsenal
            </h2>
            <div className="space-y-12">
              {SKILLS.map((group) => (
                <div key={group.group}>
                  <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {group.group}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/50"
                      >
                        <span className="font-mono text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
              <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
                / Featured Work
              </h2>
              <h3 className="text-4xl font-bold tracking-tight text-foreground">
                Recent Deployments
              </h3>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <article key={project.name} className="group">
                  <div
                    className={`mb-6 w-full overflow-hidden rounded-2xl border border-border bg-surface-raised transition-colors ${
                      project.accent === "primary"
                        ? "group-hover:border-primary/50"
                        : "group-hover:border-accent/50"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} interface screenshot`}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-surface-raised px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h4
                    className={`mb-2 text-2xl font-bold text-foreground transition-colors ${
                      project.accent === "primary"
                        ? "group-hover:text-primary"
                        : "group-hover:text-accent"
                    }`}
                  >
                    {project.name}
                  </h4>
                  <p className="mb-6 text-muted-foreground">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-sm text-foreground hover:underline"
                    >
                      GITHUB &rarr;
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={`font-mono text-sm hover:underline ${
                        project.accent === "primary" ? "text-primary" : "text-accent"
                      }`}
                    >
                      LIVE DEMO &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-border bg-surface/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-12 font-mono text-sm uppercase tracking-widest text-primary">
              / Services
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-surface-raised/50 p-6 transition-colors hover:border-primary/50"
                >
                  <h3 className="mb-3 text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-mono text-sm uppercase tracking-widest text-primary">
                  / Get In Touch
                </h2>
                <h3 className="mb-8 text-4xl font-bold italic tracking-tighter text-foreground sm:text-5xl">
                  Let's build something boringly stable.
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="flex items-center gap-3">
                    <span className="w-5 font-mono text-primary">E:</span>
                    <a href={`mailto:${PROFILE.email}`} className="hover:text-foreground">
                      {PROFILE.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-5 font-mono text-primary">P:</span>
                    <a href={`tel:${PROFILE.phoneHref}`} className="hover:text-foreground">
                      {PROFILE.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="w-5 font-mono text-primary">L:</span>
                    {PROFILE.location}
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-6">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    GitHub
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={PROFILE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={PROFILE.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    TikTok
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wisdom Bassey Johnny. Built for the modern
            web.
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <a href={PROFILE.linkedin} className="hover:text-foreground">
              LinkedIn
            </a>
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="hover:text-foreground">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
