import PropTypes from "prop-types";
import clsx from "clsx";

function Hero({
  title,
  subtitle,
  bgClass = "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700",
  textClass = "text-white",
  children,
}) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden px-4 py-20 text-center",
        textClass,
        bgClass
      )}
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-blob" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-200/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Slight overlay for readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg px-6 py-10 sm:px-10 animate-hero-fade-up">
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/90 sm:text-lg lg:text-xl">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {/* Bottom wave divider (matches bg-gray-50) */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-16 w-full md:h-24 text-gray-50"
        >
          <path
            className="fill-current"
            d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,120L0,120Z"
          />
        </svg>
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