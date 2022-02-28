import React ,{ useState } from "react";
export default function TextForm(props) {
    const handleUpClick = () =>{
      console.log('Uppercase was clicked');
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase !","success")
    }
      const handleLoClick = () =>{
        console.log('Lowercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !","success")

    }
    const handleClearClick = () =>{
      
        console.log('Lowercase was clicked');
        let newText = "";
        setText(newText);
        props.showAlert("Cleared","success")
      }
      const handleCopy = () =>{
        console.log('Lowercase was clicked');
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
      }
      const handleRemoveSpace = () =>{
        console.log('Lowercase was clicked');
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra-Spaces","success")
      }
    const handleOnChange = (event) =>{
        console.log('On Changed');
        setText(event.target.value )
    }
  const[text, setText]=useState('')
// setText('Updated Text')
  return (
    <>
      <div className="container" style ={{color: props.mode === 'dark'?'white':'black'}}>
          <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange ={handleOnChange} value={text} style ={{backgroundColor: props.mode === 'dark'?'hsl(205deg 98% 16%)':'white',color: props.mode === 'dark'?'white':'black'}}  rows="10"></textarea>
          </div>
            <button className="btn-primary btn" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn-primary btn mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn-primary btn mx-0" onClick={handleClearClick}>Clear</button>
            <button className="btn-primary btn mx-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn-primary btn mx-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
          </div>  
      <div className="container my-3" style ={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length > 0 ? text.trim().split(" ").length :0} Words and {text.length} Characters</p>
        <p><strong>{0.008 * text.split(" ").length}</strong> Minutes to read text content</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "! Enter Something in the Textbox above to preview here"}</p>
      </div>
    </>
  );
}
