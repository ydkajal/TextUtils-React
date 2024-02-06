import React, {useState} from 'react'
//import to use state {useState}


export default function TextForm(props) {
    const habdleUpClick = () =>{
        // console.log('Uppercase was clicked'+text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to uppercase" , "success")

    }
    const habdlelowClick = () =>{
        // console.log('Uppercase was clicked'+text)
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to lower case" , "success")

    }
    const habdleClear = () =>{
        // console.log('Uppercase was clicked'+text)
        let newtext = ''
        setText(newtext)
        props.showAlert("Text has been cleared" , "success")

    }
    const habdleCopyr = () =>{
        let newtext = document.getElementById("myBox")
        newtext.select()
        navigator.clipboard.writeText(newtext.value)
        props.showAlert("Text copied to clipboard" , "success")

    }
    const habdleExtra = () =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra spaces removed" , "success")

    }
    const handleOnChange = (event) =>{
        // console.log('onchange')
        setText(event.target.value)
    }

    const avoidEmpty = (text) =>{
        const a = text.split(" ");
        var ct = 0;
        for(let i=0; i<a.length; i+=1){
            if(a[i] !== ""){
                ct += 1;
            }     
        }
        return ct
    }

    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={habdleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={habdlelowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={habdleClear}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={habdleCopyr}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={habdleExtra}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            <p>{avoidEmpty(text)} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter somthing in the above textbox to preview it here.'}</p>
        </div>
        </>
        
    )
}
