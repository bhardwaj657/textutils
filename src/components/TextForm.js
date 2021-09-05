import React, { useState } from "react";

export default function TextForm(prop) {
  function changeHandler(event) {
    setText(event.target.value);
  }
  function copyHandler() {
    var text = document.getElementById("myBox");
    text.select();
    navigator.Clipboard.writeText(text.value);
    prop.showAlert("Copied to Clipboard", "success");
  }
  function clickUpHandler() {
    // console.log("hi");
    var newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Converted to UpperText", "success");
  }
  function nullHandler() {
    setText("");
    prop.showAlert("null Space", "success");
  }
  function clickLoHandler() {
    var newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Converted to LowerText", "success");
  }
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: prop.mode === "dark" ? "white" : "grey" }}>
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: prop.mode === "dark" ? "grey" : "white",
              color: prop.mode === "dark" ? "white" : "grey",
            }}
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={changeHandler}
          ></textarea>
          <button className="btn btn-primary" onClick={clickUpHandler}>
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mx-3 my-3"
            onClick={clickLoHandler}
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={copyHandler}>
            copy text
          </button>
          <button className="btn btn-primary mx-3 my-3" onClick={nullHandler}>
            remove text
          </button>
        </div>
        <div
          className="container my-3"
          style={{ color: prop.mode === "dark" ? "white" : "grey" }}
        >
          <p>
            {text.split("").length} words and {text.length} character
          </p>
        </div>
        <h1>Preview</h1>
        <h2>{text.length > 0 ? text : "Enter Something to preview it here"}</h2>
      </div>
    </>
  );
}
