import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Nav() {
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
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

  const contactSubLinks = [
    { name: "Contact Us", path: "/contact" },
    { name: "Donations", path: "/donations" },
  ];

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileResourcesOpen(false);
    setMobileContactOpen(false);
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-blue-100 bg-white/95 shadow-md backdrop-blur-lg"
          : "border-b border-blue-100 bg-white/85 backdrop-blur-md"
      }`}
    >
      {/* NAV BAR */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:justify-between">
        {/* LEFT: Logo with Heart */}
        <NavLink to="/" className="group mr-4 flex shrink-0 items-center md:mr-6">
          <div className="relative flex h-20 w-20 items-center justify-center md:h-24 md:w-24">
            {/* Heart background */}
            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 h-full w-full fill-blue-600/15 stroke-blue-500 stroke-[1.5] transition group-hover:fill-blue-600/25"
            >
              <path d="M12 21s-6.716-4.35-9.428-7.062C.46 11.826.333 8.98 2.343 6.97c2.01-2.01 4.856-1.883 6.968.23L12 9.889l2.689-2.689c2.112-2.112 4.958-2.24 6.968-.23 2.01 2.01 1.883 4.856-.23 6.968C18.716 16.65 12 21 12 21z" />
            </svg>

            {/* Logo image */}
            <img
              src="/hand1.jpg"
              alt="Promise2Papa Logo"
              className="relative z-10 mt-3 h-10 w-10 rounded-full bg-white object-cover shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-md md:h-10 md:w-10"
            />
          </div>
        </NavLink>

        {/* CENTER: Title */}
        <NavLink
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-center md:static md:translate-x-0"
        >
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Promise2Papa
          </div>
          <div className="mt-1 hidden text-sm text-gray-500 sm:block">
            You are not alone on your caregiving journey
          </div>
        </NavLink>

        {/* RIGHT: Desktop Links */}
        <div className="ml-auto hidden items-center space-x-2 md:flex">
          {links.map((link) => {
            if (link.name === "Resources") {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setShowResourcesDropdown(true)}
                  onMouseLeave={() => setShowResourcesDropdown(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-500 ${
                        isActive ? "font-semibold text-blue-600" : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </NavLink>

                  <div
                    className={`absolute left-0 mt-1 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 ${
                      showResourcesDropdown
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {resourceSubLinks.map((sublink) => (
                      <NavLink
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            if (link.name === "Contact") {
              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setShowContactDropdown(true)}
                  onMouseLeave={() => setShowContactDropdown(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-500 ${
                        isActive ? "font-semibold text-blue-600" : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </NavLink>

                  <div
                    className={`absolute left-0 mt-1 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all duration-300 ${
                      showContactDropdown
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {contactSubLinks.map((sublink) => (
                      <NavLink
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {sublink.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition hover:bg-blue-50 hover:text-blue-500 ${
                    isActive ? "font-semibold text-blue-600" : "text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* RIGHT: Mobile Hamburger */}
        <button
          className="rounded-md p-2 transition hover:bg-blue-50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="space-y-3 border-t bg-white/95 px-6 py-4 backdrop-blur-md md:hidden">
          {links.map((link) => {
            if (link.name === "Resources") {
              return (
                <div key={link.path}>
                  <button
                    className="flex w-full items-center justify-between py-3 font-medium text-gray-700"
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  >
                    Resources
                    <ChevronDown
                      className={`transition ${
                        mobileResourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileResourcesOpen && (
                    <div className="space-y-2 pl-4">
                      <NavLink
                        to="/resources"
                        onClick={closeMobileMenu}
                        className="block py-2 text-gray-600"
                      >
                        Helpful Resources
                      </NavLink>

                      {resourceSubLinks.map((sublink) => (
                        <NavLink
                          key={sublink.path}
                          to={sublink.path}
                          onClick={closeMobileMenu}
                          className="block py-2 text-gray-600"
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.name === "Contact") {
              return (
                <div key={link.path}>
                  <button
                    className="flex w-full items-center justify-between py-3 font-medium text-gray-700"
                    onClick={() => setMobileContactOpen(!mobileContactOpen)}
                  >
                    Contact
                    <ChevronDown
                      className={`transition ${
                        mobileContactOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileContactOpen && (
                    <div className="space-y-2 pl-4">
                      {contactSubLinks.map((sublink) => (
                        <NavLink
                          key={sublink.path}
                          to={sublink.path}
                          onClick={closeMobileMenu}
                          className="block py-2 text-gray-600"
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className="block py-3 text-gray-700"
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Nav;