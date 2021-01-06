import React, { useState, useEffect } from "react";

import DrinkTile from "./DrinkTile";
import DrinkFormContainer from "./DrinkFormContainer";

const DrinksIndexContainer = props => {
  const [drinks, setDrinks] = useState([]);

  // Fetch all Drinks
  const fetchDrinks = () => {
    fetch("/api/v1/drinks", {
      headers: {
        "Content-Type": "application/json",
        Credentials: "same-origin"
      }
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(json => {
        setDrinks(json);
      });
  };
  useEffect(fetchDrinks, {});

  const addNewDrink = formPayload => {
    // FETCH POST LOGIC
    fetch("/api/v1/drinks", {
      method: "POST",
      body: JSON.stringify(formPayload),
      headers: {
        "Content-Type": "application/json",
        Credentials: "same-origin"
      }
    })
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then(json => {
        setDrinks([...drinks, json.drink]);
      });
  };

  const drinkTiles = drinks.map(drink => {
    return (
      <DrinkTile
        key={drink.id}
        id={drink.id}
        title={drink.title}
        body={drink.body}
      />
    );
  });

  return (
    <div className="row">
      <div className="small-8 small-centered columns">
        <h1>LaunchTails</h1>
        <hr />
        {drinkTiles}
        <DrinkFormContainer addNewDrink={addNewDrink} />
      </div>
    </div>
  );
};

export default DrinksIndexContainer;
