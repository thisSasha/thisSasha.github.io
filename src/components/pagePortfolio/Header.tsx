import { useEffect, useState } from "react";
import { to_id } from "../../App";
import { useRefsContext } from "../../context/RefsContext";

type Props = {};


export function Header(props: Props) {
    const refs = useRefsContext();

    return (
        <header className="header w-full h-screen" style={{
            // @ts-ignore
            '--bg': `url(/header/bgs/${Math.round(Math.random() * 4 + 1)}.svg`,
            // @ts-ignore
            '--bg-mobile': `url(/header/bgs/mobile/${Math.round(Math.random() * 4 + 1)}.svg`
        }}>
            <div
                className={[
                    "glass-landscape header__card relative",
                ].join(" ")}
            >
                <div className="p-6 flex flex-col items-center justify-center gap-18">
                    <h1 className="text-h1 font-header font-semibold"><span className="decor">&#123;</span> <small className="decor">Host: </small>ThisSasha <span className="decor">&#125;</span></h1>
                    <div className="flex items-stretch flex-col lg:flex-row gap-4 lg:gap-8 justify-center w-full">
                        <button onClick={() => to_id(refs.portfolio)} className="header__button">Портфолио</button>
                        <button onClick={() => to_id(refs.stack)} className="header__button">Стек</button>
                        <button onClick={() => to_id(refs.contacts)} className="header__button">Контакты</button>
                    </div>
                </div>
                <p className="absolute left-1/2 bottom-10 -translate-x-1/2 decor">vvv</p>
            </div>
        </header>
    );
}