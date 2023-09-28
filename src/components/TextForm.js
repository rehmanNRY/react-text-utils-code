import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const countWords = (text)=>{
    const cleanText = text.trim();
    if (cleanText === '') {
      return 0;
    }
    const words = cleanText.split(/\s+/);
    return words.length;
  }
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("success","Text is converted to Uppercase");
  };
  const handleLowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("success","Text is converted to Lowercase");
  };
  const handleExSpclick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success","Extra spaces are removed");
  };
  const handleRevclick = () => {
    let newText = "";
    for (let index = 0; index < text.length; index++) {
      newText = text[index] + newText;
    };
    setText(newText);
    props.showAlert("success","Text is reversed");
  };
  const handleCopyclick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success","Copied to clipboard!");
  };
  const handleClrclick = () => {
    let newText = ("");
    setText(newText);
    props.showAlert("success","Text is cleared");
  };
  return (
    <>
      <div className="container">
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Type text Here: "
            value={text}
            onChange={handleOnChange}
            id="myBox textBox"
            rows="10"
            style={{backgroundColor: (props.textAreaBg), color: (props.textAreaClr)}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} m-1`} onClick={handleUpclick}>
          Uppercase Text
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} m-1`} onClick={handleLowclick}>
          Lowercase Text
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} m-1`} onClick={handleExSpclick}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} m-1`} onClick={handleRevclick}>
          Reverse Text
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} m-1`} onClick={handleCopyclick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className={`btn btn-${props.btnClr} m-1`} onClick={handleClrclick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2 className="my-4">Your text Summary:</h2>
        <div className="container text-center text-bg-dark p-3 ">
          <div className="row row-cols-6">
            <div className="col" style={{borderRight: "2px solid white"}}>Words</div>
            <div className="col" style={{borderRight: "2px solid white"}}>Characters</div>
            <div className="col" style={{borderRight: "2px solid white"}}>Sentences</div>
            <div className="col" style={{borderRight: "2px solid white"}}>Paragraphs</div>
            <div className="col" style={{borderRight: "2px solid white"}}>Spaces</div>
            <div className="col">Punctuations</div>
          </div>
        </div>
        <div className="container text-center text-bg-light p-3">
          <div className="row row-cols-6">
            <div className="col">{countWords(text)}</div>
            <div className="col">{text.length}</div>
            <div className="col">{text.split(".").length - 1}</div>
            <div className="col">{text.split("\n").length - 1}</div>
            <div className="col">{text.split(" ").length - 1}</div>
            <div className="col">
              {text.split('"').length + text.split("'").length - 2}
            </div>
          </div>
        </div>
        <div className="container text-bg-dark p-3">
          It takes {0.008 * (text.split(" ").length - 1)} minutes or{" "}
          {0.48 * (text.split(" ").length - 1)} seconds to read
        </div>
        <h2 className="my-3">Preview</h2>
        <p>{text.length>0 ?  text: "Nothing to preview"}</p>
      </div>
    </>
  );
}