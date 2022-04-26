import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const paperStyle={fontsize:29, padding: '40px 20px', width:300, margin:"20px auto"}
    const myStyle={
        backgroundImage:"url('https://flevix.com/wp-content/uploads/2019/12/Live-Background-1.svg')",
        marginTop: '-80px',
        backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        backgroundClip: 'border-box'
      }
    
    return(
        <div style={myStyle} className="home">
            <br /><br /><br /><br /><h1 style={{fontSize: 65, fontWeight:"lighter", color: "#FFF"}}>Welcome to RTT Forms.</h1>
            <br /><br /><br /><br /><h3 style={{fontWeight: "lighter", color: '#777'}}>Develop unique webforms using our powerful creation tools and view an existing catalogue of forms created by users like you.</h3>
            <nav>
                <Link to="/create">
                    <button style={paperStyle}>Create a New Webform</button>
                </Link>
                <br /><Link to="/browse">
                <button style={paperStyle}>Browse Created Webforms</button>
                </Link>
            </nav>
            <div style={{textAlign: "right", padding: "220px 90px", color: "#999"}}>©2022 Runtime Terror co.</div>
        </div>
        
    );
}

export default Home