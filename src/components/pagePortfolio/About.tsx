import { useRefsContext } from "../../context/RefsContext";

type Props = {};

export function About(props: Props) {
    const refs = useRefsContext();
    return (
        <section id="about" ref={refs.about} className="py-20 md:py-40">
            <div className="container group relative">
                <div className="mx-auto gap-24 flex items-center justify-between">
                    <div className="text-[16rem] decor hover:scale-90 transition font-thin">&#123;</div>
                    <div className="md:px-0 px-6">
                        <h2 className="text-h2 font-header font-bold onscroll-text mb-6 md:w-fit md:text-start text-center">GET /about/</h2>
                        <p className="md:text-xl text-lg transition duration-800 onscroll-opacity">
                            Меня зовут Александр. Занимаюсь фронтендом, пишу бэкенд на Python и делаю телеграм-ботов. Интересуюсь математикой, особенно матанализом.

                            Люблю автоматизировать всё, что можно.
                            <br /> <br className="md:hidden" />
                            В свободное время бегаю и катаюсь на велосипеде. Стараюсь быть пунктуальным и держу своё слово.
                        </p>
                    </div>
                    <div className="text-[16rem] decor hover:scale-90 transition font-thin">&#125;</div>
                </div>
            </div>
        </section>
    );
}