import React from 'react';
import './Contact.css';

const Contact = () => {
    return ( 
        <section className="section alt" id="contact">
            <div className="container">
                <div className="section-title">
                        <h2>Contacto</h2>
                        <p>Ponte en contacto conmigo en:</p>
                </div>
                <div className="mt-4">
                    <a href="mailto:cmayadev@gmail.com">
                        <span>cmayadev@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
     );
}

export default Contact;