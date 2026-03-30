export type SubNavItem = {
  href?: string;
  iconSrc?: string;
  label: string;
  badge?: string;
  isActive?: boolean;
  activeIconSrc?: string;
  role?: string;
};

export type SidebarNavItemProps =
  | {
      variant: "expandable-link";
      href: string;
      iconSrc: string;
      label: string;
      chevronIconSrc: string;
      subItems: SubNavItem[];
      wrapperClass: string;
      dropdownClass: string;
      linkClass: string;
    }
  | {
      variant: "simple-link";
      href: string;
      iconSrc: string;
      label: string;
    }
  | {
      variant: "simple-list";
      items: SubNavItem[];
    }
  | {
      variant: "button";
      iconSrc: string;
      label: string;
      onClick?: () => void;
    }
  | {
      variant: "stat";
      statLabel: string;
      statValue: string;
    };

export const SidebarNavItem = (props: SidebarNavItemProps) => {
  if (props.variant === "expandable-link") {
    const isAnchor = !!props.href;
    return (
      <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className={props.wrapperClass}>
          {isAnchor ? (
            <a
              type="navigation"
              href={props.href}
              className={`static text-black text-base [align-items:normal] bg-transparent box-content caret-black inline h-auto justify-normal tracking-[normal] leading-[normal] min-h-0 text-wrap align-baseline p-0 md:relative md:text-white md:text-sm md:items-center md:aspect-auto md:bg-indigo-900 md:box-border md:caret-transparent md:flex md:h-9 md:justify-center md:leading-5 md:min-h-9 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-2 md:pr-1.5 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] ${props.linkClass}`}
            >
              <div className="box-content caret-black block text-wrap md:aspect-auto md:box-border md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] gap-x-[normal] grow-0 justify-normal min-h-0 min-w-0 gap-y-[normal] text-clip md:items-center md:gap-x-2 md:grow md:justify-start md:min-h-[auto] md:min-w-[auto] md:gap-y-2 md:text-ellipsis md:overflow-hidden">
                <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src={props.iconSrc}
                    alt="Icon"
                    className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </div>
                <span className="box-content caret-black inline basis-auto grow-0 min-h-0 text-clip text-wrap md:aspect-auto md:box-border md:caret-transparent md:block md:basis-[0%] md:grow md:min-h-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  {props.label}
                </span>
              </div>
              <div className={props.dropdownClass}>
                <img
                  src={props.chevronIconSrc}
                  alt="Icon"
                  className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </a>
          ) : (
            <div
              type="navigation"
              role="button"
              className={`box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] static text-black text-base [align-items:normal] bg-transparent block h-auto justify-normal tracking-[normal] leading-[normal] min-h-0 align-baseline p-0 rounded-none md:relative md:text-white md:text-sm md:items-center md:bg-indigo-950 md:flex md:h-9 md:justify-center md:leading-5 md:min-h-9 md:align-middle md:pl-2 md:pr-1.5 md:py-1.5 md:rounded-xl`}
            >
              <div className="box-content caret-black block text-wrap md:aspect-auto md:box-border md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] [align-items:normal] gap-x-[normal] grow-0 justify-normal min-h-0 min-w-0 gap-y-[normal] text-clip md:items-center md:gap-x-2 md:grow md:justify-start md:min-h-[auto] md:min-w-[auto] md:gap-y-2 md:text-ellipsis md:overflow-hidden">
                <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src={props.iconSrc}
                    alt="Icon"
                    className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </div>
                <span className="box-content caret-black inline basis-auto grow-0 min-h-0 text-clip text-wrap md:aspect-auto md:box-border md:caret-transparent md:block md:basis-[0%] md:grow md:min-h-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  {props.label}
                </span>
              </div>
              <div className={props.dropdownClass}>
                <img
                  src={props.chevronIconSrc}
                  alt="Icon"
                  className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                />
              </div>
            </div>
          )}
          <div className="box-content caret-black h-auto text-wrap visible md:aspect-auto md:box-border md:caret-transparent md:h-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:invisible md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="box-content caret-black block text-wrap w-auto md:aspect-auto md:box-border md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <div className="box-content caret-black min-h-0 min-w-0 text-wrap w-auto md:aspect-auto md:box-border md:caret-transparent md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div
                  role="region"
                  className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                >
                  <div className="text-black text-base font-normal bg-transparent box-content caret-black tracking-[normal] leading-[normal] text-wrap rounded-none md:text-slate-400 md:text-xs md:font-medium md:aspect-auto md:bg-slate-800 md:box-border md:caret-transparent md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl">
                    <ul className="static bg-transparent box-content caret-black text-wrap w-auto pl-10 rounded-b-none md:relative md:aspect-auto md:bg-indigo-950 md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:overflow-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-b-xl">
                      {props.subItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          role={item.role}
                          className={
                            item.isActive
                              ? "static [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] inline grow-0 justify-normal gap-y-[normal] text-wrap align-baseline p-0 border-b-0 border-black md:relative md:items-center md:aspect-auto md:bg-violet-600 md:border-l-slate-400 md:border-r-slate-400 md:border-t-slate-400 md:box-border md:caret-transparent md:gap-x-3 md:flex md:grow md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:pt-1.5 md:pb-1 md:px-2 md:scroll-m-0 md:scroll-p-[auto] md:border-b-transparent md:border-b-2"
                              : "static [align-items:normal] box-content caret-black gap-x-[normal] inline grow-0 justify-normal gap-y-[normal] text-wrap align-baseline p-0 border-b-0 border-black md:relative md:items-center md:aspect-auto md:border-l-slate-400 md:border-r-slate-400 md:border-t-slate-400 md:box-border md:caret-transparent md:gap-x-3 md:flex md:grow md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:pt-1.5 md:pb-1 md:px-2 md:scroll-m-0 md:scroll-p-[auto] md:border-b-transparent md:border-b-2"
                          }
                        >
                          {item.iconSrc && (
                            <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <img
                                src={item.iconSrc}
                                alt="Icon"
                                className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                              />
                            </div>
                          )}
                          <div className="box-content caret-black grow-0 min-h-0 text-wrap my-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:min-h-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:my-1 md:scroll-m-0 md:scroll-p-[auto]">
                            <span
                              className={
                                item.isActive
                                  ? "text-black box-content caret-black inline basis-auto grow-0 text-clip text-wrap md:text-white md:aspect-auto md:box-border md:caret-transparent md:block md:basis-[0%] md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                  : "text-black box-content caret-black inline basis-auto grow-0 text-clip text-wrap md:text-violet-200 md:aspect-auto md:box-border md:caret-transparent md:block md:basis-[0%] md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                              }
                            >
                              {item.label}
                            </span>
                          </div>
                          {item.badge && (
                            <div className="text-black font-normal bg-transparent box-content caret-black h-auto min-h-0 min-w-0 text-wrap p-0 rounded-none md:text-violet-200 md:font-bold md:aspect-auto md:bg-slate-800 md:box-border md:caret-transparent md:h-fit md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pt-0.5 md:pb-[3px] md:px-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-md">
                              <p className="box-content caret-black text-wrap md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                {item.badge}
                              </p>
                            </div>
                          )}
                          {item.isActive && item.activeIconSrc && (
                            <div className="box-content caret-black block min-h-0 min-w-0 text-wrap ml-0 md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:ml-auto md:scroll-m-0 md:scroll-p-[auto]">
                              <img
                                src={item.activeIconSrc}
                                alt="Icon"
                                className="box-content caret-black h-auto text-wrap align-middle w-auto ml-0 md:aspect-auto md:box-border md:caret-transparent md:h-5 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-5 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                              />
                            </div>
                          )}
                        </a>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }

  if (props.variant === "simple-link") {
    return (
      <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <a
          href={props.href}
          className="static text-base font-normal [align-items:normal] bg-transparent box-content caret-black gap-x-[normal] inline justify-normal tracking-[normal] leading-[normal] gap-y-[normal] text-start text-wrap align-baseline w-auto p-0 rounded-none md:relative md:text-sm md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:box-border md:caret-transparent md:gap-x-3 md:flex md:justify-start md:leading-[24.5px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:w-full md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
        >
          <div className="[align-items:normal] box-content caret-black block justify-normal min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src={props.iconSrc}
              alt="Icon"
              className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <div className="[align-items:normal] box-content caret-black block min-h-0 min-w-0 text-clip text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <p className="box-content caret-black leading-[normal] min-h-0 min-w-0 text-clip text-wrap md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {props.label}
            </p>
          </div>
        </a>
      </li>
    );
  }

  if (props.variant === "simple-list") {
    return (
      <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <ul className="static bg-transparent box-content caret-black text-wrap w-auto pl-10 rounded-none md:relative md:aspect-auto md:bg-indigo-950 md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:overflow-auto md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl">
          {props.items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              role={item.role}
              className="static [align-items:normal] box-content caret-black gap-x-[normal] inline grow-0 justify-normal gap-y-[normal] text-wrap align-baseline p-0 border-b-0 border-black md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:gap-x-3 md:flex md:grow md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:[mask-position:0%] md:bg-left-top md:pt-1.5 md:pb-1 md:px-2 md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-transparent md:border-b-2 md:border-x-white"
            >
              {item.iconSrc && (
                <div className="[align-items:normal] box-content caret-black block shrink h-auto min-h-0 min-w-0 text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:shrink-0 md:h-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <img
                    src={item.iconSrc}
                    alt="Icon"
                    className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                  />
                </div>
              )}
              <div className="box-content caret-black grow-0 min-h-0 text-wrap my-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:min-h-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:my-1 md:scroll-m-0 md:scroll-p-[auto]">
                <span className="text-black text-base font-normal box-content caret-black inline basis-auto grow-0 tracking-[normal] leading-[normal] text-clip text-wrap md:text-violet-200 md:text-xs md:font-medium md:aspect-auto md:box-border md:caret-transparent md:block md:basis-[0%] md:grow md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  {item.label}
                </span>
              </div>
            </a>
          ))}
        </ul>
      </li>
    );
  }

  if (props.variant === "button") {
    return (
      <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <button
          type="button"
          className="static text-[13.3333px] font-normal [align-items:normal] bg-zinc-100 caret-black gap-x-[normal] inline-block justify-normal tracking-[normal] leading-[normal] gap-y-[normal] text-center text-wrap align-baseline w-auto px-1.5 py-px rounded-none md:relative md:appearance-none md:text-sm md:font-bold md:items-center md:aspect-auto md:bg-indigo-950 md:caret-transparent md:gap-x-3 md:flex md:justify-start md:leading-[24.5px] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-middle md:w-full md:[mask-position:0%] md:bg-left-top md:px-2 md:py-1.5 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
          onClick={props.onClick}
        >
          <div className="[align-items:normal] box-content caret-black block justify-normal min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <img
              src={props.iconSrc}
              alt="Icon"
              className="box-content caret-black h-auto text-wrap align-middle w-auto md:aspect-auto md:box-border md:caret-transparent md:h-6 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:align-baseline md:w-6 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
          <div className="[align-items:normal] box-content caret-black block min-h-0 min-w-0 text-clip text-wrap w-auto md:items-center md:aspect-auto md:box-border md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <p className="box-content caret-black leading-[normal] min-h-0 min-w-0 text-clip text-wrap md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              {props.label}
            </p>
          </div>
        </button>
      </li>
    );
  }

  if (props.variant === "stat") {
    return (
      <li className="static [align-items:normal] box-content caret-black list-item justify-normal min-h-0 min-w-0 text-left text-wrap w-auto md:relative md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <li className="static [align-items:normal] bg-transparent box-content caret-black list-item flex-row justify-normal text-wrap w-auto p-0 rounded-none md:relative md:items-start md:aspect-auto md:bg-slate-950 md:box-border md:caret-transparent md:flex md:flex-col md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:pt-2.5 md:pb-2 md:px-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl">
          <span className="text-black text-base font-normal box-content caret-black inline tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap md:text-indigo-300 md:text-xs md:font-bold md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            {props.statLabel}
          </span>
          <p className="text-base font-normal box-content caret-black tracking-[normal] leading-[normal] min-h-0 min-w-0 text-wrap md:text-sm md:font-medium md:aspect-auto md:box-border md:caret-transparent md:leading-5 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            {props.statValue}
          </p>
        </li>
      </li>
    );
  }

  return null;
};
