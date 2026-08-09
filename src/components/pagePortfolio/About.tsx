import { useRefsContext } from "../../context/RefsContext";

type Props = {};

export function About(props: Props) {
  const refs = useRefsContext();
  return (
    <section id="about" ref={refs.about} className="pt-40">
      <div className="container group relative">
        <div className="mx-auto gap-24 flex items-center justify-between">
          <div className="text-[16rem] decor hover:scale-90 transition font-thin">
            &#123;
          </div>
          <div className="md:px-0 px-6">
            <h2 className="text-h2 font-header font-bold onscroll-text mb-6 md:w-fit md:text-start text-center">
              GET /about/
            </h2>
            <p className="md:text-xl text-lg transition duration-800 onscroll-opacity">
              Александр, fullstack-разработчик. Работал и в крупных коммерческих
              проектах, и над небольшими быстрыми задачами.
              <div className="my-3"></div>
              Считаю, что одно из главных в разработке — масштабируемый код. Он
              не всегда должен быть красивым. Главное, чтобы его можно было
              спокойно расширять, не обвешивая десятком костылей.
              <div className="my-3"></div>
              Постоянно слежу за новыми инструментами и внедряю те, что реально
              помогают в работе
            </p>
          </div>
          <div className="text-[16rem] decor hover:scale-90 transition font-thin">
            &#125;
          </div>
        </div>
      </div>
    </section>
  );
}
