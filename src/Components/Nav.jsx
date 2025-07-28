import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Resources", path: "/resources" },
    { name: "About Us", path: "/aboutus" },
    { name: "FAQ", path: "/FAQ" },
    { name: "Types Of Care", path: "/typesofcare" },
    { name: "Podcast", path: "/podcast" },
  ];

  const resourceSubLinks = [
    { name: "Equipment", path: "/resources#equipment" },
    { name: "Caregivers", path: "/resources#care" },
    { name: "Support Groups", path: "/resources#support-groups" },
    { name: "Videos", path: "/resources/videos" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Title */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition"
        >
          Promise 2 Papa
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

                {/* Dropdown with smooth animation */}
                <div
                  className={`absolute left-0 w-44 bg-white border rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-out 
                  ${showDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
                >
                  {resourceSubLinks.map((sublink) => (
                    <NavLink
                      key={sublink.path}
                      to={sublink.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                      onClick={() => setShowDropdown(false)} // closes when clicking
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