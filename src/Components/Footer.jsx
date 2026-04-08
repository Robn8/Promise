function Footer({ showDisclaimer = false }) {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-16">
      
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left links */}
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="/aboutus" className="hover:text-blue-600">About</a>
          <a href="/resources" className="hover:text-blue-600">Resources</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Center disclaimer */}
        {showDisclaimer && (
          <div className="text-xs text-gray-500 text-center max-w-xl">
            Promise2Papa provides informational resources only and does not offer
            medical or legal advice. Please consult qualified professionals for
            guidance specific to your situation.
          </div>
        )}

        {/* Right */}
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Promise2Papa
        </div>
      </div>

      {/* Bottom 501(c)(3) section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          Promise2Papa is a registered 501(c)(3) nonprofit organization. 
          Contributions are tax-deductible to the extent permitted by law.
        </div>
      </div>

    </footer>
  );
}

export default Footer;