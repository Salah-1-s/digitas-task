import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import GoldButton from "../button";
import SelectDropdown from "../select-dropdown";
import { FormInitialData } from "../../interfaces/inputs/investment-form";
import { InvestmentFormSchema, validatePhone } from "../../utils/investment";

import ErrorIcon from "../../assets/icons/error.svg";

import "react-phone-input-2/lib/style.css";
import "./styles.css";

export default function InvestmentForm() {
  const handleSubmitForm = (
    formData: FormInitialData,
    resetForm: () => void
  ) => {
    console.log(formData);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        countryCode: "20",
        destination: null,
        contactType: null,
        contactTime: null,
        message: "",
      }}
      validationSchema={InvestmentFormSchema}
      onSubmit={(values, { resetForm }) => {
        handleSubmitForm(values, resetForm);
      }}
    >
      {({ errors, touched, setFieldValue, values, isSubmitting }) => (
        <Form className="investment-form">
          <div className="input-wrapper">
            <label htmlFor="firstName">Full Name*</label>
            <Field
              name="fullName"
              type="text"
              className={errors.fullName && touched.fullName ? "error" : ""}
            />

            <ErrorMessage
              name="fullName"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email">Email Address*</label>
            <Field
              name="email"
              type="email"
              className={errors.email && touched.email ? "error" : ""}
              placeholder="example@example"
            />

            <ErrorMessage
              name="email"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <div className="phone-wrapper">
              <PhoneInput
                countryCodeEditable={false}
                inputProps={{
                  name: "countryCode",
                }}
                country={"eg"}
                onChange={(phone) => {
                  setFieldValue("countryCode", phone);
                  setFieldValue("phoneNumber", "");
                }}
                enableSearch={true}
                value={values.countryCode}
              />
              <Field
                name="phoneNumber"
                type="tel"
                validate={() =>
                  validatePhone(values.phoneNumber, values.countryCode)
                }
                className={
                  errors.phoneNumber && touched.phoneNumber ? "error" : ""
                }
                placeholder="123 456 7890"
              />
            </div>

            <ErrorMessage
              name="phoneNumber"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="destination">
              Destinations I’m Interested In (Optional)
            </label>
            <SelectDropdown
              name="destination"
              className={
                errors.destination && touched.destination ? "error" : ""
              }
              placeholder="Select..."
              onChange={(option) => setFieldValue("destination", option)}
              options={[
                { value: 0, label: "Destination 1" },
                { value: 1, label: "Destination 2" },
                { value: 2, label: "Destination 3" },
              ]}
              selectedOption={values.destination || null}
            />

            <ErrorMessage
              name="destination"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="contactType">
              How would you prefer us to reach you?*
            </label>
            <SelectDropdown
              name="contactType"
              className={
                errors.contactType && touched.contactType ? "error" : ""
              }
              placeholder="Select..."
              onChange={(option) => setFieldValue("contactType", option)}
              options={[
                { value: 0, label: "Phone call" },
                { value: 1, label: "Whatsapp" },
                { value: 2, label: "Email" },
                { value: 3, label: "Virtual meeting" },
              ]}
              selectedOption={values.contactType || null}
            />

            <ErrorMessage
              name="contactType"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="contactTime">
              When would you prefer us to contact you?*
            </label>
            <SelectDropdown
              name="contactTime"
              className={
                errors.contactTime && touched.contactTime ? "error" : ""
              }
              placeholder="Select..."
              onChange={(option) => setFieldValue("contactTime", option)}
              options={[
                { value: 0, label: "Morning" },
                { value: 1, label: "Afternoon" },
                { value: 2, label: "Night" },
              ]}
              selectedOption={values.contactTime || null}
            />

            <ErrorMessage
              name="contactTime"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="requestDetails">Message (Optional)</label>
            <Field
              name="message"
              as="textarea"
              rows="6"
              className={errors.message && touched.message ? "error" : ""}
              placeholder="What would you like to inquire about?"
            />

            <ErrorMessage
              name="message"
              render={(msg: string) => (
                <p className="error">
                  <img src={ErrorIcon} role="presentation" alt="" />
                  {msg}
                </p>
              )}
            />
          </div>
          <p className="investment-form__disclaimer">
            We typically reply to messages within 24 hours. A message will be
            sent to your email to confirm your request.
          </p>
          <GoldButton
            className="contact-btn"
            type="submit"
            disabled={isSubmitting}
          >
            Send Request
          </GoldButton>
        </Form>
      )}
    </Formik>
  );
}
