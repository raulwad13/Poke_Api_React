import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
