import projects from '../../data/projects.json';
import Image from 'next/image';

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
                        <Image src={project.attributes.projectCover} alt="" className="rounded-lg" layout="responsive" width={200} height={200} />
                        <div className="text-center md:text-left pt-5 pb-5">
                            <p className="mb-1 text-sm font-normal">{project.attributes.projectDescription}</p>
                            <h3 className="mb-3 text-xl font-bold tracking-tight">{project.attributes.projectTitle}</h3>
                            <p className="mb-3 text-xs tracking-tight">{project.attributes.projectDate}</p>

                            <hr className="project-hr mb-4 mt-4 w-5/5"/>

                            <div className="flex items-center justify-center md:justify-start">
                                {project.attributes.projectTechnologies && project.attributes.projectTechnologies.data && project.attributes.projectTechnologies.data.length > 0 ? (
                                    project.attributes.projectTechnologies.data.map((technology, techIndex) => (
                                        technology.stackUsed ? (
                                            <Image key={techIndex} src={technology.stackUsed.url} alt={technology.stackUsed.name} className="w-5 h-5 mr-1" layout="fixed" width={20} height={20} />
                                        ) : null
                                    ))
                                ) : (
                                    <p className="text-sm tracking-tight">Aucune technologie spécifiée</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}