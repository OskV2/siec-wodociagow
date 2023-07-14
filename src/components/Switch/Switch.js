import React from 'react'

import './Switch.scss'

const Switch = (props) => {

    //{ isOn, handleToggle, textOne, textTwo }

  return (
    <>
        <input
          checked={props.isOn}
          onChange={props.handleToggle}
          className="switch__checkbox"
          id="switch"
          type="checkbox"
        />
        <label className="switch__label" htmlFor={`switch`}>
          <img className={'switch__label__img ' + (props.isOn ? 'switch__label__img--left' : 'switch__label__img--right')} src={props.isOn ? props.imgTwoBlack : props.imgOneBlack} />
          <span className="switch__button"><img className="switch__button__img" src={props.isOn ? props.imgOneWhite : props.imgTwoWhite} alt="Button icon" /></span>
        </label>
  </>
  )
}

export default Switch