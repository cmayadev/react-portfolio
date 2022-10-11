import React from 'react';
import './Experience.css';

import jobs from "../api/jobs.json";

const Experience = () => {
    return ( 
        <section className="section" id="experience">
            <div className="container">
                <div className="section-title">
                    <h2>Experiencia</h2>
                    <p>Algunos sitios donde he trabajado con algo relacionado al mundo del desarrollo.</p>
                </div>
                <div className="experience-list">

                    <div className="timeline">
                        {
                            jobs.map((job) =>
                                <div className="timeline-container">
                                    <div className="timeline-icon">
                                        <img src={job.logo} alt={job.company} />
                                    </div>
                                    <div className="timeline-body">
                                        <h4 className="timeline-title">{job.position}</h4>
                                        <span>{job.company}</span>
                                        <p className="timeline-subtitle">{job.description}</p>
                                        <span className="timeline-lapse">{job.from} - {job.to}</span>
                                    </div>
                                </div>
                            )
                            //TODO: Create job component
                        }
                        <div className="timeline-container">
                            <div className="timeline-icon">
                                <img src="logos/basetis.jpg" alt="BaseTIS" />
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title">Desarrollador Web</h4>
                                <span>Basetis</span>
                                <p className="timeline-subtitle">Desarrollador frontend, backend y maquetación web</p>
                                <span className="timeline-lapse">Abril, 2021 - Octubre, 2021 (7 meses)</span>
                            </div>
                        </div>
                        <div className="timeline-container success">
                            <div className="timeline-icon">
                                <img src="logos/studiogenesis.jpg" alt="Studio Genesis" />
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title">Desarrollador web</h4>
                                <span>StudioGenesis</span>
                                <p className="timeline-subtitle">Desarrollador frontend y backend en diversos proyectos: landings, b2b, webs corporativas...</p>
                                <span className="timeline-lapse">Marzo, 2020 - Marzo 2021 (1 año 1 mes)</span>
                            </div>
                        </div>
                        <div className="timeline-container warning">
                            <div className="timeline-icon">
                                <img src="logos/catdiari.jpg" alt="Catalunya Diari" />
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title">Desarrollador Web</h4>
                                <span>delCamp.cat</span>
                                <p className="timeline-subtitle">Mantenimiento y desarrollo de diarios digitales y otras páginas web como horóscopos o blogs, así como mantenimiento y desarrollo de la API que nutría de datos éstas webs.</p>
                                <span className="timeline-lapse">Julio, 2018 - Diciembre 2019 (1 año 6 meses)</span>
                            </div>
                        </div>
                        <div className="timeline-container">
                            <div className="timeline-icon">
                                <img src="logos/tecnocom.jpg" alt="Tecnocom" />
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title">Programador</h4>
                                <span>Tecnocom</span>
                                <p className="timeline-subtitle">Mantenimiento de Aplicaciones de Caixabank con lenguaje PL/I basado en COBOL.</p>
                                <span className="timeline-lapse">Julio, 2015 - Julio 2017 (2 años 1 mes)</span>
                            </div>
                        </div>
                        <div className="timeline-container info">
                            <div className="timeline-icon">
                                <img src="logos/pchouse.jpg" alt="PC House" />
                            </div>
                            <div className="timeline-body">
                                <h4 className="timeline-title">Técnico y Diseñador Web</h4>
                                <span>PC House</span>
                                <p className="timeline-subtitle">Reparación y montaje de ordenadores, instalación de hardware/software, atención al cliente, venta de productos y diseño de páginas web.</p>
                                <span className="timeline-lapse">Setiembre, 2006 - Setiembre, 2007 (1 año)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;