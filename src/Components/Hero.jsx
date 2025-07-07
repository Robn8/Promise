import PropTypes from "prop-types";
import clsx from "clsx";      // optional but handy for conditional classes

/**
 * Reusable full‑width hero banner.
 *
 * Props
 * ─────────────────────────────────────────────────────────
 * • title       – large heading text
 * • subtitle    – (optional) smaller lead‑in paragraph
 * • bgClass     – Tailwind classes for background colour / image
 * • textClass   – Tailwind classes for text colour (defaults to white)
 * • children    – (optional) extra React nodes rendered under the subtitle
 */
function Hero({
  title,
  subtitle,
  bgClass = "bg-blue-600",
  textClass = "text-white",
  children,
}) {
  return (
    <section className={clsx("py-16 px-4 text-center", bgClass, textClass)}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg mb-6">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgClass: PropTypes.string,
  textClass: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
