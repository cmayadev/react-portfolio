import Header from './Header';
import Resume from './Resume';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import Terminal from './Terminal';

const Portfolio = ({ display, onSetDisplay }) => {
    return ( 
        <>
            <Header display={display} onSetDisplay={onSetDisplay} />
            <Resume />
            <About />
            <Skills />
            <Experience />
            <Contact />
            <Terminal />
            <Footer />
        </>
     );
}

export default Portfolio;