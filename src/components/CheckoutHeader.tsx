import React from "react";
import LocationAndAuthentication from "./LocationAndAuthentication";
import SearchSection from "./SearchSection";
import ContactSection from "./ContactSection";
import Header from "./Header";

const CheckoutHeader = () => {
  const checkoutHeaderIndicator = "Checkout";

  return (
    <div>
      <LocationAndAuthentication />
      <SearchSection />
      <ContactSection />
      <Header checkoutHeaderIndicator={checkoutHeaderIndicator} />
    </div>
  );
};

export default CheckoutHeader;
