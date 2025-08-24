export default function Logo({ className = "h-8 w-8", title = "Logo" }) {
  // Uses currentColor so you can color it with Tailwind/CSS (e.g., text-mustard)
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {/* 8 petals */}
      <g fill="currentColor">
        <circle cx="12" cy="4.5" r="3" />
        <circle cx="16.5" cy="7.5" r="3" />
        <circle cx="19.5" cy="12" r="3" />
        <circle cx="16.5" cy="16.5" r="3" />
        <circle cx="12" cy="19.5" r="3" />
        <circle cx="7.5" cy="16.5" r="3" />
        <circle cx="4.5" cy="12" r="3" />
        <circle cx="7.5" cy="7.5" r="3" />
      </g>
      {/* center */}
      <circle cx="12" cy="12" r="2.35" fill="white" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
