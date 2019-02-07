import React from 'react';
import ReactDOM from 'react-dom';

const APP = () => {
    const buttonText = 'Click Me';
    return <div>
        <label className="label"  htmlFor ="name"> Name</label>
        <input id="name" ></input>
        <button type="submit" style={{backgroundColor: 'red', color: 'white'}}>{buttonText}</button>
    </div>
}

ReactDOM.render( <APP/>,
    document.querySelector('#root'));