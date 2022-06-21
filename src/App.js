import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // This is a fragment
    <>
      <Router>
        <Navbar title="Text Utilities" aboutNav="About Us" />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm title="Enter Your Text Here" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
