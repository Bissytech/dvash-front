import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import "./Contactus.css";
import Faq from "./Faq";
// import icon1 from '../drinksimages/doddle.svg'
import icon2 from "../drinksimages/drink.svg";
import icon3 from "../drinksimages/grinning.svg";
import icon4 from "../drinksimages/whatsapp.svg";
import icon5 from "../drinksimages/drinko.svg";
import icon6 from "../drinksimages/smiley.svg";
import { GiBeveledStar } from "react-icons/gi";
import { IoArrowForwardOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
const Contactus = () => {
  const [activeTab, setActiveTab] = useState("Growth");
  const handleTabClick = (theTab) => {
    setActiveTab(theTab);
  };

  return (
    <div>
      <div className="allDiv">
        <Navbar />
        <div className="containerDiv">
        <div className="firstDiv"></div>
        <div className="secDiv">
          <div className="secSmallDiv">
            <div>
              <h1>Live Chat</h1>
            </div>
            <div>
              <img src={icon5} alt="" />
              <img src={icon3} alt="" />
              <img src={icon2} alt="" />
              <img src={icon4} alt="" />
              <img src={icon6} alt="" />
            </div>
          </div>

          <h5>Urgently want to reach us?</h5>
          <p>We're available 9am - 6pm WAT, seven days a week</p>
          <a href="https://web.whatsapp.com/" className="whatsappButton">
            <span>
              <GiBeveledStar />
            </span>
            <span>START A CONVERSATION</span>
            <span>
              <IoArrowForwardOutline />
            </span>
          </a>
        </div>

        <div className="thirdDiv">
          <div>
            <h1>Send Us a Mail</h1>
            <h5>Want to mail us instead?</h5>
          </div>
          <div>
            <div className="inputDiv">
              <input placeholder="Your name" type="text" />
              <input placeholder="Your email adress" type="text" />
              <input placeholder="Your number" type="text" />
            </div>
            <div className="selectDiv">
              <div>
                {" "}
                <select id="">
                  <option value="">Select a topic</option>
                  <option value="">My Order</option>
                  <option value="">Products</option>
                  <option value="">Partnership</option>
                  <option value="">Operations</option>
                  <option value="">General enquiries</option>
                </select>
              </div>
              <div>
                {" "}
                <textarea
                  style={{ padding: "10px" }}
                  placeholder="Type a message..."
                  type="text"
                />
              </div>

              <button>Submit Message</button>
            </div>
          </div>
        </div>
        <div className="fourthDiv">
          <div className="faqAns">
            <span>FAQs</span>
            <span>Ans</span>
          </div>
          <div className="smallDivThree">
            <div className="innerDiv">
              <span
                style={{
                  color: `${activeTab === "Growth" ? "#aa9971" : "#212529"}`,
                }}
                onClick={() => {
                  handleTabClick("Growth");
                }}
              >
                What is Dvash?
              </span>
              <span
                onClick={() => {
                  handleTabClick("Business");
                }}
                style={{
                  color: `${activeTab === "Business" ? "#aa9971" : "#212529"}`,
                }}
              >
                How best can Dvash be stored?
              </span>
              <span
                onClick={() => {
                  handleTabClick("Product & Engineering");
                }}
                style={{
                  color: `${
                    activeTab === "Product & Engineering"
                      ? "#aa9971"
                      : "#212529"
                  }`,
                }}
              >
                Can children take Dvash?
              </span>
              <span
                onClick={() => {
                  handleTabClick("Operations");
                }}
                style={{
                  color: `${
                    activeTab === "Operations" ? "#aa9971" : "#212529"
                  }`,
                }}
              >
                How can I place an order?
              </span>
            </div>
            <div className="semiDiv">
              {/* <div>
                 <span><RiDrinks2Fill /></span>
                  </div> */}
              <div>
                <span className="DvashAns"
                  style={{
                    display: `${activeTab === "Growth" ? "flex" : "none"}`,
                  }}
                >
                  Dvash offers a range of fresh, natural juices and healthy
                  parfaits, emphasizing both taste and wellness. The juices are
                  made from fresh fruits and vegetables, ensuring maximum flavor
                  and nutrients, while the parfaits combine layers of yogurt,
                  fruits, and wholesome ingredients for a balanced, nutritious
                  snack.
                </span>
                <span className="DvashAns"
                  style={{
                    display: `${activeTab === "Business" ? "flex" : "none"}`,
                  }}
                >
                  Our fresh juice can typically last 2 to 3 days when stored in
                  the fridge (at or below 4°C / 40°F). It's best consumed as
                  soon as possible to retain nutrients and freshness. However,
                  you can freeze Dvash juice for up to 3 months. Dvash parfaits
                  typically don’t freeze well due to yogurt and fruit textures
                  changing, so freezing is not recommended. Kindly consume it
                  after purchase
                </span>
                <span className="DvashAns"
                  style={{
                    display: `${
                      activeTab === "Product & Engineering" ? "flex" : "none"
                    }`,
                  }}
                >
                  Yes, children can enjoy both our fresh juices and healthy
                  parfaits, as they are made from natural and nutritious
                  ingredients. It is packed with vitamins, minerals, and
                  antioxidants, making it a great way to boost a child's
                  nutrient intake.
                </span>
                <span className="DvashAns"
                  style={{
                    display: `${activeTab === "Operations" ? "flex" : "none"}`,
                  }}
                >
                  Enjoy our delicious fresh juices and healthy parfaits by
                  visiting any of our store to make a purchase or ordering
                  directly through our website for easy delivery to your door!
                </span>
              </div>
            </div>
          </div>
        </div>
       <div>
        <Faq/>
       </div>
      </div>

      
      <Footers />
        </div>
       
    </div>
  );
};

export default Contactus;
