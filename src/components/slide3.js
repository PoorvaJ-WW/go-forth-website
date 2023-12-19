import React from 'react'

import PropTypes from 'prop-types'

import './slide3.css'

const Slide3 = (props) => {
  return (
    <div
      data-type="slide"
      className={`slide3-slide slide ${props.rootClassName} `}
    >
      <div className="slide3-max-wdith max-content-container">
        <h1 className="slide3-text Heading2">{props.heading}</h1>
      </div>
    </div>
  )
}

Slide3.defaultProps = {
  heading: 'Slide #1',
  rootClassName: '',
}

Slide3.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide3
