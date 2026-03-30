export const HeaderLogo = () => {
  return (
    <div className="items-center box-border caret-transparent flex col-end-2 col-start-1 h-full min-h-[auto] min-w-[auto] w-full">
      <a
        title="Go Home"
        href="/"
        className="relative text-blue-700 box-border caret-transparent block shrink-0 h-9 min-h-[auto] min-w-[auto] underline w-9 overflow-hidden md:h-11 md:w-[170px] hover:text-blue-800 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none"
      >
        <img
          alt="Roobet"
          src="https://c.animaapp.com/mndr0fyp9c515x/assets/r-NQNxh0.svg"
          className="text-yellow-400 box-border caret-transparent inline-block h-full hover:text-yellow-500 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-400 hover:rounded-none hover:border-0 hover:border-none"
        />
      </a>
    </div>
  );
};
