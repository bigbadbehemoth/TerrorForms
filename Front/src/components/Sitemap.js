import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {
        
    const myStyle={
        backgroundImage:"url('https://flevix.com/wp-content/uploads/2019/12/Live-Background-1.svg')",
        marginTop: '-100px',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        backgroundClip: 'border-box'
        }
    
    return(
        <div style={myStyle} className="sitemap">
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><Link to="/" style={{color: '#777', textDecoration: 'none', fontSize: 20}}>Home</Link>
            <br /><br /><Link to="/create" style={{color: '#777', textDecoration: 'none', fontSize: 20}}>Create</Link>
            <br /><br /><Link to="/browse" style={{color: '#777', textDecoration: 'none', fontSize: 20}}>Browse</Link>
            <br /><br /><Link to="/login" style={{color: '#777', textDecoration: 'none', fontSize: 20}}>Sign Up</Link>
            <br /><br /><Link to="/terms" style={{color: '#777', textDecoration: 'none', fontSize: 20}}>Terms of Service</Link>

        </div>
        
    );
}

export default Sitemap