type Props = {};

export function NotFound(props: Props) {
    return <div className="w-full flex justify-center items-center h-screen">
        <div className="flex flex-col items-center gap-6">
            <h1 style={{textShadow: "0 0 12px var(--color-fg)"}} className="text-[8vw] font-decor">404</h1>
            <p className="text-[4vw]">&#123; <small><a className="underline" href="/">Action: На главную</a></small> &#125;</p>
        </div>
    </div>;
}