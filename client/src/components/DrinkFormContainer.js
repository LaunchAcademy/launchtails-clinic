import React, { useState, useEffect } from "react"

const DrinkFormContainer = (props) => {
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [newDrink, setNewDrink] = useState({
    title: "",
    content: "",
  })

  const handleInputChange = (event) => {
    setNewDrink({
      ...newDrink,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewDrink(newDrink)
  }

  return (
    <form className="new-drink-form callout primary" onSubmit={handleSubmit}>
      <label>
        Drink Title:
        <input
          name="title"
          id="title"
          type="text"
          value={newDrink.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="content"
          id="content"
          onChange={handleInputChange}
          value={newDrink.content}
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
