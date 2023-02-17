import GooglePayButton from "@google-pay/button-react";
import "./App.css";
import React from "react";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="App">
      <div className="header_box">
        <div className="text_box">
          <Typewriter
            options={{
              strings: [
                "thIs is a sample test payment gateway please do not pay.",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </div>
      </div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "example",
                  gatewayMerchantId: "exampleGatewayMerchantId",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "12345678901234567890",
            merchantName: "Demo Merchant",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPriceLabel: "Total",
            totalPrice: "100.00",
            currencyCode: "USD",
            countryCode: "US",
          },
          shippingAddressRequired: true,
          callbackIntents: ["SHIPPING_ADDRESS", "PAYMENT_AUTHORIZATION"],
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.l0g("Success", paymentRequest);
        }}
        onPaymentAuthorized={(paymentData) => {
          console.log("Payment Authorised Success", paymentData);
          return { transactionState: "SUCCESS" };
        }}
        onPaymentDataChanged={(paymentData) => {
          console.log("On Payment Data Changed", paymentData);
          return {};
        }}
        existingPaymentMethodRequired="false"
        buttonColor="black"
        buttonType="Buy"
      />

      <div className="type_script">
        <Typewriter
          options={{
            strings: ["Gateway Developed by Rishab Raj."],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}

export default App;
