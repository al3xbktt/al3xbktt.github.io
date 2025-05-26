import '../styles/main.css'
import { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { createFileRoute } from '@tanstack/react-router'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { loadTheme } from '../assets/toggleMode';
import Popup from 'reactjs-popup';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


export const Route = createFileRoute('/about')({
  component: About,
})



function About() {
  const images = [
  {
    original: '/images/image-gallery/image1.png',
    thumbnail: '/images/image-gallery/image1.png',
    
  },
  {
    original: '/images/image-gallery/image2.png',
    thumbnail: '/images/image-gallery/image2.png',
  },
  {
   original: '/images/image-gallery/image3.png',
    thumbnail: '/images/image-gallery/image3.png',
  },
  {
    original: '/images/image-gallery/image4.png',
    thumbnail: '/images/image-gallery/image4.png',
  },
  {
    original: '/images/image-gallery/image5.png',
    thumbnail: '/images/image-gallery/image5.png',
  }
];

    
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
                <h1>All About Me</h1>
                <p>I was born in Indiana and raised in Michigan, I’ve been fascinated by computers since I was 7 years old. What started as a childhood interest grew into a lifelong passion, starting first with art and design, then eventually blossoming into a passion for creative front-end development.</p> 
                <p> In college, I began to immerse myself in exploring both coding and design, but eventually working with back-end systems sparked a new ambition: mastering full-stack development.</p> 
                <p>Now, I thrive at the intersection of logic and creativity, building seamless digital experiences from start to finish. When I’m not coding, you’ll find me designing logos, gaming, or brainstorming a new project. </p>
              </div>

          <div className="about2">
               <h1>Where I Shine</h1>
               <p>I thrive at the intersection of code and creativity—building full-stack solutions with thoughtful UX/UI. </p>
               <p>My main strengths lie in my ability to merge technical execution through code development, with design-forward thinking. In total, I try to bring both analytical precision and creative vision to every project I work on. I particularaly excel in translating technical concepts into intuitive user experiences, while putting the client first.</p>

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
            <h1>My Hobbies</h1>
            <ul>
              <li>Building Keyboards</li>
              <li>Building Computers</li>
              <li>Playing Video Games</li>
              <li>Making Art</li>
              <li>Making Music</li>
            </ul>
          </div>

          <div className="about5">
            <ImageGallery showThumbnails={false} showFullscreenButton={false} showPlayButton={false} items={images} />
            </div>

          <div className="about6">
            <h1>My Work</h1>  
                <h3 style={{fontWeight:"bold"}}>Senior Customer Service Representative - Speedway (2022-Present)</h3>
                <p>While not a tech-related job, this job has helped strengthen my soft skills and has given me a unique perspective on the importance of user experience. I have:
                
                <ul>
                <li>Developed strong problem-solving skills by troubleshooting POS systems, gas pumps, and store hardware</li>

                <li>Demonstrated technical aptitude through self-taught system repairs using documentation</li>

                <li>Led training for new hires while maintaining excellent performance</li>

                <li>Practiced user-centric thinking by creating positive experiences for diverse customers</li>

                </ul>
                This experience strengthened my ability to:
                <ul>
                <li>Communicate effectively with clients and team members</li>
                <li>Work efficiently under pressure</li>
                <li>Adapt to new technologies quickly</li>
                <li>Provide exceptional customer service</li>
             </ul>
                </p>
            </div>
          <div className="about7">
            <h1>Connect With Me</h1>
                        <Popup onOpen={() => setClipboard('al3xbktt@gmail.com')} position={'bottom center'} trigger={<button style={{marginTop: '.75rem',width:"100%"}} className="btn">Copy Email</button>}>
                          <div className="pop-up">Email Copied!</div>
                        </Popup>
            
            </div>
        </div>
        </div>
    </>
  )
}

export default About;
