export default function Container({ className = "", ...props }) {
  return (
    <div
      className={`mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
