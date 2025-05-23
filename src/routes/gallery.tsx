import '../styles/main.css'
import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { loadTheme } from '../assets/toggleMode';

export const Route = createFileRoute('/gallery')({
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
      <div className="logo-container">
        <div className="logo-grid">
          <div className="logo1">
            <img src="/images/logo-gallery/GBOrchestra.png"></img>
            <h1>Grand Blanc Orchestra</h1>
          </div>
          <div className="logo2">
            <img src="/images/logo-gallery/rollhaven.svg"></img>
            <h1>RollHaven</h1>
          </div>
          <div className="logo3">
            <img src="/images/logo-gallery/heartofthejungle.png"></img>
            <h1>Heart of the Jungle</h1>
          </div>
          <div className="logo4">
            <img src="/images/logo-gallery/GBBands.png"></img>
            <h1>Proof of Concept for Grand Blanc Band Program</h1>
          </div>
          <div className="logo5">
            <img src="/images/logo-gallery/GBJazzBand.png"></img>
            <h1>Proof of Concept for Grand Blanc Jazz Band</h1>
          </div>
          <div className="logo6">
            <img src="/images/logo-gallery/lambofgod.svg"></img>
            <h1>Lamb Of God Lutheran Church</h1>
          </div>
          <div className="logo7">
            <img src="/images/logo-gallery/asterisk.png"></img>
            <h1>Proof of Concept for a Clothing Brand</h1>
          </div>
          <div className="logo8">
            <img src="/images/logo-gallery/randIM.svg"></img>
            <h1>rand.im Chat Service</h1>
          </div>
          <div className="logo9">
            <img src="/images/logo-gallery/ANR.svg"></img>
            <h1>ANR Concrete LLC</h1>
          </div>
          <div className="logo10">
            <img src="/images/logo-gallery/drillvision.svg"></img>
            <h1>DrillVision Web App</h1>
          </div>
          <div className="logo11">
            <img src="/images/logo-gallery/ChaosCard.svg"></img>
            <h1>Chaos Card Productions</h1>
          </div>
          <div className="logo12">
            <img src="/images/logo-gallery/abeckett-logo.png"></img>
            <h1>Personal Logo</h1>
          </div>
          </div>
        </div>
    </>
  )
}

export default About;
