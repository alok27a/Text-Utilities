import logo from "./logo.svg";
import "./App.css";
import NavBar from "./navbar/NavBar";
import TextForm from "./navbar/TextForm";

function App() {
  return (
    <>
      <NavBar title="TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter Your Text Here"/>
      </div>
    </>
  );
}

export default App;
