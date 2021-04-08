import React, { useState, useEffect } from "react"

const DrinkFormContainer = (props) => {


  return (
    <form className="new-drink-form callout primary">
      <label>
        Drink Title:
        <input
          type="text"
        />
      </label>

      <label>
        Description:
        <textarea
        ></textarea>
      </label>

      <div className="button-group">
 
      </div>
    </form>
  )
}

export default DrinkFormContainer
