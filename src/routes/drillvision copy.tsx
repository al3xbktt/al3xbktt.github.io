import '../styles/main.css'
import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@tanstack/react-router';
import { loadTheme } from '../assets/toggleMode';
import "react-image-gallery/styles/css/image-gallery.css";


export const Route = createFileRoute('/drillvision copy')({
  component: Work,
})


function Work() {

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
      <div className="work-container">
        <div className="work-grid">
            <div className="work1">
                <img src="/images/logo-gallery/drillvision.svg" alt="DrillVision Logo"></img>
                <h1>DrillVision</h1>
                <h2>Web Application</h2>
            </div>
            <div className="work2">
                <h4>Context</h4>
                <p>College Assignment</p>
                <h4>My Role</h4>
                <p>Full Stack Developer</p>
                <h4>Stack</h4>
                <p>HTML, CSS, Node.js, PostgreSQL, Figma, Illustrator</p>
                <h4>Timeline</h4>
                <p>2024-2025</p>
                
            </div>
            <div className="work3">
                <h1>Description</h1>
                <p>DrillVision is a web application that uses content-aware machine learning to analyze a marching band's performance and provide feedback on visual accuracy. By comparing uploaded drill charts with performance videos or photos, it identifies positioning errors in real-time. Directors and students access insights via the web app, enabling targeted corrections for improved precision.</p>
                <h1>Purpose</h1>
                <p>To enhance the precision and effectiveness of marching band performances through advanced visual analysis.</p>
                </div>
            <div className="work4">
                <img src="/images/work/DrillVision-Home.png"></img>
            </div>
            <div className="work5">
                <h1>Problem</h1>
                <p>Marching bands aim for flawless performances by intricate design and movements. However, giving individual feedback on positioning and spacing is a huge hurdle. Instructors have to dedicate far much more time fixing trivial imprecision problems like positioning, step-size, and pathing, which ends up robbing any spare time to perfect things like artistry, musicality, and emotion.</p>
            </div>
            <div className="work6">
                <img src="/images/work/DrillVision-Class.png"></img>
            </div>
            <div className="work7">
                <h1>Solution</h1>  
                <p>My team and I developed DrillVision, with the intention to automate feedback for these baseline problems, allowing bands much more opportunities to strive for perfection when it came to their shows. They get to focus on the fun stuff like the artistry, the sound, and the choreography, while DrillVision does the boring stuff for them.</p>             
            </div>
            <div className="work8">
                 <h1>My Contributions</h1>
                <p>
                As the full stack developer, I was responsible for the entire development of the web application. This included designing the user interface, implementing the backend logic, and fully integrating my group's machine learning algorithms to give a streamlined process for users to analyze drill charts and performance videos. I also ensured that the application was user-friendly and accessible for both directors and students.
                </p>
            </div>
            <div className="work9">
            <img src="/images/work/DrillVision-Feedback.png"></img>
            </div>
            <div className="work10">
                <h1>Key Takeaways</h1>
                    <ul>
                    <li>
                    <strong>Technical Implementation:</strong> Built full-stack solution using HTML/CSS, Node.js, PostgreSQL, and Python-based computer vision
                    </li>

                    <li>
                    <strong>Agile Development:</strong> Delivered project through iterative sprints with modular, scalable architecture
                    </li>

                    <li>
                    <strong>Performance Metrics:</strong> Achieved &lt;50ms latency and 95%+ accuracy in positional analysis
                    </li>

                    <li>
                    <strong>User Experience:</strong> Designed intuitive interfaces for both directors (analytics) and students (feedback)
                    </li>

                    <li>
                    <strong>Business Model:</strong> Implemented freemium structure to support underfunded music programs
                    </li>

                    <li>
                    <strong>Team Leadership:</strong> Rotated roles to ensure comprehensive understanding of all project aspects
                    </li>

                    <li>
                    <strong>Quality Assurance:</strong> Conducted rigorous end-to-end testing for security and scalability
                    </li>

                    <li>
                    <strong>Educational Impact:</strong> Demonstrated how AI can enhance creative education by reducing logistical work
                    </li>

                    <li>
                    <strong>Core Innovation:</strong> Successfully bridged technical precision with artistic development in music education
                    </li>

                    </ul>
            </div>
        </div>
</div>

    </>
  )
}

export default Work;
