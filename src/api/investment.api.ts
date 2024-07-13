import { InvestmentFormInitialData } from "../interfaces/inputs/investment-form";

export class Investment {
  public static submitInvestmentForm(formData: InvestmentFormInitialData) {
    return Promise.resolve({
      data: formData,
      message: "Form submitted successfully",
    });
  }
}
