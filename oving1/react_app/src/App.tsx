import React from "react";

import "./App.scss";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
