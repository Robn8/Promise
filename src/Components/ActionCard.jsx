function ActionCard({
  title,
  description,
  href,
  buttonText = "Learn More",
  accent = "primary",
  external = false,
}) {
  const colors = {
    primary: "bg-brand-primary hover:bg-brand-olive",
    sage: "bg-brand-sage hover:bg-brand-primary",
    olive: "bg-brand-olive hover:bg-brand-forest",
  };

  return (
    <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-sage/30 transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="mb-3 text-xl font-semibold text-brand-olive">
        {title}
      </h3>

      <p className="min-h-[72px] leading-7 text-gray-600">
        {description}
      </p>

      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`mt-6 inline-flex rounded-lg px-5 py-2.5 font-medium text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-sage focus:ring-offset-2 ${
          colors[accent] || colors.primary
        }`}
      >
        {buttonText}
      </a>
    </div>
  );
}

export default ActionCard;
