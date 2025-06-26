import { NavLink } from "react-router-dom";
import { useState } from "react";

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
    <div className="flex justify-center py-4 shadow-lg relative">
      <div className="flex space-x-6">
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
                  `hover:text-blue-400 hover:animate-pulse pb-2 ${
                    isActive
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                {link.name}
              </NavLink>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-100">
                  {resourceSubLinks.map((sublink) => (
                    <NavLink
                      key={sublink.path}
                      to={sublink.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
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
              className={({ isActive }) =>
                `hover:text-blue-400 hover:animate-pulse pb-2 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "border-b-2 border-transparent"
                }`
              }
            >
              {link.name}
            </NavLink>
          )
        )}
      </div>
    </div>
  );
}

export default Nav;
