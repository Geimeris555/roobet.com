export type GameCardProps = {
  label: string;
  imageSrc: string;
  imageClassName: string;
  badge?: string;
  badgeClassName?: string;
  href?: string;
  isRestricted?: boolean;
  iconSrc?: string;
  restrictedIconSrc?: string;
};

export const GameCard = (props: GameCardProps) => {
  if (props.isRestricted) {
    return (
      <div
        aria-label={props.label}
        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
      >
        <img
          alt={props.label}
          src={props.imageSrc}
          className={` ${props.imageClassName}`}
        />
        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
            <img
              src={props.iconSrc}
              alt="Icon"
              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
            />
          </div>
        </div>
        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
          <img
            alt="Region Restricted"
            src={props.restrictedIconSrc}
            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
          />
          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
            Region Restricted
          </p>
          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
            This game is not available in your region
          </p>
        </div>
      </div>
    );
  }

  return (
    <a
      aria-label={props.label}
      href={props.href}
      className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
    >
      <img
        alt={props.label}
        src={props.imageSrc}
        className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
      />
      {props.badge && (
        <div className="items-start box-border caret-transparent gap-x-1 flex flex-col col-end-[top-start] col-start-[top-start] row-end-[top-start] row-start-[top-start] min-h-[auto] min-w-[auto] gap-y-1 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
          <p
            className={`text-slate-950 text-[9px] font-bold items-center box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] px-1.5 py-1 rounded-lg md:text-xs md:tracking-[normal] md:px-2 hover:text-slate-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-slate-950 hover:rounded-lg hover:border-0 hover:border-none ${props.badgeClassName}`}
          >
            {props.badge}
          </p>
        </div>
      )}
    </a>
  );
};
