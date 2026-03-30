export type PartnerCardProps = {
  mainImageSrc: string;
  mainImageClassName: string;
  partnerName?: string;
  partnerLogoSrc?: string;
  partnerLogoTitle?: string;
  partnerLogoClassName?: string;
};

export const PartnerCard = (props: PartnerCardProps) => {
  return (
    <div className="relative bg-slate-800 box-border caret-transparent h-[76px] min-h-[auto] min-w-[auto] snap-start w-[268px] p-4 rounded-xl md:h-[104px] md:w-72 md:p-7">
      <img
        src={props.mainImageSrc}
        className={`absolute box-border caret-transparent max-w-full ${props.mainImageClassName}`}
      />
      <div className="box-border caret-transparent isolate">
        <p className="text-slate-400 text-xs font-medium box-border caret-transparent tracking-[normal] leading-4">
          Official Partner Of
        </p>
        {props.partnerLogoSrc ? (
          <img
            title={props.partnerLogoTitle}
            src={props.partnerLogoSrc}
            className={props.partnerLogoClassName}
          />
        ) : (
          <p className="text-[22px] font-medium box-border caret-transparent tracking-[0.20636px] leading-7 md:text-2xl md:tracking-[normal] md:leading-8">
            {props.partnerName}
          </p>
        )}
      </div>
    </div>
  );
};
