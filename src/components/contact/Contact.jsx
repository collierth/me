import "./contact.scss"
import { useState } from "react";
import {Phone, Mail} from "@material-ui/icons";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <h2>Contact</h2>
                <div className="itemContainer">
                        <Phone className="icon" style={{fontSize: 30}}/>
                        <span>770 595 6304</span>
                    </div>
                <div className="itemContainer">
                    <Mail className="icon" style={{fontSize: 30}}/>
                    <span>collier_hawkins@bellsouth.net</span>
                </div>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="/assets/wave.png" alt=""/>
                </div>
            </div>
        </div>
    )
}