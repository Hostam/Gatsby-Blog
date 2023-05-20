import React from "react";

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

import "../../styles/index.scss";

const items = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar items={items} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
