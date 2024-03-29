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
import { ReactComponent as JesusIcon } from "../components/icons/Jesus.svg";
import { ReactComponent as ParentsIcon } from "../components/icons/Couple-Father-Mother-Parent.svg";
import { ReactComponent as FatherDaughterIcon } from "../components/icons/Father-Daughter-Parent-Family.svg";
import { ReactComponent as GenerationalIcon } from "../components/icons/Icon-Color-Expand-18.svg";

import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Healing Wounds from Family Relationships Retreat</title>
        <meta property="og:title" content="Couples' Retreat Page" />
      </Helmet>
      <Navigation></Navigation>

      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-content-container">
              <h1 className="home-text">
                <span className="home-text04">
                  Our retreat on 2 and 3 March has been postponed. New dates
                  will be announced soon. Registered participants will have
                  their reservations automatically transferred. For updates,
                  please keep an eye on our website or contact us.
                </span>
                {/* <span className="Heading1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span> */}
              </h1>
              {/* <h1 className="home-text">
                <span className="home-text01 Heading1">
                  Healing Wounds from Family Relationships Retreat{" "}
                </span>
                <span className="Heading1">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </h1>
              <span className="home-text04">2 & 3 March, 2024</span> */}
              {/* <div className="home-btns-container">
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
              </div> */}
            </div>
            <div
              className="home-image-container"
              style={{ marginLeft: "130px" }}
            >
              <img
                src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1708666933/ParentrelationshipPIC_lqcr14.jpg"
                alt="Family Retreat"
                className="home-hero-image"
              />
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>

        <div id="about" className="home-about section-container">
          <div className="home-features">
            <h1 className="home-text05">What is the retreat about? </h1>
            <div className="home-container1">
              <FeatureCard2
                title="Healing Parental Relationships"
                description="Addressing the wounds in your relationships with parents, which can affect your connection with God and your life."
                icon={<ChurchIcon />}
              />
              <FeatureCard2
                title="Forgiving and Loving Siblings"
                description="Learning to love and forgive our siblings, fostering stronger family bonds."
                icon={<LoveIcon />}
              />
              <FeatureCard2
                title="Parental Love and Acceptance"
                description="As parents, learning to love and accept your children, healing any rifts caused by them."
                icon={<ParentsIcon />}
              />
              <FeatureCard2
                title="Spiritual Authority of Parents"
                description="Exploring the spiritual authority that parents hold within the family structure."
                icon={<ForgiveIcon />}
              />
              <FeatureCard2
                title="Father-Son-Daughter & Mother-Daughter-Son Relationships"
                description="Understanding the dynamics of Father-Son-Daughter and Mother-Daughter-Son relationships."
                icon={<FatherDaughterIcon />}
              />
              <FeatureCard2
                title="Prayer for Generational Healing"
                description="Engaging in prayer for the healing of generational wounds and patterns."
                icon={<GenerationalIcon />}
              />
              <FeatureCard2
                title="Jesus the Family Healer"
                description="Discovering how Jesus heals and restores families with His love."
                icon={<JesusIcon />}
              />
            </div>
          </div>
        </div>

        {/* <div className="home-speakers section-container">
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
            </div>
          </div>
        </div> */}
        {/* <div className="home-location">
          <img
            alt="image"
            src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1702970554/Nava-Spoorthi-2-580x408_ubd2yn.jpg"
            className="home-image"
          />
          <div className="home-content-container1 section-container">
            <div className="home-container2">
              <span className="home-text10"> Bengaluru</span>
              <span className="home-text11">
                <span>2-3 MAR, 2024</span>
                <br></br>
                <span className="home-text14">9 am to 6 pm</span>
                <br></br>
              </span>
              <div className="home-container3">
                <span className="home-text16">— nava spoorthi kendra</span>
              </div>
              <div className="home-container4">
                <span className="home-text17">GENERAL INFORMATION</span>
                <span className="home-text18">
                  <ul className="home-text18">
                    <li>
                      The retreat starts sharp at 9 am on Saturday. The
                      Eucharist will be celebrated on both days.
                    </li>
                    <li>
                      Please bring Bible, notebook, pen and a bottle for
                      drinking water.
                    </li>
                    <li>
                      Prepare yourself by praying for the retreat and be open to
                      the work the Lord wants to do in your life.
                    </li>
                  </ul>
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
        </div> */}
        <div className="home-previous-events section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text19 Heading2">previous RETREATS</h1>
              <span className="home-text20">
                Take a tour of our previous retreats
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
        {/* <div className="home-workshops">
          <div id="register" className="home-content-container2">
            <div className="home-container5">
              <h1 className="home-text21 Heading2">
                <span>register now to</span>
                <br className="home-text23"></br>
                <span className="home-text24">reserve your spot</span>
              </h1>
              <span className="home-text26">
                <ul className="home-registration-list">
                  <li>
                    Registration cost Rs: 500 (includes Lunch and Tea for both
                    days).
                  </li>
                  <li>
                    Registration cost + Single room, Single Night accommodation
                    Rs:1000 (includes also Dinner on Saturday and Breakfast on
                    Sunday).
                  </li>
                  <li>
                    Registration cost + Single room, Two Nights accommodation
                    Rs: 1500 (Includes also all meals from Friday 6 pm to Sunday
                    6 pm).
                  </li>
                  <li>
                    Registration cost + Dormitory Single Night accommodation Rs:
                    800 (Includes also Dinner on Saturday and Breakfast on
                    Sunday).
                  </li>
                </ul>
              </span>
              <a
                href="https://forms.gle/BYeEr6TVEHDfZZbK8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-learn-more1 button button-md button-outline"
              >
                Fill registration form
              </a>
            </div>
          </div>
          <img
            alt="free in christ"
            src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1706357309/break_chain_t6vtzd.jpg"
            className="home-image1"
          />
        </div> */}

        <div className="home-speakers1 section-container">
          <footer className="home-footer">
            <img
              alt="logo"
              src="https://res.cloudinary.com/dxdpahm3o/image/upload/v1703143610/Negative_Logo_landscape_no_logo_but_text_jjtagx.svg"
              className="home-image2"
            />
            <span className="home-text27">
              © 2024 go forth ministries, All Rights Reserved.
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Home;
