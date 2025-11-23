import { useEffect, useRef } from "react";

type Props = {};

export function MainNav(props: Props) {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > window.innerHeight)
                navRef?.current?.classList.add('active')
            else
                navRef?.current?.classList.remove('active')
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <nav ref={navRef} className="navbar flex justify-center gap-8 items-center glass w-[96%] left-1/2 -translate-x-1/2 h-12 rounded-md bg-bg text-fg z-100 top-2 fixed transition duration-300 ease-in-out ">
            <div className="navbar__link">Обо мне</div>
            <div className="navbar__link">Портфолио</div>
            <div className="navbar__link">Контакты</div>
        </nav>
    );
}