export type RegisterFormProps = {
  variant: "welcome" | "registerButton" | "socialLogin";
  welcomeTitle?: string;
  welcomeSubtitle?: string;
  registerButtonText?: string;
  dividerText?: string;
  googleImageSrc?: string;
  metamaskImageSrc?: string;
  containerClassName?: string;
};

export const RegisterForm = (props: RegisterFormProps) => {
  const {
    variant,
    welcomeTitle = "Welcome To Roobet",
    welcomeSubtitle = "Hop In",
    registerButtonText = "Register Now",
    dividerText = "Or continue with",
    googleImageSrc = "https://c.animaapp.com/mndr0fyp9c515x/assets/image-1.svg",
    metamaskImageSrc = "https://c.animaapp.com/mndr0fyp9c515x/assets/image-2.png",
    containerClassName = "",
  } = props;

  if (variant === "welcome") {
    return (
      <div
        className={`box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-x-2 gap-y-2 ${containerClassName}`}
      >
        <h5 className="text-[28px] font-black box-border caret-transparent tracking-[normal] leading-9 min-h-[auto] min-w-[auto] text-center">
          {welcomeTitle}
        </h5>
        <p className="text-indigo-300 font-bold box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto] text-center">
          {welcomeSubtitle}
        </p>
      </div>
    );
  }

  if (variant === "registerButton") {
    return (
      <button
        type="button"
        className="relative appearance-none text-sm font-black items-center bg-transparent bg-[linear-gradient(420deg,rgb(255,206,0)_0%,rgb(255,206,0)_15%,rgb(255,184,0)_15%,rgb(255,184,0)_100%)] bg-no-repeat bg-size-[100%_100%] shadow-[rgb(197,106,24)_0px_-3px_0px_0px_inset,rgb(255,234,47)_0px_2px_0px_0px_inset] caret-transparent flex justify-center tracking-[normal] leading-[24.5px] min-h-[auto] min-w-16 text-center align-middle w-full bg-[position:left_50%] pt-2.5 pb-3.5 px-3.5 rounded-xl before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-black before:h-0.5 before:tracking-[normal] before:leading-[24.5px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-2xl before:border-separate before:left-2.5 before:top-0 before:font-excon hover:text-white hover:bg-violet-600 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
      >
        <span className="relative box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden p-0.5 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
          <span className="absolute box-border caret-transparent block text-nowrap left-0.5 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
            {registerButtonText}
          </span>
          <span className="absolute box-border caret-transparent block text-nowrap left-0.5 top-[3px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
            {registerButtonText}
          </span>
          <span className="relative box-border caret-transparent text-nowrap hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
            {registerButtonText}
          </span>
        </span>
      </button>
    );
  }

  if (variant === "socialLogin") {
    return (
      <div
        className={`box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] items-center gap-x-3 gap-y-3 w-full ${containerClassName}`}
      >
        <div className="relative font-medium box-border caret-transparent min-h-[auto] min-w-[auto] text-center w-full before:accent-auto before:bg-indigo-950 before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:h-0.5 before:tracking-[0.15008px] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[calc(50%_-_60px)] before:border-separate before:left-0 before:top-2/4 before:font-excon after:accent-auto after:bg-indigo-950 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.15008px] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[calc(50%_-_60px)] after:border-separate after:right-0 after:top-2/4 after:font-excon">
          <span className="text-xs font-bold box-border caret-transparent tracking-[normal] leading-4">
            {dividerText}
          </span>
        </div>
        <div className="box-border caret-transparent gap-x-4 flex basis-[0%] grow justify-between min-h-[auto] min-w-[auto] gap-y-4 w-full">
          <button
            type="button"
            aria-label="Google Login"
            className="relative appearance-none text-sm font-bold items-center bg-indigo-950 caret-transparent flex basis-0 grow justify-center tracking-[normal] leading-[24.5px] min-h-[auto] min-w-16 text-center align-middle pt-[9px] pb-[11px] px-[9px] rounded-xl hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
          >
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] mr-1 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
              <img
                alt="Google"
                src={googleImageSrc}
                className="text-xl box-border caret-transparent h-4 leading-[35px] max-w-full min-h-[auto] min-w-[auto] w-4 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
              />
            </span>
            <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
              Google
            </span>
          </button>
          <button
            type="button"
            aria-label="Metamask Login"
            className="relative appearance-none text-sm font-bold items-center bg-indigo-950 caret-transparent flex basis-0 grow justify-center tracking-[normal] leading-[24.5px] min-h-[auto] min-w-16 text-center align-middle pt-[9px] pb-[11px] px-[9px] rounded-xl hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
          >
            <span className="box-border caret-transparent flex min-h-[auto] min-w-[auto] mr-1 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
              <img
                alt="Metamask"
                src={metamaskImageSrc}
                className="text-xl box-border caret-transparent h-4 leading-[35px] max-w-full min-h-[auto] min-w-[auto] w-4 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
              />
            </span>
            <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
              Metamask
            </span>
          </button>
        </div>
      </div>
    );
  }

  return null;
};
