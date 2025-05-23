import '../styles/main.css'
import { Soc1, Soc2,Soc3,Soc4,Soc5,Soc6 } from '../assets/SocialIcons';
import { loadTheme, Switch } from '../assets/toggleMode';
import { useEffect } from 'react';
import { PDFModal } from '../assets/PDFModal';
import { toggleModal } from '../assets/PDFModal';
import Marquee from "react-fast-marquee";
import { createFileRoute } from '@tanstack/react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons/faArrowCircleRight';
import { Link } from '@tanstack/react-router';
import Popup from 'reactjs-popup';

export const Route = createFileRoute('/')({
  component: Index,
})


function Index() {
    
    document.body.setAttribute('data-theme', loadTheme('state') || 'dark');
  // Clipboard utility function moved outside useEffect
  async function setClipboard(text: string) {
    const type = "text/plain";
    const clipboardItemData = {
      [type]: text,
    };
    const clipboardItem = new ClipboardItem(clipboardItemData);
    await navigator.clipboard.write([clipboardItem]);
  }

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
      <PDFModal />

      <div className="container">
        <div className="parent">  
          <div className="div1"> 
            <div className="logo-content-container">
              <div className="lcc1">
            <span>  
                <h1 style={{marginBottom: '-2rem'}}>I'm Alex Beckett,</h1>
                <h1 style={{marginBottom:'.5rem'}} className="gradientText">Full Stack Developer</h1>
                <p style={{color:'#FD0354', marginBottom: '-1rem'}}>Designing Interfaces by Day</p>
                <p style={{color:'#8165FB'}}>Developing Logic By Night</p>
              </span>
              </div>
              <div className="lcc2">
<svg style={{height:'7rem', float:'right'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 661.42 572.8"><defs><style>{`.cls-1{fill:currentColor;}`}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_8" data-name="Layer 8"><path className="cls-1" d="M330.7,0,0,572.8H131.48l24.24-42h350l24.24,42H661.42ZM220.87,418,363.6,170.75l23.46,40.65-32.89,57L440.54,418Z"/><polygon className="cls-1" points="290.15 377.95 371.26 377.95 330.7 307.71 290.15 377.95"/></g></g></svg>              </div>
              </div>
              </div>
          <div className="div2">
            <img src="/images/randim-mockup.png" alt="rand.im" />
            </div>
          <div className="div3">
            <img src="/images/portfolio-mockup.png" alt="portfolio" />
            </div> 

          <div className="div4">
            <div className="socials">
            <div className="soc1">
              <a href="https://www.github.com/al3xbktt" target="_blank"><Soc1 /></a>
            </div>
            <div className="soc2">
              <a href="https://www.linkedin.com/in/alexbktt" target='_blank'><Soc2 /></a>
            </div>
            <div className="soc3">
              <a href="https://x.com/al3xbktt" target="_blank"><Soc3 /></a>
            </div>
            <div className="soc4">
              <a href="https://www.instagram.com/al3xbktt/" target="_blank"><Soc4 /></a>
            </div>
            <div className="soc5"> 
              <a href="https://dribbble.com/al3xbktt/" target="_blank"><Soc5 /></a>
            </div>
            <div className="soc6">
              <a href="mailto:al3xbktt@gmail.com" target="_blank"><Soc6 /></a>
            </div>
          </div>
          </div>
          <div className="div5">              
            <img src="/images/Myself.png" alt="Me" />
            </div>  
          <div className="div6">
            <div className="button-content-container">
              <div className="bcc1"><h1>About Me</h1>
              <p style={{fontSize:'1.5rem', marginTop:'-.1rem'}}>As a recent graduate with a Computer Science degree and Interaction Design minor, I love merging programming, UX/UI design, and problem-solving to build intuitive digital experiences</p>
              </div>
              <div className="bcc2">
              <Link to="/about"> <FontAwesomeIcon className="link-button" icon={faArrowCircleRight}/></Link>
              </div>
              </div>
          </div>
          <div className="div7">
            <div className="button-content-container">
            <div className="bcc1"><h1>Design Gallery</h1></div>
            <div className="bcc2">
            <Link to="/gallery"> <FontAwesomeIcon className="link-button" icon={faArrowCircleRight}/></Link>
            </div>
          </div>
          </div>
          <div className="div8">             
            <img src="images/DrillVision-Mockup.png" alt="DrillVision" />
          </div>
          <div className="div9">
            <h1>Connect With Me</h1>
            <Popup onOpen={() => setClipboard('al3xbktt@gmail.com')} position={'bottom center'} trigger={<button style={{marginTop: '.75rem',width:"100%"}} className="btn">Copy Email</button>}>
              <div className="pop-up">Email Copied!</div>
            </Popup>
          </div>
          <div className="div10">
            <h1>View my Resume</h1>  
            <div style={{marginTop: '2rem'}} className="btn" onClick={toggleModal}>View Resume</div>
          </div>
          <div className="div11">
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
          <div className="div12">
            <Switch />
            </div>
        
        </div>
        </div>
          
    </>
  )
}

export default Index
