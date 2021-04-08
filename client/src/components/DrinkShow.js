import React, { useEffect, useState } from "react"

const DrinkShow = (props) => {
  const [drink, setDrink] = useState({})

  const fetchDrink = () => {
    //Fetch a Single Drink
  }

  return (
    <div className="drink-show">
      <h2>{drink.title}</h2>
      <p>{drink.content}</p>
    </div>
  )
}

export default DrinkShow
