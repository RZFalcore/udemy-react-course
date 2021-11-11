import BasicForm from "../components/Forms/BasicForm";
import SimpleInput from "../components/Forms/SimpleInput";
import "./FormsApp.css";

function App() {
  return (
    <>
      <div className="app">
        <BasicForm />
      </div>
      <div className="app">
        <SimpleInput />
      </div>
    </>
  );
}

export default App;
