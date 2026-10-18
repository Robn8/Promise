
function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-sage/30 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
