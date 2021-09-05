import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
var name = "Shubham";
function App() {
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
  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1d315b";
      showAlert("Dark mode is enabled", "success");
      document.title = "Dark Mode On";
      setInterval(() => {
        document.title = "TextUtils is Fab";
      }, 2000);
      setInterval(() => {
        document.title = "Download TextUtils Now ";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
      document.title = "Light Mode On";
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        aboutUs="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
        {/* <Route exact path="/"> */}
        <TextForm
          showAlert={showAlert}
          mode={mode}
          heading="Type Your Text Below"
        />
        {/* </Route> */}
      </div>
      {/* // </Switch> */}
      {/* // </Router> */}
    </>
  );
}

export default App;
