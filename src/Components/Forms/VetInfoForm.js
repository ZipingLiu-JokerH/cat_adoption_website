import React from "react";
import { Formik, Form, Field } from "formik";

import RadioGroup from "./RadioGroup";

import styles from "./Form.module.css";

const VetInfoForm = ({ initVal, handleSaveForm, goPrevious, goNext }) => {
  return (
    <Formik
      initialValues={initVal}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          handleSaveForm(values);
          setSubmitting(false);
          goNext();
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className={styles.myForm}>
          <RadioGroup
            groupid="contactVet-group"
            question="Can we contact your vet?"
            groupname="contactVet"
            choices={["Yes", "No"]}
          />

          <label htmlFor="clinicName">
            Name of veterinary clinic
            <Field id="clinicName" name="clinicName" />
          </label>

          <label htmlFor="vetName">
            Name of vet
            <Field id="vetName" name="vetName" />
          </label>

          <label htmlFor="vetPhone" style={{ marginBottom: "2rem" }}>
            Vet phone number
            <Field id="vetPhone" name="vetPhone" type="tel" />
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
        </Form>
      )}
    </Formik>
  );
};

export default VetInfoForm;
