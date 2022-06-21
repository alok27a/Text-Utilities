import React, { useState } from "react";

export default function TextForm(props) {
  // text is a variable
  // setText is a function which will be used to update the var text
  const [text, setText] = useState("");

  function onUpperClick() {
    console.log("Upper Case was clicked");
    setText(text.toUpperCase());
  }
  function onLowerClick() {
    console.log("Lower Case was clicked");
    setText(text.toLowerCase());
  }
  function onClearClick() {
    console.log("Upper Case was clicked");
    setText("");
  }
  function handleOnChange(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label className="form-label">
            <h3>{props.title}</h3>
          </label>
          <textarea
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            // NEW THING
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={onUpperClick}
          className="btn btn-primary mx-2"
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          onClick={onLowerClick}
          className="btn btn-primary mx-2"
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          onClick={onClearClick}
          className="btn btn-primary mx-2"
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} Words and {text.length} Characters{" "}
        </p>
        <p>{0.08 * text.split(" ").length} mins read </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
