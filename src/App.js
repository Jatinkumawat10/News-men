import "./App.css";
import "./index.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  let pages = 15;

  const [progress, setprogress] = useState(0);

  const [mode, setmode] = useState("light");
  const [text, setText] = useState("Enable dark mode");

  const toastColor = mode === "dark" ? "white" : "black";
  const toastBackgroundColor = mode === "dark" ? "black" : "#f8f9fa"; // Adjust the colors as needed
  const toggle = (props) => {
    if (mode === "light") {
      setmode("dark");
      setText("Enable Light mode");
    } else {
      setmode("light");
      setText("Enable dark mode");
    }
    console.log("Current mode:", props.mode);
    if (mode === "light") {
      toast("Switched to dark mode");
    } else {
      toast("Switched to light mode");
    }
  };
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggle={toggle} text={text} />
        <ToastContainer
          position="top-center"
          autoClose={0.4}
          toastStyle={{ background: toastBackgroundColor, color: toastColor }}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="general"
                pageSize={pages}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/newsmen"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="general"
                pageSize={pages}
                country="in"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="health"
                pageSize={pages}
                country="in"
                category="Health"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="sports"
                pageSize={pages}
                country="in"
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="entertainment"
                pageSize={pages}
                country="in"
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="busines"
                pageSize={pages}
                country="in"
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="science"
                pageSize={pages}
                country="in"
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                setprogress={setprogress}
                key="technology"
                pageSize={pages}
                country="in"
                category="Technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
