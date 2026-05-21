import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
 
 
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            At our restaurant, we make it easy for you to enjoy a seamless dining experience by 
            allowing you to make reservations in advance. Whether you're planning a casual meal with 
            friends or a special occasion, our reservation system ensures you have a table ready
             when you arrive. Explore our extensive menu of delicious dishes, carefully curated to suit all 
             tastes—from fresh salads and vegetarian options to mouthwatering non-vegetarian specialties. 
            
            </p>
            <Link to="/menu">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
