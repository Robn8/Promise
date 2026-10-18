function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
      <h2 className="text-2xl font-bold text-brand-olive sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm leading-7 text-brand-olive/80 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
