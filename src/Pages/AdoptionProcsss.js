import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import PersonalInfoForm from "../Components/Forms/PersonalInfoForm";
import HouseHoldInfoForm from "../Components/Forms/HouseHoldInfoForm";

import {
  PERSONAL_INITIAL_VALUES,
  HOUSEHOLD_INITIAL_VALUES,
} from "../Components/Forms/initialFormValues";

import styles from "./AdoptionProcess.module.css";

const FORM_TITLES = ["PERSONAL DETAILS", "HOUSEHOLD AND LIFESTYLE INFO"];

const AdoptionProcsss = () => {
  const [workingFormNumber, setWorkingFormNumber] = useState(0);
  const [formData, setFormData] = useState([
    PERSONAL_INITIAL_VALUES,
    HOUSEHOLD_INITIAL_VALUES,
  ]);
  let history = useHistory();
  let { name } = useParams();

  const handleBackToCatPage = () => {
    history.push(`/single-cat/${name}`);
  };
  const goToPreviousForm = (saveData) => {
    handleSaveForm(saveData);
    setWorkingFormNumber((prevState) => prevState - 1);
  };
  const goToNextForm = () => {
    setWorkingFormNumber((prevState) => prevState + 1);
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
    />,
  ];

  const intro = (
    <>
      <h2>GET THE ADOPTION STARTED</h2>
      <p>
        Please bear in mind that it is against Abbey Cat policy to adopt a
        single kitten under the age of 6 months to a home without a kitten of
        similar age for company.
      </p>
      <p>All fields are required unless marked optional.</p>
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
      {intro}
      <div className={styles.formContainer}>
        <h4>{FORM_TITLES[workingFormNumber]}</h4>
        {FORMS[workingFormNumber]}
      </div>
    </div>
  );
};

export default AdoptionProcsss;
