import React,{useState} from 'react'

function TextForm(props) {
    const handleClick = ()=>{
       let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");

    }
    const handleOnChange =(event)=>{
        console.log("onchange");
        setText(event.target.value);
    }
    const handleLoClick = ()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!","success");
    }
    const handleClear =()=>{
      let newText=" ";
      setText(newText);
      props.showAlert("Text is cleared!","success");
    }
    const handleCopy = () =>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    
      const handleDown = () => {
        // Create a new blob with the text content
        const blob = new Blob([text], { type: 'text/plain' });
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);
        // Create a link element
        const link = document.createElement('a');
        // Set the href attribute of the link to the URL of the blob
        link.href = url;
        // Set the download attribute to specify the filename
        link.download = 'text.txt';
        // Simulate a click on the link to trigger the download
        link.click();
        // Release the object URL
        URL.revokeObjectURL(url);
        props.showAlert("Your Text is download!","success");
      };
    
    
    const [text, setText]= useState('')
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
  <div class="mb-3">
    
    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode === 'dark' ? '#13466e':'white',color:props.mode === 'dark' ? 'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <button disabled={text.length===0} onClick={handleClick} className='btn btn-primary mx-2 my-2 '>Convart Uppercase</button>
  <button disabled={text.length===0} onClick={handleLoClick} className='btn btn-primary mx-2 my-2'>Convart Lowercase</button>
  <button disabled={text.length===0} onClick={handleClear} className='btn btn-primary mx-2 my-2'>Clear</button>
  <button disabled={text.length===0} onClick={handleDown} className='btn btn-primary mx-2 my-2'>Downloard Text</button>
  <button disabled={text.length===0} onClick={handleCopy} className='btn btn-primary mx-2 my-2'>Copy Text</button>
  </div>

  <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length }Minutes red</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Nothing to preview!'}</p>
  </div>
  </>
  )
}

export default TextForm
