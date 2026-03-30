export type BetsTableRowProps = {
  gameHref: string;
  gameAlt: string;
  gameImageSrc: string;
  gameName: string;
  userImageSrc: string;
  userLabel: string;
  time: string;
  betAmount: string;
  cryptoAlt: string;
  cryptoImageSrc: string;
  multiplier?: string;
  multiplierClass?: string;
  payout?: string;
  payoutClass?: string;
};

export const BetsTableRow = (props: BetsTableRowProps) => {
  return (
    <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
        <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
          <a
            href={props.gameHref}
            className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
          >
            <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
              <img
                alt={props.gameAlt}
                src={props.gameImageSrc}
                className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
              />
            </div>
            <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {props.gameName}
            </span>
          </a>
        </div>
      </td>
      <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
        <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src={props.userImageSrc}
              className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
            />
          </div>
          <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            {props.userLabel}
          </span>
        </div>
      </td>
      <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
        {props.time}
      </td>
      <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
        <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
          {props.betAmount}
          <img
            alt={props.cryptoAlt}
            src={props.cryptoImageSrc}
            className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
          />
        </div>
      </td>
      {props.multiplier !== undefined && (
        <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
          <span
            className={`text-black caret-black md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.multiplierClass ?? ""}`}
          >
            {props.multiplier}
          </span>
        </td>
      )}
      {props.payout !== undefined && (
        <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-7 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
          <span
            className={`text-black caret-black md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.payoutClass ?? ""}`}
          >
            {props.payout}
          </span>
        </td>
      )}
    </tr>
  );
};
