import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterCurrencies } from "@/sections/Footer/components/FooterCurrencies";

export const Footer = () => {
  return (
    <div className="relative bg-slate-950 box-border caret-transparent flex justify-center pt-4 pb-6 px-4 md:pt-6 md:pb-8 md:px-6">
      <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-6 w-full z-[1] mx-auto md:gap-x-8 md:gap-y-8">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <hr className="text-zinc-500 bg-slate-800 box-border caret-transparent h-0.5 mx-auto" />
        </div>
        <FooterLinks />
        <FooterCurrencies />
      </div>
    </div>
  );
};
