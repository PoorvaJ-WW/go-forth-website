import React from "react";
import PropTypes from "prop-types";
import "./feature-card2.css";

const FeatureCard2 = (props) => {
  const { rootClassName, title, description, icon } = props;

  return (
    <div className={`feature-card2-feature-card ${rootClassName}`}>
      <svg viewBox="0 0 1024 1024" className="feature-card2-icon">
        {icon}
      </svg>
      <div className="feature-card2-container">
        <h2 className="feature-card2-text">{title}</h2>
        <span className="feature-card2-text1">{description}</span>
      </div>
    </div>
  );
};

FeatureCard2.defaultProps = {
  rootClassName: "",
  title: "Lorem ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem lorem, malesuada in metus vitae, scelerisque accumsan ipsum.",
  icon: <path />, // Default icon path
};

FeatureCard2.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
};

export default FeatureCard2;
