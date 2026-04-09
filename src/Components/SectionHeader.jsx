function SectionHeader({ title, subtitle }) {
    return (
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-7">
            {subtitle}
          </p>
        )}
      </div>
    );
  }
  
  export default SectionHeader;