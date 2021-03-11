import React, { useState, useEffect } from "react"

const DrinkFormContainer = (props) => {
  return (
    <form className="new-drink-form callout primary">
      <label>
        Drink Title:
        <input
          name="title"
          id="title"
          type="text"
        />
      </label>
      <label>
        Description:
        <textarea
          name="content"
          id="content"
        ></textarea>
      </label>

      <div className="button-group">
        <button className="button">Clear</button>
        <input className="button" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default DrinkFormContainer
