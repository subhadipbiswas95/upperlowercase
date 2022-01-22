import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log('UpperCase was clicked')
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log('UpperCase was clicked')
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () => {
        // console.log('UpperCase was clicked')
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log('UpperCase was clicked')
        console.log(event);
        setText(event.target.value)
    }


    const [text, setText] = useState("")
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className='container my-3'>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length-1} words, {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>

        </>
    )
}
