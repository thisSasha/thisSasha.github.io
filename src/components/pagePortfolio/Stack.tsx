import { useEffect, useRef, useState } from "react";
import { useRefsContext } from "../../context/RefsContext";

type Props = {};

export function Stack(props: Props) {
  const refs = useRefsContext();
  const [slashStraight, setSlashStraight] = useState(false);

  useEffect(() => {
    const el = refs.stack?.current;
    if (!el) return;
    const onScroll = () => {
      const top = el.getBoundingClientRect().top;
      const h = window.innerHeight;
      if (!slashStraight && top < h * 0.4) setSlashStraight(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [slashStraight, refs.stack]);

  return (
    <section ref={refs.stack} className="stack pt-50">
      <div className="container">
        <h2 className="text-center mb-8 font-header text-h2 font-bold">
          <span
            className="inline-flex items-center justify-center w-[1em] h-[1em]"
            style={{
              transform: slashStraight ? "rotate(0deg)" : "rotate(-30deg)",
              transition: "transform 800ms ease",
            }}
          >
            /
          </span>
          &nbsp;stack.db&nbsp;
          <span
            className="inline-flex items-center justify-center w-[1em] h-[1em]"
            style={{
              transform: slashStraight ? "rotate(0deg)" : "rotate(-30deg)",
              transition: "transform 800ms ease",
            }}
          >
            /
          </span>
        </h2>
        <div className="grid md:gap-6 grid-cols-2 md:grid-cols-4">
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
              <li className="text-2xl decor-disc animated-decor">React.js</li>
              <li className="text-2xl decor-disc animated-decor">Next.js</li>
              <li className="text-2xl decor-disc animated-decor">Vue</li>
            </ul>
          </div>
          <div className="glass p-6 rounded-bl-xl !shadow-none space-y-4 stack__card">
            <i className="devicon-css3-plain text-center block text-5xl"></i>
            <ul className="ml-2 space-y-2 block w-fit">
              <li className="text-2xl decor-disc animated-decor">Tailwind.css</li>
              <li className="text-2xl decor-disc animated-decor">БЭМ</li>
              <li className="text-2xl decor-disc animated-decor">GSAP</li>
              <li className="text-2xl decor-disc animated-decor">Mobile-first</li>
            </ul>
          </div>

          <div className="glass p-6 rounded-br-xl !shadow-none space-y-4 stack__card">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="aspect-square w-12 mx-auto" viewBox="0 0 640 640">
              <path d="M102.8 57.3C108.2 51.9 116.6    51.1 123   55.3L241.9 134.5C250.8 140.4 256.1 150.4 256.1 161.1L256.1 210.7L346.9 301.5C380.2 286.5 420.8 292.6 448.1 320L574.2 446.1C592.9 464.8 592.9 495.2 574.2 514L514.1 574.1C495.4 592.8 465 592.8 446.2 574.1L320.1 448C292.7 420.6 286.6 380.1 301.6 346.8L210.8 256L161.2 256C150.5 256 140.5 250.7 134.6 241.8L55.4 122.9C51.2 116.6 52 108.1 57.4 102.7L102.8 57.3zM247.8 360.8C241.5 397.7 250.1 436.7 274 468L179.1 563C151 591.1 105.4 591.1 77.3 563C49.2 534.9 49.2 489.3 77.3   461.2L212.7   325.7L247.9 360.8zM416.1 64C436.2 64 455.5 67.7 473.2 74.5C483.2 78.3 485 91 477.5 98.6L420.8 155.3C417.8 158.3 416.1 162.4 416.1 166.6L416.1 208C416.1 216.8 423.3 224 432.1 224L473.5 224C477.7 224 481.8 222.3 484.8 219.3L541.5 162.6C549.1 155.1 561.8 156.9 565.6 166.9C572.4 184.6 576.1 203.9 576.1 224C576.1 267.2 558.9 306.3 531.1 335.1L482 286C448.9 253 403.5 240.3 360.9 247.6L304.1 190.8L304.1 161.1L303.9 156.1C303.1 143.7 299.5 131.8 293.4 121.2C322.8 86.2 366.8 64 416.1 63.9z" />
            </svg>
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
