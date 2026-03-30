import { PartnerCard } from "@/sections/PartnersSection/components/PartnerCard";

export const PartnersSection = () => {
  return (
    <section
      role="group"
      className="relative box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 z-[1] md:gap-x-4 md:gap-y-4"
    >
      <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
        <h2 className="text-2xl font-bold box-border caret-transparent flow-root basis-[0%] grow tracking-[normal] leading-8 min-h-[auto] min-w-[auto] overflow-hidden md:text-[28px] md:leading-9">
          Roobet Partners
        </h2>
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
        className="box-border caret-transparent gap-x-2 grid grid-flow-col isolate min-h-[auto] min-w-[auto] overflow-x-scroll overflow-y-hidden gap-y-2 -mt-6 -mb-10 -mx-0.5 pt-6 pb-10 px-0.5 md:gap-x-4 md:gap-y-4"
      >
        <PartnerCard
          mainImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/DK36QST-.png"
          mainImageClassName="absolute box-border caret-transparent h-[86px] max-w-full w-[86px] right-[5px] -top-2.5 bottom-0 md:h-[117px] md:top-[-13px] md:w-[117px]"
          partnerName="Chelsea FC"
        />
        <PartnerCard
          mainImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/BM92ESmD.png"
          mainImageClassName="absolute box-border caret-transparent h-[95px] max-w-full w-[95px] right-0 -top-2.5 bottom-0 md:h-[130px] md:top-[-13px] md:w-[130px]"
          partnerName="Charles Oliveira"
        />
        <PartnerCard
          mainImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/Djy0DfOg.png"
          mainImageClassName="absolute box-border caret-transparent h-[95px] max-w-full w-[95px] right-[5px] bottom-0 md:h-[130px] md:w-[130px]"
          partnerName="100 Thieves"
        />
        <PartnerCard
          mainImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/BtCU68Gm.png"
          mainImageClassName="absolute box-border caret-transparent h-[95px] max-w-full w-[95px] right-[5px] bottom-0 md:h-[130px] md:w-[130px]"
          partnerLogoSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/gzQgA-E_.png"
          partnerLogoTitle="Matchroom"
          partnerLogoClassName="box-border caret-transparent inline-block h-[38px] max-w-full object-contain object-[0%_50%] w-[222px]"
        />
        <PartnerCard
          mainImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/Fbe2qrba.png"
          mainImageClassName="absolute box-border caret-transparent h-[42px] max-w-full w-[65px] right-[18px] bottom-[18px] md:h-[62px] md:w-[95px] md:right-[22px] md:bottom-[22px]"
          partnerLogoSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-13.png"
          partnerLogoTitle="wnt"
          partnerLogoClassName="box-border caret-transparent inline-block h-[38px] max-w-full object-contain object-[0%_50%] w-[222px]"
        />
      </div>
    </section>
  );
};
