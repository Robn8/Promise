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

  const linkBase =
    "rounded-md px-3 py-2 transition duration-200 hover:bg-blue-50 hover:text-blue-500";

  const desktopDropdownClass = (open) =>
    `absolute left-0 top-full z-50 mt-2 w-48 origin-top overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-out ${
      open
        ? "visible translate-y-0 opacity-100 scale-100"
        : "invisible -translate-y-2 opacity-0 scale-95 pointer-events-none"
    }`;

  const mobileAccordionClass = (open) =>
    `grid overflow-hidden transition-all duration-300 ease-in-out ${
      open ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
    }`;

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-blue-100 bg-white/95 shadow-md backdrop-blur-lg"
          : "border-b border-blue-100 bg-white/85 backdrop-blur-md"
      }`}
    >
      {/* NAV BAR */}
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-4 md:flex md:justify-between md:px-6">
        {/* LEFT: Logo */}
        <div className="flex items-center justify-start">
          <NavLink to="/" className="group flex shrink-0 items-center">
            <div className="relative flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20 md:h-24 md:w-24">
              <svg
                viewBox="0 0 24 24"
                className="absolute inset-0 h-full w-full fill-blue-600/15 stroke-blue-500 stroke-[1.5] transition group-hover:fill-blue-600/25"
              >
                <path d="M12 21s-6.716-4.35-9.428-7.062C.46 11.826.333 8.98 2.343 6.97c2.01-2.01 4.856-1.883 6.968.23L12 9.889l2.689-2.689c2.112-2.112 4.958-2.24 6.968-.23 2.01 2.01 1.883 4.856-.23 6.968C18.716 16.65 12 21 12 21z" />
              </svg>

              <img
                src="/hand1.jpg"
                alt="Promise2Papa Logo"
                className="relative z-10 mt-2 h-8 w-8 rounded-full bg-white object-cover shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 group-hover:shadow-md sm:mt-3 sm:h-10 sm:w-10 md:h-10 md:w-10"
              />
            </div>
          </NavLink>
        </div>

        {/* CENTER: Title */}
        <div className="flex justify-center md:flex-1 md:justify-center">
          <NavLink to="/" className="text-center">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl">
              Promise2Papa
            </div>
            <div className="mt-1 hidden text-xs text-gray-500 sm:block md:text-sm">
              You are not alone on your caregiving journey
            </div>
          </NavLink>
        </div>

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
                      `flex items-center gap-1 ${linkBase} ${
                        isActive ? "font-semibold text-blue-600" : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        showResourcesDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>

                  <div className={desktopDropdownClass(showResourcesDropdown)}>
                    {resourceSubLinks.map((sublink) => (
                      <NavLink
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
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
                      `flex items-center gap-1 ${linkBase} ${
                        isActive ? "font-semibold text-blue-600" : "text-gray-700"
                      }`
                    }
                  >
                    {link.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${
                        showContactDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </NavLink>

                  <div className={desktopDropdownClass(showContactDropdown)}>
                    {contactSubLinks.map((sublink) => (
                      <NavLink
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-4 py-2.5 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600"
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
                  `${linkBase} ${
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
        <div className="flex justify-end md:hidden">
          <button
            className="rounded-md p-2 transition hover:bg-blue-50"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-blue-100 bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-4">
          {links.map((link) => {
            if (link.name === "Resources") {
              return (
                <div key={link.path}>
                  <button
                    className="flex w-full items-center justify-between rounded-md py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                    onClick={() =>
                      setMobileResourcesOpen((prev) => !prev)
                    }
                  >
                    <span>Resources</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        mobileResourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div className={mobileAccordionClass(mobileResourcesOpen)}>
                    <div className="min-h-0 space-y-1 pl-4">
                      <NavLink
                        to="/resources"
                        onClick={closeMobileMenu}
                        className="block rounded-md py-2 text-gray-600 transition hover:text-blue-600"
                      >
                        Helpful Resources
                      </NavLink>

                      {resourceSubLinks.map((sublink) => (
                        <NavLink
                          key={sublink.path}
                          to={sublink.path}
                          onClick={closeMobileMenu}
                          className="block rounded-md py-2 text-gray-600 transition hover:text-blue-600"
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            if (link.name === "Contact") {
              return (
                <div key={link.path}>
                  <button
                    className="flex w-full items-center justify-between rounded-md py-3 font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                    onClick={() =>
                      setMobileContactOpen((prev) => !prev)
                    }
                  >
                    <span>Contact</span>
                    <ChevronDown
                      className={`transition-transform duration-200 ${
                        mobileContactOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div className={mobileAccordionClass(mobileContactOpen)}>
                    <div className="min-h-0 space-y-1 pl-4">
                      {contactSubLinks.map((sublink) => (
                        <NavLink
                          key={sublink.path}
                          to={sublink.path}
                          onClick={closeMobileMenu}
                          className="block rounded-md py-2 text-gray-600 transition hover:text-blue-600"
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className="block rounded-md py-3 text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Nav;