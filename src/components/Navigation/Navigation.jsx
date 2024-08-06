import { NavLink, Outlet } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="phones">Phones</NavLink>
        <div>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
        <div>
          <p>Hello, {"name"}</p>
          <button type="button">Logout</button>
        </div>
      </header>
      <Outlet />
    </>
  );
}
