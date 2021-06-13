import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import PersonalInfoForm from "../Components/Forms/PersonalInfoForm";
import HouseHoldInfoForm from "../Components/Forms/HouseHoldInfoForm";
import VetInfoForm from "../Components/Forms/VetInfoForm";
import PetOwnershipForm from "../Components/Forms/PetOwnershipForm";

import {
  PERSONAL_INITIAL_VALUES,
  HOUSEHOLD_INITIAL_VALUES,
  VET_INITIAL_VALUES,
  PETOWNERSHIP_INITIAL_VALUES,
} from "../Components/Forms/initialFormValues";

import catPaw_color from "../assets/catPaw_color.png";
import catPaw_grey from "../assets/catPaw_gray.png";
import interactive_catFace from "../assets/interactive_catFace.png";
import interactive_catPaw from "../assets/interactive_catPaw.png";

import styles from "./AdoptionProcess.module.css";

const FORM_TITLES = [
  "PERSONAL DETAILS",
  "HOUSEHOLD AND LIFESTYLE INFO",
  "VET INFO (Optional)",
  "PET OWNERSHIP",
];

let formProgressIndicator = [
  catPaw_color,
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
  catPaw_grey,
];

const AdoptionProcsss = () => {
  let history = useHistory();
  let { name } = useParams();
  const [workingFormNumber, setWorkingFormNumber] = useState(0);
  const [indicator, setIndicator] = useState(formProgressIndicator);
  const [formData, setFormData] = useState([
    PERSONAL_INITIAL_VALUES,
    HOUSEHOLD_INITIAL_VALUES,
    VET_INITIAL_VALUES,
    PETOWNERSHIP_INITIAL_VALUES,
  ]);

  const [isInteractCat, setIsInteractCat] = useState(false);
  const toggleInteract = () => {
    setIsInteractCat((pre) => !pre);
  };

  useEffect(() => {
    if (workingFormNumber === 4) {
      setIsInteractCat(true);
    }
  }, [workingFormNumber]);

  const updateFormIndicator = (formNumber) => {
    setIndicator((prevState) => {
      let newState = [...prevState];
      newState[formNumber] = catPaw_color;
      return newState;
    });
  };
  const handleBackToCatPage = () => {
    history.push(`/single-cat/${name}`);
  };
  const goToPreviousForm = () => {
    window.scrollTo(0, 0);
    setWorkingFormNumber((prevState) => prevState - 1);
  };
  const goToNextForm = () => {
    window.scrollTo(0, 0);
    setWorkingFormNumber((prevState) => {
      updateFormIndicator(prevState + 1);
      return prevState + 1;
    });
  };
  const handleSaveForm = (data) => {
    setFormData((prevState) => {
      const newState = [...prevState];
      newState[workingFormNumber] = data;
      return newState;
    });
  };

  const FORMS = [
    <PersonalInfoForm
      initVal={formData[0]}
      handleSaveForm={handleSaveForm}
      goPrevious={handleBackToCatPage}
      goNext={goToNextForm}
    />,
    <HouseHoldInfoForm
      initVal={formData[1]}
      handleSaveForm={handleSaveForm}
      goPrevious={goToPreviousForm}
      goNext={goToNextForm}
    />,
    <VetInfoForm
      initVal={formData[2]}
      handleSaveForm={handleSaveForm}
      goPrevious={goToPreviousForm}
      goNext={goToNextForm}
    />,
    <PetOwnershipForm
      initVal={formData[3]}
      adoptCatName={name}
      handleSaveForm={handleSaveForm}
      goPrevious={goToPreviousForm}
      goNext={goToNextForm}
    />,
  ];

  const intro = (
    <>
      <h2>GET THE ADOPTION STARTED</h2>
      <p style={{ maxWidth: "80%" }}>
        Please bear in mind that it is against Abbey Cat policy to adopt a
        single kitten under the age of 6 months to a home without a kitten of
        similar age for company.
      </p>
      <p>All fields are required unless marked optional.</p>
    </>
  );

  const ending = (
    <>
      <h2>Thanks for applying!</h2>
      <p>We will call you within a week if you are a match for {name}.</p>
      <button
        className={styles.backhome_button}
        onClick={() => history.push("/")}
      >
        GO TO HOME
      </button>
    </>
  );

  return (
    <div className="page_container">
      <h2>ADOPTION PROCESS</h2>
      <p>
        Abbey Cats first goal is to find the best match between cat and adopter.
        As such, our process is not the same as other shelters and can take
        anywhere from 24 hours to several days depending on the availability of
        counselors and foster homes.
      </p>
      <ol style={{ marginLeft: "1rem", marginBottom: "2rem" }}>
        <li>Questionnaire</li>
        <li>Virtual Meet and Greet</li>
        <li>Finalization</li>
      </ol>
      <div className={styles.process_indicator}>
        {indicator.map((catPaw, i) => (
          <img src={catPaw} key={`form_${i}`} alt={`form ${i} indicator`} />
        ))}
      </div>

      {/** this part is the interactive cat image */}
      <div
        className={`${styles.interactive_cat} ${
          isInteractCat ? styles.show : styles.hide
        }`}
        onMouseEnter={toggleInteract}
        onMouseLeave={toggleInteract}
      >
        {workingFormNumber === 4 && (
          <div className={styles.talk_bubble}>
            <span>SEE YOU SOON!</span>
          </div>
        )}

        <img
          src={interactive_catFace}
          alt="interactive cat face"
          className={styles.interactive_face}
        />
        <img
          src={interactive_catPaw}
          alt="interactive cat paw"
          className={styles.interactive_paw_up}
        />
        <img
          src={interactive_catPaw}
          alt="interactive cat paw"
          className={styles.interactive_paw_down}
        />
      </div>

      {workingFormNumber === 0 && intro}
      {workingFormNumber < 4 && (
        <div className={styles.form_container}>
          <h4>{FORM_TITLES[workingFormNumber]}</h4>
          {FORMS[workingFormNumber]}
        </div>
      )}
      {workingFormNumber === 4 && ending}
    </div>
  );
};

export default AdoptionProcsss;
