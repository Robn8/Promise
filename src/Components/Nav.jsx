import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false); // desktop resources dropdown
  const [isScrolled, setIsScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileResourcesOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Resources", path: "/resources" },
    { name: "Types Of Care", path: "/typesofcare" },
    /*{ name: "Podcast", path: "/podcast" },*/
    { name: "FAQ", path: "/FAQ" },
    { name: "Contact", path: "/contact" },
  ];

  const resourceSubLinks = [
    { name: "Equipment", path: "/resources#equipment" },
    { name: "Caregivers", path: "/resources#care" },
    { name: "Support Groups", path: "/resources#care" },
    { name: "Legal Help", path: "/resources#legal-help" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 relative">
        {/* Brand (centered on mobile, left on desktop) */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img
            src="/hand1.jpg" // change if needed
            alt="Promise2Papa Logo"
            className="w-15 h-15 object-contain"
          />
          <div className="leading-tight text-center md:text-left">
            <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition">
              Promise2Papa
            </div>
            <div className="text-sm text-gray-500 hidden sm:block">
              You are not alone on your caregiving journey
            </div>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2 ml-auto">
          {links.map((link) =>
            link.name === "Resources" ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-300 
                     hover:bg-blue-50 hover:text-blue-500 
                     ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`
                  }
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </NavLink>

                <div
                  className={`absolute left-0 w-44 bg-white border rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-out 
                    ${
                      showDropdown
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                >
                  {resourceSubLinks.map((sublink) => (
                    <NavLink
                      key={sublink.path}
                      to={sublink.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setShowDropdown(false)}
                    >
                      {sublink.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md transition-colors duration-300 
                   hover:bg-blue-50 hover:text-blue-500 
                   ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* Mobile Menu Button (always right) */}
        <div className="ml-auto md:hidden">
          <button
            className="p-2 rounded-md hover:bg-blue-50 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 pt-2 space-y-2 bg-white/90 backdrop-blur-md border-t">
          {/* Mobile tagline */}
          <div className="text-sm text-gray-500 sm:hidden pb-2 text-center">
            You are not alone on your caregiving journey
          </div>

          {links.map((link) =>
            link.name === "Resources" ? (
              <div key={link.path} className="rounded-lg border border-gray-200">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 transition"
                  onClick={() => setMobileResourcesOpen((v) => !v)}
                >
                  <span className="font-medium">Resources</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileResourcesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileResourcesOpen ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="py-2">
                    {resourceSubLinks.map((sublink) => (
                      <NavLink
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-6 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileResourcesOpen(false);
                        }}
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition
                   hover:bg-blue-50 hover:text-blue-600
                   ${
                     isActive
                       ? "bg-blue-50 text-blue-700 font-semibold"
                       : "text-gray-700"
                   }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
