import React, { useState, useContext } from "react";

// cats data via context
import context from "../CatsContext";

// styles
import styles from "./AvaliableCats.module.css";

// components
import CatCard from "../Components/CatCard";
import FilterOptions from "../Components/FilterOptions";

const AvaliableCats = () => {
  const catsData = useContext(context);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filteredCats, setFilteredCats] = useState(catsData);

  const toggleFilter = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const handleApplyFilter = (filters) => {
    // receive an array of filters with these possiable filter
    // ["male", "female", "short_hair", "long_hair"]

    // todo, this filter logic can be improved!!!!!
    let filtered = [...catsData];
    if (filters.includes("male")) {
      filtered = filtered.filter((cat) => cat.gender === "male");
    }
    if (filters.includes("female")) {
      filtered = filtered.filter((cat) => cat.gender === "female");
    }
    if (filters.includes("short_hair")) {
      filtered = filtered.filter((cat) => cat.isShortHair);
    }
    if (filters.includes("long_hair")) {
      filtered = filtered.filter((cat) => !cat.isShortHair);
    }
    setFilteredCats(filtered);
  };

  const handleFilterClose = () => {
    setIsFilterOpen(false);
  };

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
        {isFilterOpen ? (
          <FilterOptions
            onClose={handleFilterClose}
            onApplyFilter={handleApplyFilter}
          />
        ) : (
          ""
        )}
      </div>
      <div className={styles.desktop_filter}>
        {
          <FilterOptions
            onClose={handleFilterClose}
            onApplyFilter={handleApplyFilter}
          />
        }
      </div>
      <div className={styles.cats_grid}>
        {filteredCats.map((cat) => (
          <CatCard
            key={cat.name}
            catImage={cat.images[0]}
            name={cat.name}
            gender={cat.gender}
            dateOfBirth={cat.dateOfBirth}
            breed={cat.breed}
          />
        ))}
      </div>
    </div>
  );
};

export default AvaliableCats;
