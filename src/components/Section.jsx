import Container from "./Container.jsx";

export default function Section({ children, outerClass = "", innerClass = "" }) {
  return (
    <section className={`py-16 md:py-20 ${outerClass}`}>
      <Container className={innerClass}>{children}</Container>
    </section>
  );
}
