import React from "react";

import { Helmet } from "react-helmet";

import Navigation from "../components/navigation";
import FeatureCard2 from "../components/feature-card2";
import SpeakerCard from "../components/speaker-card";
import Slide2 from "../components/slide2";
import { ReactComponent as BibleIcon } from "../components/icons/bible-book-church-god-holy.svg";
import { ReactComponent as ChurchIcon } from "../components/icons/church-christian-wedding-cross-catholic church.svg";
import { ReactComponent as LoveIcon } from "../components/icons/gift-giftbox-love-valentine-heart box.svg";
import { ReactComponent as ForgiveIcon } from "../components/icons/key-love-valentine-heart-wedding.svg";

import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Couples' Retreat: GoForth Ministries</title>
        <meta property="og:title" content="Couples' Retreat Page" />
      </Helmet>
      <Navigation></Navigation>

      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span className="home-text01 Heading1">renewed:</span>
                <span className="Heading1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
                <span className="home-text03">couples&apos; retreat</span>
              </h1>
              <span className="home-text04">
                renew, restore and enrich your marriage through an encounter
                with christ
              </span>
              <div className="home-btns-container">
                <a
                  href="#register"
                  className="home-primary button-primary button-lg button"
                >
                  register now
                </a>
                <a
                  href="#about"
                  className="home-secondary button button-outline button-lg-border"
                >
                  learn more
                </a>
              </div>
            </div>
            <div className="home-image-container">
              <img
                src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702969621/couple-retreat_hlh0el.jpg" // Your image URL here
                alt="Couples' Retreat"
                className="home-hero-image"
              />
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div id="about" className="home-about section-container">
          <div className="home-features">
            <h1 className="home-text05">who should attend this retreat?</h1>
            <div className="home-container1">
              <FeatureCard2
                rootClassName="rootClassName"
                title="Understand God's Plan for Your Married Life"
                description="Explore the divine purpose for your union and learn how to align your marriage with the greater plan that God has laid out for both of you."
                icon={<ChurchIcon />}
              />
              <FeatureCard2
                rootClassName="rootClassName3"
                title="Improve Your Love Relationship"
                description="Enhance your bond by deepening your self-awareness and addressing aspects of your life and relationship that require nurturing and improvement."
                icon={<LoveIcon />}
              />
              <FeatureCard2
                rootClassName="rootClassName2"
                title="Reflect on Your Relationship with God"
                description="Dedicate time to contemplate your spiritual connection with God and how this sacred relationship influences and enriches your marital bond."
                icon={<BibleIcon />}
              />
              <FeatureCard2
                rootClassName="rootClassName1"
                title="Learn to Forgive"
                description="Embrace the healing power of forgiveness, move beyond past challenges, and rejuvenate your marriage vows as you step forward into a renewed and hopeful future together."
                icon={<ForgiveIcon />}
              />
            </div>
          </div>
        </div>
        <div className="home-speakers section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text07 Heading2">
                <span>meet our speakers</span>
                <span className="home-text09"></span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <SpeakerCard
                // role="digital marketing associate @ WPP"
                lastName="D'souza, OCD"
                firstName="Fr. Regan"
                image_src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1688567956/Fr_Regan_vokgq4.jpg"
              ></SpeakerCard>
              <SpeakerCard
                // role="digital marketing associate @ WPP"
                lastName="Castelino"
                firstName="Jeevan"
                image_src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1688568073/Jeevan_zgwhdo.jpg"
              ></SpeakerCard>
              <SpeakerCard
                // role="VP OF Marketing @ BUZZFEED"
                lastName="D'souza"
                firstName="Donn"
                image_src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1688553209/Donn_akvtnn.png"
              ></SpeakerCard>
              <SpeakerCard
                // role="HEAD OF DIGITAL @ HUBSPOT"
                lastName="Aarti"
                firstName="Bansy and"
                image_src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702898013/Bansy_sgpdr4.png"
              ></SpeakerCard>
            </div>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702970554/Nava-Spoorthi-2-580x408_ubd2yn.jpg"
            className="home-image"
          />
          <div className="home-content-container1 section-container">
            <div className="home-container2">
              <span className="home-text10"> Bengaluru</span>
              <span className="home-text11">
                <span>26-28 jan, 2024</span>
                <br></br>
                <span className="home-text14">9 am to 4 pm</span>
                <br></br>
              </span>
              <div className="home-container3">
                <span className="home-text16">— nava spoorthi kendra</span>
              </div>
              <div className="home-container4">
                <span className="home-text17">RETREAT FACILITIES</span>
                <span className="home-text18">
                  During the two-day retreat, each couple will have a private
                  room with an attached bathroom. All meals and tea are
                  included. Daily Mass, Adoration, and Confession sessions are
                  scheduled for spiritual growth.
                </span>
                <div className="home-btns-container1">
                  <a
                    href="#register"
                    className="home-register button-secondary button button-md"
                  >
                    register
                  </a>
                  <a
                    href="tel:+919008428837"
                    className="home-learn-more button button-outline button-md-border"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text19 Heading2">previous RETREATS</h1>
              <span className="home-text20">
                Take a tour of our previous conferences
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide2
              rootClassName="slide2-root-class-name4"
              imageSrc="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702967019/Jun-FIC_qqqdqs.png"
              heading="Free in Christ, Jun 2023"
            />
            <Slide2
              rootClassName="slide2-root-class-name4"
              imageSrc="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702967022/Nov-FIC_b0bj6u.png"
              heading="Free in Christ, Nov 2023"
            />
            <Slide2
              rootClassName="slide2-root-class-name4"
              imageSrc="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702967001/Feb-FIC_trzqmr.png"
              heading="Free in Christ, Feb 2023"
            />
            <Slide2
              rootClassName="slide2-root-class-name4"
              imageSrc="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702967004/Jul-FIC_uxnnvf.png"
              heading="Healing of Parental Relationships, Jul 2023"
            />
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="home-workshops">
          <div id="register" className="home-content-container2">
            <div className="home-container5">
              <h1 className="home-text21 Heading2">
                <span>register now to</span>
                <br className="home-text23"></br>
                <span className="home-text24">reserve your spot</span>
              </h1>
              <span className="home-text25">LIMITED SEATS</span>
              <span className="home-text26">
                Act quickly to reserve your place at our retreat—seats are
                limited! Click the button below and complete the Google Form to
                ensure your participation. Don&apos;t miss this opportunity for
                renewal and connection.
              </span>
              <a
                href="https://forms.gle/pDCbPQu8wqGkUGpS9"
                target="_blank"
                rel="noreferrer noopener"
                className="home-learn-more1 button button-md button-outline"
              >
                Fill registration form
              </a>
            </div>
          </div>
          <img
            alt="image"
            src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702970258/nathan-dumlao-w5hhoYM_JsU-unsplash_duablm.jpg"
            className="home-image1"
          />
        </div>

        <div className="home-speakers1 section-container">
          <footer className="home-footer">
            <img
              alt="logo"
              src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702980530/Negative_Logo_landscape_kbehml.svg"
              className="home-image2"
            />
            <span className="home-text27">
              © 2023 go forth ministries, All Rights Reserved.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
