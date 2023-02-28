import React,{useState} from "react";

export default function Textform(props) {
    const handleUpClick= ()=>{
       setText(text.toUpperCase());
       props.showAlert("Converted to upper case !","success")
    }
    const handleLoClick= ()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to lower case !","success")
     }
    const handleOnChange= (event)=>{
        setText(event.target.value)
        
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied !","success")
    }
    const handleExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space removed !","success")

    }
    const[text,setText]=useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" id="myBox"rows="6" onChange={handleOnChange} value= {text}></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy ALL</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0})} words and {text.length} Charaters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text===''?"Enter text to display preview":text}</p>
    </div>
    </>
  );
}
