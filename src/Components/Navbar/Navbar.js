import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Redux/actions/user";

import "./Navbar.css";
const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return (
    <header>
      <h2>
        <i className="icon-plane" />
        <Link to="/">FEMJECT</Link>
      </h2>
      <nav>
        <ul>
          <ul className="ul_auth">
            {isAuth ? (
              <ul>
                <Link to="/">
                  {" "}
                  <li className="auth" onClick={() => dispatch(logout())}>
                    LOGOUT{" "}
                  </li>
                </Link>
                <li class="nav-item">
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            ) : (
              <ul>
                {" "}
                <Link to="/register">
                  {" "}
                  <li className="auth">Register </li>
                </Link>
                <Link to="/login">
                  {" "}
                  <li className="auth">Login </li>
                </Link>
                <li class="nav-item">
                  <Link to="/Admin">Admin</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Employee">Employee</Link>
                </li>
              </ul>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;