import React from 'react'
import './Card.scss'

const Card = (props) => {
  return (
    <div className={'card ' + props.className}>
        <div className="card__content">
            {props.children}
        </div>
    </div>
  )
}

export default Card