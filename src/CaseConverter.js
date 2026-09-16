import React, { useState } from 'react'

export default function UpperCase(props) {
    let [text, setText] = useState("")
    let [textColor, setTextColor] = useState("#000000")
    let [selectedColor, setSelectedColor] = useState("#000000")
    let changeToUpper = () => {
        let upText = text.toUpperCase();
        setText(upText)
    }
    let takeUserInput = (e) => {
        setText(e.target.value)
    }
    let changeToLower = () => {
        let lowText = text.toLowerCase();
        setText(lowText)
    }
    let changeColorHandle = (e) => {
        setSelectedColor(e.target.value)
    }
    let changeColor = () => {
        setTextColor(selectedColor)
    }
    let textAreaClear = () => {
        let remove = "";
        setText(remove)
    }
    let capitalizeText=(e)=>{
        let captalize=text.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
        setText(captalize)
    }
    let charCount = text.length;
    let wordCount = text.split(" ").length
    return (<>
        <div className='my-4'>
            <h2 className='text-center'>{props.heading}</h2>
            <div className='mb-3 bg-tertiary'>
                <textarea className="form-control" value={text} onChange={takeUserInput} id="mybox" rows="10" style={{ color: textColor, border:"2px solid brown"}}></textarea>
            </div>
            <div className='d-flex justify-content-start'>
                <p className='mx-3'>Char Count: {charCount}</p>
                <p>Word Count: {wordCount}</p></div>
            <div className='d-flex flex-wrap gap-2 align-items-center'>
                <button className='btn btn-primary' onClick={changeToUpper}>Convert to UpperCase</button>
                <button className='btn btn-primary' onClick={changeToLower}>Convert to LowerCase</button>
                <input type="color" value={selectedColor} onChange={changeColorHandle} />
                <button className='btn btn-primary' onClick={changeColor}>Change Color</button>
                <button className='btn btn-primary' onClick={capitalizeText}>Capitalize Text</button>
                <button className='btn btn-primary' onClick={textAreaClear}>Clear</button>
            </div>
        </div>
    </>
    )
}
