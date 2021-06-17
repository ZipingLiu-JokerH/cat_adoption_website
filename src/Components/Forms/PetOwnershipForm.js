import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikErrorFocus from "formik-error-focus";

import RadioGroup from "./RadioGroup";
import InputError from "./InputError";

import styles from "./Form.module.css";

const PetOwnershipForm = ({
  initVal,
  handleSaveForm,
  goPrevious,
  goNext,
  adoptCatName,
}) => {
  return (
    <Formik
      initialValues={initVal}
      validate={(values) => {
        const errors = {};
        if (!values.petOwnershipHistory) {
          errors.petOwnershipHistory = "Required";
        }
        if (!values.catPreparation) {
          errors.catPreparation = "Required";
        }
        if (!values.trainingMethods) {
          errors.trainingMethods = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // save to server stuff
          // alert(JSON.stringify(values, null, 2));
          handleSaveForm(values);
          setSubmitting(false);
          goNext();
        }, 400);
      }}
    >
      {({ isSubmitting, values, touched, errors }) => (
        <Form className={styles.myForm}>
          <label htmlFor="catName">
            Name of cat
            <Field id="catName" name="catName" value={adoptCatName} />
          </label>

          <RadioGroup
            groupid="isGift-group"
            question="Is this a gift?"
            groupname="isGift"
            choices={["Yes", "No"]}
          />

          <label htmlFor="giftRecipient">
            If yes, for who? (optional)
            <Field id="giftRecipient" name="giftRecipient" />
          </label>

          <RadioGroup
            groupid="reasonToAdopt-group"
            question="Why would you like to adopt a cat/kitten?"
            groupname="reasonToAdopt"
            choices={[
              "Companion for a person",
              "Companion for a pet",
              "Companion for a child",
            ]}
          />

          <label htmlFor="petOwnershipHistory">
            Tell us a bit about your pet ownership history:
            <Field
              id="petOwnershipHistory"
              name="petOwnershipHistory"
              as="textarea"
              className={
                touched.petOwnershipHistory && errors.petOwnershipHistory
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="petOwnershipHistory" component={InputError} />
          </label>

          <RadioGroup
            groupid="bringPetToShelter-group"
            question="Have you ever brought one of your pets to an animal shelter because you felt you could not care for it anymore?"
            groupname="bringPetToShelter"
            choices={["Yes", "No"]}
          />

          <label htmlFor="reasonToShelter">
            If so, Why? (optional)
            <Field id="reasonToShelter" name="reasonToShelter" as="textarea" />
          </label>

          <label htmlFor="catPreparation">
            In a few sentences, please describe what you think your cat / kitten
            needs will be and what supplies you think you will need to purchase
            before your cat/kitten arrives at your home.
            <Field
              id="catPreparation"
              name="catPreparation"
              as="textarea"
              className={
                touched.catPreparation && errors.catPreparation
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="catPreparation" component={InputError} />
          </label>

          <label htmlFor="trainingMethods">
            What training methods will you use for your cat/kittens?
            <Field
              id="trainingMethods"
              name="trainingMethods"
              as="textarea"
              className={
                touched.trainingMethods && errors.trainingMethods
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="trainingMethods" component={InputError} />
          </label>

          <RadioGroup
            groupid="declawed-group"
            question="Have you ever had your cat declawed?"
            groupname="declawed"
            choices={["Yes", "No"]}
          />

          <label htmlFor="currentlyPets">
            What pets do you currently have? (optional)
            <Field id="currentlyPets" name="currentlyPets" as="textarea" />
          </label>

          <label htmlFor="whereGetPets">
            Where did you get your pets? (optional)
            <Field id="whereGetPets" name="whereGetPets" />
          </label>

          <RadioGroup
            groupid="petsVaccinated-group"
            question="Have your pets been vaccinated?"
            groupname="petsVaccinated"
            choices={["Yes", "No"]}
          />

          <RadioGroup
            groupid="petsNeuteredOrSpayed-group"
            question="Are they neutered or spayed?"
            groupname="petsNeuteredOrSpayed"
            choices={["Yes", "No"]}
          />

          <label htmlFor="animalSpendTime">
            Where do your animals spend time?
            <Field id="animalSpendTime" name="animalSpendTime" as="select">
              <option value="indoor">indoor</option>
              <option value="outdoor">outdoor</option>
              <option value="both">both</option>
            </Field>
          </label>

          <RadioGroup
            groupid="petInsurance-group"
            question="Do you have pet insurance?"
            groupname="petInsurance"
            choices={["Yes", "No"]}
          />

          <label htmlFor="foodBrand" style={{ marginBottom: "2rem" }}>
            What brands of food do you feed your cats? (optional)
            <Field id="foodBrand" name="foodBrand" as="textarea" />
          </label>

          <div className={styles.actionButtons}>
            <button
              type="button"
              onClick={() => {
                handleSaveForm(values);
                goPrevious();
              }}
            >
              BACK
            </button>
            <button type="submit" disabled={isSubmitting}>
              NEXT
            </button>
          </div>
          <FormikErrorFocus
            offset={0}
            align={"middle"}
            focusDelay={200}
            ease={"linear"}
            duration={500}
          />
        </Form>
      )}
    </Formik>
  );
};

export default PetOwnershipForm;
