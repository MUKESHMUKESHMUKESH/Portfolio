import React from "react";
import contactCSS from './../Contact/Contact.module.css'

function Contact() {
    return (
        <div className={`$ {contactCSS.ContactWrapper} section`}>
            <h2>Contact US</h2>
                  <p className={contactCSS.pera}>Hai ,This is Mukesh </p>
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

                            <div className={contactCSS.inputWrapper}>
                                <input type="text" placeholder="Name *" />
                            </div>

                            <div className={contactCSS.inputWrapper}>
                                <input type="email" placeholder="Email *" />
                            </div>
                            <textarea placeholder="Message"></textarea>

                            <button>submit
                           

                             </button>
                    </div>
                  </div>
        </div>
    )
}
export default Contact;