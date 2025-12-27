import { useRefsContext } from "../../context/RefsContext";

type Props = {};

type StackItemProps = {
    hint?: String
    children: any
};

export function Stack(props: Props) {
    const refs = useRefsContext();
    return (
        <section ref={refs.stack} className="stack py-20 md:py-40">
            <div className="container">
                <h2 className="text-center mb-8 font-header text-h2 font-bold">/ stack.db /</h2>
                <div className="grid md:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    <div className="glass p-6 rounded-tl-xl !shadow-none space-y-4 stack__card">
                        <i className="devicon-python-plain text-center block text-5xl"></i>
                        <ul className="ml-2 space-y-2 block w-fit">
                            <li className="text-2xl decor-disc animated-decor">aiogram</li>
                            <li className="text-2xl decor-disc animated-decor">FastAPI</li>
                            <li className="text-2xl decor-disc animated-decor">Flask</li>
                        </ul>
                    </div>
                    <div className="glass p-6 rounded-tr-xl !shadow-none space-y-4 stack__card">
                        <i className="devicon-javascript-plain text-center block text-5xl"></i>
                        <ul className="ml-2 space-y-2 block w-fit">
                            <li className="text-2xl decor-disc animated-decor">Vanilla</li>
                            <li className="text-2xl decor-disc animated-decor">React.js</li>
                            <li className="text-2xl decor-disc animated-decor">Next.js</li>
                            <li className="text-2xl decor-disc animated-decor">Vue</li>
                        </ul>
                    </div>
                    <div className="glass p-6 rounded-bl-xl !shadow-none space-y-4 stack__card">
                        <i className="devicon-rust-plain text-center block text-5xl"></i>
                        <ul className="ml-2 space-y-2 block w-fit">
                            <li className="text-2xl decor-disc animated-decor">ratatui</li>
                        </ul>
                    </div>
                    <div className="glass p-6 rounded-br-xl !shadow-none space-y-4 stack__card">
                        <i className="fa-solid fa-screwdriver-wrench text-center w-full block text-5xl"></i>
                        <ul className="ml-2 space-y-2 block w-fit">
                            <li className="text-2xl decor-disc animated-decor">Vite</li>
                            <li className="text-2xl decor-disc animated-decor">Git</li>
                            <li className="text-2xl decor-disc animated-decor">Figma</li>
                            <li className="text-2xl decor-disc animated-decor">SQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}