import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex bg-slate-300 py-5 default-container justify-between items-center">
        <div>
          <Link to="/">TaskMinder</Link>
        </div>
        <ul className={`flex items-center gap-8`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Add Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              All Task
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
