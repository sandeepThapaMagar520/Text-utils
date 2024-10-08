
import React, {useState} from 'react'



export default function ContactForm(props) {
  // changing text to upper case 
  const handleUppercase=()=>{
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to upper case", "success")

  }
  // changing text to lower case
  const handleLowercase=()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success")
  }
  //clearing 
  const handleBlank=()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Deleted", "danger")
  }

  const handleonchange=(event)=>{
    setText(event.target.value);  
  }

  const handleCopy= () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success")
  }
  const handleExtraSpaces =() =>{
    let removedSpaces = text.split(/[ ]+/);
    setText(removedSpaces.join(" "))
    props.showAlert("Spaces removed", "success")
  }

  const [text,setText] = useState("")

  return (
    <>
      <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
          <h1 >{props.heading} </h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8" placeholder='Enter your text here' style={{backgroundColor: props.mode==="dark"?"#042743":"white",color: props.mode==="dark"?"white":"black"}}>
              </textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUppercase}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLowercase}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleBlank}>Clear Text</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2 my-2"onClick={handleExtraSpaces}>Clear Spaces</button>

      </div>
      <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>Your Text Word: <b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b></p>         
        <p>Your Text characters:<b> {text.length}</b> </p>
        <p>Minutes to read: <b>{0.008* (text.split(" ").filter((element)=>{return element.length!==0}).length)}</b></p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview here!"}</p>
      </div>
    </>
    
  )
}
