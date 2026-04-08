import PropTypes from "prop-types";
import clsx from "clsx";

function Hero({
  title,
  subtitle,
  bgClass = "bg-blue-600",
  textClass = "text-white",
  className,
  children,
}) {
  return (
    <section
      className={clsx(
        "px-4 py-20 text-center sm:px-6 lg:px-8",
        bgClass,
        textClass,
        className
      )}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg lg:text-xl">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  bgClass: PropTypes.string,
  textClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;