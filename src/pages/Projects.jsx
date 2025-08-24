import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <Section>
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="text-muted">A quick overview — click a card to see details.</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.id} to={`/projects/${p.slug}`} className="block group">
            <article className="card p-4 group-hover:border-[hsl(var(--mustard))] transition-colors">
              <div className="aspect-video rounded-lg bg-white border grid place-items-center mb-3 overflow-hidden">
                {p.heroImage ? (
                  <img src={p.heroImage} alt={`${p.title} cover`} className="h-full w-full object-cover" />
                ) : (
                  <span className="text-muted text-sm">Image/plot</span>
                )}
              </div>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-muted mt-1 line-clamp-2">{p.summary}</p>
              <div className="mt-3 text-sm space-x-2">
                {p.tags.slice(0,3).map(tag => <span key={tag} className="chip">{tag}</span>)}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Section>
  );
}
