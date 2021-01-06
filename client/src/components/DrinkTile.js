import React from "react"
import { Link } from "react-router-dom"

const DrinkTile = (props) => {
  return (
    <div className="drink-tile">
      <Link to={`/drink/${props.id}`}>
        <p>{props.title}</p>
      </Link>
      <hr />
    </div>
  )
}

export default DrinkTile
