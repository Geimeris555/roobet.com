export type GameSectionProps = {
  title: string;
  categoryHref: string;
  games: React.ReactNode;
};

export const GameSection = (props: GameSectionProps) => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
        <section
          role="group"
          className="relative box-border caret-transparent gap-x-3 flex flex-col gap-y-3 md:gap-x-4 md:gap-y-4"
        >
          <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
            <a
              href={props.categoryHref}
              className="text-2xl font-bold box-border caret-transparent flow-root basis-[0%] grow tracking-[normal] leading-8 min-h-[auto] min-w-[auto] overflow-hidden md:text-[28px] md:leading-9 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
            >
              {props.title}
            </a>
            <a
              href={props.categoryHref}
              className="relative text-[13px] font-bold items-center bg-indigo-950 box-border caret-transparent flex justify-center tracking-[normal] leading-[22.75px] min-h-[auto] min-w-16 text-center align-middle pt-[7px] pb-[9px] px-3.5 rounded-xl md:text-[15px] md:leading-[26.25px] md:pt-[11px] md:pb-[13px] hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
            >
              <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                View All
              </span>
            </a>
            <div
              role="group"
              className="box-content caret-black gap-x-[normal] block min-h-0 min-w-0 gap-y-[normal] md:aspect-auto md:box-border md:caret-transparent md:gap-x-0.5 md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            >
              <button
                type="button"
                aria-label="Previous Page"
                className="static text-black text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block shrink justify-normal tracking-[normal] leading-[normal] min-h-0 min-w-0 pointer-events-auto text-center align-baseline rounded-l-none font-arial md:relative md:appearance-none md:text-slate-500 md:text-[28px] md:font-bold md:items-center md:aspect-auto md:bg-slate-800 md:caret-transparent md:flex md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:pointer-events-none md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:p-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-l-xl"
              >
                <div className="[align-items:normal] box-content caret-black block h-auto justify-normal min-h-0 min-w-0 w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-3.svg"
                    alt="Icon"
                    className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </div>
              </button>
              <button
                type="button"
                aria-label="Next Page"
                className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block shrink justify-normal tracking-[normal] leading-[normal] min-h-0 min-w-0 text-center align-baseline rounded-r-none font-arial md:relative md:appearance-none md:text-[28px] md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:caret-transparent md:flex md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:p-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-r-xl"
              >
                <div className="[align-items:normal] box-content caret-black block h-auto justify-normal min-h-0 min-w-0 w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-4.svg"
                    alt="Icon"
                    className="box-content caret-black h-auto align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </div>
              </button>
            </div>
          </div>
          <div
            role="list"
            className="box-border caret-transparent gap-x-2 grid auto-cols-[calc(33.3333%_-_5.33333px)] grid-flow-col isolate min-h-[auto] min-w-[auto] overflow-x-scroll overflow-y-hidden gap-y-2 md:gap-x-4 md:auto-cols-[calc(14.2857%_-_13.7143px)] md:gap-y-4"
          >
            {props.games}
          </div>
        </section>
      </div>
    </div>
  );
};
