import React from "react";
import PropTypes from "prop-types";
import "./slide2.css";

const Slide2 = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide2-slide slide ${props.rootClassName}`}
    >
      <div className="slide2-image-container">
        <img
          src={props.imageSrc}
          alt={`Slide ${props.heading}`}
          className="slide2-image"
        />
      </div>
      <div className="slide2-max-width max-content-container">
        <h1 className="slide2-text Heading2">{props.heading}</h1>
      </div>
    </div>
  );
};

Slide2.defaultProps = {
  heading: "Slide #1",
  rootClassName: "",
  imageSrc: "",
};

Slide2.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Slide2;
