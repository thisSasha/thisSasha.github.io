import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import { MainHeader } from "../components/MainHeader";
import { MainNav } from "../components/MainNav";
import { MainAbout } from "../components/MainAbout";
import { MainProjects } from "../components/MainProjects";

type Props = {};

const running = new WeakMap<HTMLElement, number>();

export async function typeEffect(el: HTMLElement, val: string | string[], delay = 100) {
    const text = Array.isArray(val) ? val.join("") : String(val);
    const id = (running.get(el) || 0) + 1;
    running.set(el, id);
    el.textContent = text[0];
    let i = 0
    for (const ch of text) {
        if (running.get(el) !== id) return;
        el.textContent = el.textContent?.slice(0, -1) + ch + (i == text.length - 1 ? '' : '_');
        await new Promise(r => setTimeout(r, delay));
        i += 1
    }
}

export function Portfolio(props: Props) {
    const [onscrollText, setOnscrollText] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        const els = document.querySelectorAll(".onscroll-text");
        els.forEach(el => {
            if (!el.id) {
                el.id = `id_${Math.round(Math.random() * 100)}_${Date.now()}`;
            }
            let newOnscroll = onscrollText;
            newOnscroll[el.id] = el.textContent;
            el.textContent = 'ㅤ';
            setOnscrollText(newOnscroll)
        });


        const opacityEls = document.querySelectorAll('.onscroll-opacity')
        opacityEls.forEach(el => el.classList.add('opacity-0'))
        const onScroll = () => {
            opacityEls.forEach(el => {
                if (el && el.getBoundingClientRect().top < window.innerHeight * 0.65)
                    el.classList.remove('opacity-0');
            })
            Object.keys(onscrollText).forEach(key => {
                const el = document.getElementById(key);
                if (el && el.getBoundingClientRect().top < window.innerHeight * 0.65 && el.textContent == 'ㅤ') {
                    typeEffect(el, onscrollText[key].split(''));
                }

            })
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <MainHeader></MainHeader>
            <MainNav></MainNav>
            <MainAbout></MainAbout>
            <MainProjects projects={projects}></MainProjects>
        </>
    );
}
