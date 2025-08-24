import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-page text-ink">
      <NavBar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl font-bold">Page not found</h2>
              <p className="text-muted mt-2">Check the URL or use the navigation above.</p>
            </div>
          } />
        </Routes>
      </main>
      <footer className="border-t bg-surface">
        <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-sm text-muted">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Built with React & Tailwind</span>
        </div>
      </footer>
    </div>
  );
};
