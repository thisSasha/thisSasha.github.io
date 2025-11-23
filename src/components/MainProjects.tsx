import { useState } from "react";
import type { ProjectsType } from "../data/projects";
import { MainProjectCard } from "./MainProjectCard";

type Props = {
    projects: ProjectsType
};
const maxProjects = 6;

export function MainProjects(props: Props) {
    const [moreCards, setMoreCards] = useState(false);
    const [showAll, setShowAll] = useState(false);
    
    return (
        <section className="portfolio py-20" id="portfolio">
            <div className="container pb-10">
                <h2 className="text-h2 mb-6 text-center font-header font-bold onscroll-opacity transition duration-800">GET /projects/</h2>

                <div className="grid grid-cols-3 pt-16 pb-4 gap-6">
                    {
                        props.projects.slice(0, showAll ? -1 : maxProjects).map((project) => (
                            <MainProjectCard key={project.title} card={project} />
                        ))
                    }
                </div>
                {
                    props.projects.length > maxProjects ?
                        <div className="w-full cursor-pointer pt-2 pb-4 flex items-center justify-center" onClick={() => setShowAll(!showAll)}>
                            <button className="py-1 rounded-md cursor-pointer border border-fg/16 px-4 bg-fg/16 text-fg/90">
                                <i className={`fas fa-caret-${showAll ? "up" : "down"} mr-2`}></i>
                                {showAll ? "Свернуть проекты" : "Показать все проекты"}
                            </button>
                        </div>
                        : ""
                }
            </div>
        </section>
    );
}