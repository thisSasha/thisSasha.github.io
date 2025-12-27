type Props = {};

export function Footer(props: Props) {
    return (
        <section className="py-16 md:py-20 bg-bg-700">
            <div className="container flex flex-col gap-6">
                <div className="flex justify-around md:justify-between items-center">
                    <img src="/logos/nobg.svg" className="w-28 md:w-32"/>
                    <span className="text-fg/50 hidden md:inline">© 2025 ThisSasha. All rights reserved.</span>
                    <div className="flex items-stertch text-4xl gap-4">
                        <a href="https://t.me/thisDevSasha">
                            <i className="fab fa-telegram transition duration-300 hover:text-blue-400"></i>
                        </a>
                        <a href="https://www.instagram.com/this.d.sasha/">
                            <i className="fab fa-instagram transition duration-300 hover:text-purple-500"></i>
                        </a>
                        <a href="https://github.com/thisSasha">
                            <i className="fab fa-github transition duration-300 hover:text-fuchsia-400"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}