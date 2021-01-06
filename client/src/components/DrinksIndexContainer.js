import React, { useState, useEffect } from "react"

import DrinkTile from "./DrinkTile"
import DrinkFormContainer from "./DrinkFormContainer"

const DrinksIndexContainer = (props) => {
  const [drinks, setDrinks] = useState([])

  const fetchDrinks = () => {
    // Fetch all Drinks Here
  }

  const addNewDrink = (formPayload) => {
    // FETCH POST LOGIC
  }

  const drinkTiles = drinks.map((drink) => {
    return <DrinkTile key={drink.id} id={drink.id} title={drink.title} body={drink.body} />
  })

  return (
    <div className="grid-y grid-margin-y grid-padding-y">
      <div className="cell small-6 large-8">
        <h1>LaunchTails</h1>
        <hr />
        {drinkTiles}
      </div>
      <div className="cell small-6 large-4">
        <DrinkFormContainer addNewDrink={addNewDrink} />
      </div>
    </div>
  )
}

export default DrinksIndexContainer
