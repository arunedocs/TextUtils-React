import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import React, { useState } from "react";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  // let name = "Arun";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = (cls) => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00365c";
      showAlert("Dark mode has enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utils"
          homeText="Home"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
               <Route exact path="/home">
            <div className="container my-3">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
