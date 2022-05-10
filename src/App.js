import "./App.css";
import NavBar from "./navbar/NavBar";
import TextForm from "./navbar/TextForm";
import About from "./navbar/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <NavBar title="Text Utilities" />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm title="Enter Your Text Here" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
