import { useEffect, useRef, useState } from "react";
import type { ProjectCardType } from "../data/projects";

export function MainProjectCard(props: { card: ProjectCardType }) {
    let project: ProjectCardType = props.card;
    let typeRef = useRef<HTMLDivElement>(null);
    let [isOverflow, setIsOverflow] = useState(false);
    let [tooltipVisible, setTooltipVisible] = useState(false);

    useEffect(() => {
        let el = typeRef.current;
        if (
            el &&
            (el.scrollWidth > el.clientWidth || window.matchMedia("(max-width: 768px)").matches)
        ) {
            setIsOverflow(true);
        }

    }, []);

    return (
        <div onClick={(e) => {
            // @ts-ignore
            if (!e.target.closest('.tooltip')) {
                setTooltipVisible(false)
            }
        }} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-bg-200 border-fg-700 border-2">
            <div className="border-b-2 aspect-[21/11] overflow-hidden border-fg-700">
                <img
                    className="transition group-hover:scale-110 duration-300 w-full h-full object-cover object-center"
                    src={project.img || "/projects/null.png"}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/projects/null.png";
                    }}
                />
            </div>
            <div className="px-6 flex flex-col py-8 flex-1">
                <div className="flex flex-row items-center gap-3 mb-2">
                    <h3 className="font-bold w-fit text-h4">{project.title}</h3>
                    <div className="flex flex-row gap-2 h-min text-fg-600">
                        {project.using.map(el => (
                            <i key={el} className={el + " h-min"}></i>
                        ))}
                    </div>
                    {isOverflow ? (
                        <div className="relative ml-auto">
                            <button
                                type="button"
                                className={`w-7 h-7 flex justify-center tooltip items-center rounded-full text-sm transition duration-300 ${tooltipVisible ? "bg-fg-200 text-fg-reverse" : "bg-fg-800"
                                    }`}
                                onMouseEnter={() => setTooltipVisible(true)}
                                onMouseLeave={() => { if (window.matchMedia("orientation: landscape")) setTooltipVisible(false) }}
                                onClick={() => setTooltipVisible(true)}
                            >
                                <i className="w-min h-min fas fa-info"></i>
                            </button>
                            {tooltipVisible && (
                                <div
                                    className="absolute bottom-full transition duration-300 -right-2  mb-2 whitespace-nowrap rounded-2xl bg-fg-200 text-fg-reverse px-3 py-1 text-xs shadow-xl"
                                    onClick={() => setTooltipVisible(true)}
                                >
                                    {project.type}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            ref={typeRef}
                            className="whitespace-nowrap overflow-x-auto px-4 py-1 rounded-full text-sm bg-fg-800 ml-auto"
                        >
                            {project.type}
                        </div>
                    )}
                </div>
                <p className="mb-2">{project.description}</p>
                {project?.links ? (
                    <div className="mt-auto">
                        {Object.entries(project.links).map(([key, val]) => {
                            return (
                                <a
                                    key={key}
                                    target="_blank"
                                    href={val}
                                    className="flex gap-1 mb-1/2 w-fit pr-6 md:py-0 lg:py-0 py-1 flex-row items-center"
                                >
                                    <i className="fas fa-link"></i>
                                    <span className="underline-transition after:bg-white">{key}</span>
                                </a>
                            );
                        })}
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
