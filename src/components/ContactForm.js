
import React, {useState} from 'react'



export default function ContactForm(props) {
  const handleUppercase=()=>{
      console.log("uppercase button was clicked " + text);
      let newText = text.toUpperCase();
      setText(newText)

  }

  const handleonchange=(event)=>{
    console.log("handleonchange button was clicked ");
    setText(event.target.value);
    

}
  const [text,setText] = useState("Enter text here!")

  return (
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUppercase}>Convert to Uppercase</button>
    </div>
  )
}
