import React from "react";
import { Link } from "react-router-dom";

const Browse = () => {
    const paperStyle={ padding: '50px 20px', width:300, margin:"20px auto"}
    return(
        <div className="browse">
            <h1 style={{fontSize: 45, fontWeight:"lighter"}}>Webform Collection</h1>
            <h3 style={{fontWeight:"lighter", color: '#777'}}>Browse our entire library of user-generated webforms.</h3>
            <h4>(Except it's empty right now, sike!! Lol!!!)</h4>
            <br /><Link to="/" style={{textDecoration: 'none', color: '#888' }}>
                Go Back
                </Link>
        </div>
        
    );
}

export default Browse