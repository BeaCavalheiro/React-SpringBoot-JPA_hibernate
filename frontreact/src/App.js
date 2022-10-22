import React from "react";
import Footer from "./components/views/Footer";
import Header from "./components/views/Header";
import Navbar from "./components/views/Navbar";
import Aside from "./components/views/Aside";
import Cards from "./components/custons/Cards";




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar ></Navbar>
      <Aside></Aside><Cards/>
      <Footer/>

    </div>
  );
}

export default App;
