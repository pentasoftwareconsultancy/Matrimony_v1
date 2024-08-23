import style from "./FromPages.module.css";
import CheckoutStepper from "../../../Components/UserComponents/Form/Form";
import PersonalDetails from "../../../Components/UserComponents/Form/PersonalDetails/PersonalDetails"; // Import the PersonalDetails component
import HoroscopeDetails from "../../../Components/UserComponents/Form/HoroscopeDetails/HoroscopeDetails"; // Import the HoroscopeDetails component
import FamilyDetails from "../../../Components/UserComponents/Form/FamilyDetails/FamilyDetails";
import ExpectationsDetailsForm from "../../../Components/UserComponents/Form/ExpectationsDetailsForm/ExpectationsDetailsForm";

const CheckOut = [
  {
    name: "Personal Information",
    Component: () => (
      <div>
        <PersonalDetails />
      </div>
    ), // Use PersonalDetails as the component
  },
  {
    name: "Horoscopal Information",
    Component: () => (
      <div>
        <HoroscopeDetails />
      </div>
    ), // Use HoroscopeDetails as the component
  },
  {
    name: "Family Information",
    Component: () => (
      <div>
        <FamilyDetails />
      </div>
    ), // Placeholder component
  },
  {
    name: "Expectation Information",
    Component: () => (
      <div>
        <ExpectationsDetailsForm />
      </div>
    ), // Placeholder component
  },
];

function FormPage() {
  return (
    <>
      <div className={style.formContainer}>
        <h1>CheckOut</h1>
        <CheckoutStepper stepsConfig={CheckOut} />
      </div>
    </>
  );
}

export default FormPage;
