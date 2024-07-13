import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js/mobile";
import { InvestmentFormInitialData } from "../interfaces/inputs/investment-form";
import { Investment as InvestmentAPI } from "../api/investment.api";

export const stringValidationRegex = /^(?!\s+$)/;

export const InvestmentFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full name must be more than 3 characters.")
    .max(25)
    .required("Please enter your name")
    .matches(stringValidationRegex, "Name can't contain only white spaces"),
  email: Yup.string().email().required("Please enter a valid email"),
  countryCode: Yup.string().required(),
  phoneNumber: Yup.string().required("Please enter your phone number"),
  contactType: Yup.object().nullable().required("Required"),
  contactTime: Yup.object().nullable().required("Required"),
  message: Yup.string().max(250, "Message should be 250 characters maximum"),
});

export const validatePhone = (phone: string, code: string) => {
  const phoneNumberWithCountryCode = `+${code}${parseInt(phone)}`;
  if (!isValidPhoneNumber(phoneNumberWithCountryCode)) {
    return "Insert valid phone number";
  }
};

export class Investment {
  public static submitInvestmentForm(formData: InvestmentFormInitialData) {
    return InvestmentAPI.submitInvestmentForm(formData)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}
