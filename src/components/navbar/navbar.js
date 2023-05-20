import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import * as navbarStyles from "./navbar.module.scss";

const Navbar = ({ items }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: "undefined",
    height: "undefined",
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.header__content}>
        <Link to="/" className={navbarStyles.header__content__logo}>
          Thomas Païs
        </Link>
        <nav
          className={`${navbarStyles.header__content__nav} ${
            menuOpen && size.width < 768 ? navbarStyles.isMenu : ""
          }`}
        >
          <ul>
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.url}
                    onClick={menuToggleHandler}
                    activeClassName={navbarStyles.active}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button>Resume</button>
        </nav>
        <div className={navbarStyles.header__content__toggle}>
          {!menuOpen ? (
            <FontAwesomeIcon icon={faBars} onClick={menuToggleHandler} />
          ) : (
            <FontAwesomeIcon icon={faXmark} onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
