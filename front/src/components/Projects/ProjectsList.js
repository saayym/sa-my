import projects from '../../data/projects.json';

export default function ProjectsList({ limit }) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="container mx-auto mt-1 p-4">
            <h2 id="projects" className="text-3xl text-center font-semibold mt-10">
                Expériences & Projets
            </h2>

            <hr className="mt-10 w-2/5 mx-auto" />

            <div className="flex flex-wrap mt-8 justify-center mx-auto">
                {displayedProjects.map((project, index) => (
                    <div key={index} className="max-w-xs rounded-xl shadow bg-white m-4 p-3 z-50">
                        <img src={project.attributes.projectCover} alt="" className="rounded-lg" />
                        <div className="text-center md:text-left pt-5 pb-5">
                            <p className="mb-1 text-sm font-normal">{project.attributes.projectDescription}</p>
                            <h3 className="mb-3 text-2xl font-bold tracking-tight">{project.attributes.projectTitle}</h3>
                            <p className="mb-3 text-xs tracking-tight">{project.attributes.projectDate}</p>

                            <hr className="project-hr mb-4 mt-4 w-5/5"/>

                            <div className="flex items-center justify-center md:justify-start project-techno">
                                {project.attributes.projectTechnologies && project.attributes.projectTechnologies.data && project.attributes.projectTechnologies.data.length > 0 ? (
                                    project.attributes.projectTechnologies.data.map((technology, techIndex) => (
                                        <img key={techIndex} src={`http://localhost:1337${technology.attributes.url}`} alt={technology.attributes.name} className="w-5 h-5 mr-1" />
                                    ))
                                ) : (
                                    <p>Aucune technologie spécifiée</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}