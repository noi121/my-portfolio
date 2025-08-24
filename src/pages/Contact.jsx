import Section from "../components/Section.jsx";

export default function Contact() {
  return (
    <Section>
      <header className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="text-muted">Let’s get in touch.</p>
      </header>

      <div className="card p-6 space-y-4">
        <p>
          Email: <a className="text-mustard underline" href="mailto:you@example.com">you@example.com</a>
        </p>
        <p>
          LinkedIn: <a className="text-mustard underline" href="#" target="_blank" rel="noreferrer">your-linkedin</a>
        </p>
        <p>
          GitHub: <a className="text-mustard underline" href="#" target="_blank" rel="noreferrer">@your-github</a>
        </p>
      </div>
    </Section>
  );
}
