import React from 'react';
import './Experience.css';

const Experience = () => {
    return ( 
        <section className="section" id="experience">
            <div className="container">
                <div className="section-title">
                    <h2>Experiencia</h2>
                    <p>Algunos sitios donde he trabajado con algo relacionado al mundo del desarrollo.</p>
                </div>
                <div className="experience-list">
                    <div className="media experience-item">
                        <div className="media-left">
                            <div>
                                <img src="logos/studiogenesis.jpg" alt="Studio Genesis" />
                            </div>
                        </div>
                        <div className="media-body">
                            <h4>Desarrollador Web</h4>
                            <span>Marzo, 2020 - Marzo 2021 (1 año y 1 mes)</span>
                            <p>Desarrollador frontend y backend en diversos proyectos: landings, b2b, webs corporativas...</p>
                        </div>
                    </div>
                    <div className="media experience-item">
                        <div className="media-left">
                            <div>
                                <img src="logos/catdiari.jpg" alt="Catalunya Diari" />
                            </div>
                        </div>
                        <div className="media-body">
                            <h4>Desarrollador Web</h4>
                            <span>Julio, 2018 - Diciembre 2019 (1 año y 6 meses)</span>
                            <p>Mantenimiento y desarrollo de diarios digitales y otras páginas web como horóscopos o blogs, así como mantenimiento y desarrollo de la API que nutría de datos éstas webs.</p>
                        </div>
                    </div>
                    <div className="media experience-item">
                        <div className="media-left">
                            <div>
                                <img src="logos/tecnocom.jpg" alt="Tecnocom" />
                            </div>
                        </div>
                        <div className="media-body">
                            <h4>Programador</h4>
                            <span>Julio, 2015 - Julio 2017 (2 años y 1 mes)</span>
                            <p>Mantenimiento de Aplicaciones Estalvi Caixabank con lenguaje PL/I basado en COBOL.</p>
                        </div>
                    </div>
                    <div className="media experience-item">
                        <div className="media-left">
                            <div>
                                <img src="logos/pchouse.jpg" alt="PC House" />
                            </div>
                        </div>
                        <div className="media-body">
                            <h4>Técnico y Diseñador Web</h4>
                            <span>2006 - 2007 (1 año)</span>
                            <p>Reparación y montaje de ordenadores, instalación de hardware/software, atención al cliente, venta de productos y diseño de páginas web.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;