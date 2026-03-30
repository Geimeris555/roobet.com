import { HeaderLogo } from "@/sections/MainLayout/components/HeaderLogo";
import { HeaderActions } from "@/sections/MainLayout/components/HeaderActions";

export const Header = () => {
  return (
    <header className="relative items-center bg-slate-800 box-border caret-transparent flex flex-col shrink-0 col-end-[nav] col-start-[nav] row-end-[nav] row-start-[nav] min-h-[auto] min-w-[auto] pointer-events-auto w-full z-auto right-0 top-0 md:z-[2]">
      <div className="items-center box-border caret-transparent flex h-full justify-center min-h-[auto] min-w-[auto] w-full">
        <div className="relative items-center box-border caret-transparent grid grid-cols-none h-14 justify-between max-w-[1248px] min-h-14 min-w-[auto] w-full px-4 md:grid-cols-[1fr_auto_1fr] md:h-[72px] md:px-6">
          <HeaderLogo />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};
