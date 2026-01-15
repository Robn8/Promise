import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Title */}
        {/* Brand */}
<NavLink to="/" className="flex items-center gap-3 group">
  {/* Logo */}
  <img
    src="/hand1.jpg"   // <-- replace with your logo path
    alt="Promise 2 Papa Logo"
    className="w-15 h-15 object-contain"
  />

  {/* Text */}
  <div className="leading-tight">
    <div className="text-2xl font-bold text-blue-600 group-hover:text-blue-700 transition">
      Promise 2 Papa
    </div>
    <div className="text-sm text-gray-500">
      You are not alone on your caregiving journey
    </div>
  </div>
</NavLink>


        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
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
                    ${showDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
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
      </div>
    </div>
  );
}

export default Nav;
