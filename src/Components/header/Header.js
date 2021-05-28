import React, { useState } from "react";

// assets
import Logo from "../../assets/logo.svg";

// styles
import styles from "./Header.module.css";

// components
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const purplePrimary = getComputedStyle(
  document.documentElement
).getPropertyValue("--col-purple-primary");

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navbarClass = `${styles.navbar} ${showNav ? styles.show : styles.hide}`;

  return (
    <div className={styles.landscape_nav_container}>
      <header>
        <div className={styles.emptybox}></div>
        <div className={styles.logo_container}>
          <img src={Logo} alt="" />
        </div>
        <div className={styles.svg_container} onClick={() => setShowNav(true)}>
          <AiOutlineMenu size={32} color={purplePrimary} />
        </div>
      </header>
      <nav className={navbarClass}>
        <div className={styles.navbar_logoClose}>
          <div className={styles.emptybox}></div>
          <img src={Logo} alt="" />
          <div
            className={styles.nav_svg_container}
            onClick={() => setShowNav(false)}
          >
            <AiOutlineClose size={32} color={purplePrimary} />
          </div>
        </div>
        <ul className={styles.navbar_nav}>
          <li className={styles.has_dropdown}>
            <button>ADOPT</button>
            <ul className={styles.dropdown}>
              <li>Avaliable Cats</li>
              <li>Avaliable Kittens</li>
              <li>Adoption Info</li>
            </ul>
          </li>
          <li className={styles.has_dropdown}>
            <button>HOW TO HELP</button>
            <ul className={styles.dropdown}>
              <li>Donate</li>
              <li>Volunteer</li>
              <li>Surrender a Cat</li>
              <li>Foster a Cat</li>
              <li>Share to Social Media</li>
            </ul>
          </li>
          <li className={styles.has_dropdown}>
            <button>RESOURCES</button>
            <ul className={styles.dropdown}>
              <li>Artical and Tips</li>
              <li>Feline Nutrition</li>
            </ul>
          </li>
          <li className={styles.has_dropdown}>
            <button>NEWS</button>
            <ul className={styles.dropdown}>
              <li>Rescue Stories</li>
              <li>Success Stroies</li>
            </ul>
          </li>
        </ul>
        <button className={styles.navbar_action}>DONATE NOW</button>
      </nav>
    </div>
  );
};

export default Header;
