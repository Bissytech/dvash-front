import React, { useState } from "react";
import "./Aboutus.css";
import { SiVbulletin } from "react-icons/si";

const Faq = () => {
  const [activeTab, setActiveTab] = useState("Growth");
  const handleTabClick = (theTab) => {
    setActiveTab(theTab);
  };
  return (
    <div className="forQuery">
      <div className="miniInnerDiv">
        <span>Frequently Asked Questions</span>
      </div>
      <div className="innerDiv">
        <span
          style={{
            color: `${activeTab === "Growth" ? "#aa9971" : "#212529"}`,
          }}
          onClick={() => {
            handleTabClick("Growth");
          }}
        >
          {" "}
          <SiVbulletin />
          What is Dvash?
        </span>
        <p
          style={{
            display: `${activeTab === "Growth" ? "flex" : "none"}`,
          }}
        >
          Dvash offers a range of fresh, natural juices and healthy parfaits,
          emphasizing both taste and wellness. The juices are made from fresh
          fruits and vegetables, ensuring maximum flavor and nutrients, while
          the parfaits combine layers of yogurt, fruits, and wholesome
          ingredients for a balanced, nutritious snack.
        </p>
        <span
          onClick={() => {
            handleTabClick("Business");
          }}
          style={{
            color: `${activeTab === "Business" ? "#aa9971" : "#212529"}`,
          }}
        >
          <SiVbulletin />
          How best can Dvash be stored?
        </span>
        <p
          style={{
            display: `${activeTab === "Business" ? "flex" : "none"}`,
          }}
        >
          Our fresh juice can typically last 2 to 3 days when stored in the
          fridge (at or below 4°C / 40°F). It's best consumed as soon as
          possible to retain nutrients and freshness. However, you can freeze
          Dvash juice for up to 3 months. Dvash parfaits typically don’t freeze
          well due to yogurt and fruit textures changing, so freezing is not
          recommended. Kindly consume it after purchase.
        </p>
        <span
          onClick={() => {
            handleTabClick("Product & Engineering");
          }}
          style={{
            color: `${
              activeTab === "Product & Engineering" ? "#aa9971" : "#212529"
            }`,
          }}
        >
          <SiVbulletin />
          Can children take Dvash?
        </span>
        <p
          style={{
            display: `${
              activeTab === "Product & Engineering" ? "flex" : "none"
            }`,
          }}
        >
          Yes, children can enjoy both our fresh juices and healthy parfaits, as
          they are made from natural and nutritious ingredients. It is packed
          with vitamins, minerals, and antioxidants, making it a great way to
          boost a child's nutrient intake.
        </p>
        <span
          onClick={() => {
            handleTabClick("Operations");
          }}
          style={{
            color: `${activeTab === "Operations" ? "#aa9971" : "#212529"}`,
          }}
        >
          <SiVbulletin />
          How can I place an order?
        </span>
        <p
          style={{
            display: `${activeTab === "Operations" ? "flex" : "none"}`,
          }}
        >
          Enjoy our delicious fresh juices and healthy parfaits by visiting any
          of our store to make a purchase or ordering directly through our
          website for easy delivery to your door!
        </p>
      </div>
    </div>
  );
};

export default Faq;
