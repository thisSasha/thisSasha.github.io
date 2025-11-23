type Props = {};

function to_id(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function MainHeader(props: Props) {
    return (
        <header className="header w-full h-screen">
            <div
                className={[
                    "glass header__card relative",
                ].join(" ")}
            >
                <div className="p-6 flex flex-col items-center justify-center gap-18">
                    <h1 className="text-h1 font-header font-semibold">&#123; <small>Host: </small>ThisSasha &#125;</h1>
                    <div className="flex gap-8 justify-center w-full">
                        <button onClick={() => to_id("portfolio")} className="header__button">Портфолио</button>
                        <button onClick={() => to_id("blog")} className="header__button">Блог</button>
                        <button onClick={() => to_id("contacts")} className="header__button">Контакты</button>
                    </div>
                </div>
                <p className="absolute left-1/2 bottom-10 -translate-x-1/2">vvv</p>
            </div>
        </header>);
}