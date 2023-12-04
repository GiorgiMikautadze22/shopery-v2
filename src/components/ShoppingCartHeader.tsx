import React from "react";
import LocationAndAuthentication from "./LocationAndAuthentication";
import SearchSection from "./SearchSection";
import ContactSection from "./ContactSection";
import Header from "./Header";

const ShoppingCartHeader = () => {
  return (
    <div>
      <LocationAndAuthentication />
      <SearchSection />
      <ContactSection />
      <Header />
    </div>
  );
};

export default ShoppingCartHeader;
