import { useRef, useState } from "react";
import type { ProjectsType } from "../data/projects";
import { MainProjectCard } from "./MainProjectCard";

type Props = {
    projects: ProjectsType
};

const maxProjects = 6;

export function MainProjects(props: Props) {
    const [showAll, setShowAll] = useState(false);
    const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
    const [fullHeight, setFullHeight] = useState<number | null>(null);
    const measuredRef = useRef(false);

    const hasMore = props.projects.length > maxProjects;

    const measureRef = (el: HTMLDivElement | null) => {
        if (!el || measuredRef.current) return;
        const parent = el.parentElement;
        if (!parent) return;
        const cardRect = el.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();
        const height = cardRect.bottom - parentRect.top + 8;
        if (height > 0) {
            measuredRef.current = true;
            setCollapsedHeight(height);
        }
        setFullHeight(parent.clientHeight);
    };

    return (
        <section className="portfolio py-20" id="portfolio">
            <div className="container pb-10">
                <h2 className="text-h2 mb-6 text-center font-header font-bold onscroll-opacity transition duration-800">
                    GET /projects/
                </h2>

                <div className="md:px-0 px-6 pt-16 pb-4">
                    <div
                        className="overflow-hidden transition-[max-height] duration-500"
                        style={
                            hasMore && collapsedHeight !== null && !showAll
                                ? { maxHeight: `${collapsedHeight}px` }
                                : { maxHeight: `${fullHeight}px` }
                        }
                    >
                        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
                            {props.projects.map((project, index) => (
                                <div
                                    key={project.title}
                                    ref={index === maxProjects - 1 ? measureRef : undefined}
                                >
                                    <MainProjectCard card={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {hasMore ? (
                    <div
                        className={`w-full cursor-pointer pt-2 pb-4 flex container items-center justify-center${showAll ? " sticky bottom-0" : ""}`}
                        onClick={() => setShowAll(!showAll)}
                    >
                        <div className={`flex-1 h-[2px] rounded-full bg-fg-500 transition duration-300 origin-right ${showAll ? ' scale-x-0' : ''}`}></div>
                        <button className="py-1 rounded-md cursor-pointer border border-fg-500 px-4 bg-bg-100 text-fg-50">
                            <i className={`fas fa-caret-${showAll ? "up" : "down"} mr-2`}></i>
                            {showAll ? "Свернуть проекты" : "Показать все проекты"}
                        </button>
                        <div className={`flex-1 h-[2px] rounded-full bg-fg-500 transition duration-300 origin-left ${showAll ? ' scale-x-0' : ''}`}></div>
                    </div>
                ) : ""}
            </div>
        </section>
    );
}
