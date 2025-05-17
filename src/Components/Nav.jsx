import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-center py-4 shadow-lg">
      <div className="flex space-x-6">
        {[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "About Us", path: "/aboutus" },
          { name: "FAQ", path: "/FAQ" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
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
        ))}
      </div>
    </div>
  );
}

export default Nav;

