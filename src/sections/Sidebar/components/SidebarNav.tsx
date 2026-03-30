import { SidebarNavItem } from "@/sections/Sidebar/components/SidebarNavItem";

export const SidebarNav = () => {
  return (
    <div className="box-content caret-black min-h-0 min-w-0 text-wrap mr-0 pb-0 px-0 md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-auto md:[mask-position:0%] md:bg-left-top md:-mr-4 md:pl-4 md:pr-8 md:pb-4 md:scroll-m-0 md:scroll-p-[auto]">
      <div className="box-content caret-black block justify-normal text-wrap w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-end md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-[188px] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black min-h-0 min-w-0 text-wrap w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <ul className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row list-disc gap-y-[normal] text-wrap w-auto pl-10 md:relative md:items-end md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
            <SidebarNavItem
              variant="expandable-link"
              href="/casino"
              iconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-25.svg"
              label="Casino"
              chevronIconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-26.svg"
              wrapperClass="static text-black font-normal bg-transparent box-content caret-black text-wrap rounded-none md:relative md:text-slate-500 md:font-bold md:aspect-auto md:bg-indigo-900 md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl before:md:accent-auto before:md:bg-black/10 before:md:box-border before:md:caret-transparent before:md:text-slate-500 before:md:hidden before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-bold before:md:h-px before:md:tracking-[0.15008px] before:md:leading-6 before:md:list-outside before:md:list-none before:md:opacity-0 before:md:pointer-events-auto before:md:absolute before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:text-nowrap before:md:visible before:md:border-separate before:md:-top-px before:md:inset-x-0 before:md:font-excon"
              dropdownClass="text-black [align-items:normal] bg-transparent box-content caret-black block h-auto justify-normal min-h-0 min-w-0 text-wrap transform-none w-auto rounded-none md:text-black/50 md:items-center md:aspect-auto md:bg-slate-400/50 md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:-scale-100"
              linkClass="rounded-t-none border-b-0 border-black md:border-b-slate-800 md:border-b-2 md:border-x-white md:rounded-t-xl md:border-t-white md:border-b-2 md:border-x-white"
              subItems={[
                {
                  href: "/casino/category/roobet-games?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-27.svg",
                  label: "Roobet Games",
                },
                {
                  href: "/casino/category/popular?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-28.svg",
                  label: "Popular",
                },
                {
                  href: "/casino/category/new-games?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-29.svg",
                  label: "New Games",
                },
                {
                  href: "/casino/category/slots?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-30.svg",
                  label: "Slots",
                },
                {
                  href: "/casino/category/bonus-buys?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-31.svg",
                  label: "Bonus Buys",
                },
                {
                  href: "/casino/category/livecasino",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-32.svg",
                  label: "Live Casino",
                  badge: "LIVE",
                },
                {
                  href: "/casino/category/gameshows?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-33.svg",
                  label: "Game Shows",
                },
                {
                  href: "/casino/category/roulette?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-34.svg",
                  label: "Roulette",
                },
                {
                  href: "/casino/category/blackjack?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-35.svg",
                  label: "Blackjack",
                },
                {
                  href: "/casino/category/baccarat?sort=pop_desc",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-36.svg",
                  label: "Baccarat",
                },
              ]}
            />
            <SidebarNavItem
              variant="expandable-link"
              href="/sports"
              iconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-37.svg"
              label="Sportsbook"
              chevronIconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-26.svg"
              subItems={[
                {
                  href: "/sports/soccer-1",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-38.svg",
                  label: "Soccer",
                },
                {
                  href: "/sports/basketball-2",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-39.svg",
                  label: "Basketball",
                },
                {
                  href: "/sports/tennis-5",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-40.svg",
                  label: "Tennis",
                },
                {
                  href: "/sports/counter-strike-109",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-41.svg",
                  label: "Counter-Strike",
                },
                {
                  href: "/sports/cricket-21",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-42.svg",
                  label: "Cricket",
                },
                {
                  href: "/sports/fifa-300",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-43.svg",
                  label: "FIFA",
                },
                {
                  href: "/sports/baseball-3",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-44.svg",
                  label: "Baseball",
                },
                {
                  href: "/sports/ice-hockey-4",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-45.svg",
                  label: "Ice-Hockey",
                },
                {
                  href: "/sports/mma-117",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-46.svg",
                  label: "MMA",
                },
                {
                  href: "/sports/table-tennis-20",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-47.svg",
                  label: "Table Tennis",
                },
                {
                  href: "/sports/horse-racing-55",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-48.svg",
                  label: "Horse Racing",
                },
              ]}
              wrapperClass="static text-black font-normal bg-transparent box-content caret-black text-wrap rounded-none md:relative md:text-slate-500 md:font-bold md:aspect-auto md:bg-indigo-900 md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl before:md:accent-auto before:md:bg-black/10 before:md:box-border before:md:caret-transparent before:md:text-slate-500 before:md:hidden before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-bold before:md:h-px before:md:tracking-[0.15008px] before:md:leading-6 before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:absolute before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:text-nowrap before:md:visible before:md:border-separate before:md:-top-px before:md:inset-x-0 before:md:font-excon"
              dropdownClass="text-black [align-items:normal] bg-transparent box-content caret-black block h-auto justify-normal min-h-0 min-w-0 text-wrap w-auto rounded-none md:text-black/50 md:items-center md:aspect-auto md:bg-slate-500/50 md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg"
              linkClass=""
            />
            <SidebarNavItem
              variant="simple-link"
              href="/live-rtp"
              iconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-49.svg"
              label="Live RTP"
            />
            <SidebarNavItem
              variant="simple-list"
              items={[
                {
                  href: "/promotions",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-50.svg",
                  label: "Promotions",
                },
                {
                  role: "button",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-51.svg",
                  label: "Refer & Earn",
                },
                {
                  role: "button",
                  iconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-52.svg",
                  label: "Redeem",
                },
              ]}
            />
            <SidebarNavItem
              variant="simple-link"
              href="/vip"
              iconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-53.svg"
              label="VIP Club"
            />
            <SidebarNavItem
              variant="button"
              iconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-54.svg"
              label="Live Support"
            />
            <SidebarNavItem
              variant="expandable-link"
              href=""
              iconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-55.svg"
              label="English"
              chevronIconSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-26.svg"
              wrapperClass="static text-black font-normal bg-transparent box-content caret-black text-wrap rounded-none md:relative md:text-slate-500 md:font-bold md:aspect-auto md:bg-indigo-900 md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl before:md:accent-auto before:md:bg-black/10 before:md:box-border before:md:caret-transparent before:md:text-slate-500 before:md:hidden before:md:text-base before:md:not-italic before:md:normal-nums before:md:font-bold before:md:h-px before:md:tracking-[0.15008px] before:md:leading-6 before:md:list-outside before:md:list-none before:md:pointer-events-auto before:md:absolute before:md:text-left before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:text-nowrap before:md:visible before:md:border-separate before:md:-top-px before:md:inset-x-0 before:md:font-excon"
              dropdownClass="text-black [align-items:normal] bg-transparent box-content caret-black block h-auto justify-normal min-h-0 min-w-0 text-wrap w-auto rounded-none md:text-black/50 md:items-center md:aspect-auto md:bg-slate-500/50 md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg"
              linkClass=""
              subItems={[
                {
                  label: "English",
                  role: "button",
                  isActive: true,
                  activeIconSrc:
                    "https://c.animaapp.com/mndr0fyp9c515x/assets/icon-56.svg",
                },
                { label: "English (Indian)", role: "button" },
                { label: "Español", role: "button" },
                { label: "Português", role: "button" },
                { label: "Français", role: "button" },
                { label: "Srpski", role: "button" },
                { label: "Türkçe", role: "button" },
                { label: "عربي", role: "button" },
                { label: "Čeština", role: "button" },
                { label: "हिंदी", role: "button" },
                { label: "日本語", role: "button" },
                { label: "Filipino", role: "button" },
                { label: "فارسی", role: "button" },
                { label: "Bahasa Indonesia", role: "button" },
                { label: "Suomi", role: "button" },
                { label: "中文", role: "button" },
                { label: "Tiếng Việt", role: "button" },
                { label: "ภาษาไทย", role: "button" },
                { label: "한국어", role: "button" },
                { label: "Pусский", role: "button" },
              ]}
            />
            <SidebarNavItem
              variant="stat"
              statLabel="Total Bets Placed"
              statValue="13,319,598,520"
            />
          </ul>
          <div className="static box-content caret-black gap-x-[normal] block flex-row opacity-100 gap-y-[normal] text-wrap visible right-auto top-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:opacity-0 md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:invisible md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:right-0 md:top-0">
            <ul className="static [align-items:normal] box-content caret-black gap-x-[normal] block flex-row list-disc min-h-0 min-w-0 gap-y-[normal] text-wrap w-auto pl-10 md:relative md:items-end md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:flex-col md:list-none md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black min-h-0 min-w-0 text-wrap md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <a
                    href="/casino"
                    className="static text-base font-normal [align-items:normal] bg-transparent box-content caret-black inline shrink justify-normal tracking-[normal] text-start text-wrap align-baseline rounded-none md:relative md:text-2xl md:font-bold md:items-center md:aspect-auto md:bg-indigo-900 md:box-border md:caret-transparent md:flex md:shrink-0 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-white after:md:block after:md:text-2xl after:md:not-italic after:md:normal-nums after:md:font-bold after:md:h-full after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-auto after:md:absolute after:md:text-center after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:invisible after:md:w-[47px] after:md:z-[1201] after:md:rounded-l-xl after:md:border-separate after:md:-right-3 after:md:top-0 after:md:font-excon"
                  >
                    <div className="[align-items:normal] box-content caret-black block h-auto justify-normal min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-57.svg"
                        alt="Icon"
                        className="box-content caret-black h-auto text-wrap align-middle w-auto z-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:z-[1202] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black min-h-0 min-w-0 text-wrap md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <a
                    href="/sports"
                    className="static text-base font-normal [align-items:normal] bg-transparent box-content caret-black inline shrink justify-normal tracking-[normal] text-start text-wrap align-baseline rounded-none md:relative md:text-2xl md:font-bold md:items-center md:aspect-auto md:bg-indigo-900 md:box-border md:caret-transparent md:flex md:shrink-0 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-white after:md:block after:md:text-2xl after:md:not-italic after:md:normal-nums after:md:font-bold after:md:h-full after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-auto after:md:absolute after:md:text-center after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:invisible after:md:w-[47px] after:md:z-[1201] after:md:rounded-l-xl after:md:border-separate after:md:-right-3 after:md:top-0 after:md:font-excon"
                  >
                    <div className="[align-items:normal] box-content caret-black block h-auto justify-normal min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-58.svg"
                        alt="Icon"
                        className="box-content caret-black h-auto text-wrap align-middle w-auto z-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:z-[1202] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <a
                  href="/live-rtp"
                  className="static text-base font-normal [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] inline justify-normal tracking-[normal] leading-[normal] min-h-0 min-w-0 gap-y-[normal] text-start text-wrap align-baseline w-auto rounded-none md:relative md:text-sm md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:box-border md:caret-transparent md:gap-x-3 md:flex md:justify-start md:leading-[24.5px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:w-full md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
                >
                  <div className="[align-items:normal] box-content caret-black block justify-normal min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-59.svg"
                      alt="Icon"
                      className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                    />
                  </div>
                </a>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <ul className="static bg-transparent box-content caret-black min-h-0 min-w-0 text-wrap w-auto pl-10 rounded-none md:relative md:aspect-auto md:bg-indigo-950 md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-fit md:overflow-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl">
                  <a
                    href="/promotions"
                    className="static [align-items:normal] box-content caret-black gap-x-[normal] inline grow-0 justify-normal gap-y-[normal] text-wrap align-baseline border-b-0 border-black md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:grow md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-transparent md:border-b-2 md:border-x-white"
                  >
                    <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-60.svg"
                        alt="Icon"
                        className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </a>
                  <a
                    role="button"
                    className="static [align-items:normal] box-content caret-black gap-x-[normal] inline grow-0 justify-normal gap-y-[normal] text-wrap align-baseline border-b-0 border-black md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:grow md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-transparent md:border-b-2 md:border-x-white"
                  >
                    <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-61.svg"
                        alt="Icon"
                        className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </a>
                  <a
                    role="button"
                    className="static [align-items:normal] box-content caret-black gap-x-[normal] inline grow-0 justify-normal gap-y-[normal] text-wrap align-baseline border-b-0 border-black md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:grow md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-transparent md:border-b-2 md:border-x-white"
                  >
                    <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-62.svg"
                        alt="Icon"
                        className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </a>
                </ul>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <a
                  href="/vip"
                  className="static text-base font-normal [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] inline justify-normal tracking-[normal] leading-[normal] min-h-0 min-w-0 gap-y-[normal] text-start text-wrap align-baseline w-auto rounded-none md:relative md:text-sm md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:box-border md:caret-transparent md:gap-x-3 md:flex md:justify-start md:leading-[24.5px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:w-full md:[mask-position:0%] md:bg-left-top md:p-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
                >
                  <div className="[align-items:normal] box-content caret-black block justify-normal min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-63.svg"
                      alt="Icon"
                      className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                    />
                  </div>
                </a>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <button
                  type="button"
                  className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black gap-x-[normal] inline-block justify-normal tracking-[normal] leading-[normal] min-h-0 min-w-0 gap-y-[normal] text-center text-wrap align-baseline w-auto py-px rounded-none md:relative md:appearance-none md:text-sm md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:caret-transparent md:gap-x-3 md:flex md:justify-start md:leading-[24.5px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:w-full md:[mask-position:0%] md:bg-left-top md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
                >
                  <div className="[align-items:normal] box-content caret-black block justify-normal min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-64.svg"
                      alt="Icon"
                      className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                    />
                  </div>
                </button>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="box-content caret-black min-h-0 min-w-0 text-wrap md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <button
                    type="button"
                    className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black inline-block shrink justify-normal tracking-[normal] leading-[normal] text-center text-wrap align-baseline py-px rounded-none font-arial md:relative md:appearance-none md:text-2xl md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:caret-transparent md:flex md:shrink-0 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl after:md:accent-auto after:md:box-border after:md:caret-transparent after:md:text-white after:md:block after:md:text-2xl after:md:not-italic after:md:normal-nums after:md:font-bold after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-none after:md:pointer-events-auto after:md:absolute after:md:text-center after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:invisible after:md:w-[47px] after:md:z-[1201] after:md:rounded-l-xl after:md:border-separate after:md:-right-3 after:md:top-0 after:md:font-arial"
                  >
                    <div className="[align-items:normal] box-content caret-black block h-auto justify-normal min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:h-6 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-65.svg"
                        alt="Icon"
                        className="box-content caret-black h-auto text-wrap align-middle w-auto z-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:z-[1202] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      />
                    </div>
                  </button>
                </div>
              </li>
              <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
