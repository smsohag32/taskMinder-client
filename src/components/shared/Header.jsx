import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex bg-slate-100 py-5 default-container  justify-between items-center">
        <div className="text-xl text-primary font-bold">
          <Link to="/">
            Task<span className="text-black">Minder</span>
          </Link>
        </div>
        <ul className={`flex items-center font-bold uppercase gap-8`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              All Task
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-task"
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              Add Task
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
