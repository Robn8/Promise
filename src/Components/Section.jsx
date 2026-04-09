function Section({ children, className = "" }) {
    return (
      <section className={`mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 ${className}`}>
        {children}
      </section>
    );
  }
  
  export default Section;