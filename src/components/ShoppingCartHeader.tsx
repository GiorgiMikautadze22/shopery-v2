import React from "react";
import LocationAndAuthentication from "./LocationAndAuthentication";
import SearchSection from "./SearchSection";
import ContactSection from "./ContactSection";
import Header from "./Header";

const ShoppingCartHeader = () => {
  const headerShoppingCartIndicator = "Shopping Cart";

  return (
    <div>
      <LocationAndAuthentication />
      <SearchSection />
      <ContactSection />
      <Header headerShoppingCartIndicator={headerShoppingCartIndicator} />
    </div>
  );
};

export default ShoppingCartHeader;
