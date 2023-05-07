import "./App.css";
import React, { useState } from "react";
import Navbar from "./conponents/Navbar";
import News from "./conponents/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import About from "./conponents/About";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Navbar />

      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="g"
              pageSize={6}
              country="in"
              category="general"
            />
          }
        />
        <Route exact path="/about" element={<About key="abt" />} />
        <Route
          exact
          path="/home"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="g"
              pageSize={6}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="general"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="g"
              pageSize={6}
              country="in"
              category="general"
            />
          }
        />
        <Route
          exact
          path="business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="b"
              pageSize={6}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="e"
              pageSize={6}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="h"
              pageSize={6}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="s"
              pageSize={6}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="technology"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="t"
              pageSize={6}
              country="in"
              category="technology"
            />
          }
        />
        <Route
          exact
          path="sports"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="sp"
              pageSize={6}
              country="in"
              category="sports"
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
