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

                    <div class="timeline">
                        <div class="timeline-container">
                            <div class="timeline-icon">
                                <img src="logos/omatech.jpg" alt="Omatech" />
                            </div>
                            <div class="timeline-body">
                                <h4 class="timeline-title">Desarrollador Web</h4>
                                <span>Omatech</span>
                                <p class="timeline-subtitle">Desarrollador frontend y backend</p>
                                <span class="timeline-lapse">Oct 2021 - Actualidad</span>
                            </div>
                        </div>
                        <div class="timeline-container">
                            <div class="timeline-icon">
                                <img src="logos/basetis.jpg" alt="BaseTIS" />
                            </div>
                            <div class="timeline-body">
                                <h4 class="timeline-title">Desarrollador Web</h4>
                                <span>Basetis</span>
                                <p class="timeline-subtitle">Desarrollador frontend, backend y maquetación web</p>
                                <span class="timeline-lapse">Abril, 2021 - Octubre, 2021 (7 meses)</span>
                            </div>
                        </div>
                        <div class="timeline-container success">
                            <div class="timeline-icon">
                                <img src="logos/studiogenesis.jpg" alt="Studio Genesis" />
                            </div>
                            <div class="timeline-body">
                                <h4 class="timeline-title">Desarrollador web</h4>
                                <span>StudioGenesis</span>
                                <p class="timeline-subtitle">Desarrollador frontend y backend en diversos proyectos: landings, b2b, webs corporativas...</p>
                                <span class="timeline-lapse">Marzo, 2020 - Marzo 2021 (1 año 1 mes)</span>
                            </div>
                        </div>
                        <div class="timeline-container warning">
                            <div class="timeline-icon">
                                <img src="logos/catdiari.jpg" alt="Catalunya Diari" />
                            </div>
                            <div class="timeline-body">
                                <h4 class="timeline-title">Desarrollador Web</h4>
                                <span>delCamp.cat</span>
                                <p class="timeline-subtitle">Mantenimiento y desarrollo de diarios digitales y otras páginas web como horóscopos o blogs, así como mantenimiento y desarrollo de la API que nutría de datos éstas webs.</p>
                                <span class="timeline-lapse">Julio, 2018 - Diciembre 2019 (1 año 6 meses)</span>
                            </div>
                        </div>
                        <div class="timeline-container">
                            <div class="timeline-icon">
                                <img src="logos/tecnocom.jpg" alt="Tecnocom" />
                            </div>
                            <div class="timeline-body">
                                <h4 class="timeline-title">Programador</h4>
                                <span>Tecnocom</span>
                                <p class="timeline-subtitle">Mantenimiento de Aplicaciones de Caixabank con lenguaje PL/I basado en COBOL.</p>
                                <span class="timeline-lapse">Julio, 2015 - Julio 2017 (2 años 1 mes)</span>
                            </div>
                        </div>
                        <div class="timeline-container info">
                            <div class="timeline-icon">
                                <img src="logos/pchouse.jpg" alt="PC House" />
                            </div>
                            <div class="timeline-body">
                                <h4 class="timeline-title">Técnico y Diseñador Web</h4>
                                <span>PC House</span>
                                <p class="timeline-subtitle">Reparación y montaje de ordenadores, instalación de hardware/software, atención al cliente, venta de productos y diseño de páginas web.</p>
                                <span class="timeline-lapse">Setiembre, 2006 - Setiembre, 2007 (1 año)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;