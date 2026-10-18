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
    "rounded-md px-3 py-2 transition duration-200 hover:bg-brand-sage/20 hover:text-brand-primary";

  const desktopDropdownClass = (open) =>
    `absolute left-0 top-full z-50 mt-2 w-48 origin-top overflow-hidden rounded-xl border border-brand-sage/35 bg-brand-cream shadow-lg ring-1 ring-black/5 transition-all duration-200 ease-out ${
      open
        ? "visible translate-y-0 scale-100 opacity-100"
        : "invisible pointer-events-none -translate-y-2 scale-95 opacity-0"
    }`;

  const mobileAccordionClass = (open) =>
    `grid overflow-hidden transition-all duration-300 ease-in-out ${
      open
        ? "mt-2 grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
    }`;

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-brand-sage/35 bg-brand-cream/95 shadow-md backdrop-blur-lg"
          : "border-b border-brand-sage/35 bg-brand-cream/85 backdrop-blur-md"
      }`}
    >
      {/* NAV BAR */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* LEFT: Logo */}
        <div className="flex items-center justify-start">
          <NavLink
            to="/"
            className="group flex shrink-0 items-center"
            aria-label="Go to Promise2Papa homepage"
          >
            <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 md:h-32 md:w-32">
              {/* Soft gradient glow */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-brand-sage/40 via-brand-primary/25 to-brand-olive/30 opacity-70 blur-xl transition duration-300 group-hover:scale-110 group-hover:opacity-100" />

              {/* Heart background */}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 fill-brand-sage/20 stroke-brand-primary stroke-[1.6] drop-shadow-sm transition duration-300 group-hover:scale-125 group-hover:fill-brand-sage/35 group-hover:stroke-brand-olive"
              >
                <path d="M12 21s-6.716-4.35-9.428-7.062C.46 11.826.333 8.98 2.343 6.97c2.01-2.01 4.856-1.883 6.968.23L12 9.889l2.689-2.689c2.112-2.112 4.958-2.24 6.968-.23 2.01 2.01 1.883 4.856-.23 6.968C18.716 16.65 12 21 12 21z" />
              </svg>

              {/* Logo image */}
              <img
                src="/hand1.jpg"
                alt="Promise2Papa Logo"
                className="relative z-10 mt-2 h-11 w-11 rounded-full object-cover shadow-lg ring-4 ring-brand-cream transition duration-300 ease-out group-hover:scale-110 group-hover:shadow-xl sm:mt-3 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
            </div>
          </NavLink>
        </div>

        {/* CENTER: Mobile title */}
        <NavLink
          to="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center md:hidden"
          aria-label="Go to Promise2Papa homepage"
        >
          <div className=" whitespace-nowrap bg-gradient-to-r from-brand-primary via-brand-olive to-brand-forest bg-clip-text text-xl font-bold tracking-tight text-transparent sm:text-3xl">
            Promise2Papa
          </div>
        </NavLink>

        {/* CENTER: Desktop title */}
        <div className="hidden flex-1 justify-center md:flex">
          <NavLink to="/" className="text-center">
            <div className="bg-gradient-to-r from-brand-primary via-brand-olive to-brand-forest bg-clip-text text-4xl font-bold tracking-tight text-transparent">
              Promise2Papa
            </div>

            <div className="mt-1 text-sm text-brand-olive">
              You are not alone on your caregiving journey
            </div>
          </NavLink>
        </div>

        {/* RIGHT: Desktop links */}
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
                        isActive
                          ? "font-semibold text-brand-primary"
                          : "text-brand-olive"
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
                        className="block px-4 py-2.5 text-sm text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
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
                        isActive
                          ? "font-semibold text-brand-primary"
                          : "text-brand-olive"
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
                        className="block px-4 py-2.5 text-sm text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
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
                    isActive
                      ? "font-semibold text-brand-primary"
                      : "text-brand-olive"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        {/* RIGHT: Mobile hamburger */}
        <div className="flex justify-end md:hidden">
          <button
            type="button"
            className="rounded-md p-2 transition hover:bg-brand-sage/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-brand-sage/35 bg-brand-cream/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? "max-h-[700px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="space-y-1 px-6 py-4">
          {links.map((link) => {
            if (link.name === "Resources") {
              return (
                <div key={link.path}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-2 py-3 font-medium text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
                    onClick={() =>
                      setMobileResourcesOpen((prev) => !prev)
                    }
                    aria-expanded={mobileResourcesOpen}
                  >
                    <span>Resources</span>

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
                        mobileResourcesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div className={mobileAccordionClass(mobileResourcesOpen)}>
                    <div className="min-h-0 space-y-1 pl-4">
                      <NavLink
                        to="/resources"
                        onClick={closeMobileMenu}
                        className="block rounded-md px-2 py-2 text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
                      >
                        Helpful Resources
                      </NavLink>

                      {resourceSubLinks.map((sublink) => (
                        <NavLink
                          key={sublink.path}
                          to={sublink.path}
                          onClick={closeMobileMenu}
                          className="block rounded-md px-2 py-2 text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
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
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-2 py-3 font-medium text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
                    onClick={() => setMobileContactOpen((prev) => !prev)}
                    aria-expanded={mobileContactOpen}
                  >
                    <span>Contact</span>

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-200 ${
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
                          className="block rounded-md px-2 py-2 text-brand-olive transition hover:bg-brand-sage/20 hover:text-brand-primary"
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
                className={({ isActive }) =>
                  `block rounded-md px-2 py-3 transition hover:bg-brand-sage/20 hover:text-brand-primary ${
                    isActive
                      ? "font-semibold text-brand-primary"
                      : "text-brand-olive"
                  }`
                }
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