import React, { useState } from "react";
import contactCSS from './../Number/Number.module.css';

function Number() {
    // Create states to hold form values
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handle form submit
    const handleSubmit = (e) => {
        // Allow normal form submit to Web3Forms
        // After a small delay, clear inputs
        setTimeout(() => {
            setName("");
            setEmail("");
            setMessage("");
        }, 1000); // 1 second delay to ensure data is sent before clearing
    };

    return (
        <div className={`${contactCSS.ContactWrapper} section`} id="contact">
            <h2>Contact US</h2>
            <p className={contactCSS.pera}>Let's Connect</p>
            <div className={contactCSS.ContactContainer}>
                <div className={contactCSS.ContactInfo}>
                    <div className={contactCSS.card}>
                        <i className="ri-phone-line"></i>
                        <h3>+91 6381503618</h3>
                    </div>
                    <div className={contactCSS.card}>
                        <i className="ri-mail-open-line"></i>
                        <h3>mukeshsundar30@gmail.com</h3>
                    </div>
                    <div className={contactCSS.card}>
                        <i className="ri-map-pin-line"></i>
                        <h3>Tamilnadu, India</h3>
                    </div>
                </div>

                <div className={contactCSS.Contactform}>
                    <h3>Get in touch</h3>
                    <form 
                        action="" 
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <input type="hidden" name="access_key" value="" />

                        <div className={contactCSS.inputWrapper}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Name *" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required 
                            />
                        </div>

                        <div className={contactCSS.inputWrapper}>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email *" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                        </div>

                        <textarea 
                            name="message" 
                            placeholder="Message" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Number;
