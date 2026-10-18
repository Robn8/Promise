function Footer({ showDisclaimer = false }) {
  return (
    <footer className="mt-16 border-t border-brand-sage/40 bg-brand-primary text-white">

      {/* Top row */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

        {/* Left links */}
        <div className="flex gap-4 text-sm text-brand-cream">
          <a
            href="/aboutus"
            className="transition-colors hover:text-white hover:underline"
          >
            About
          </a>

          <a
            href="/resources"
            className="transition-colors hover:text-white hover:underline"
          >
            Resources
          </a>

          <a
            href="/contact"
            className="transition-colors hover:text-white hover:underline"
          >
            Contact
          </a>
        </div>

        {/* Center disclaimer */}
        {showDisclaimer && (
          <div className="max-w-xl text-center text-xs leading-6 text-brand-cream/90">
            Promise2Papa provides informational resources only and does not offer
            medical or legal advice. Please consult qualified professionals for
            guidance specific to your situation.
          </div>
        )}

        {/* Right */}
        <div className="text-sm text-brand-cream">
          © {new Date().getFullYear()} Promise2Papa
        </div>
      </div>

      {/* Bottom 501(c)(3) section */}
      <div className="border-t border-brand-sage/40">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-xs leading-6 text-brand-cream/90">
          Promise2Papa is a registered 501(c)(3) nonprofit organization.
          Contributions are tax-deductible to the extent permitted by law.
        </div>
      </div>

    </footer>
  );
}

export default Footer;
