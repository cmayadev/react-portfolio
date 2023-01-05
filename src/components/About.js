import React from 'react'
import './About.css'

const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

const About = () => {
    return ( 
        <section className="section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <img src="about/cmaya-about.webp" alt="Cmaya About" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="section-title">
                            <h2>Sobre mí</h2>
                            <div className="about-me mt-4">
                                <p>Hola! Soy Cristian Maya, desarrollador web de {getAge("1988/11/09")} años con experiencia en PHP, MySQL, HTML, CSS y JavaScript.</p>
                                <p>Empecé en el mundo de la informática desde muy pequeño y siempre me ha apasionado este mundo. Desde hace unos 10 años aproximademente empecé mis pinitos en el mundo del desarrollo web, y llevo alrededor de 4 años dedicándome a ello profesionalmente. </p>
                                <p>Intento aprender y mejorar día tras día ya que en el mundo del desarrollo todo avanza muy deprisa y es muy fácil quedarse atrás. Me gusta trabajar en equipo y desarrollar proyectos con mis compañeros así como aprender de ellos.</p>
                                <p>Además de la programación, también tengo otros hobbies como el anime, la lectura, la música o los videojuegos. A éstos últimos les decico gran parte de mi tiempo libre y en los que me gustaría profundizar desde el lado del desarrollo o el diseño.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;