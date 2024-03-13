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
        <h1>{props.heading}</h1>
  <div class="mb-3">
    <label for="myBox" className="form-label">Example textarea</label>
    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode === 'dark' ? 'gray':'white',color:props.mode === 'dark' ? 'white':'#042743'}} onChange={handleOnChange} rows="8"></textarea>
  </div>
  <button onClick={handleClick} className='btn btn-primary mx-2'>Convart Uppercase</button>
  <button onClick={handleLoClick} className='btn btn-primary mx-2'>Convart Lowercase</button>
  <button onClick={handleClear} className='btn btn-primary mx-2'>Clear</button>
  <button onClick={handleDown} className='btn btn-primary mx-2'>Downloard Text</button>
  </div>

  <div className="container my-3" style={{color:props.mode === 'dark' ? 'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 *text.split(" ").length }Minutes red</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something in the textbox about to preview it here'}</p>
  </div>
  </>
  )
}

export default TextForm