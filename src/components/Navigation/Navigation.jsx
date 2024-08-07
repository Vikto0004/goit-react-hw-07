import { NavLink, Outlet } from "react-router-dom";
import { logOut } from "../../redux/auth/operation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoggedInAuth,
  selectUserAuth,
} from "../../redux/auth/selectors";

export default function Navigation() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUserAuth);
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        {!isLoggedIn && (
          <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Log In</NavLink>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <p>Hello, {name}!</p>
            <button onClick={() => dispatch(logOut())} type="button">
              Logout
            </button>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
}
