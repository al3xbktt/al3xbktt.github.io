import '../styles/main.css'
import { useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@tanstack/react-router'
import { loadTheme } from '../assets/toggleMode'
import { projects } from '../data/projects' // <-- Import your projects data
import "react-image-gallery/styles/css/image-gallery.css"

// Make the route dynamic
export const Route = createFileRoute('/work')({
  component: Work,
})

function Work() {
  // Get projectId from route params
  const { projectId } = Route.useParams()
  // Find the project data by id (case-insensitive)
  const project =
    (projects as Record<string, typeof projects[keyof typeof projects]>)[projectId] ||
    (projects as Record<string, typeof projects[keyof typeof projects]>)[projectId?.toLowerCase?.()] ||
    (projects as Record<string, typeof projects[keyof typeof projects]>)[projectId?.toUpperCase?.()]

  useEffect(() => {
    document.body.setAttribute('data-theme', loadTheme('state') || 'dark')
    
  }, [])

  if (!project) {
    return (
      <>
        <Link to="/"><div className="x-button"><FontAwesomeIcon icon={faX} className="close" /></div></Link>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h1>Project not found</h1>
        </div>
      </>
    )
  }

  return (
    <>
      <Link to="/"><div className="x-button"><FontAwesomeIcon icon={faX} className="close" /></div></Link>
      <div className="work-container">
        <div className="work-grid">
          {/* Use project data dynamically */}
          <div className="work1">
            <img src={project.logo} alt={`${project.title} Logo`} />
            <h1>{project.title}</h1>
            <h2>{project.subtitle}</h2>
          </div>
          <div className="work2">
            <h4>Context</h4>
            <p>{project.context}</p>
            <h4>My Role</h4>
            <p>{project.role}</p>
            <h4>Stack</h4>
            <p>{project.stack}</p>
            <h4>Timeline</h4>
            <p>{project.timeline}</p>
          </div>
          <div className="work3">
            <h1>Description</h1>
            <p>{project.description}</p>
            <h1>Purpose</h1>
            <p>{project.purpose}</p>
          </div>
          <div className="work4">
            <img src={project.images.main} alt={`${project.title} Screenshot`} />
          </div>
          <div className="work5">
            <h1>Problem</h1>
            <p>{project.problem}</p>
          </div>
          <div className="work6">
            <img src={project.images.secondary} alt={`${project.title} Secondary Screenshot`} />
          </div>
          <div className="work7">
            <h1>Solution</h1>
            <p>{project.solution}</p>
          </div>
          <div className="work8">
            <h1>My Contributions</h1>
            <p>{project.contributions}</p>
          </div>
          <div className="work9">
            <img src={project.images.tertiary} alt={`${project.title} Tertiary Screenshot`} />
          </div>
          <div className="work10">
            <h1>Key Takeaways</h1>
            <ul>
              {project.takeaways.map((takeaway, idx) => (
                <li key={idx}>
                  <strong>{takeaway.title}:</strong> {takeaway.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
