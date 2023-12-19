import React from 'react'

import PropTypes from 'prop-types'

import './slide1.css'

const Slide1 = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide1-slide slide ${props.rootClassName} `}
    >
      <div className="slide1-max-wdith max-content-container">
        <h1 className="slide1-text Heading2">{props.heading}</h1>
      </div>
    </div>
  )
}

Slide1.defaultProps = {
  heading: 'Slide #1',
  rootClassName: '',
}

Slide1.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide1
