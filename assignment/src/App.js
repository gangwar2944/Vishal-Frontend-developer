import React from 'react';
import { Suspense, lazy } from "react";
import "./App.css";
import LoaderIcon from "./components/LoaderIcon";

function App() {
  const Home = lazy(() => import("./pages/Home.jsx"));
  return (
    <div className="App">
      <Suspense fallback={<div className="centered-fallback"><LoaderIcon/></div>}>
        <Home/>
      </Suspense>
    </div>
  );
}

export default App;
