import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    /*{ name: "Home", path: "/" },*/
    { name: "About Us", path: "/aboutus" },
    { name: "Resources", path: "/resources" },
    { name: "Types Of Care", path: "/typesofcare" },
    { name: "Veterans", path: "/Veterans" },
    { name: "FAQ", path: "/FAQ" },
    { name: "Care Registry", path: "/carereg" },
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
      className={`sticky top-0 z-50 transition-all duration-300 
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-blue-100"
            : "bg-white/85 backdrop-blur-md border-b border-blue-100"
        }`}
    >

      {/* NAV BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-between">

        {/* LEFT: Logo with Heart */}
        <NavLink to="/" className="group flex items-center mr-4 md:mr-6 shrink-0">
          <div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            
            {/* Heart background */}
            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 w-full h-full fill-blue-600/15 stroke-blue-500 stroke-[1.5] transition group-hover:fill-blue-600/25"
            >
              <path d="M12 21s-6.716-4.35-9.428-7.062C.46 11.826.333 8.98 2.343 6.97c2.01-2.01 4.856-1.883 6.968.23L12 9.889l2.689-2.689c2.112-2.112 4.958-2.24 6.968-.23 2.01 2.01 1.883 4.856-.23 6.968C18.716 16.65 12 21 12 21z" />
            </svg>

            {/* Logo image */}
            <img
              src="/hand1.jpg"
              alt="Promise2Papa Logo"
              className="relative z-10 w-10 h-10 md:w-10 md:h-10 mt-3 rounded-full object-cover bg-white shadow-sm 
                         transition-transform duration-300 ease-out
                         group-hover:scale-110 group-hover:shadow-md"
            />
          </div>
        </NavLink>





        {/* CENTER: Title */}
        <NavLink
          to="/"
          className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 text-center"
        >
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
            Promise2Papa
          </div>
          <div className="hidden sm:block text-sm text-gray-500">
            You are not alone on your caregiving journey
          </div>
        </NavLink>

        {/* RIGHT: Desktop Links */}
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
                    `flex items-center gap-1 px-3 py-2 rounded-md transition 
                    hover:bg-blue-50 hover:text-blue-500 
                    ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`
                  }
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </NavLink>

                <div
                  className={`absolute left-0 w-44 bg-white border rounded-lg shadow-lg overflow-hidden transition-all duration-300 
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
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
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
                  `px-3 py-2 rounded-md transition 
                  hover:bg-blue-50 hover:text-blue-500 
                  ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        {/* RIGHT: Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-blue-50 transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t px-6 py-4 space-y-3">
          {links.map((link) =>
            link.name === "Resources" ? (
              <div key={link.path}>
                <button
                  className="w-full flex justify-between py-3 font-medium text-gray-700"
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                >
                  Resources
                  <ChevronDown
                    className={`transition ${mobileResourcesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileResourcesOpen && (
                  <div className="pl-4 space-y-2">
                    {resourceSubLinks.map((sublink) => (
                      <NavLink
                        key={sublink.path}
                        to={sublink.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-gray-600"
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-gray-700"
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Nav;
