import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
    return(
        <div className="terms">
            <h1 style={{fontSize: 45, fontWeight:"lighter"}}>Our Terms of Service</h1>
            <h3 style={{fontWeight:"lighter", color: '#777', fontSize: 25}}>By using RTT Forms, you agree to the following:</h3>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>1.) Any and all data collected by RTT FORMS is legally the property of RTT FORMS.
            Accessing this data without permission is punishable by law and/or home invasion.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>2.) RTT FORMS offers administrative positions to applicants who meet qualifications.
            RTT FORMS reserves the right to revoke administrative privileges of any administrators for any reason at any time.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>3.) Users of RTT FORMS who are not administrators are committing a breach of privacy
            and will be subject to legal repercussions, including but not limited to lawsuits, spontaneous combustion, and/or sudden death.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>4.) RTT FORMS is not legally responsible for murder in the event a user is terminated
            for misuse of its software.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>5.) RTT FORMS as a company, legally, does not exist.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>6.) Users of RTT FORMS agree to pay a fee of no less than $300.00 U.S. dollars to RTT FORMS
            for every link clicked on its website.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>7.) Trans rights.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>8.) RTT FORMS is under no legal obligation to confirm or deconfirm the existence of extraterrestrial
            beings.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>9.) Attempting to replicate, illegally distribute, modify, or erase the source code 
            of the RTT FORMS website will result in total organ failure.</h4>
            <h4 style={{fontWeight:"lighter", color: '#777', fontSize: 17}}>10.) Reading our terms of service is against our terms of service. Run. Do not look behind you.</h4>
            <br /><Link to="/" style={{textDecoration: 'none', color: '#888' }}>
                Return to Homepage
                </Link>
        </div>
        
    );
}

export default Terms