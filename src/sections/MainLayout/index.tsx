import { Header } from "@/sections/MainLayout/components/Header";
import { ChatPanel } from "@/sections/MainLayout/components/ChatPanel";

export type MainLayoutProps = {
  variant: "layout" | "image";
  imageSrc?: string;
  imageAlt?: string;
};

export const MainLayout = (props: MainLayoutProps) => {
  if (props.variant === "image") {
    return (
      <img
        alt={props.imageAlt ?? "Sweet Rush Bonanza"}
        src={
          props.imageSrc ??
          "https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic:vs20swrbon--SVDA63Th.jpeg"
        }
        className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
      />
    );
  }

  return (
    <div className="box-border caret-transparent grid col-end-auto col-start-auto row-end-auto row-start-auto [grid-template-areas:'nav''main''bottom'] grid-cols-[1fr] grid-rows-[56px_1fr_60px] h-full min-h-[auto] min-w-[auto] overflow-hidden md:col-end-[right] md:col-start-[right] md:row-end-[right] md:row-start-[right] md:[grid-template-areas:'nav_chat''main_chat'] md:grid-cols-[1fr_0px] md:grid-rows-[72px_1fr]">
      <div className="relative box-border caret-transparent col-end-[main] col-start-[main] row-end-[main] row-start-[main] min-h-[auto] min-w-[auto] overflow-clip before:accent-auto before:shadow-[rgb(25,25,57)_0px_0px_0px_16px] before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[0.15008px] before:leading-6 before:list-outside before:list-disc before:pointer-events-none before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:rounded-tl-xl before:border-t-0 before:border-separate before:border-white before:inset-0 before:font-excon before:md:border-t-slate-950 before:md:border-t-4"></div>
      <Header />
      <div className="relative items-center self-end box-border caret-transparent flex col-end-[main] col-start-[main] row-end-[main] row-start-[main] justify-self-end min-h-[auto] min-w-[auto] pointer-events-auto mb-4 md:mb-12"></div>
      <ChatPanel />
    </div>
  );
};
