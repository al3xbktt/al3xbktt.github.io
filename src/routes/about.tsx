import '../styles/main.css'
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { createFileRoute } from '@tanstack/react-router'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { loadTheme } from '../assets/toggleMode';

export const Route = createFileRoute('/about')({
  component: About,
})


function About() {
    
    document.body.setAttribute('data-theme', loadTheme('state') || 'dark');
    useEffect(() => {
    const stack =   document.querySelectorAll('.stack');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }

    function addAnimation() {
        stack.forEach((stack) => {
            stack.setAttribute("data-animated", 'true');

            const scrollerInner = stack.querySelector('.scroller_inner');
            const scrollerChildren = scrollerInner ? Array.from(scrollerInner.children) : [];

            scrollerChildren.forEach(item => {
              const element = item as Element;
              const duplicate = element.cloneNode(true);
              (duplicate as Element).setAttribute('aria-hidden', 'true');
              scrollerInner?.appendChild(duplicate);
        });
      });
    }
    
    
  }, []);

  return (
    <>
      <Link to="/"><div className="x-button"><FontAwesomeIcon icon={faX} className="close" /></div></Link>

      <div className="about-container">

        <div className="about">  
          <div className="about1"> 
                <h1 style={{marginBottom: '-2rem'}}>All about Me</h1>
              </div>

          <div className="about2">
               <h1 style={{marginBottom: '-2rem'}}>Where I Shine</h1>
          </div>
          <div className="about3">
            <h1>My Dev Stack</h1>
            <Marquee speed={75} pauseOnHover={true}>
              <img className="stackImage shadowed" src="/images/stack/HTML5.webp" alt="html" />
              <img className="stackImage shadowed"src="/images/stack/CSS.webp" alt="css" />
              <img className="stackImage shadowed" src="/images/stack/JavaScript.webp" alt="js" />
              <img className="stackImage shadowed" src="/images/stack/React.webp" alt="react" />
              <img className="stackImage shadowed"src="/images/stack/Typescript.webp" alt="ts" />
              <img className="stackImage shadowed" src="/images/stack/NodeJS.webp" alt="nodejs" />
              <img className="stackImage shadowed" src="/images/stack/Postgresql.webp" alt="postgresql" />
              <img className="stackImage shadowed" src="/images/stack/C++.webp" alt="c++" />
              <img className="stackImage shadowed" src="/images/stack/Python.webp" alt="python" />
              <img className="stackImage shadowed" src="/images/stack/Photoshop.webp" alt="photoshop" />
              <img className="stackImage shadowed" src="/images/stack/Illustrator.webp" alt="illustrator" />
              <img className="stackImage shadowed" src="/images/stack/Premiere.webp" alt="premiere" />
              <img className="stackImage shadowed" src="/images/stack/Figma.webp" alt="figma" />
            </Marquee>        
          </div>
          <div className="about4">

          </div>

          <div className="about5">
            <h1 style={{marginBottom: '-2rem'}}>My Work</h1>  
            </div>
          <div className="about6">
            <h1 style={{marginBottom: '-2rem'}}>Connect With Me</h1>
            </div>
        </div>
        </div>
    </>
  )
}

export default About;
