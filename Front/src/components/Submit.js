import React from "react";
import { Link } from "react-router-dom";

const Submit = () => {
    const myStyle={
        backgroundImage:"url('https://flevix.com/wp-content/uploads/2019/12/Live-Background-1.svg')",
        marginTop: '-80px',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        backgroundClip: 'border-box'
      }
    return(
        <div style={myStyle} className="submit">
            <br/><br/><br/><h1 style={{fontSize: 65, fontWeight:"lighter", color: '#FFF'}}>Webform Generated</h1>
            <br/><br/><br/><h3 style={{fontWeight:"lighter", color: '#777', fontSize: 27}}>Your custom form will be stored in our database and visible to other users.</h3>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>Here's the finalized design and source code:</h4>
            
            
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>Name your webform and save it to upload it to our database 
            if you'd like to make it public and re-accessible:</h4>
            <br/><br/><br/><br/><br /><br /><br /><br /><Link to="/" style={{textDecoration: 'none', color: '#888' }}>
                Return to Homepage
                </Link>
        </div>
        
    );
}

export default Submit