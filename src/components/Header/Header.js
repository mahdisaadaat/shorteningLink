import "./header.scss";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [navShow, setNavShow] = useState(false);

  return (
    <div className="Header">
      <div className="left">
        {navShow && (
          <nav className="menu">
            <button
              className="Nav-close"
              onClick={() => {
                if (navShow === true) {
                  setNavShow(false);
                }
              }}
            >
              <FaRegTimesCircle />
            </button>
            <ul>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Resources</a>
              </li>
            </ul>
            <button className="login">Login</button>
            <button className="signup">Signup</button>
          </nav>
        )}

        <h2>Mahdisadat</h2>
        <button
          className="Nav-open"
          onClick={() => {
            if (navShow === false) {
              setNavShow(true);
            }
          }}
        >
          menu
        </button>
        <div className="items">
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Resources</a>
        </div>
      </div>
      <div className="right">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
    </div>
  );
};

export default Header;
