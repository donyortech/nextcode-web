// eslint-disable-next-line no-unused-vars
import React from "react";
import "./hero.css";
import { IoIosArrowForward } from "react-icons/io";

const hero = () => {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-container container">
          <div className="hero-data">
            <h1>
              The most
              <span className="gradient-text"> comfortable</span>
              <br />
              with nextCode24
            </h1>
            <p>
              I am creating an IT training center called NextCode24. Ours Our
              goal is to have your knowledge of IT within 24 hours is to help
              your eyes.
            </p>

            <div className="hero-btns">
              <a href="#" className="btn shop-now">
                Buy Now
              </a>
              <a href="#" className="learn-more gradient-text">
                <span>Learn More</span>
                <IoIosArrowForward />
              </a>
            </div>

            <div className="hero-numbers">
              <div className="n-box">
                <h2>
                  12K<span>+</span>
                </h2>
                <p>Premium</p>
                <br />
                Product
              </div>
              <div className="n-box">
                <h2>
                  21K<span>+</span>
                </h2>
                <p>Happy</p>
                <br />
                Students
              </div>
              <div className="n-box">
                <h2>
                  28K<span>+</span>
                </h2>
                <p>Award</p>
                <br />
                Winning
              </div>
            </div>
          </div>
          {/* Hero Images */}
          <div className="hero-images">
            <img src="./Home.png" className="main-img" alt="" />
            <img src="./background.png" className="hero-bg-img" alt="" />
            <img src="./Tag.png" className="tag-img" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero;
