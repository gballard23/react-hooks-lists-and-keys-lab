import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navBar = links.map((link) => (
    <a key={link} href={'#' + link}>{link}</a>
  ))
  

  return <nav>{navBar}</nav>;
}

export default NavBar;
