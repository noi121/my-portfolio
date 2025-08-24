import Section from "../components/Section.jsx";

export default function Home() {
  return (
    <Section outerClass="hero-spot">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-widest text-muted">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Hi, I’m <span className="text-mustard">Your Name</span>
          </h1>
          <p className="text-lg text-muted">
            Data Science Master’s student focused on ML, NLP, and analytics.
            I turn messy data into clear, actionable insight.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="/projects" className="btn">View Projects</a>
            <a href="/contact" className="btn btn-outline">Contact</a>
          </div>
        </div>

        <div className="aspect-square card grid place-items-center">
          <span className="text-muted">Your photo goes here</span>
        </div>
      </div>
    </Section>
  );
}
