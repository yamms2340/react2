import React,{useState} from 'react'
export default function Textform(props) {
  const op=(event)=>{
    settext(event.target.value)
  }
  const clear=()=>{
    let newtext=''
    settext(newtext)
  }
  const reverse=()=>{
    let newtext=text.split("").reverse("").join("")
    settext(newtext)
  }
const upper=()=>{
  let newtext=text.toUpperCase()
  settext(newtext)
  props.showalert("converted to uppercase","danger")
}
const lower=()=>{
  let newtext=text.toLowerCase()
  settext(newtext)
  props.showalert("converted to lowercase","success")

}
const copy=()=>{
  var text2=document.getElementById("mybox")
  text2.select()
  navigator.clipboard.writeText(text2.value)
}
const removesp=()=>{
let removed=text.split(/[ ]+/)

settext(removed.join(" "))
}
const [text,settext]=useState('')
  return (
    
    <div className= {`container my-3 text-${props.mode==='light'?'black':'white'}`}>
      <div className="form-group" >
    <label htmlFor="mybox"><h1>{props.heading}</h1></label>
    <textarea className="form-control" value={text} onChange={op} style={{backgroundColor:props.mode==='light'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div > 
  <div className="cont mt-3">
  <button className="btn btn-primary" onClick={upper} >convert to uppercase</button>
  <button className="btn btn-primary mx-5" onClick={lower} >to lowercase</button>
  <button className="btn btn-primary mx-5" onClick={clear} >clear all</button>
  <button className="btn btn-primary mx-5" onClick={reverse} >reverse</button>
  <button className="btn btn-primary mx-5" onClick={copy} >copy</button>
  {/* <button className="btn btn-primary mx-5" onClick={removesp} >remove extra spaces</button> */}

</div>
<div className={`container my-3 text-${props.mode==='light'?'black':'white'}`}>
<h2>Your Text summary</h2>
<p>{text.length>0?text.split(" ").length:'0'} words,{text.length-text.split(" ").length+1} characters,{text.length>0?text.split("\n").length:'0'} lines </p>
<p>{0.008* text.split(" ").length} minutes required to read</p>
<h1>Preview</h1>
<p>{text.length>0?text:'enter something in textarea to preview it here'}</p>
</div>
    </div>
  )
}
