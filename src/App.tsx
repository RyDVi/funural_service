import React from "react";
import OurServices from "sections/OurServices";
import Products from "sections/Products";
import Contacts from "sections/Contacts";
import Footer from "sections/Footer";
import Navbar from "sections/Navbar";
import MainHeader from "sections/MainHeader";
import { NAV_LINKS } from "./constants";
import Photos from "sections/Photos";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar navLinks={NAV_LINKS} />
      <MainHeader nextSectionHref="#photos" />
      <main>
        <Photos />
        <OurServices />
        <Products />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default App;
