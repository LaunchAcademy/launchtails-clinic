import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DrinkShow = props => {
  const fetchDrink = () => {
    fetch(`/api/v1/drinks/${props.match.params.id}`, {
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
        setDrink(json);
      });
  };
  const [drink, setDrink] = useState(null);
  useEffect(fetchDrink, {});

  debugger;
  if (drink) {
    return (
      <div className="drink-show">
        <h2>{drink.title}</h2>
        <p>{drink.content}</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DrinkShow;
