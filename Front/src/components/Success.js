import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return(
        <div className="success">
            <h1 style={{fontSize: 65, fontWeight:"lighter"}}>Welcome to the team!</h1>
            <h3 style={{fontWeight:"lighter", color: '#777', fontSize: 35}}>You have been officially accepted as an RTT administrator.</h3>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>A representitive will contact you in 7 days.
            If a person claiming to be a representitive contacts you prior to that, turn off all lights and lock your doors. Arm yourself and stay hidden.</h4>
            <br /><Link to="/" style={{textDecoration: 'none', color: '#888' }}>
                Return to Homepage
                </Link>
        </div>
        
    );
}

export default Success