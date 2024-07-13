import InvestmentForm from "../../components/investment-form";
import contactUsImage from "../../assets/images/contact-us.webp";

import "./styles.css";

export default function InvestmentPage() {
  return (
    <div className="investment-page">
      <img
        className="investment-page__image"
        src={contactUsImage}
        alt="contact-us"
      />
      <div>
        <p className="investment-page__title">Explore Countries</p>
        <p className="investment-page__sub-title">
          Get Assistance And Start Your Investment Journey
        </p>
        <p className="investment-page__disclaimer">
          Submit your information and our sales team will get in touch to assist
          you on how to invest with us
        </p>
        <InvestmentForm />
      </div>
    </div>
  );
}
