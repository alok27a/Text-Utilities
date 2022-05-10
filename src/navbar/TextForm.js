/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";



export default function (props) {

    const [text, setText] = useState("Enter text here");

    const handleOnChange = (event) => {
        // console.log("Handle On Change");
        setText(event.target.value);
    }

    const upperCaseClicked = () => {
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerCaseClicked = (event) => {
        setText(text.toLowerCase());
    }


    return (
        <>
            <h3 >{props.heading}</h3>
            <div className="form-floating">
                <textarea
                    className="form-control my-3"
                    placeholder="Leave a comment here"
                    id="myBox"
                    rows="8"
                    onChange={handleOnChange}
                    value={text}
                />
            </div>
            <button className="btn btn-primary" onClick={upperCaseClicked}>Convert To Uppercase </button>
            <button className="btn btn-primary mx-3" onClick={lowerCaseClicked}>Convert To Uppercase </button>
            <div className="container my-3">
                <h4>Given Number of Words and Character</h4>
                <p>{text.split(" ").length} Words {text.length} Characters</p>
            </div>
            <div className="container my-3">
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    );
}