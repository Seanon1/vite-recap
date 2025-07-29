import React from 'react'

function Projects() { 

    const projects = [
        {
            id: 1,
            name: "Recipe App",
            description: "A simple recipe app that has different food menu.",
            techStack: ["Javascript", "HTML", "CSS", "Tailwind"],
            module: 'Javascript' 
        },
        {
            id: 2,
            name: "Menu App",
            description: "A simple menu app that is interactive and has many different options.",
            techStack: ["Javascript"],
            module: 'Javascript' 
        },
        {
            id:3,
            name: "Weather App",
            description: "A simple weather app that displays the current weather of a city or state.",
            techStack: ["Javascript", "HTML", "CSS", "Tailwind"],
            module: 'Javascript' 
        }
    ]
    
  return (
    <div>
        <h2>Projects</h2>

        <ul>
            {projects.map(project => (
                <li key={project.id}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <b><p>{project.module}</p></b>
                    <div>
                        <span>Tech Stack:</span>
                        <ul>
                            {project.techStack.map((tech, index) =>(
                                <li key={index}>{tech}</li>
                        ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Projects