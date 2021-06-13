import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikErrorFocus from "formik-error-focus";

import RadioGroup from "./RadioGroup";
import InputError from "./InputError";

import styles from "./Form.module.css";

const HouseHoldInfoForm = ({ initVal, handleSaveForm, goPrevious, goNext }) => {
  return (
    <Formik
      initialValues={initVal}
      validate={(values) => {
        const errors = {};
        if (!values.householdCapacity) {
          errors.householdCapacity = "Required";
        }
        if (!values.aloneTime) {
          errors.aloneTime = "Required";
        }
        if (!values.activityWhileVacationing) {
          errors.activityWhileVacationing = "Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          handleSaveForm(values);
          setSubmitting(false);
          goNext();
        }, 400);
      }}
    >
      {({ isSubmitting, values, touched, errors }) => (
        <Form className={styles.myForm}>
          <label htmlFor="householdCapacity">
            How many people live in your household?
            <Field
              id="householdCapacity"
              name="householdCapacity"
              className={
                touched.householdCapacity && errors.householdCapacity
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage name="householdCapacity" component={InputError} />
          </label>

          <RadioGroup
            groupid="haveChildren-group"
            question="Do you have any Children?"
            groupname="haveChildren"
            choices={["Yes", "No"]}
          />

          <label htmlFor="childrenAge">
            If so, what are the ages of the children? (optional)
            <Field id="childrenAge" name="childrenAge" as="textarea" />
          </label>

          <RadioGroup
            groupid="agreeHaveCat-group"
            question="Has everyone in your family agreed to gettng a cat?"
            groupname="agreeHaveCat"
            choices={["Yes", "No"]}
          />

          <RadioGroup
            groupid="havePetAllergie-group"
            question="Do any of your family members have pet allergies?"
            groupname="havePetAllergie"
            choices={["Yes", "No"]}
          />

          <RadioGroup
            groupid="useOilDiffuser-group"
            question="Do you use an essential oil diffuser?"
            groupname="useOilDiffuser"
            choices={["Yes", "No"]}
          />

          <RadioGroup
            groupid="renOrOwn-group"
            question="Do you rent or own?"
            groupname="renOrOwn"
            choices={["Rent", "Own"]}
          />

          <label htmlFor="homeType">
            Type of home:
            <Field id="homeType" name="homeType" as="select">
              <option value="Condo/Apt">Condo/Apt</option>
              <option value="Town">Town</option>
              <option value="House">House</option>
            </Field>
          </label>

          <RadioGroup
            groupid="catPermitted-group"
            question="Are cats permitted?"
            groupname="catPermitted"
            choices={["Yes", "No"]}
          />

          <RadioGroup
            groupid="entireHome-group"
            question="Will your cat have access to your entire home?"
            groupname="entireHome"
            choices={["Yes", "No"]}
          />

          <label htmlFor="householdCapacity">
            How long will your cat be left alone each day?
            <Field
              id="aloneTime"
              name="aloneTime"
              className={
                touched.aloneTime && errors.aloneTime ? styles.has_error : null
              }
            />
            <ErrorMessage name="aloneTime" component={InputError} />
          </label>

          <RadioGroup
            groupid="movingNextMonth-group"
            question="Do you plan on moving or going on vacation in the next month?"
            groupname="movingNextMonth"
            choices={["Yes", "No"]}
          />

          <label htmlFor="activityWhileVacationing">
            What will you do with your cat while you are vacationing?
            <Field
              id="activityWhileVacationing"
              name="activityWhileVacationing"
              as="textarea"
              className={
                touched.activityWhileVacationing &&
                errors.activityWhileVacationing
                  ? styles.has_error
                  : null
              }
            />
            <ErrorMessage
              name="activityWhileVacationing"
              component={InputError}
            />
          </label>

          <div id="timetoreach-checkbox-group">When is best to reach you?</div>
          <div
            role="group"
            aria-labelledby="timetoreach-checkbox-group"
            className={`${styles.checkbox_group} ${styles.column_group}`}
          >
            <label>
              <Field type="checkbox" name="bestTimeToReach" value="Morning" />
              <span>Morning</span>
            </label>
            <label>
              <Field type="checkbox" name="bestTimeToReach" value="Afternoon" />
              <span>Afternoon</span>
            </label>
            <label>
              <Field type="checkbox" name="bestTimeToReach" value="Evening" />
              <span>Evening</span>
            </label>
          </div>

          <RadioGroup
            groupid="haveCar-group"
            question="Do you have a car?"
            groupname="haveCar"
            choices={["Yes", "No"]}
          />

          <label htmlFor="whereKnowUs" style={{ marginBottom: "2rem" }}>
            How did you hear about Abbey Cats? (optional)
            <Field id="whereKnowUs" name="whereKnowUs" as="textarea" />
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

export default HouseHoldInfoForm;
