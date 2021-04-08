import React from "react"

const DrinkTile = (props) => {
  return (
    <div className="drink-tile">
      <p>{props.title}</p>
      <hr />
    </div>
  )
}

export default DrinkTile
