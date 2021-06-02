import React, { useState } from "react";

// assets
import Prince from "../assets/catsPicture/Prince.png";
import Lucca from "../assets/catsPicture/Lucca.png";
import Colby from "../assets/catsPicture/Colby.png";

// styles
import styles from "./AvaliableCats.module.css";

// components
import CatCard from "../Components/CatCard";

const AvaliableCats = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };
  const filterOptions = (
    <ul className={styles.filterOptions}>
      <li>AVAILABLE CATS</li>
      <li>FILTER BY</li>
      <li>
        <button>APPLY FILTERS</button>
      </li>
    </ul>
  );

  return (
    <div className="page_container">
      <p className={styles.important_p}>
        In order to speed up the adoption process, please complete an online
        application as well as calling the phone line 416 284 2140
      </p>
      <div className={styles.filterButton_container}>
        <button className={styles.filterButton} onClick={toggleFilter}>
          <div>
            Filter
            <div
              className={isFilterOpen ? styles.arrow_up : styles.arrow_down}
            ></div>
          </div>
        </button>
        {isFilterOpen ? filterOptions : ""}
      </div>
      <div className={styles.desktop_filter}>{filterOptions}</div>

      <div className={styles.cats_grid}>
        <CatCard
          catImage={Prince}
          name="Prince"
          gender="male"
          dateOfBirth="August 1, 2013"
          breed="Turkish Van Cross"
        />
        <CatCard
          catImage={Lucca}
          name="Lucca"
          gender="female"
          dateOfBirth="June 01, 2017"
          breed="Domestic S Hair"
        />
        <CatCard
          catImage={Colby}
          name="Colby"
          gender="male"
          dateOfBirth="July 22, 2013"
          breed="Domestic S Hair"
        />
        <CatCard
          catImage={Prince}
          name="Prince"
          gender="male"
          dateOfBirth="August 1, 2013"
          breed="Turkish Van Cross"
        />
        <CatCard
          catImage={Lucca}
          name="Lucca"
          gender="female"
          dateOfBirth="June 01, 2017"
          breed="Domestic S Hair"
        />
      </div>
    </div>
  );
};

export default AvaliableCats;
