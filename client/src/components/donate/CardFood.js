import React from 'react'

const CardFood = ({p}) => {
  return (
    <div className="food">
      <img src="ee" alt="plat"/>
      <div className="content"> 
      <h1>{p&&p.title}</h1>
      <h5 className="des">{p&&p.description}</h5>
      <h4>Quantity:{p&&p.quantity}</h4>
       </div>
  </div>

  )
}

export default CardFood

