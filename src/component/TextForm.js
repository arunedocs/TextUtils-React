import React ,{ useState } from "react";
export default function TextForm(props) {

    const handleUpClick = () =>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase !","success")
    }
      const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase !","success")

    }
    const handleClearClick = () =>{
      
        let newText = "";
        setText(newText);
        props.showAlert("Cleared","success")
      }
      const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard","success");
      }
      const handleRemoveSpace = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra-Spaces","success")
      }
    const handleOnChange = (event) =>{
        setText(event.target.value )
    }
  const[text, setText]=useState('')
// setText('Updated Text')
  return (
    <>
      <div className="container" style ={{color: props.mode === 'dark'?'white':'black'}}>
          <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" onChange ={handleOnChange} value={text} style ={{backgroundColor: props.mode === 'dark'?'hsl(205deg 98% 16%)':'white',color: props.mode === 'dark'?'white':'black'}}  rows="10"></textarea>
          </div>
            <button disabled={text.length===0} className="btn-primary btn" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn-primary btn mx-3 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn-primary btn mx-0 my-1" onClick={handleClearClick}>Clear</button>
            <button disabled={text.length===0} className="btn-primary btn mx-3 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn-primary btn mx-1 my-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
          </div>  
      <div className="container my-3" style ={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length} Words and {text.length} Characters</p>
        <p><strong>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length}</strong> Minutes to read text content</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
      </div>
    </>
  );
}
