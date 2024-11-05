import React, {useState}from 'react'
import './Aboutus.css'
import { SiVbulletin } from "react-icons/si";

const Teamfocus = () => {
  const [activeTab, setActiveTab] = useState("Growth");
  const handleTabClick = (theTab) => {
    setActiveTab(theTab);
  };
  return (
    <div className='forQuery'>
<div className="miniInnerDiv"><span>The Team and Our Focus</span></div>
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
                  >
                    {" "}
                    <SiVbulletin />
                    Growth
                  </span>
                  <p
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
                    </p>
                  <span
                    onClick={() => {
                      handleTabClick("Business");
                    }}
                    style={{
                      color: `${
                        activeTab === "Business" ? "#aa9971" : "#212529"
                      }`,
                    }}
                  >
                    <SiVbulletin />
                    Business
                  </span>
                  <p
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
                    </p>
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
                    <SiVbulletin />
                    Product & Engineering
                  </span>
                  <p
                      style={{
                        display: `${
                          activeTab === "Product & Engineering"
                            ? "flex"
                            : "none"
                        }`,
                      }}
                    >
                      Our Engineering team practice shared ownership, where each
                      person’s input and effort are valued equally, leading to
                      the successful launch of our unique and natural
                      products.Team collaboration doesn’t end with a finished
                      product. We rely on constant feedback, learning, and
                      iteration to refine our products, ensuring that we always
                      offer the best and healthiest natural drinks to our
                      customers.
                    </p>
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
                    <SiVbulletin />
                    Operations
                  </span>
                  <p
                      style={{
                        display: `${
                          activeTab === "Operations" ? "flex" : "none"
                        }`,
                      }}
                    >
                      At Dvash, our operations are driven by a collaborative and
                      dedicated team. From sourcing the freshest ingredients to
                      crafting delicious drinks and parfaits, teamwork is at the
                      core of everything we do. Our skilled staff work
                      hand-in-hand, ensuring that every step of the process is
                      handled with care, precision, and passion. We believe that
                      great results are a product of strong collaboration.
                    </p>
                </div>


    </div>
  )
}

export default Teamfocus