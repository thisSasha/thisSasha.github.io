import { useEffect, useState } from "react";
import { useRefsContext } from "../../context/RefsContext";
import { CodeBlock } from "../shared/CodeBlock";

type HoverContactProps = {
  label: string;
  link: string;
  icon: string;
  hoverLabel?: string | boolean;
  revealed: boolean;
};

function HoverSwapText({
  label,
  icon,
  link,
  hoverLabel = false,
  revealed = true,
}: HoverContactProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-fit group cursor-pointer flex gap-4 items-center text-fg-reverse overflow-hidden"
    >
      <div className="w-13 flex items-center justify-center overflow-hidden">
        {icon.startsWith("svg-") ? (
          <img
            className="relative p-1 z-10"
            src={`/icons/${icon.replace("svg-", "")}.svg`}
            alt=""
          />
        ) : (
          <i className={`${icon} text-5xl relative z-10`} />
        )}
      </div>
      <div className="relative hidden md:inline-block">
        {hoverLabel && (
          <span className="invisible text-3xl font-header whitespace-nowrap">
            {hoverLabel}
          </span>
        )}

        <span
          className={
            (hoverLabel && "absolute inset-0") +
            " text-3xl font-header z-10 whitespace-nowrap"
          }
        >
          {label}
        </span>

        {hoverLabel && (
          <div
            className={`
            absolute inset-0 z-20
            bg-bg-reverse text-fg-reverse text-3xl font-header
            whitespace-nowrap
            [clip-path:inset(0_100%_0_0)]
            transition-[clip-path] duration-500
            ${revealed ? "group-hover:[clip-path:inset(0_0_0_0)]" : ""}
          `}
          >
            {hoverLabel}
          </div>
        )}
      </div>
    </a>
  );
}

type Props = {};

export function Contacts(props: Props) {
  const refs = useRefsContext();

  const [time, setTime] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("ru-RU", {
          timeZone: "Europe/Moscow",
          hour12: false,
        }),
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = refs.contacts?.current;
    if (!el) return;
    const onScroll = () => {
      if (revealed) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.55)
        setRevealed(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [revealed]);

  return (
    <div
      id="contacts"
      // @ts-ignore
      ref={refs.contacts}
      className={`${revealed ? "bg-bg-reverse" : "bg-fg-reverse"} transition-colors duration-700 contacts py-12 md:py-20 mt-60`}
    >
      <div
        className={`container flex h-fit md:gap-0 gap-12 md:flex-row flex-col transition-colors duration-700 items-stretch justify-around ${revealed ? "text-fg-reverse" : "text-bg-reverse"}`}
      >
        <div className="flex flex-col justify-around">
          <h2 className="text-h2 font-medium">GET /contacts/</h2>
          <div>
            <h2 className="text-2xl">
              <b>$</b> localtime.sh --UTC3
            </h2>
            <span className="text-2xl">
              <b>{">"}</b> <span className="font-header">{time}</span>
            </span>
          </div>
        </div>
        <div className="w-[8px] decor rounded-full relative bg-fg-reverse"></div>
        <div className="flex md:flex-col md:justify-start justify-around gap-2 cursor-pointer overflow-hidden">
          <HoverSwapText
            revealed={revealed}
            icon="svg-telegram"
            label="Telegram"
            link="https://t.me/thisDevSasha"
            hoverLabel="@thisDevSasha"
          ></HoverSwapText>
          <HoverSwapText
            revealed={revealed}
            icon="svg-instagram"
            label="Instagram"
            link="https://www.instagram.com/this.d.sasha/"
            hoverLabel="@this.d.sasha"
          ></HoverSwapText>
          <HoverSwapText
            revealed={revealed}
            icon="svg-github"
            label="Github"
            link="https://github.com/thisSasha"
            hoverLabel="@thisSasha"
          ></HoverSwapText>
          <HoverSwapText
            revealed={revealed}
            icon="svg-kwork"
            label="Kwork"
            link="https://kwork.ru/user/thissasha"
            hoverLabel="thisSasha"
          ></HoverSwapText>
        </div>
      </div>
    </div>
  );
}
