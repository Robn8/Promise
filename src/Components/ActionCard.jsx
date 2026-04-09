function ActionCard({
    title,
    description,
    href,
    buttonText = "Learn More",
    accent = "blue",
  }) {
    const colors = {
      blue: "bg-blue-600 hover:bg-blue-700",
      green: "bg-green-600 hover:bg-green-700",
      purple: "bg-purple-600 hover:bg-purple-700",
    };
  
    return (
      <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
  
        <p className="text-gray-600 leading-7 min-h-[72px]">
          {description}
        </p>
  
        <a
          href={href}
          className={`mt-6 inline-flex px-5 py-2.5 text-white rounded-lg ${colors[accent]}`}
        >
          {buttonText}
        </a>
      </div>
    );
  }
  
  export default ActionCard;