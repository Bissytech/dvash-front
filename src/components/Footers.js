import React from "react";
import "./Footers.css";

const Footers = () => {
  return (
    <><div className="footer">
      <div className="sectionOne">
        <img src={require("../assets/Dvashimg.png")} alt="logo" />
        <div className="abtDvash">
          <p>
            At Dvash, we are passionate about crafting the finest homemade
            drinks in Nigeria. Our commitment to quality and tradition shines
            through in every bottle we produce. Using time-honored recipes and
            the freshest locally sourced ingredients, we create a wide range of
            delicious and nutritious beverages that cater to every taste.
          </p>
          <p>
            From refreshing fruit juices to rich, creamy tigernut drinks, our
            products are made with care and love, just like you would make them
            at home. We believe in the power of natural, wholesome ingredients,
            which is why our drinks are free from artificial preservatives,
            additives, and excessive sugars. Every sip is a taste of nature,
            carefully bottled to deliver the best
          </p>
        </div>
      </div>
      <div className="sectionTwo">
        <a href="">Home</a>
        <a href="">Drinks</a>
        <a href="">Parfait</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </div>
      <div className="sectionThree">
      <p>Download App</p>
        <div className="downloadApp">
         
          <div className="downloadthisApp">
            <div className="appSetup">
              <img src={require("../assets/apple.png")} alt="app" />
              <div>
                <span>Download on the</span>
                <p className="fs-6 fw-bold">App Store</p>
              </div>
            </div>
          </div>

          <div className="downloadthisApp">
            <div className="appSetup">
              <img src={require("../assets/playstore.png")} alt="app" />
              <div>
                <span>Download on the</span>
                <p className="fs-6 fw-bold">Play Store</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <p>Payment Partners</p>
          <div className="paymentPartners">
            <img src={require("../assets/gt.png")} alt="Gt card" />
            <img src={require("../assets/master.png")} alt="master" />
            <img src={require("../assets/paystack.png")} alt="paystack" />
            <img src={require("../assets/providus.png")} alt="providus" />
            <img src={require("../assets/visa.png")} alt="visa" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Footers;
