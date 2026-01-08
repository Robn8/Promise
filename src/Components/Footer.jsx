import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-10 relative flex flex-col md:flex-row items-center">

        {/* Left: Navigation Links */}
        <div className="md:absolute md:left-6 flex flex-col space-y-2 text-center md:text-left mb-8 md:mb-0">
          <NavLink to="/" className="hover:text-white transition">
            Home
          </NavLink>
          <NavLink to="/resources" className="hover:text-white transition">
            Resources
          </NavLink>
          <NavLink to="/aboutus" className="hover:text-white transition">
            About Us
          </NavLink>
          <NavLink to="/typesofcare" className="hover:text-white transition">
            Types of Care
          </NavLink>
          <NavLink to="/contact" className="hover:text-white transition">
            Contact
          </NavLink>
        </div>

        {/* Center: Disclaimer */}
        <div className="text-center max-w-md mx-auto text-sm leading-relaxed">
          <p className="font-semibold text-gray-200 mb-2">
            Disclaimer
          </p>
          <p>
            Promise 2 Papa provides informational resources only and does not offer
            medical, legal, or professional advice. We are not responsible for
            outcomes resulting from the use of information found on this site.
            Always consult qualified professionals for guidance.
          </p>
        </div>

        {/* Right: Branding */}
        <div className="md:absolute md:right-6 text-center md:text-right mt-8 md:mt-0">
          <h3 className="text-xl font-bold text-white">Promise 2 Papa</h3>
          <p className="text-sm text-gray-400 mt-2">
            Walking alongside caregivers with support and hope.
          </p>
          <p className="text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} Promise 2 Papa
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
