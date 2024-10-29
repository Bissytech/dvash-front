import React from "react";
import Navbar from "./components/Navbar";
import { Carousels } from "./components/Carousels";

import slidesData from "./assets/assetimage.json";
import Footers from "./components/Footers";

const Landingpage = () => {
  const slides = slidesData.slides;
  return (
    <div className="position-relative">
      <Navbar />
    
      <div>
        <Carousels data={slides} />
      </div>
      <div className="dvashDrink">
        <h1>FUN FACT ABOUT OUR HOME-MADE PRODUCTS</h1>
        <div className="dvashDrinks">
          <div className="dvashDrinksFact">
            <img src={require("./assets/zobo.webp")} alt="" />
            <div className="dvashDescp">
              <h4>Zobo Tutu</h4>
              <em>
                <span>
                  "Tutu" is the yoruba word for "cold/chilled". Our zobo tutu
                  has been handcrafted with the finest ingredients, ensuring a
                  consistent and flavorful experience in every sip made just for
                  you!
                </span>
              </em>
            </div>
          </div>
          <div className="dvashDrinksFact">
            <img src={require("./assets/yoghurt.avif")} alt="" />
            <div className="dvashDescp">
              <h4>Yoghurt with Love</h4>
              <em>
                <span>
                  Every bottle of our yogurt drink is rich, creamy, and full of
                  natural goodness. Our "yogurt with love" are a great source of
                  protein, helping you stay energized and full throughout the
                  day.
                </span>
              </em>
            </div>
          </div>
          <div className="dvashDrinksFact">
           
            <img src={require("./assets/tigernut.avif")} alt="" />
            <div className="dvashDescp">
              <h4>Milky Tigernut Drink</h4>
              <em>
                {" "}
                <span>
                  Our tigernut drinks are loaded with essential vitamins and
                  minerals, including Vitamin E, magnesium, and iron, making
                  them a nutritious choice for any time of day. Try some today!
                </span>
              </em>
            </div>
          </div>
          <div className="dvashDrinksFact">
            <img src={require("./assets/freshdrink.avif")} alt="fresh drink" />
            <div className="dvashDescp">
              <h4>Dry your Thirst Fresh Juice</h4>
              <em>
                {" "}
                <span>
                  This is the best drink to quench your thirst any time, any day.
                  Our fresh juice drinks are made from 100% pure fruit, with no
                  added sugars or artificial ingredients. 
                  
                </span>
              </em>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Landingpage;
