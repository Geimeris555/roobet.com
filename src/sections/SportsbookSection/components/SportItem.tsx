export type SportItemProps = {
  href: string;
  alt: string;
  src: string;
  label: string;
};

export const SportItem = (props: SportItemProps) => {
  return (
    <a
      href={props.href}
      className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
    >
      <img
        alt={props.alt}
        src={props.src}
        className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
      />
      <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
        <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
          {props.label}
        </p>
      </div>
    </a>
  );
};
