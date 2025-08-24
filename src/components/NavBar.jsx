import { NavLink } from "react-router-dom";
import Container from "./Container.jsx";
import Logo from "./Logo.jsx";

const base =
  // inline-flex keeps a consistent height so the underline sits below text
  "nav-item inline-flex items-center h-9 px-3 rounded-md text-sm font-medium transition-colors";
const link = ({ isActive }) =>
  `${base} ${isActive ? "text-mustard" : "text-muted hover:text-ink hover:bg-black/5"}`;

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <Container className="h-16 flex items-center">
        {/* Logo / brand (left) */}
        <NavLink
          to="/"
          className="group flex items-center gap-2 text-lg font-extrabold tracking-tight"
        >
          <span>YourName</span>
        </NavLink>

        {/* Menu (right) */}
        <nav className="ms-auto flex items-center gap-6">
          <NavLink to="/" end className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>
          <NavLink to="/projects" className={link}>Projects</NavLink>
          <NavLink to="/contact" className={link}>Contact</NavLink>

          {/* Optional CTA */}
          <a href="/contact" className="btn hidden sm:inline-flex">Hire me</a>
        </nav>
      </Container>
    </header>
  );
}
