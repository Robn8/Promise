function Card({ children, className = "" }) {
    return (
      <div className={`rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 sm:p-7 ${className}`}>
        {children}
      </div>
    );
  }
  
  export default Card;