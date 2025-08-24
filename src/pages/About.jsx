import Section from "../components/Section.jsx";

export default function About() {
  return (
    <Section>
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-muted">A little background and where I’m heading.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <p>
            I’m a final-year Data Science student with hands-on experience in
            Python, SQL, and modern ML tooling. I enjoy end-to-end projects:
            from data collection to modeling to deployment and visualization.
          </p>
          <p>
            Interests: NLP, time-series forecasting, LLM apps, and practical ML
            in production. My goal is to build data products that are useful,
            fair, and maintainable.
          </p>
        </div>

        <aside className="space-y-3">
          <h3 className="font-semibold">Skills</h3>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {["Python","Pandas","NumPy","Scikit-learn","PyTorch","SQL","DBT","Airflow","Docker","Git"].map(s => (
              <li key={s} className="rounded-md border px-2 py-1 text-gray-700">{s}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
