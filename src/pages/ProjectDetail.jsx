import { useParams, Link } from "react-router-dom";
import { getProjectBySlug } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <p className="text-muted mt-2">
          We couldn’t find that project.{" "}
          <Link to="/projects" className="text-mustard underline">Back to projects</Link>
        </p>
      </section>
    );
  }

  const { title, summary, tags = [], heroImage, links = {}, facts = {}, content = {}, gallery = [] } = project;

  return (
    <article>
      {/* Hero */}
      <section className="hero-spot border-b">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-wrap items-start gap-6">
            <div className="flex-1 min-w-[260px] space-y-4">
              <Link to="/projects" className="text-sm text-muted hover:text-ink">&larr; Back to projects</Link>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {title} <span className="text-mustard">.</span>
              </h1>
              <p className="text-lg text-muted">{summary}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                {links.github && <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>}
                {links.demo && <a className="btn btn-outline" href={links.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                {links.report && <a className="btn btn-outline" href={links.report} target="_blank" rel="noreferrer">Report</a>}
              </div>
            </div>

            {/* Hero image */}
            <div className="w-full md:w-80 lg:w-96">
              <div className="aspect-video card grid place-items-center overflow-hidden">
                {heroImage ? (
                  <img src={heroImage} alt={`${title} hero`} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-muted text-sm">No image yet</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main body */}
      <section className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            {content.overview && (
              <Section id="overview" title="Overview">
                <p>{content.overview}</p>
              </Section>
            )}

            {/* Problem */}
            {content.problem && (
              <Section id="problem" title="Problem">
                <p>{content.problem}</p>
              </Section>
            )}

            {/* Approach */}
            {content.approach && (
              <Section id="approach" title="Approach">
                <p>{content.approach}</p>
              </Section>
            )}

            {/* Results / Metrics */}
            {(content.results?.length ?? 0) > 0 && (
              <Section id="results" title="Results">
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {content.results.map((m) => (
                    <li key={m.label} className="card p-4">
                      <div className="text-sm text-muted">{m.label}</div>
                      <div className="text-2xl font-extrabold">{m.value}</div>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* Gallery */}
            {(gallery?.length ?? 0) > 0 && (
              <Section id="gallery" title="Gallery">
                <div className="grid gap-4 sm:grid-cols-2">
                  {gallery.map((g, i) => (
                    <figure key={i} className="card overflow-hidden">
                      <img src={g.src} alt={g.caption ?? `Image ${i+1}`} className="w-full h-auto" />
                      {g.caption && <figcaption className="p-3 text-sm text-muted">{g.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </Section>
            )}

            {/* Challenges */}
            {content.challenges && (
              <Section id="challenges" title="Challenges">
                <p>{content.challenges}</p>
              </Section>
            )}

            {/* Next steps */}
            {content.nextSteps && (
              <Section id="next-steps" title="Next steps">
                <p>{content.nextSteps}</p>
              </Section>
            )}
          </div>

          {/* Sidebar facts / TOC */}
          <aside className="lg:col-span-4 lg:pl-6 space-y-6">
            <div className="card p-5 sticky top-20">
              <h3 className="font-semibold mb-3">Quick facts</h3>
              <ul className="space-y-3 text-sm">
                {facts.role && <Fact label="Role" value={facts.role} />}
                {facts.timeline && <Fact label="Timeline" value={facts.timeline} />}
                {(facts.tools?.length ?? 0) > 0 && <Fact label="Tools" value={facts.tools.join(" · ")} />}
                {facts.dataset && <Fact label="Dataset" value={facts.dataset} />}
                {facts.difficulty && <Fact label="Difficulty" value={facts.difficulty} />}
              </ul>

              <div className="mt-5 pt-5 border-t">
                <h4 className="font-semibold mb-2">On this page</h4>
                <nav className="flex flex-col gap-1">
                  <Anchor to="#overview">Overview</Anchor>
                  <Anchor to="#problem">Problem</Anchor>
                  <Anchor to="#approach">Approach</Anchor>
                  <Anchor to="#results">Results</Anchor>
                  <Anchor to="#gallery">Gallery</Anchor>
                  <Anchor to="#challenges">Challenges</Anchor>
                  <Anchor to="#next-steps">Next steps</Anchor>
                </nav>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-12">
          <Link to="/projects" className="btn btn-outline">&larr; Back to projects</Link>
        </div>
      </section>
    </article>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="prose max-w-none prose-p:leading-relaxed">{children}</div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <li className="flex justify-between gap-4">
      <span className="text-muted">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </li>
  );
}

function Anchor({ to, children }) {
  return (
    <a href={to} className="text-sm text-muted hover:text-ink">
      {children}
    </a>
  );
}
