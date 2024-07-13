import { OptionValue } from "../select";

export interface InvestmentFormInitialData {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
  destination?: OptionValue | null;
  contactType?: OptionValue | null;
  contactTime?: OptionValue | null;
  message: string;
}
