import React, { useState } from "react";
import Navbar from "../components/Navbar";
import founder from "../drinksimages/founder.jpg";
import "./Aboutus.css";
import { SiVbulletin } from "react-icons/si";
// import Footers from "../components/Footers";

// import { RiDrinks2Fill } from "react-icons/ri";

import Valuecardd from "./Valuecardd";
import Footers from "../components/Footers";
const Aboutus = () => {
  const [activeTab, setActiveTab] = useState("Growth");

  const handleTabClick = (theTab) => {
    setActiveTab(theTab);
  };
  const Corevalues = [
    "Love",
    "Health & Wellness",
    "Quality Ingredients",
    "Sustainability",
    "Innovation & Creativity",
    "Customer Satisfaction",
    "Transparency & Trust",
    "Community & Support",
  ];
  return (
    <div className="position-relative allContainer">
      <Navbar />
      <div className="containerDiv">
        <div>
          <div className="headone">
            <h1>
              Welcome to Dvash, where we believe that healthy living should be
              both delicious and enjoyable!
            </h1>
          </div>
          <div className="allDiv">
            <div className="divOne">
              <div className="words">
                <p>
                  At Dvash, we are passionate about creating fresh, natural
                  drinks that not only tantalize your taste buds but also
                  nourish your body. Our mission is to provide you with a wide
                  range of beverages made from high-quality, organic ingredients
                  sourced from local farms. Whether you’re looking for a
                  refreshing fruit juice, a revitalizing smoothie, or delicious
                  parfait, we have something for everyone!
                </p>
                <p>
                  Our journey began with a simple idea: to inspire healthy
                  choices through delightful flavors. Each drink is crafted with
                  love and care, ensuring that every sip is packed with
                  vitamins, minerals, and natural goodness. We take pride in our
                  commitment to sustainability, using eco-friendly packaging and
                  supporting local farmers to reduce our carbon footprint.
                </p>
                <p>
                  Join us on our mission to promote wellness and vitality for
                  you and your family, one delicious drink at a time. Thank you
                  for choosing Dvash—where health meets flavor! This is a place
                  to quench your thirst and revive your senses.
                </p>
              </div>

              <div>
                <img src={founder} alt="" />
              </div>
            </div>
            <div className="divTwo">
              <h1>Core Values</h1>
              <div className="ourcorevalues">
                {Corevalues.map((values) => (
                  <Valuecardd corevalues={values} />
                ))}
              </div>
            </div>
            <div className="divThree">
              <div className="semiInnerDiv">
                <span>Team</span>
                <span>Focus</span>
              </div>
              <div className="smallDivThree">
                <div className="innerDiv">
                  <span
                    style={{
                      color: `${
                        activeTab === "Growth" ? "#aa9971" : "#212529"
                      }`,
                    }}
                    onClick={() => {
                      handleTabClick("Growth");
                    }}
                  > <SiVbulletin />
                    Growth
                  </span>
                  <span
                    onClick={() => {
                      handleTabClick("Business");
                    }}
                    style={{
                      color: `${
                        activeTab === "Business" ? "#aa9971" : "#212529"
                      }`,
                    }}
                  ><SiVbulletin />
                    Business
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
                  ><SiVbulletin />
                    Product & Engineering
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
                  ><SiVbulletin />
                    Operations
                  </span>
                </div>
                <div className="semiDiv">
                  {/* <div>
                 <span><RiDrinks2Fill /></span>
                  </div> */}
                  <div>
                    <span
                      style={{
                        display: `${activeTab === "Growth" ? "flex" : "none"}`,
                      }}
                    >
                      At the heart of our business lies the power of teamwork.
                      We believe that our commitment to quality drinks and
                      parfaits is driven by a passionate team that works
                      together seamlessly. From sourcing the freshest
                      ingredients to delivering exceptional customer service,
                      each team member contributes their unique skills, ensuring
                      that we deliver the best in health and taste. 
                    </span>
                    <span
                      style={{
                        display: `${
                          activeTab === "Business" ? "flex" : "none"
                        }`,
                      }}
                    >
                      The Business org is the backbone of our operations,
                      ensuring smooth and efficient management of the company’s
                      daily activities. This team handles essential functions
                      such as People, Finance, and Legal, providing the
                      infrastructure and support needed to keep the company
                      running smoothly while planning for long-term growth and
                      stability.
                    </span>
                    <span
                      style={{
                        display: `${
                          activeTab === "Product & Engineering"
                            ? "flex"
                            : "none"
                        }`,
                      }}
                    >
                     Our Engineering team practice shared ownership,
                      where each person’s input and effort are valued equally,
                      leading to the successful launch of our unique and natural
                      products.Team collaboration doesn’t end with a finished
                      product. We rely on constant feedback, learning, and
                      iteration to refine our products, ensuring that we always
                      offer the best and healthiest natural drinks to our
                      customers.
                    </span>
                    <span
                      style={{
                        display: `${
                          activeTab === "Operations" ? "flex" : "none"
                        }`,
                      }}
                    >
                      At Dvash, our operations are driven by a
                      collaborative and dedicated team. From sourcing the
                      freshest ingredients to crafting delicious drinks and
                      parfaits, teamwork is at the core of everything we do. Our
                      skilled staff work hand-in-hand, ensuring that every step
                      of the process is handled with care, precision, and
                      passion. We believe that great results are a product of
                      strong collaboration. 
                    </span>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <Footers />
      </div>
     
    </div>
  );
};

export default Aboutus;
