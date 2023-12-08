import React from "react";
import ShoppingCartHeader from "../components/ShoppingCartHeader";
import BillingInformation from "../components/BillingInformation";
import AdditionalInfo from "../components/AdditionalInfo";
import OrderSummery from "../components/OrderSummery";
import Footer from "../components/Footer";
import Subscription from "../components/Subscription";
import CheckoutHeader from "../components/CheckoutHeader";

const Checkout = () => {
  return (
    <div>
      <CheckoutHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "32px auto",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <div>
          <BillingInformation />
          <AdditionalInfo />
        </div>
        <OrderSummery />
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default Checkout;
