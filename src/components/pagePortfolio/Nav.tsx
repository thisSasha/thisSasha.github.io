import { useEffect, useRef, useState } from "react";
import { to_id } from "../../App";
import { useRefsContext } from "../../context/RefsContext";

export function Nav() {
    const stickyNavRef = useRef<HTMLDivElement>(null);
    const refs = useRefsContext();
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = window.matchMedia("orientation: landscape").matches;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 0.2)
                stickyNavRef.current?.classList.add("active");
            else if (isDesktop) {
                stickyNavRef.current?.classList.remove("active");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const go = (ref: any) => {
        to_id(ref);
        setIsOpen(false);
    };

    return (
        <nav
            ref={stickyNavRef}
            className={`navbar font-header glass w-[96%] left-1/2 -translate-x-1/2 rounded-md bg-bg text-fg z-100 top-2 fixed transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? "max-h-[320px]" : "max-h-12"}
                ${!isDesktop ? "active" : ""}
                md:max-h-12 md:h-12 md:flex md:justify-center md:items-center md:flex-wrap`}
        >
            <div className="w-full h-12 flex items-center justify-between px-4 md:hidden">
                <div className="opacity-70 select-none">/Nav.tsx/</div>
                <button
                    type="button"
                    aria-label="Toggle menu"
                    onClick={() => setIsOpen(v => !v)}
                    className="h-10 w-10 flex items-center justify-center"
                >
                    <div className="relative flex h-6 w-6 items-center justify-center">
    <span
        className={`absolute h-[2px] w-6 bg-fg transition-all duration-300 ${
            isOpen ? "rotate-45" : "-translate-y-2"
        }`}
    />
    <span
        className={`absolute h-[2px] w-6 bg-fg transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
        }`}
    />
    <span
        className={`absolute h-[2px] w-6 bg-fg transition-all duration-300 ${
            isOpen ? "-rotate-45" : "translate-y-2"
        }`}
    />
</div>

                </button>
            </div>

            <div className="hidden md:flex gap-6 items-center justify-center">
                <div className="navbar__link" onClick={() => go(refs.about)}>Обо мне</div>
                <div className="navbar__link" onClick={() => go(refs.portfolio)}>Портфолио</div>
                <div className="navbar__link" onClick={() => go(refs.contacts)}>Контакты</div>
                <div className="navbar__link" onClick={() => go(refs.stack)}>Мой стек</div>
            </div>

            <div className={`md:hidden w-full ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
                <div className="border-t border-fg/20" />
                <div className="px-4 py-3 navbar__link" onClick={() => go(refs.about)}>Обо мне</div>
                <div className="border-t border-fg/20" />
                <div className="px-4 py-3 navbar__link" onClick={() => go(refs.portfolio)}>Портфолио</div>
                <div className="border-t border-fg/20" />
                <div className="px-4 py-3 navbar__link" onClick={() => go(refs.contacts)}>Контакты</div>
                <div className="border-t border-fg/20" />
                <div className="px-4 py-3 navbar__link" onClick={() => go(refs.stack)}>Мой стек</div>
            </div>
        </nav>
    );
}
