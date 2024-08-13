import CheckoutStepper from "../../../Components/UserComponents/Form/Form";

const CheckOut = [
  {
    name: "personal information",
    Component: () => <div>saurabh </div>,
  },
  {
    name: "holocsopcal information",
    Component: () => <div>Add holocsopcal inforation </div>,
  },
  {
    name: "Education information",
    Component: () => <div>Add Education inforation </div>,
  },
  {
    name: "Family information",
    Component: () => <div>Add Family inforation </div>,
  },
];

function FormPage() {
  return (
    <>
      <h1>CheckOut</h1>
      <CheckoutStepper stepsConfig={CheckOut} />
    </>
  );
}

export default FormPage;
