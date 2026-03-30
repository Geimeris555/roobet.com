import { MainLayout } from "@/sections/MainLayout";
import { Sidebar } from "@/sections/Sidebar";

export const App = () => {
  return (
    <body className="text-white text-base not-italic normal-nums font-normal accent-auto bg-slate-950 box-border caret-transparent block tracking-[0.15008px] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible overflow-auto border-separate font-excon md:overflow-hidden">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent isolate ml-0 mt-14 mb-[60px] md:ml-[220px] md:mt-[72px] md:mb-0">
          <main className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 p-4 md:gap-x-6 md:gap-y-6 md:p-6">
            <div className="box-border caret-transparent gap-x-4 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-4 w-full mx-auto md:gap-x-6 md:gap-y-6">
              <div className="bg-slate-800 box-border caret-transparent grid grid-cols-[1fr] grid-rows-[1fr] h-auto max-w-[1200px] min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:grid-cols-[1fr_auto] md:h-[260px]">
                <img
                  src="https://c.animaapp.com/mndr0fyp9c515x/assets/CcBLqI9l.png"
                  className="box-border caret-transparent h-[188px] max-w-full min-h-[auto] min-w-[auto] object-cover w-[768px] md:h-[260px] md:w-[793px]"
                />
                <div className="items-center box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 px-3 py-4 md:min-w-[407px] md:p-6">
                  <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2">
                    <h5 className="text-[28px] font-black box-border caret-transparent tracking-[normal] leading-9 min-h-[auto] min-w-[auto] text-center">
                      Welcome To Roobet
                    </h5>
                    <p className="text-indigo-300 font-bold box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto] text-center">
                      Hop In
                    </p>
                  </div>
                  <button
                    type="button"
                    className="relative appearance-none text-sm font-black items-center bg-transparent bg-[linear-gradient(420deg,rgb(255,206,0)_0%,rgb(255,206,0)_15%,rgb(255,184,0)_15%,rgb(255,184,0)_100%)] bg-no-repeat bg-size-[100%_100%] shadow-[rgb(197,106,24)_0px_-3px_0px_0px_inset,rgb(255,234,47)_0px_2px_0px_0px_inset] caret-transparent flex justify-center tracking-[normal] leading-[24.5px] min-h-[auto] min-w-16 text-center align-middle w-full bg-[position:left_50%] pt-2.5 pb-3.5 px-3.5 rounded-xl before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-black before:h-0.5 before:tracking-[normal] before:leading-[24.5px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-2xl before:border-separate before:left-2.5 before:top-0 before:font-excon hover:text-white hover:bg-violet-600 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                  >
                    <span className="relative box-border caret-transparent block leading-5 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden p-0.5 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      <span className="absolute box-border caret-transparent block text-nowrap left-0.5 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Register Now
                      </span>
                      <span className="absolute box-border caret-transparent block text-nowrap left-0.5 top-[3px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Register Now
                      </span>
                      <span className="relative box-border caret-transparent text-nowrap hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Register Now
                      </span>
                    </span>
                  </button>
                  <div className="items-center box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 w-full">
                    <div className="relative font-medium box-border caret-transparent min-h-[auto] min-w-[auto] text-center w-full before:accent-auto before:bg-indigo-950 before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-medium before:h-0.5 before:tracking-[0.15008px] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[calc(50%_-_60px)] before:border-separate before:left-0 before:top-2/4 before:font-excon after:accent-auto after:bg-indigo-950 after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-medium after:h-0.5 after:tracking-[0.15008px] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[calc(50%_-_60px)] after:border-separate after:right-0 after:top-2/4 after:font-excon">
                      <span className="text-xs font-bold box-border caret-transparent tracking-[normal] leading-4">
                        Or continue with
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
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-1.svg"
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
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-2.png"
                            className="text-xl box-border caret-transparent h-4 leading-[35px] max-w-full min-h-[auto] min-w-[auto] w-4 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                          />
                        </span>
                        <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          Metamask
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <div className="box-border caret-transparent">
                    <div className="fixed shadow-[rgb(128,128,128)_0px_0px_5px_0px] box-border caret-transparent hidden h-[60px] right-[-186px] w-64 overflow-hidden rounded-sm bottom-3.5">
                      <div className="box-border caret-transparent">
                        <iframe
                          title="reCAPTCHA"
                          role="presentation"
                          name="a-z8hbch2zck8d"
                          src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LcyLZQUAAAAALOaIzlr4pTcnRRKEQn-d6sQIFUx&co=aHR0cHM6Ly9yb29iZXQuY29tOjQ0Mw..&hl=en&type=image&v=79clEdOi5xQbrrpL2L8kGmK3&theme=light&size=invisible&badge=bottomright&anchor-ms=20000&execute-ms=30000&cb=kj7xfllihfup"
                          className="box-border caret-transparent inline h-[60px] align-baseline w-64"
                        ></iframe>
                      </div>
                      <div className="box-border caret-transparent"></div>
                      <textarea
                        name="g-recaptcha-response"
                        className="text-black text-[13.3333px] box-border caret-transparent hidden h-10 tracking-[normal] leading-[normal] resize-none w-[250px] border-stone-300 overflow-visible mx-[25px] my-2.5 p-0 font-monospace"
                      ></textarea>
                    </div>
                    <iframe className="box-border caret-transparent hidden align-baseline"></iframe>
                  </div>
                </div>
              </div>
              <a
                href="/raffle/weeklyraffle0330"
                className="relative text-blue-700 box-border caret-transparent flex flex-col-reverse min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:flex-row hover:text-blue-800 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
              >
                <div className="relative bg-slate-800 box-border caret-transparent gap-x-4 flex flex-col grow min-h-[auto] min-w-[auto] gap-y-4 w-full p-4 md:p-6 hover:text-blue-700 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                  <span className="relative text-white text-2xl font-black box-border caret-transparent block grow tracking-[normal] leading-8 min-h-[auto] min-w-[auto] md:text-[28px] md:leading-9 hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                    <span className="text-yellow-400 text-2xl box-border caret-transparent leading-8 md:text-[28px] md:leading-9 hover:text-yellow-500 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-yellow-400 hover:rounded-none hover:border-0 hover:border-none">
                      $100,000
                    </span>
                    Weekly Raffle
                  </span>
                  <div className="bg-slate-950 box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] gap-y-1 w-full p-1 rounded-2xl md:w-fit hover:text-blue-700 hover:bg-slate-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-2xl hover:border-0 hover:border-none">
                    <button
                      type="button"
                      className="relative appearance-none text-white text-sm font-black items-center bg-transparent bg-[linear-gradient(420deg,rgb(255,206,0)_0%,rgb(255,206,0)_15%,rgb(255,184,0)_15%,rgb(255,184,0)_100%)] bg-no-repeat bg-size-[100%_100%] shadow-[rgb(197,106,24)_0px_-3px_0px_0px_inset,rgb(255,234,47)_0px_2px_0px_0px_inset] caret-transparent flex justify-center tracking-[normal] leading-[24.5px] min-h-[auto] min-w-16 text-center align-middle w-full bg-[position:left_50%] pt-1.5 pb-2.5 px-3.5 rounded-xl md:bg-[linear-gradient(420deg,rgb(255,206,0)_0%,rgb(255,206,0)_49%,rgb(255,184,0)_49%,rgb(255,184,0)_100%)] md:w-auto before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-sm before:not-italic before:normal-nums before:font-black before:h-0.5 before:tracking-[normal] before:leading-[24.5px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[5px] before:rounded-2xl before:border-separate before:left-2.5 before:top-0 before:font-excon hover:text-neutral-100 hover:bg-violet-600 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                    >
                      <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden p-0.5 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        <span className="absolute box-border caret-transparent block text-nowrap left-0.5 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          Learn More
                        </span>
                        <span className="absolute box-border caret-transparent block text-nowrap left-0.5 top-[3px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          Learn More
                        </span>
                        <span className="relative box-border caret-transparent text-nowrap hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          Learn More
                        </span>
                      </span>
                    </button>
                    <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-h-[auto] min-w-[auto] gap-y-2 w-full px-4 py-2.5 md:w-[136px] hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-1.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-4 align-baseline w-4"
                      />
                      <span className="text-white text-xs font-bold box-border caret-transparent block tracking-[normal] leading-4 min-h-[auto] min-w-20 text-nowrap hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        6d 6h 53m
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute items-center bg-slate-950 box-border caret-transparent gap-x-2 flex gap-y-2 z-[2] px-4 py-2.5 rounded-xl right-6 top-6 hover:text-blue-700 hover:bg-slate-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none">
                  <img
                    src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-2.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-4 align-baseline w-4"
                  />
                  <div className="box-border caret-transparent gap-x-0.5 flex min-h-[auto] min-w-[auto] gap-y-0.5 hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                    <span className="text-indigo-300 text-xs font-bold box-border caret-transparent block tracking-[normal] leading-4 min-h-[auto] min-w-[auto] order-2 hover:text-indigo-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-indigo-300 hover:rounded-none hover:border-0 hover:border-none">
                      Raffle Winners
                    </span>
                    <span className="text-white text-xs font-bold box-border caret-transparent block tracking-[normal] leading-4 min-h-[auto] min-w-[auto] order-1 hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      100
                    </span>
                  </div>
                </div>
                <div className="box-border caret-transparent flex h-[164px] min-h-[auto] min-w-[auto] w-full overflow-hidden md:h-auto hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                  <div className="relative bg-[url('https://roobet.com/cdn-cgi/image/dpr=1.0,width=auto,height=auto,quality=85,format=auto/https://roobet-dev-public-images-prod.s3.amazonaws.com/bannerImage-ZQCu01jR6.png')] bg-cover box-border caret-transparent h-full min-h-[auto] min-w-[auto] w-full bg-center before:accent-auto before:bg-[linear-gradient(0deg,rgb(25,25,57)_0%,rgba(25,25,57,0)_100%)] before:box-border before:caret-transparent before:text-blue-700 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[0.15008px] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:z-[2] before:border-separate before:inset-0 before:font-excon before:md:bg-[linear-gradient(90deg,rgb(25,25,57)_0%,rgba(25,25,57,0)_100%)] hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none"></div>
                </div>
              </a>
              <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 md:flex-row">
                <a
                  href="/casino"
                  className="relative box-border caret-transparent block basis-[0%] grow min-h-[auto] min-w-[auto] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                >
                  <div className="relative box-border caret-transparent h-[106px] pointer-events-none rounded-xl md:h-[172px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/Cf0KpWc0.png"
                      className="box-border caret-transparent inline-block h-[106px] max-w-full object-cover w-[768px] rounded-xl md:h-[172px] md:w-[592px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                    />
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/Crik0PWD.png"
                      className="absolute box-border caret-transparent top-[-9px] w-[161px] -right-1 md:w-[264px] md:-right-3 md:-top-4 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                    />
                  </div>
                  <div className="absolute box-border caret-transparent left-4 bottom-4 md:left-6 md:bottom-6 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                    <h2 className="text-lg font-bold box-border caret-transparent tracking-[normal] leading-[26px] md:text-[28px] md:leading-9 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      Casino
                    </h2>
                    <p className="text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 md:text-base md:leading-6 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      Thousands of Games
                    </p>
                  </div>
                </a>
                <a
                  href="/sports"
                  className="relative box-border caret-transparent block basis-[0%] grow min-h-[auto] min-w-[auto] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                >
                  <div className="relative box-border caret-transparent h-[106px] pointer-events-none rounded-xl md:h-[172px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/Bnqo4kFm.png"
                      className="box-border caret-transparent inline-block h-[106px] max-w-full object-cover w-[768px] rounded-xl md:h-[172px] md:w-[592px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                    />
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/iKYX3JTJ.png"
                      className="absolute box-border caret-transparent h-[124px] top-[-9px] w-[245px] right-2.5 md:h-[195px] md:w-[394px] hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                    />
                  </div>
                  <div className="absolute box-border caret-transparent left-4 bottom-4 md:left-6 md:bottom-6 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                    <h2 className="text-lg font-bold box-border caret-transparent tracking-[normal] leading-[26px] md:text-[28px] md:leading-9 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      Sports Betting
                    </h2>
                    <p className="text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 md:text-base md:leading-6 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      Support Your Team
                    </p>
                  </div>
                </a>
              </div>
              <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <section
                    role="group"
                    className="relative box-border caret-transparent gap-x-3 flex flex-col gap-y-3 md:gap-x-4 md:gap-y-4"
                  >
                    <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
                      <a
                        href="/casino/category/roobet-games"
                        className="text-2xl font-bold box-border caret-transparent flow-root basis-[0%] grow tracking-[normal] leading-8 min-h-[auto] min-w-[auto] overflow-hidden md:text-[28px] md:leading-9 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                      >
                        Roobet Originals
                      </a>
                      <a
                        href="/casino/category/roobet-games"
                        className="relative text-[13px] font-bold items-center bg-indigo-950 box-border caret-transparent flex justify-center tracking-[normal] leading-[22.75px] min-h-[auto] min-w-16 text-center align-middle pt-[7px] pb-[9px] px-3.5 rounded-xl md:text-[15px] md:leading-[26.25px] md:pt-[11px] md:pb-[13px] hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          View All
                        </span>
                      </a>
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
                      className="box-border caret-transparent gap-x-2 grid auto-cols-[calc(33.3333%_-_5.33333px)] grid-flow-col isolate min-h-[auto] min-w-[auto] overflow-x-scroll overflow-y-hidden gap-y-2 md:gap-x-4 md:auto-cols-[calc(14.2857%_-_13.7143px)] md:gap-y-4"
                    >
                      <a
                        aria-label="Crash"
                        href="/casino/game/crash"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Crash"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:crash-aBwlW8Ez2.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Blackjack"
                        href="/casino/game/blackjack"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Blackjack"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:blackjack-H4SSRgE2t.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Mission Uncrossable"
                        href="/casino/game/mission-uncrossable"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Mission Uncrossable"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:linearmines-b3-qiQ9rI.png"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Dice"
                        href="/casino/game/dice"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Dice"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames_dice.jpg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Mines"
                        href="/casino/game/mines"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Mines"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:mines-zdl2b8cwT.png"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Keno"
                        href="/casino/game/keno"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Keno"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:keno-D5M2Md5Ke.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Plinko"
                        href="/casino/game/plinko"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Plinko"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:Plinko-Q5MhjTFxw.png"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Roulette"
                        href="/casino/game/roulette"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Roulette"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:roulette-M5fn8z7Db.png"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Towers"
                        href="/casino/game/towers"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Towers"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:towers-H9BawlL5-.png"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Coinflip"
                        href="/casino/game/coinflip"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Coinflip"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames_coinflip.jpg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 md:gap-x-6 md:gap-y-6">
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <section
                    role="group"
                    className="relative box-border caret-transparent gap-x-3 flex flex-col gap-y-3 md:gap-x-4 md:gap-y-4"
                  >
                    <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
                      <a
                        href="/casino/category/popular"
                        className="text-2xl font-bold box-border caret-transparent flow-root basis-[0%] grow tracking-[normal] leading-8 min-h-[auto] min-w-[auto] overflow-hidden md:text-[28px] md:leading-9 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                      >
                        Popular Games
                      </a>
                      <a
                        href="/casino/category/popular"
                        className="relative text-[13px] font-bold items-center bg-indigo-950 box-border caret-transparent flex justify-center tracking-[normal] leading-[22.75px] min-h-[auto] min-w-16 text-center align-middle pt-[7px] pb-[9px] px-3.5 rounded-xl md:text-[15px] md:leading-[26.25px] md:pt-[11px] md:pb-[13px] hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          View All
                        </span>
                      </a>
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
                      className="box-border caret-transparent gap-x-2 grid auto-cols-[calc(33.3333%_-_5.33333px)] grid-flow-col isolate min-h-[auto] min-w-[auto] overflow-x-scroll overflow-y-hidden gap-y-2 md:gap-x-4 md:auto-cols-[calc(14.2857%_-_13.7143px)] md:gap-y-4"
                    >
                      <a
                        aria-label="CCTV Game - Rush Hour"
                        href="/casino/game/155io-cctv-game-rush-hour"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="CCTV Game - Rush Hour"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/hub88:zcl3u_cctvgame-rushhour-MOhk4Ud4l.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Catfish Hunters"
                        href="/casino/game/nolimit-city-catfish-hunters"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Catfish Hunters"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/evo:nlc-catfish-hunters-zWC6DJ0t7.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                        <div className="items-start box-border caret-transparent gap-x-1 flex flex-col col-end-[top-start] col-start-[top-start] row-end-[top-start] row-start-[top-start] min-h-[auto] min-w-[auto] gap-y-1 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          <p className="text-slate-950 text-[9px] font-bold items-center bg-lime-500 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] px-1.5 py-1 rounded-lg md:text-xs md:tracking-[normal] md:px-2 hover:text-slate-950 hover:bg-lime-600 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-slate-950 hover:rounded-lg hover:border-0 hover:border-none">
                            New
                          </p>
                        </div>
                      </a>
                      <a
                        aria-label="Duck Hunters"
                        href="/casino/game/nolimit-city-duck-hunters"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Duck Hunters"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/evo:nlc-duck-hunters-WxMYAG3ol.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Duck Hunters 16K"
                        href="/casino/game/nolimit-city-duck-hunters-16k"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Duck Hunters 16K"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/evo:nlc-duck-hunters-16k-35xBRWD-l.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                        <div className="items-start box-border caret-transparent gap-x-1 flex flex-col col-end-[top-start] col-start-[top-start] row-end-[top-start] row-start-[top-start] min-h-[auto] min-w-[auto] gap-y-1 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          <p className="text-slate-950 text-[9px] font-bold items-center bg-yellow-400 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] px-1.5 py-1 rounded-lg md:text-xs md:tracking-[normal] md:px-2 hover:text-slate-950 hover:bg-yellow-500 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-slate-950 hover:rounded-lg hover:border-0 hover:border-none">
                            Exclusive
                          </p>
                        </div>
                      </a>
                      <a
                        aria-label="Outsourced"
                        href="/casino/game/nolimit-city-outsourced"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Outsourced"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/evo:nlc-outsourced-LTsE7UgCI.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Seamen"
                        href="/casino/game/evo:nlc-seamen"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Seamen"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/evo:nlc-seamen-bICadShUp.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <a
                        aria-label="Big Bamboo 2"
                        href="/casino/game/push-gaming-big-bamboo-2"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Big Bamboo 2"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/pushgaming:BigBamboo2-seNHatfpD.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                        <div className="items-start box-border caret-transparent gap-x-1 flex flex-col col-end-[top-start] col-start-[top-start] row-end-[top-start] row-start-[top-start] min-h-[auto] min-w-[auto] gap-y-1 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          <p className="text-slate-950 text-[9px] font-bold items-center bg-lime-500 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] px-1.5 py-1 rounded-lg md:text-xs md:tracking-[normal] md:px-2 hover:text-slate-950 hover:bg-lime-600 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-slate-950 hover:rounded-lg hover:border-0 hover:border-none">
                            New
                          </p>
                        </div>
                      </a>
                      <a
                        aria-label="Crazy Ex-Girlfriend"
                        href="/casino/game/nolimit-city-crazy-ex-girlfriend"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:-outline-offset-2 hover:outline hover:outline-2 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                      >
                        <img
                          alt="Crazy Ex-Girlfriend"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/evo:nlc-crazy-ex-girlfriend-4-nwQpQnZBD.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                        />
                      </a>
                      <div
                        aria-label="Epic Bullets and Bounty"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Epic Bullets and Bounty"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:2185-16T_tDViV.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Sweet Bonanza 1000"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Sweet Bonanza 1000"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic_vs20fruitswx.jpg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Gates of Olympus Super Scatter"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Gates of Olympus Super Scatter"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic:vs20olympgold-tPIoAOc1Q.jpeg"
                          className="box-content caret-black col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none min-h-0 min-w-0 object-fill w-auto rounded-none md:aspect-auto md:box-border md:caret-transparent md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Wanted Dead or a Wild"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Wanted Dead or a Wild"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:1067-tLa7Rl6FW.jpeg"
                          className="box-content caret-black col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none min-h-0 min-w-0 object-fill w-auto rounded-none md:aspect-auto md:box-border md:caret-transparent md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Le Bunny"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Le Bunny"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:2195-h9icnmIFI.jpeg"
                          className="box-content caret-black col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none min-h-0 min-w-0 object-fill w-auto rounded-none md:aspect-auto md:box-border md:caret-transparent md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Rabbit Garden"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Rabbit Garden"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic:vs20goldclust-G_SygLtsD.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Sugar Rush 1000"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Sugar Rush 1000"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic_vs20sugarrushx.jpg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Sweet Rush Bonanza"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <MainLayout
                          variant="image"
                          imageAlt="Sweet Rush Bonanza"
                          imageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic:vs20swrbon--SVDA63Th.jpeg"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Fruit Party"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Fruit Party"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/pragmatic_vs20fruitparty.jpg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                      <div
                        aria-label="Le Bandit"
                        className="relative aspect-[3_/_4] box-border caret-transparent grid [grid-template-areas:'._._._.''._top-start_top-end_.''._._._.'] grid-cols-[8px_1fr_auto_8px] grid-rows-[8px_auto_8px] min-h-[auto] min-w-[auto] snap-start rounded-xl"
                      >
                        <img
                          alt="Le Bandit"
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:1309-UTW7BoZfr.jpeg"
                          className="box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-xl"
                        />
                        <div className="bg-slate-800/70 box-border caret-transparent col-end-[-1] col-start-1 row-end-[-1] row-start-1 min-h-[auto] min-w-[auto] rounded-xl"></div>
                        <div className="items-end box-border caret-transparent gap-x-1 flex flex-col col-end-[top-end] col-start-[top-end] row-end-[top-end] row-start-[top-end] justify-self-end min-h-[auto] min-w-[auto] gap-y-1">
                          <div className="text-[9px] font-bold items-center bg-slate-950 box-border caret-transparent flex tracking-[0.08442px] leading-4 min-h-[auto] min-w-[auto] p-1 rounded-lg md:text-xs md:tracking-[normal]">
                            <img
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-5.svg"
                              alt="Icon"
                              className="text-[9px] box-border caret-transparent h-4 tracking-[0.08442px] align-baseline w-4 md:text-xs md:tracking-[normal]"
                            />
                          </div>
                        </div>
                        <div className="items-center bg-slate-800 box-border caret-transparent gap-x-0.5 flex flex-col col-end-[-1] col-start-1 row-end-[-1] row-start-1 justify-center min-h-[auto] min-w-[auto] opacity-0 gap-y-0.5 text-center p-2 rounded-xl">
                          <img
                            alt="Region Restricted"
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-3.svg"
                            className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-10 mb-2"
                          />
                          <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                            Region Restricted
                          </p>
                          <p className="text-indigo-300 text-[13px] font-medium box-border caret-transparent hidden tracking-[normal] leading-4 min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
                            This game is not available in your region
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section
                role="group"
                className="relative box-border caret-transparent gap-x-3 flex flex-col min-h-[auto] min-w-[auto] gap-y-3 md:gap-x-4 md:gap-y-4"
              >
                <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
                  <a
                    href="/sports"
                    className="text-2xl font-bold box-border caret-transparent flow-root basis-[0%] grow tracking-[normal] leading-8 min-h-[auto] min-w-[auto] overflow-hidden md:text-[28px] md:leading-9 hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                  >
                    Sportsbook
                  </a>
                  <a
                    href="/sports"
                    className="relative text-[13px] font-bold items-center bg-indigo-950 box-border caret-transparent flex justify-center tracking-[normal] leading-[22.75px] min-h-[auto] min-w-16 text-center align-middle pt-[7px] pb-[9px] px-3.5 rounded-xl md:text-[15px] md:leading-[26.25px] md:pt-[11px] md:pb-[13px] hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                  >
                    <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                      View All
                    </span>
                  </a>
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
                  className="box-border caret-transparent gap-x-2 grid grid-flow-col isolate min-h-[auto] min-w-[auto] overflow-x-scroll overflow-y-hidden gap-y-2 md:gap-x-4 md:gap-y-4"
                >
                  <a
                    href="/sports/soccer-1"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Soccer"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-4.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Soccer
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/basketball-2"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Basketball"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-5.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Basketball
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/tennis-5"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Tennis"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-6.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Tennis
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/counter-strike-109"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Counter-Strike"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-7.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Counter-Strike
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/fifa-300"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="FIFA"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-8.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        FIFA
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/baseball-3"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Baseball"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-9.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Baseball
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/ice-hockey-4"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Ice-Hockey"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-10.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Ice-Hockey
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/mma-117"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="MMA"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-11.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        MMA
                      </p>
                    </div>
                  </a>
                  <a
                    href="/sports/table-tennis-20"
                    className="text-blue-700 items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-[72px] min-h-[auto] min-w-[auto] gap-y-1 snap-start w-[203px] p-1 rounded-xl md:w-[227px] hover:text-blue-800 hover:bg-slate-900 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-xl hover:border-0 hover:border-none"
                  >
                    <img
                      alt="Table Tennis"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-12.png"
                      className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-16 rounded-lg hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-lg hover:border-0 hover:border-none"
                    />
                    <div className="items-center box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-full hover:text-blue-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-blue-700 hover:rounded-none hover:border-0 hover:border-none">
                      <p className="text-white text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] hover:text-neutral-100 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        Table Tennis
                      </p>
                    </div>
                  </a>
                </div>
              </section>
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
                  <div className="relative bg-slate-800 box-border caret-transparent h-[76px] min-h-[auto] min-w-[auto] snap-start w-[268px] p-4 rounded-xl md:h-[104px] md:w-72 md:p-7">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/DK36QST-.png"
                      className="absolute box-border caret-transparent h-[86px] max-w-full w-[86px] right-[5px] -top-2.5 bottom-0 md:h-[117px] md:top-[-13px] md:w-[117px]"
                    />
                    <div className="box-border caret-transparent isolate">
                      <p className="text-slate-400 text-xs font-medium box-border caret-transparent tracking-[normal] leading-4">
                        Official Partner Of
                      </p>
                      <p className="text-[22px] font-medium box-border caret-transparent tracking-[0.20636px] leading-7 md:text-2xl md:tracking-[normal] md:leading-8">
                        Chelsea FC
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-slate-800 box-border caret-transparent h-[76px] min-h-[auto] min-w-[auto] snap-start w-[268px] p-4 rounded-xl md:h-[104px] md:w-72 md:p-7">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/BM92ESmD.png"
                      className="absolute box-border caret-transparent h-[95px] max-w-full w-[95px] right-0 -top-2.5 bottom-0 md:h-[130px] md:top-[-13px] md:w-[130px]"
                    />
                    <div className="box-border caret-transparent isolate">
                      <p className="text-slate-400 text-xs font-medium box-border caret-transparent tracking-[normal] leading-4">
                        Official Partner Of
                      </p>
                      <p className="text-[22px] font-medium box-border caret-transparent tracking-[0.20636px] leading-7 md:text-2xl md:tracking-[normal] md:leading-8">
                        Charles Oliveira
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-slate-800 box-border caret-transparent h-[76px] min-h-[auto] min-w-[auto] snap-start w-[268px] p-4 rounded-xl md:h-[104px] md:w-72 md:p-7">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/Djy0DfOg.png"
                      className="absolute box-border caret-transparent h-[95px] max-w-full w-[95px] right-[5px] bottom-0 md:h-[130px] md:w-[130px]"
                    />
                    <div className="box-border caret-transparent isolate">
                      <p className="text-slate-400 text-xs font-medium box-border caret-transparent tracking-[normal] leading-4">
                        Official Partner Of
                      </p>
                      <p className="text-[22px] font-medium box-border caret-transparent tracking-[0.20636px] leading-7 md:text-2xl md:tracking-[normal] md:leading-8">
                        100 Thieves
                      </p>
                    </div>
                  </div>
                  <div className="relative bg-slate-800 box-border caret-transparent h-[76px] min-h-[auto] min-w-[auto] snap-start w-[268px] p-4 rounded-xl md:h-[104px] md:w-72 md:p-7">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/BtCU68Gm.png"
                      className="absolute box-border caret-transparent h-[95px] max-w-full w-[95px] right-[5px] bottom-0 md:h-[130px] md:w-[130px]"
                    />
                    <div className="box-border caret-transparent isolate">
                      <p className="text-slate-400 text-xs font-medium box-border caret-transparent tracking-[normal] leading-4">
                        Official Partner Of
                      </p>
                      <img
                        title="Matchroom"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/gzQgA-E_.png"
                        className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain object-[0%_50%] w-[222px]"
                      />
                    </div>
                  </div>
                  <div className="relative bg-slate-800 box-border caret-transparent h-[76px] min-h-[auto] min-w-[auto] snap-start w-[268px] p-4 rounded-xl md:h-[104px] md:w-72 md:p-7">
                    <img
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/Fbe2qrba.png"
                      className="absolute box-border caret-transparent h-[42px] max-w-full w-[65px] right-[18px] bottom-[18px] md:h-[62px] md:w-[95px] md:right-[22px] md:bottom-[22px]"
                    />
                    <div className="box-border caret-transparent isolate">
                      <p className="text-slate-400 text-xs font-medium box-border caret-transparent tracking-[normal] leading-4">
                        Official Partner Of
                      </p>
                      <img
                        title="wnt"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-13.png"
                        className="box-border caret-transparent inline-block h-[38px] max-w-full object-contain object-[0%_50%] w-[222px]"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 px-4 md:gap-x-6 md:gap-y-6 md:px-6">
            <div className="box-border caret-transparent gap-x-4 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-4 w-full mx-auto md:gap-x-6 md:gap-y-6">
              <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
                <div className="relative box-border caret-transparent flex max-w-full min-h-12 w-full overflow-hidden rounded-t-xl">
                  <button
                    type="button"
                    className="static text-[13.3333px] font-normal [align-items:normal] self-auto bg-zinc-100 caret-black inline-block shrink h-auto justify-normal tracking-[normal] leading-[normal] text-center align-baseline w-auto z-auto rounded-none left-auto font-arial md:absolute md:appearance-none md:text-2xl md:font-bold md:items-center md:self-center md:aspect-auto md:bg-transparent md:caret-transparent md:flex md:shrink-0 md:h-6 md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:w-6 md:z-[11] md:[mask-position:0%] md:bg-left-top md:p-0 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg md:left-2"
                  ></button>
                  <div className="absolute box-border caret-transparent h-[99px] top-[-9999px] w-[99px] overflow-scroll"></div>
                  <div className="relative box-border caret-transparent grow min-h-[auto] min-w-[auto] overflow-x-auto overflow-y-hidden text-nowrap">
                    <div
                      role="tablist"
                      className="box-border caret-transparent flex text-nowrap"
                    >
                      <button
                        type="button"
                        role="tab"
                        className="relative appearance-none text-xs font-bold items-center bg-slate-950 caret-transparent flex flex-col shrink-0 justify-center tracking-[normal] leading-4 max-w-[360px] min-h-12 min-w-[136px] text-center capitalize align-middle overflow-hidden px-4 py-3 hover:text-white hover:bg-slate-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                      >
                        All
                      </button>
                      <button
                        type="button"
                        role="tab"
                        className="relative appearance-none text-indigo-300 text-xs font-medium items-center bg-slate-950 caret-transparent flex flex-col shrink-0 justify-center tracking-[normal] leading-4 max-w-[360px] min-h-12 min-w-[136px] text-center capitalize align-middle overflow-hidden px-4 py-3 hover:text-white hover:bg-slate-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                      >
                        High Wins
                      </button>
                      <button
                        type="button"
                        role="tab"
                        className="relative appearance-none text-indigo-300 text-xs font-medium items-center bg-slate-950 caret-transparent flex flex-col shrink-0 justify-center tracking-[normal] leading-4 max-w-[360px] min-h-12 min-w-[136px] text-center capitalize align-middle overflow-hidden px-4 py-3 hover:text-white hover:bg-slate-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white"
                      >
                        Lucky Wins
                      </button>
                    </div>
                    <span className="absolute bg-violet-600 box-border caret-transparent block h-0.5 text-nowrap w-[136px] left-0 bottom-0"></span>
                  </div>
                  <div className="absolute bg-[linear-gradient(270deg,rgb(9,12,29)_0%,rgba(9,12,29,0)_100%)] box-border caret-transparent h-full opacity-100 pointer-events-none w-[55px] z-10 -right-px top-0 md:opacity-0"></div>
                </div>
                <div className="box-border caret-transparent w-full">
                  <div className="relative bg-slate-950 box-border caret-transparent flex flex-col h-full rounded-b-xl md:static md:bg-transparent md:block md:flex-row md:h-auto">
                    <div className="relative box-border caret-transparent flex flex-col justify-center min-h-[auto] min-w-[auto] w-auto rounded-b-xl md:min-h-0 md:min-w-0 md:w-full">
                      <div className="relative box-border caret-transparent flex min-h-[auto] min-w-[auto] rounded-b-xl">
                        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] w-full overflow-auto rounded-b-xl">
                          <div className="relative bg-slate-800 box-border caret-transparent flex flex-col h-full min-h-[auto] min-w-[auto] w-full overflow-hidden">
                            <div className="relative box-border caret-transparent h-[500px] max-h-[500px] min-h-[auto] min-w-[auto] overflow-x-auto overflow-y-hidden w-full after:accent-auto after:bg-[linear-gradient(rgba(0,0,0,0),rgb(25,25,57))] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[72px] after:tracking-[0.15008px] after:leading-6 after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:bottom-0 after:inset-x-0 after:font-excon">
                              <table className="caret-transparent table-fixed w-full">
                                <thead className="box-border caret-transparent align-baseline">
                                  <tr className="box-border caret-transparent align-middle">
                                    <th className="sticky text-xs font-bold bg-indigo-950 border-b-slate-950 box-border caret-transparent tracking-[0.12852px] uppercase align-middle w-[2%] z-[2] pl-7 pr-0 py-[9px] border-t-white border-b-2 border-x-white top-0 md:w-[6%]">
                                      Game
                                    </th>
                                    <th className="static text-base font-bold bg-transparent box-content caret-black tracking-[normal] text-center normal-case align-baseline w-auto z-auto p-px border-b-0 border-black top-auto md:sticky md:text-xs md:aspect-auto md:bg-indigo-950 md:border-b-slate-950 md:box-border md:caret-transparent md:tracking-[0.12852px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:uppercase md:underline-offset-auto md:align-middle md:w-[6%] md:z-[2] md:[mask-position:0%] md:bg-left-top md:px-0 md:py-[9px] md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-2 md:border-x-white md:top-0">
                                      <div className="box-content caret-black px-0 md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        Username
                                      </div>
                                    </th>
                                    <th className="static text-base font-bold bg-transparent box-content caret-black tracking-[normal] text-center normal-case align-baseline w-auto z-auto p-px border-b-0 border-black top-auto md:sticky md:text-xs md:aspect-auto md:bg-indigo-950 md:border-b-slate-950 md:box-border md:caret-transparent md:tracking-[0.12852px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:uppercase md:underline-offset-auto md:align-middle md:w-[6%] md:z-[2] md:[mask-position:0%] md:bg-left-top md:px-0 md:py-[9px] md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-2 md:border-x-white md:top-0">
                                      Time
                                    </th>
                                    <th className="static text-base font-bold bg-transparent box-content caret-black tracking-[normal] text-center normal-case align-baseline w-auto z-auto p-px border-b-0 border-black top-auto md:sticky md:text-xs md:aspect-auto md:bg-indigo-950 md:border-b-slate-950 md:box-border md:caret-transparent md:tracking-[0.12852px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:uppercase md:underline-offset-auto md:align-middle md:w-[6%] md:z-[2] md:[mask-position:0%] md:bg-left-top md:px-0 md:py-[9px] md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-2 md:border-x-white md:top-0">
                                      Wager
                                    </th>
                                    <th className="static text-base font-bold bg-transparent box-content caret-black tracking-[normal] text-center normal-case align-baseline w-auto z-auto p-px border-b-0 border-black top-auto md:sticky md:text-xs md:aspect-auto md:bg-indigo-950 md:border-b-slate-950 md:box-border md:caret-transparent md:tracking-[0.12852px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:uppercase md:underline-offset-auto md:align-middle md:w-[6%] md:z-[2] md:[mask-position:0%] md:bg-left-top md:px-0 md:py-[9px] md:scroll-m-0 md:scroll-p-[auto] md:border-t-white md:border-b-2 md:border-x-white md:top-0">
                                      Multiplier
                                    </th>
                                    <th className="sticky text-xs font-bold bg-indigo-950 border-b-slate-950 box-border caret-transparent tracking-[0.12852px] text-right uppercase align-middle w-[2%] z-[2] pl-0 pr-7 py-[9px] border-t-white border-b-2 border-x-white top-0 md:w-[6%]">
                                      Payout
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="relative bg-slate-800 box-border caret-transparent align-baseline before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-2 before:tracking-[0.15008px] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-excon after:accent-auto after:bg-[linear-gradient(rgb(25,25,57),rgba(0,0,0,0))] after:box-border after:caret-transparent after:text-white after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[9px] after:tracking-[0.15008px] after:leading-6 after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:top-0 after:inset-x-0 after:font-excon">
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"></tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <a
                                          href="/casino/game/hacksaw:1946"
                                          className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                        >
                                          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
                                            <img
                                              alt="hacksaw"
                                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:1946-kQ402prZc.jpeg"
                                              className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                                            />
                                          </div>
                                          <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            Jaws of Justice
                                          </span>
                                        </a>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
                                          <img
                                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-14.png"
                                            className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
                                          />
                                        </div>
                                        <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                          Hidden
                                        </span>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      9:07 PM
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        $1,050.00
                                        <img
                                          alt="crypto"
                                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                                          className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                                        />
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-lime-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        4.17x
                                      </span>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-7 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-lime-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        $4,375.00
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <a
                                          href="/casino/game/blackjack"
                                          className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                        >
                                          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
                                            <img
                                              alt="blackjack"
                                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:blackjack-H4SSRgE2t-1.jpeg"
                                              className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                                            />
                                          </div>
                                          <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            Blackjack
                                          </span>
                                        </a>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
                                          <img
                                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/D-R-nRxi.png"
                                            className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
                                          />
                                        </div>
                                        <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                          Hidden
                                        </span>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      9:07 PM
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        $100.00
                                        <img
                                          alt="sol"
                                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-16.svg"
                                          className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                                        />
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        0.00x
                                      </span>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-7 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        $0.00
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <a
                                          href="/casino/game/hacksaw:2057"
                                          className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                        >
                                          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
                                            <img
                                              alt="hacksaw"
                                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:2057-h4wCzWjm5.jpeg"
                                              className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                                            />
                                          </div>
                                          <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            Le Fisherman
                                          </span>
                                        </a>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
                                          <img
                                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/CSiML-CW.png"
                                            className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
                                          />
                                        </div>
                                        <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                          Hidden
                                        </span>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      9:07 PM
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        $105.00
                                        <img
                                          alt="crypto"
                                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                                          className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                                        />
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        0.00x
                                      </span>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-7 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        $0.00
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <a
                                          href="/casino/game/hacksaw:1562"
                                          className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                        >
                                          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
                                            <img
                                              alt="hacksaw"
                                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:1562-y8ApFpB0N.jpeg"
                                              className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                                            />
                                          </div>
                                          <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            Le Pharaoh
                                          </span>
                                        </a>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
                                          <img
                                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-14.png"
                                            className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
                                          />
                                        </div>
                                        <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                          Hidden
                                        </span>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      9:07 PM
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        $1,050.00
                                        <img
                                          alt="crypto"
                                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                                          className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                                        />
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        0.00x
                                      </span>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-7 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        $0.00
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <a
                                          href="/casino/game/hacksaw:1396"
                                          className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                        >
                                          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
                                            <img
                                              alt="hacksaw"
                                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw_1396.jpg"
                                              className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                                            />
                                          </div>
                                          <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            Xmas Drop
                                          </span>
                                        </a>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
                                          <img
                                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-14.png"
                                            className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
                                          />
                                        </div>
                                        <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                          Hidden
                                        </span>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      9:07 PM
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        $1,050.00
                                        <img
                                          alt="crypto"
                                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                                          className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                                        />
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        0.00x
                                      </span>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-0 md:pr-7 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <span className="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                        $0.00
                                      </span>
                                    </td>
                                  </tr>
                                  <tr className="box-content caret-black align-baseline md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <a
                                          href="/casino/game/blackjack"
                                          className="[align-items:normal] caret-black inline min-h-0 min-w-0 text-wrap md:items-center md:aspect-auto md:caret-transparent md:flex md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                                        >
                                          <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap w-auto mr-0 rounded-none md:relative md:aspect-auto md:caret-transparent md:h-8 md:min-h-[auto] md:min-w-8 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-8 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr after:md:accent-auto after:md:caret-transparent after:md:text-white after:md:hidden after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-medium after:md:tracking-[0.12852px] after:md:leading-4 after:md:list-outside after:md:list-disc after:md:pointer-events-auto after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:text-nowrap after:md:visible after:md:rounded-bl after:md:rounded-br after:md:rounded-tl after:md:rounded-tr after:md:border-separate after:md:border-2 after:md:border-solid after:md:border-white after:md:inset-0 after:md:font-excon">
                                            <img
                                              alt="blackjack"
                                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:blackjack-H4SSRgE2t-1.jpeg"
                                              className="caret-black block col-end-auto col-start-auto row-end-auto row-start-auto h-auto max-w-none object-fill text-wrap w-auto rounded-none md:aspect-auto md:caret-transparent md:inline-block md:col-end-[-1] md:col-start-1 md:row-end-[-1] md:row-start-1 md:h-full md:max-w-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr"
                                            />
                                          </div>
                                          <span className="caret-black inline min-h-0 min-w-0 text-clip normal-case text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:capitalize md:underline-offset-auto md:text-nowrap md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                            Blackjack
                                          </span>
                                        </a>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="text-black [align-items:normal] caret-black block justify-normal text-clip text-wrap px-0 md:text-slate-500 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pl-7 md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        <div className="static caret-black h-auto min-h-0 min-w-0 text-wrap mr-0 md:relative md:aspect-[16.8_/_14] md:caret-transparent md:h-4 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:mr-2 md:scroll-m-0 md:scroll-p-[auto]">
                                          <img
                                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/Cz0id5eX.png"
                                            className="static caret-black h-auto text-wrap transform-none left-auto md:absolute md:aspect-[16_/_10] md:caret-transparent md:h-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:translate-x-[-50.0%] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4"
                                          />
                                        </div>
                                        <span className="caret-black inline min-h-0 min-w-0 text-wrap md:aspect-auto md:caret-transparent md:block md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                          Hidden
                                        </span>
                                      </div>
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      9:06 PM
                                    </td>
                                    <td className="text-base font-normal caret-black h-auto tracking-[normal] leading-[normal] text-start text-clip align-baseline p-px md:text-xs md:font-medium md:aspect-auto md:caret-transparent md:h-8 md:tracking-[0.12852px] md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-right md:decoration-auto md:text-ellipsis md:underline-offset-auto md:align-middle md:[mask-position:0%] md:bg-left-top md:px-0 md:py-1 md:scroll-m-0 md:scroll-p-[auto]">
                                      <div className="[align-items:normal] caret-black block justify-normal text-clip text-wrap pr-0 md:items-center md:aspect-auto md:caret-transparent md:flex md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:text-ellipsis md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:pr-3 md:scroll-m-0 md:scroll-p-[auto]">
                                        $44.00
                                        <img
                                          alt="sol"
                                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-16.svg"
                                          className="caret-black h-auto max-w-none min-h-0 min-w-0 text-wrap w-auto ml-0 md:aspect-auto md:caret-transparent md:h-4 md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:w-4 md:[mask-position:0%] md:bg-left-top md:ml-2 md:scroll-m-0 md:scroll-p-[auto]"
                                        />
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>
                                  <div className="absolute box-border caret-transparent translate-x-[-50.0%] w-full left-2/4 top-2/4"></div>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800 box-border caret-transparent min-h-[auto] min-w-[auto] p-4 rounded-xl md:pt-7 md:pb-0 md:px-7">
                <div className="relative box-border caret-transparent h-56 max-h-56 overflow-hidden">
                  <div className="box-border caret-transparent columns-1 gap-x-4 h-full md:columns-2">
                    <h1 className="text-violet-200 text-2xl font-bold box-border caret-transparent tracking-[normal] leading-8 mb-4">
                      Roobet Crypto Casino &amp; Crypto Sportsbook
                    </h1>
                    <div className="box-border caret-transparent gap-x-2 flex flex-col gap-y-2 md:gap-x-3 md:gap-y-3">
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet brings together everything players look for in a
                        modern crypto casino and crypto sportsbook: quick crypto
                        transactions, sleek design, and a betting platform that
                        actually feels fun to use. Built on blockchain
                        technology, Roobet leans into provably fair mechanics,
                        low house edge games, and transparent rules so you
                        always know what you’re signing up for when you place a
                        bet. From casino spins to sportsbook betting, the site
                        layers in smart features like instant payouts, flexible
                        limits, and a gamified interface that keeps the
                        experience feeling innovative instead of generic.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        As one of the longest-running brands in crypto gambling,
                        Roobet has grown a global audience that hops between
                        slots, Originals, and live matches on the same balance.
                        You get a full-service crypto casino with thousands of
                        titles plus a crypto sportsbook that covers everything
                        from football and basketball to esports, all backed by
                        fast transactions and familiar crypto coins.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Why Choose Roobet for Crypto Gaming and Sports
                          Betting?
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        When you land on the Roobet official website, you
                        immediately notice the focus on safe and straightforward
                        crypto gambling rather than clutter or confusion. Roobet
                        has been live since 2019, and in that time, it has
                        processed millions of wagers and pushed past the 10
                        billion bet mark, building a worldwide player base that
                        values reliability and a smooth experience across casino
                        and sports.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Instead of behaving like a faceless brand, Roobet leans
                        into an interactive community feel, with chat, promos,
                        and events that keep regulars coming back. You can treat
                        it as your main hub for slots, crash games, and
                        sportsbook markets, knowing the same account and wallet
                        will work across every section.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Licensed and Trusted by the Curacao Government
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet is fully licensed and operates under an online
                        gaming license issued by the Government of Curacao,
                        giving the casino and sportsbook legal legitimacy and
                        clear oversight. The operating company (Raw
                        Entertainment B.V.) holds a gaming license recognized by
                        the Curacao government, which requires ongoing
                        regulatory transparency, player protection, and
                        responsible gaming protocols.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        On top of that legal framework, Roobet supports multiple
                        languages and runs a provably fair system for its
                        Originals, making outcomes verifiable through
                        cryptographic proofs rather than blind trust. This
                        combination of audited RNG, clear terms, and ethical
                        standards creates a trustworthy environment where you
                        can focus on playing instead of worrying what’s
                        happening behind the scenes.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Regulation, Security, and Anonymity in Crypto Gaming
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet tries to strike a careful balance between
                        anonymity and safety by using blockchain payments while
                        still following strict regulation and compliance rules.
                        On the surface, the website uses modern security like
                        HTTPs encryption, device checks, and account protections
                        so that every user session stays safe and private.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Behind the scenes, Roobet follows Anti-Money Laundering
                        standards and full compliance procedures, including
                        verification steps and identification checks under Know
                        Your Customer (KYC) rules when needed. You might be
                        asked for an identity document during account review or
                        before larger withdrawals; while that limits pure
                        anonymity, it reinforces trust, supports Roobet’s
                        reputation, and keeps the operation aligned with its
                        Curacao gaming license and regular audits.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Fast and Easy Crypto and Fiat Payments
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet supports both crypto and selected traditional
                        currencies so deposits and withdrawals feel quick and
                        predictable rather than slow and mysterious. You can
                        fund your account with major coins like Bitcoin (BTC),
                        Ethereum (ETH), Tether (USDT), Dogecoin (DOGE), Litecoin
                        (LTC), Ripple (XRP), and USD Coin (USDC), then cash out
                        using the same currencies with short blockchain
                        confirmation times.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The Cashier is laid out in a simple tabbed format for
                        Deposit, Withdraw, and Buy Crypto, and clearly shows
                        limits, any network fees, and estimated processing
                        speed. Compared to many legacy sites, the mix of instant
                        or near-instant payouts and low crypto transfer fees
                        feels like a genuine USP for both crypto casino and
                        sportsbook fans.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Extensive Game Library
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s casino selection is one of its biggest hooks,
                        with more than 7,000 games available across casino games
                        like slots, crash titles, instant wins, and
                        full-featured live dealer tables. You can access games
                        from leading software providers such as Pragmatic Play,
                        Evolution, Play’n GO, Hacksaw Gaming, and more, and many
                        of them show a live RTP panel so you can gauge
                        performance over time rather than guessing.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Players can play in fun mode on certain titles to test
                        mechanics, then flip to real money wagers once they’re
                        comfortable. Alongside regular promotions and bonuses,
                        Roobet’s layout also keeps mobile gambling front and
                        center, so the same catalogue works seamlessly whether
                        you’re on desktop or playing from your phone.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Competitive Odds and Live Betting
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        On the sports side, Roobet leans into its position as an
                        online crypto sportsbook with global and international
                        coverage of leagues, tournaments, and one-off events.
                        You’ll find sharp sports odds and deep sports betting
                        menus, with competitive odds, betting markets for
                        spreads, totals, props, and a strong live betting lineup
                        that updates with real-time odds.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        In-play options pair with occasional promotions and
                        boosted lines, while fast blockchain transactions help
                        wins hit your balance quickly. The interface is fully
                        mobile-ready and tuned for mobile phone screens and iOS
                        devices, so you can track livestreams, tweak multis, and
                        confirm bets with just a few taps.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Official Partnerships and Brand Ambassadors
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Over the years, Roobet has leaned into big-name
                        entertainment and sports collaborations to signal that
                        it’s not some throwaway brand. The roster of official
                        partners and brand ambassadors includes global champions
                        such as Chelsea F.C. in the Premier League, UFC legend
                        Charles Oliveira, and leading esports organizations like
                        100 Thieves, alongside whom they recently created the
                        100 Thieves x Roobet team.
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        These partnerships translate into themed campaigns,
                        special odds boosts, and unique content drops around key
                        matches and fight nights. For players, it’s a simple
                        proof point that Roobet is willing to invest in
                        communities they already follow, from UFC pay-per-views
                        to top-flight football fixtures.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          User Experience and Navigation
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet leans heavily into mobile-first design so the
                        user experience feels consistent across desktop,
                        Android, and iOS. The responsive platform adapts quickly
                        as you browse, with fast-loading pages, clear lobby
                        filters, and quick shortcuts into casino or sportsbook
                        navigation menus.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        This focus on accessibility means you can jump from live
                        dealer tables to pre-match coupons without digging
                        through endless menus. Whether you’re on a laptop or a
                        phone, the combination of simple UX and straightforward
                        icons keeps mobile gambling surprisingly frictionless.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          The Roobet Community and Rewards
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s Roobettors lean into the brand’s social side as
                        much as its games, with chat, leaderboards, and regular
                        community events. The community picks up on new features
                        quickly, and Roobet supports them with a mix of daily
                        and weekly promotions, mission-style challenges, and
                        occasional social activations on streaming and social
                        channels.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Long-term loyalty is rewarded through layered rewards,
                        including rakeback, cashback, and VIP perks for
                        high-volume players. The net result is a platform that
                        feels alive rather than static, where frequent play
                        unlocks tangible benefits instead of just cosmetic
                        badges.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Best Crypto Casino
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Among crypto-focused sites, Roobet regularly appears in
                        rankings as a best crypto casino option thanks to its
                        scale and transparency. You get over 7,000 games across
                        slots, crash, tables, and live dealer rooms, plus
                        dedicated categories for{" "}
                        <a
                          href="/casino/category/popular"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          popular games
                        </a>
                        ,{" "}
                        <a
                          href="/casino/category/new-games"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          new games
                        </a>
                        , and more.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s catalogue leans into high RTP titles and low
                        house edge formats, backed by provably fair tech on its
                        Originals, so you can double-check that results haven’t
                        been tampered with. The in-house “Roobet Originals”
                        section sits alongside familiar networks and makes the
                        lobby feel curated rather than just stuffed with random
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Roobet Originals
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/casino/category/roobet-games"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          Roobet Games
                        </a>
                        tab hosts Roobet’s own Originals, designed specifically
                        for crypto-native play. Titles like Mission Uncrossable,
                        Roobet Keno, and Roobet CoinFlip are exclusive to the
                        platform, combining simple rules with punchy volatility
                        that Roobettors and the wider community have gravitated
                        toward.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Every Original runs on provably fair logic, letting you
                        verify outcomes after each round rather than just
                        trusting the UI. These games tend to be some of the most
                        popular picks for users who want transparent risk
                        profiles and fast-paced sessions that work well on
                        mobile.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Massive Selection of Slots
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s slot offering rivals big-name casinos, with{" "}
                        <a
                          href="/casino/category/slots"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          slot games
                        </a>
                        numbering well over 6,500 online slots from dozens of
                        providers. You’ll find every imaginable theme plus
                        formats like megaways, high-volatility grids, and
                        classic three-reelers, each packed with bonus features,
                        progressive jackpots, and optional{" "}
                        <a
                          href="/casino/category/bonus-buys"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          bonus buy
                        </a>
                        rounds.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Players can test mechanics in demo mode or jump straight
                        into real money spins on well-known titles such as Sweet
                        Bonanza, Gates of Olympus, The Great Chicken Escape, and
                        Roobet’s exclusive slots like RIP City Roobet or Mad
                        Muertos. Many of these games list high RTP values and
                        high multipliers, which makes them particularly
                        appealing to crypto users who track edge closely.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Classic Table Games
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s table section keeps the bitcoin casino feeling
                        complete with a mix of traditional table games powered
                        by RNG engines and live dealers.​
                      </p>
                      <ul className="box-border caret-transparent min-h-[auto] min-w-[auto] mb-2 pl-4">
                        <li className="text-slate-400 font-bold box-border caret-transparent tracking-[normal]">
                          <em className="italic box-border caret-transparent">
                            Poker
                          </em>
                          : The casino’s casino poker range includes multiple
                          variants, from RNG tables to{" "}
                          <a
                            href="/casino/game/evolution-video-poker"
                            className="box-border caret-transparent hover:text-slate-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-slate-400 hover:rounded-none hover:border-0 hover:border-none"
                          >
                            video poker
                          </a>
                          and titles like{" "}
                          <a
                            href="/casino/game/evolution-video-poker"
                            className="box-border caret-transparent hover:text-slate-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-slate-400 hover:rounded-none hover:border-0 hover:border-none"
                          >
                            Caribbean Stud Poker
                          </a>
                          , blending skill decisions with chance.
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          <em className="italic box-border caret-transparent">
                            Baccarat
                          </em>
                          : Simple rules, quick rounds, and a familiar pacing
                          make baccarat a natural bridge between slots and the
                          blackjack game crowd.
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          <em className="italic box-border caret-transparent">
                            Blackjack
                          </em>
                          : Fans of classic blackjack get access to both
                          standard tables and edge-friendly side bets, with
                          flexible limits for casual or more serious players.​
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          <em className="italic box-border caret-transparent">
                            Roulette
                          </em>
                          : Multiple wheels and layouts let you{" "}
                          <a
                            href="/casino/game/roulette"
                            className="box-border caret-transparent hover:text-slate-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-slate-400 hover:rounded-none hover:border-0 hover:border-none"
                          >
                            play Roulette
                          </a>
                          in European or alternative variants, all with clean
                          interfaces.​
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          <em className="italic box-border caret-transparent">
                            Dice
                          </em>
                          : Crypto regulars can dive into dice games, with
                          options to{" "}
                          <a
                            href="/casino/game/evolution-craps"
                            className="box-border caret-transparent hover:text-slate-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-slate-400 hover:rounded-none hover:border-0 hover:border-none"
                          >
                            play Craps
                          </a>
                          or try alternatives like Sic Bo for a different
                          dice-driven flow.
                        </li>
                      </ul>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Live Casino &amp; Roo’s Lounge
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/casino/category/livecasino"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          live casino
                        </a>
                        area recreates a studio-style environment with more than
                        500 different rooms from providers like Evolution Gaming
                        and Pragmatic Play. You enter a central lobby and jump
                        into live dealer games such as blackjack, roulette,
                        baccarat, and shows, with Roobet’s own{" "}
                        <a
                          href="/casino/category/roos-live-lounge"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          Roo&#39;s Live Lounge
                        </a>
                        offering access to customized tables and branding.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Streams are tuned for flexible betting options, higher
                        RTPs in some formats, and low-latency connections so the
                        action stays synced to your screen. Professional hosts
                        and native dealers help bring some of the
                        brick-and-mortar vibe to your browser, and curated{" "}
                        <a
                          href="/casino/category/live-casino-picks"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          live casino picks
                        </a>
                        make it easy to find standout rooms quickly.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Live Blackjack
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Within the{" "}
                        <a
                          href="/casino/category/live-blackjack"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          live blackjack
                        </a>
                        section, you’ll find tables that blend familiar
                        blackjack gameplay with side bets and varied limits.
                        This setup appeals to both new players and crypto high
                        rollers who enjoy reading hands and making fast
                        decisions with real-time dealer interaction.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Live Baccarat
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/casino/category/live-baccarat"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          live baccarat
                        </a>
                        lobby focuses on streamlined, easy-to-follow hands with
                        low and mid-stakes tables plus faster variants for
                        volume players. It’s a natural option for anyone who
                        wants a simple ruleset and steady tempo with crypto
                        wagers.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Live Roulette
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s{" "}
                        <a
                          href="/casino/category/live-roulette"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          live roulette
                        </a>
                        streams deliver the classic spin-and-win rhythm with
                        live wheels and instant bet settlement via blockchain
                        payouts. Multiple camera angles and different table
                        layouts keep sessions varied without overcomplicating
                        the experience.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Game Shows
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        In the{" "}
                        <a
                          href="/casino/category/gameshows"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          casino game shows
                        </a>
                        section, you’ll see titles like Crazy Time and Monopoly
                        Live push a more spectacle-driven style of play. These
                        shows mix chance, animations, and presenter-led
                        segments, while Roobet maintains provably fair or
                        audited outcomes, smooth camera transitions, and easy
                        lobby navigation to keep the experience approachable.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Speed Tables
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/casino/category/live-speed"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          live speed tables
                        </a>
                        cater to players who hate waiting between rounds. Hands
                        resolve quickly, bets lock in faster, and the streaming
                        stack is tuned to minimize lag so the pace matches the
                        name.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          High Stakes
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        For high-volume users, Roobet runs{" "}
                        <a
                          href="/casino/category/live-highstakes"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          high-stakes
                        </a>
                        lobbies with tailored betting limits, private or
                        semi-private layouts, and a clear high roller focus.
                        High-definition streams and priority support pair with
                        instant crypto transactions to keep big sessions running
                        smoothly.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Best Crypto Sportsbook
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        On the sports side, Roobet positions itself as the best
                        crypto sportsbook for bettors who want deep markets and
                        a clean UX rather than just novelty. The{" "}
                        <a
                          href="/sports"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          sports betting
                        </a>
                        hub supports crypto betting with features like live
                        betting, occasional live streaming, multiple odds
                        formats, and tools such as a live match tracker, Quick
                        Bet, and an intuitive Betslip.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        You can browse betting markets and options across dozens
                        of tournaments, teams, and leagues, then use the Event
                        Bet Builder to assemble custom multis. All of this runs
                        on the same wallet, so you don’t have to shuffle
                        balances between casino and sportsbook every time you
                        switch.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">Soccer</b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Football fans can{" "}
                        <a
                          href="/sports/soccer-1"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          bet on soccer
                        </a>
                        across top matches, outrights, and futures on
                        competitions like the Premier League, UEFA Champions
                        League, LALIGA, Serie A, Bundesliga, and FIFA
                        tournaments. Roobet’s active link-up with Chelsea F.C.
                        helps underline its commitment to major European markets
                        rather than only niche leagues.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Basketball
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/sports/basketball-2"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          bet on basketball
                        </a>
                        section covers NBA, EuroLeague, NCAA, the FIBA World
                        Cup, and EuroCup, with competitive lines on spreads,
                        totals, and player props. Live promos often revolve
                        around big nights on the hardwood, giving bettors added
                        reasons to track games in real time.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          American Football
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re into gridiron, Roobet lets you{" "}
                        <a
                          href="/sports/american-football-16"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          bet on American Football
                        </a>
                        across NFL fixtures, NCAA games, and futures tied to the
                        NFL Draft. Bettors can mix pre-game outrights with live
                        bets as drives unfold, all using crypto balances.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">MMA</b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/sports/mixed-martial-arts-117"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          MMA betting
                        </a>
                        lobby includes boxing and mixed martial arts events with
                        flexible markets on moneylines, rounds, and
                        method-of-victory outcomes. Roobet’s partnerships with
                        UFC stars and crypto-themed fight promos add extra
                        flavor around UFC Fight Nights, UFC Series cards,
                        Oktagon events, and KSW shows.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">Baseball</b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Baseball fans can{" "}
                        <a
                          href="/sports/baseball-3"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          bet on baseball
                        </a>
                        across Major League Baseball (MLB), Nippon Professional
                        Baseball (NPB), and the World Baseball Classic. Run
                        lines, totals, and long-term outrights are all available
                        for crypto bettors who follow the diamond.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">Tennis</b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Through the{" "}
                        <a
                          href="/sports/tennis-5"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          tennis betting
                        </a>
                        menu, you’ll find markets on Wimbledon, the US Open,
                        French Open, Australian Open, and ongoing ATP and WTA
                        tours. Bettors can track scores and use the Event Bet
                        Builder to create custom slips across multiple matches.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">Esports</b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet has carved out a strong{" "}
                        <a
                          href="/sports/e_sport/109"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          Esports betting
                        </a>
                        niche, covering CS2, Dota 2, League of Legends,
                        Valorant, and more. You can follow{" "}
                        <a
                          href="/sports/counter-strike-109"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          Counter-Strike 2
                        </a>
                        Majors and CS pro events,{" "}
                        <a
                          href="/sports/league-of-legends-110"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          League of Legends
                        </a>
                        Worlds, and{" "}
                        <a
                          href="/sports/dota-2-111"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          Dota 2
                        </a>
                        . The International, with UI touches designed for gamers
                        rather than traditional bettors. Roobet even hosted the
                        Roobet Cup in 2022, underlining its commitment to the
                        esports scene.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">Cricket</b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Cricket fans get dedicated{" "}
                        <a
                          href="/sports/cricket-21"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          cricket betting
                        </a>
                        coverage on the Indian Premier League (IPL), ICC World
                        Cup, Big Bash League, The Ashes, and the T20 World Cup.
                        You’ll see markets for totals, player props, and innings
                        results, again with crypto-based settlement. ​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Other Sports
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Beyond the headline categories, Roobet’s bitcoin
                        sportsbook also lists ice hockey (including NHL), golf,
                        horse racing, motorsports, virtual sports like eSoccer,
                        and plenty more. Navigation makes it easy to jump
                        between sports and find specials, including crypto
                        betting promos like Combi Boost and VIP-only odds boosts
                        for higher-stakes users.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Easy and Ultra-Fast Crypto Deposits and Withdrawals
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet focuses heavily on keeping banking fast,
                        predictable, and transparent so you don’t get stuck
                        waiting. Deposits run through the Cashier with clear
                        tabs for Deposit, Buy, Withdraw, and even Tip functions,
                        while withdrawals lean on the same layout to simplify
                        the flow.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        For larger cash-outs, the team may request verified
                        identity checks as part of its KYC and AML commitments,
                        but these processes are framed around regulatory safety
                        and long-term trust rather than unnecessary friction.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          How to Fund Your Roobet Account
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re wondering how to deposit money on Roobet, the
                        flow is built to work for both crypto newcomers and
                        experienced users. The goal is a clear, repeatable
                        process that makes your Roobet Wallet feel like the
                        central hub for all gaming and betting balances.​
                      </p>
                      <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        Retrieve Your Deposit Address
                      </h1>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        First, log into your Roobet account and head to the
                        Wallet section. From there, you’ll generate a unique
                        deposit address, displayed as a string of characters
                        (both numbers and letters) that’s unique to your account
                        and marked as safe and secure for incoming transfers.​
                      </p>
                      <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        Choose Your Cryptocurrency
                      </h1>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Next, pick from a variety of payment methods and
                        supported cryptocurrencies. Roobet currently supports:
                        Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Dogecoin
                        (DOGE), USD Coin (USDC), Ripple (XRP), Litecoin (LTC),
                        and more, with networks added over time as demand
                        grows.​
                      </p>
                      <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        Transfer Funds
                      </h1>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        You then send funds from your preferred wallet or crypto
                        exchange wallets (including options like Exodus,
                        Coinbase, or other Blockchain-compatible services) to
                        your Roobet deposit address. Double-checking addresses
                        and networks before confirming the send is the best way
                        to avoid mistakes, and Roobet’s help articles walk
                        through examples step by step.​
                      </p>
                      <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        Optional Fiat Option
                      </h1>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re new to crypto, Roobet also supports
                        traditional currencies via fiat payment methods,
                        including credit/debit cards and bank transfers, routed
                        through regulated processors. These flows perform
                        fiat-to-crypto conversion in the background and deposit
                        to your Roobet deposit address, giving you built-in
                        convenience without juggling extra apps.​
                      </p>
                      <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        Buy Crypto Directly on Roobet
                      </h1>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Within the Cashier, the Buy Crypto tab on the Deposit
                        page lets you complete an on-site crypto purchase
                        without visiting an external exchange. For many players,
                        this “all-in-one” approach makes Roobet feel like a
                        full-stack crypto casino where you can buy, deposit, and
                        play in a single flow.​
                      </p>
                      <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        Confirmation and Availability
                      </h1>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Once sent, deposits wait for the appropriate blockchain
                        confirmation time depending on the network, and you
                        might see different crypto transfer fees for BTC vs.
                        faster chains. After validation, the reflection time is
                        usually short, and your balance appears in the Roobet
                        wallet section of your account, ready for casino or
                        sportsbook use.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          How to Withdraw from Roobet
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re asking how to withdraw money from Roobet, the
                        steps mirror deposits: choose coin, enter address, and
                        confirm the withdrawal process. Processed requests get
                        pushed to the blockchain quickly, often feeling like an
                        instant payout once Roobet completes any required KYC
                        verification checks on your profile.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Clear withdrawal limits and published timeframes help
                        set expectations so you’re not left wondering when funds
                        will show in your wallet. Combined with Roobet’s Curacao
                        license and AML program, this structure reinforces that
                        payouts are handled inside a regulated environment.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Promotions and Bonuses
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet’s{" "}
                        <a
                          href="/promotions"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          promotions
                        </a>
                        ecosystem aims to reward regular play without burying
                        everything in fine print. Bonus offers are built with
                        relatively clear wagering rules, and you can always
                        double-check details via support, the help center, or
                        FAQs if anything feels unclear.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Cashback systems, rakeback, and on-chain rewards are
                        central to the value proposition, often paying out
                        directly in crypto rather than locked bonus credits.
                        Casino spins, sportsbook boosts, and multipliers are all
                        rolled into a unified framework so both sides of the
                        site feel supported.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Roobet Rewards and VIP Club
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        The{" "}
                        <a
                          href="/vip"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          VIP Club
                        </a>
                        is Roobet’s invite-only top tier, designed around
                        loyalty and long-term membership rather than one-off
                        boosters. Members get access to exclusive offers,
                        private events, and tailored benefits that sit on top of
                        the public promo schedule.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Outside of VIP, general{" "}
                        <a
                          href="/rewards"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          rewards
                        </a>
                        include ongoing rakeback, weekly and monthly bonuses,
                        and vault-style mechanics that let you unlock extra
                        value over a fixed period. The net effect is that
                        consistent play gradually levels up your account
                        experience, not just your balance.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Join the Roobet Community Today
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re wondering how to set up a Roobet account, the
                        process is intentionally straightforward and works from
                        both desktop and mobile. You choose your credentials,
                        accept the terms, and move through any early
                        verification prompts so you can start exploring the
                        lobby quickly.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Roobet Login
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Once registered, the Roobet login page lets you access
                        your profile via desktop browser, iOS, or Android
                        devices using the same email and password combo (or
                        supported socials). You can secure that login further
                        with extra safety features such as two-factor
                        authentication (2FA) in your account settings.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Register an Account
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re still at square one and want to know how to
                        sign up for Roobet, you’ll create an account with your
                        email, password, and region, then accept the user
                        agreement. In some markets, you can also link supported
                        social accounts, which speeds up onboarding and device
                        syncing.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Account Verification
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet applies Know Your Customer (KYC) standards and
                        identity checks in line with its Curacao license and AML
                        policies. At certain thresholds, you may be asked to
                        upload ID, proof of address, or other details so the
                        compliance team can validate activity and keep the
                        platform secure.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Security and Privacy
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        On top of 2FA, Roobet uses modern encryption,
                        infrastructure protections, and well-documented privacy
                        practices to safeguard user data. You can tweak device
                        logins, session controls, and notifications to keep
                        tighter control over who accesses your account and
                        when.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Play Responsibly with Roobet
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Roobet promotes{" "}
                        <a
                          href="/responsible-gambling"
                          className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                        >
                          responsible gambling
                        </a>
                        across both casino and sportsbook, not just as a
                        checkbox but as a set of practical tools. Under the “Roo
                        Responsibility” approach, players can set deposit
                        limits, lock in cool-off periods, or self-exclude if
                        they need a break.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Educational content and signposting to external support
                        services are also present in the help center so players
                        can read up on safer habits and recognize early warning
                        signs.​
                      </p>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          24/7 Live Support and Player Assistance
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Support runs around the clock so you’re not left
                        guessing if something goes wrong.​
                      </p>
                      <ul className="box-border caret-transparent min-h-[auto] min-w-[auto] mb-2 pl-4">
                        <li className="text-slate-400 font-bold box-border caret-transparent tracking-[normal]">
                          Live Chat support: Always-on chat sits inside the
                          platform and connects you with agents for immediate
                          help on deposits, withdrawals, or gameplay questions.​
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          Email support: For more complex issues, email channels
                          handle longer threads and attachments.
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          Help Center Knowledge Base: Roobet’s help site covers
                          topics like crypto deposits, withdrawals,
                          verification, and technical troubleshooting in article
                          form.​
                        </li>
                        <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                          Community and Social channels: Active social feeds and
                          community spaces share announcements, promos, and
                          occasional troubleshooting tips from other players.
                        </li>
                      </ul>
                      <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                        <b className="box-border caret-transparent">
                          Start Your Adventure at Roobet Crypto Casino and
                          Crypto Sportsbook
                        </b>
                      </h2>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        If you’re ready to explore a combined crypto casino and
                        crypto sportsbook built around fast banking, deep
                        markets, and a modern interface, Roobet is set up for
                        that. You can create an account, top up with crypto or
                        fiat, and start playing in minutes, backed by the same
                        security, licensing, and responsible gambling framework
                        that underpins every spin and bet.​
                      </p>
                      <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                        Whether you gravitate toward high-RTP slots, live dealer
                        rooms, or big-match betting slips, Roobet’s mix of
                        instant crypto deposits and withdrawals, broad game
                        options, competitive sports odds, and strong data
                        protection makes it a compelling place to play—as long
                        as you keep things fun and stay within your limits.
                      </p>
                    </div>
                  </div>
                  <div className="absolute items-end bg-[linear-gradient(to_top,rgb(25,25,57),rgba(0,0,0,0))] box-border caret-transparent flex h-[150px] justify-center text-center w-full pb-6 left-0 bottom-0">
                    <button
                      type="button"
                      className="relative appearance-none text-sm font-bold items-center bg-indigo-950 caret-transparent flex justify-center tracking-[normal] leading-[24.5px] min-h-[auto] min-w-16 align-middle z-[1] pt-[9px] pb-[11px] px-3.5 rounded-xl hover:text-white hover:bg-indigo-950 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-xl hover:border-0 hover:border-none hover:border-white"
                    >
                      <span className="relative text-xs box-border caret-transparent block leading-4 min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                        See More
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-950 box-border caret-transparent flex justify-center pt-4 pb-6 px-4 md:pt-6 md:pb-8 md:px-6">
            <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-6 w-full z-[1] mx-auto md:gap-x-8 md:gap-y-8">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <hr className="text-zinc-500 bg-slate-800 box-border caret-transparent h-0.5 mx-auto" />
              </div>
              <div className="box-border caret-transparent gap-x-6 flex flex-col flex-wrap min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-0 md:flex-row md:flex-nowrap md:gap-y-0">
                <div className="box-border caret-transparent gap-x-4 flex flex-col grow grid-cols-none min-h-[auto] min-w-[auto] gap-y-4 md:grid md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent flex mb-2">
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Casino
                      </p>
                    </div>
                    <div className="static box-content caret-black gap-x-[normal] block flex-row list-disc gap-y-[normal] md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:flex-col md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <a
                        href="/casino/category/roobet-games?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Roobet Originals
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/popular?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Popular Games
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/slots?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Slots
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/bonus-buys?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Bonus Buys
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/livecasino"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Live Casino
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/gameshows?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Game Shows
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/roulette?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Roulette
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/blackjack?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Blackjack
                          </span>
                        </div>
                      </a>
                      <a
                        href="/casino/category/baccarat?sort=pop_desc"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Baccarat
                          </span>
                        </div>
                      </a>
                      <a
                        href="/fair"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Fair
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent flex mb-2">
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Sportsbook
                      </p>
                    </div>
                    <div className="static box-content caret-black gap-x-[normal] block flex-row list-disc gap-y-[normal] md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:flex-col md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <a
                        href="/sports"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Home
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/soccer-1"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Soccer
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/basketball-2"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Basketball
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/tennis-5"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Tennis
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/counter-strike-109"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Counter-Strike
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/fifa-300"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            FIFA
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/baseball-3"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Baseball
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/ice-hockey-4"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Ice-Hockey
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/cricket-21"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Cricket
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/mma-117"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            MMA
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sports/table-tennis-20"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Table Tennis
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent flex mb-2">
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Policies
                      </p>
                    </div>
                    <div className="static box-content caret-black gap-x-[normal] block flex-row list-disc gap-y-[normal] md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:flex-col md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <a
                        href="/terms-and-conditions"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Terms of Service
                          </span>
                        </div>
                      </a>
                      <a
                        href="/privacy-policy"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Privacy Policy
                          </span>
                        </div>
                      </a>
                      <a
                        href="/bonus-and-promotion-policy"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Bonus &amp; Promotion
                          </span>
                        </div>
                      </a>
                      <a
                        href="/sportsbook-policy"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Sportsbook
                          </span>
                        </div>
                      </a>
                      <a
                        href="/game-policy"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Game Policy
                          </span>
                        </div>
                      </a>
                      <a
                        href="/kyc-aml-policy"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            KYC-AML-CFT Policy
                          </span>
                        </div>
                      </a>
                      <a
                        href="/responsible-gambling"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Responsible Gambling
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent flex mb-2">
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Promos
                      </p>
                    </div>
                    <div className="static box-content caret-black gap-x-[normal] block flex-row list-disc gap-y-[normal] md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:flex-col md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <a
                        href="/vip"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            VIP Club
                          </span>
                        </div>
                      </a>
                      <a
                        href="/promotions"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Promotions
                          </span>
                        </div>
                      </a>
                      <a
                        href="/?modal=redeem"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Redeem a Promo
                          </span>
                        </div>
                      </a>
                      <a
                        href="/affiliates"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Affiliate Program
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent flex mb-2">
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Support
                      </p>
                    </div>
                    <div className="static box-content caret-black gap-x-[normal] block flex-row list-disc gap-y-[normal] md:relative md:aspect-auto md:box-border md:caret-transparent md:gap-x-2 md:flex md:flex-col md:list-none md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <a
                        href="/about-us"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            About Us
                          </span>
                        </div>
                      </a>
                      <span className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Live Support
                          </span>
                        </div>
                      </span>
                      <a
                        href="https://help.roobet.com/"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Help Center
                          </span>
                        </div>
                      </a>
                      <a
                        href="https://playroobet.com/"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Roobet Official Mirrors
                          </span>
                        </div>
                      </a>
                      <a
                        href="https://rooresponsibly.com/"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto mr-0 md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:mr-4 md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Roo Responsibility
                          </span>
                        </div>
                      </a>
                      <a
                        href="https://bugcrowd.com/roobet-vdp"
                        className="static text-black [align-items:normal] box-content caret-black inline justify-normal min-h-0 min-w-0 text-start w-auto md:relative md:text-slate-400 md:items-center md:aspect-auto md:box-border md:caret-transparent md:block md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-fit md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                      >
                        <div className="box-content caret-black grow-0 md:aspect-auto md:box-border md:caret-transparent md:grow md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <span className="text-base box-content caret-black inline leading-[normal] md:text-xs md:aspect-auto md:box-border md:caret-transparent md:block md:leading-4 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            Vulnerability Disclosure
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="box-border caret-transparent gap-x-4 flex flex-col max-w-[300px] min-h-[auto] min-w-[auto] gap-y-4 w-auto mr-0 mt-4 md:gap-x-5 md:gap-y-5 md:w-[120px] md:mr-[85px] md:mt-0">
                    <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto]">
                      Community
                    </p>
                    <div className="box-border caret-transparent gap-x-6 flex min-h-[auto] min-w-[auto] gap-y-6">
                      <a
                        href="https://twitter.com/roobet/"
                        className="text-violet-600 box-border caret-transparent block min-h-[auto] min-w-[auto] underline hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                      >
                        <img
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-6.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-6 align-baseline w-6"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/roobet/"
                        className="text-violet-600 box-border caret-transparent block min-h-[auto] min-w-[auto] underline hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                      >
                        <img
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-7.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-6 align-baseline w-6"
                        />
                      </a>
                      <a
                        href="https://www.twitch.tv/roobetcom"
                        className="text-violet-600 box-border caret-transparent block min-h-[auto] min-w-[auto] underline hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                      >
                        <img
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-8.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-6 align-baseline w-6"
                        />
                      </a>
                      <a
                        href="https://t.me/roobetcom"
                        className="text-violet-600 box-border caret-transparent block min-h-[auto] min-w-[auto] underline hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                      >
                        <img
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-9.svg"
                          alt="Icon"
                          className="box-border caret-transparent inline h-6 align-baseline w-6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-8 md:flex-row md:gap-y-8">
                <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                  <div className="box-border caret-transparent mb-3">
                    <p className="text-sm font-bold box-border caret-transparent leading-5">
                      Accepted Currencies
                    </p>
                  </div>
                  <div className="relative box-border caret-transparent gap-x-4 flex flex-wrap gap-y-4">
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-10.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Bitcoin
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          BTC
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-11.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Tether
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          USDT
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-12.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        USDC
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          USDC
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-13.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Ethereum
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          ETH
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-14.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Solana
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          SOL
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-15.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Sui
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          SUI
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-16.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Binance Coin
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          BNB
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-17.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Ripple
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          XRP
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-18.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        TRON
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          TRX
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-19.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Litecoin
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          LTC
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-20.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Dogecoin
                        <span className="text-slate-500 text-xs font-medium box-border caret-transparent leading-4 ml-1">
                          DOGE
                        </span>
                      </p>
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-3 rounded-xl">
                      <img
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-21.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 align-baseline w-5"
                      />
                      <p className="text-sm font-bold box-border caret-transparent leading-5 min-h-[auto] min-w-[auto]">
                        Cash
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  <div className="box-border caret-transparent mb-3">
                    <p className="text-sm font-bold box-border caret-transparent tracking-[normal] leading-5">
                      Language
                    </p>
                  </div>
                  <div className="relative box-border caret-transparent w-full">
                    <div className="relative text-sm items-center bg-slate-800 box-border caret-transparent inline-flex tracking-[0.13132px] leading-[20.125px] min-w-fit outline-indigo-950 -outline-offset-2 outline outline-2 w-full rounded-xl md:min-w-[222px]">
                      <div
                        role="combobox"
                        className="font-bold items-center caret-transparent flex leading-6 min-h-6 text-ellipsis text-nowrap w-full overflow-hidden pl-2.5 pr-[42px] py-2 rounded-lg hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-lg hover:border-0 hover:border-none hover:border-white"
                      >
                        <div className="items-center caret-transparent gap-x-2 flex justify-start min-h-[auto] min-w-[auto] gap-y-2 text-nowrap hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                          <img
                            src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-22.svg"
                            alt="Icon"
                            className="caret-transparent h-5 text-nowrap align-baseline w-5"
                          />
                          <p className="text-base caret-transparent tracking-[0.15008px] min-h-[auto] min-w-[auto] text-nowrap hover:text-white hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-white">
                            English
                          </p>
                        </div>
                      </div>
                      <span className="absolute text-black/50 text-2xl items-center box-border caret-transparent flex shrink-0 h-6 justify-center pointer-events-none text-center top-[calc(50%_-_12px)] w-6 overflow-hidden mr-0.5 rounded-lg right-[7px]">
                        <img
                          src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-23.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-6 align-baseline w-6"
                        />
                      </span>
                      <fieldset className="absolute box-border caret-transparent hidden min-w-[0%] pointer-events-none text-left top-[-5px] border overflow-hidden px-2 py-0 rounded-xl border-solid border-black/20 bottom-0 inset-x-0">
                        <legend className="box-border caret-transparent leading-[11px] overflow-hidden px-0">
                          <span className="box-border caret-transparent">
                            ​
                          </span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-950 box-border caret-transparent flex justify-center pb-6 px-4 md:pb-8 md:px-6">
            <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-6 w-full z-[1] mx-auto md:gap-x-8 md:gap-y-8">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <hr className="text-zinc-500 bg-slate-800 box-border caret-transparent h-0.5 mx-auto" />
              </div>
              <div className="box-border caret-transparent gap-x-6 flex flex-col min-h-[auto] min-w-[auto] gap-y-6 md:gap-x-10 md:gap-y-10">
                <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                  <div className="box-border caret-transparent mb-3">
                    <p className="text-sm font-bold box-border caret-transparent leading-5">
                      Awards
                    </p>
                  </div>
                  <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap min-h-fit gap-y-4">
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-4 rounded-xl md:h-28">
                      <img
                        alt="Best Crypto Casino of the Year"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-17.png"
                        className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-[159px]"
                      />
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-4 rounded-xl md:h-28">
                      <img
                        alt="Brand Ambassador of the Year"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/D3OnZI9t.png"
                        className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-[110px] md:h-20 md:w-[136px]"
                      />
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-4 rounded-xl md:h-28">
                      <img
                        alt="Best Start-Up Company of the Year"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/DdtbdE-1.png"
                        className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-[132px] md:h-20 md:w-[165px]"
                      />
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-4 rounded-xl md:h-28">
                      <img
                        alt="Best Online Casino Operator of the Year"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/CyJNv3PW.png"
                        className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-[132px] md:h-20 md:w-[165px]"
                      />
                    </div>
                    <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-4 rounded-xl md:h-28">
                      <img
                        alt="Best Online Casino Product of the Year"
                        src="https://c.animaapp.com/mndr0fyp9c515x/assets/BwJxXJ9W.png"
                        className="box-border caret-transparent h-16 max-w-full min-h-[auto] min-w-[auto] w-[132px] md:h-20 md:w-[165px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent gap-x-8 flex flex-col min-h-[auto] min-w-[auto] gap-y-8 md:flex-row">
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent mb-3">
                      <p className="text-sm font-bold box-border caret-transparent leading-5">
                        Licenses
                      </p>
                    </div>
                    <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap min-h-fit gap-y-4">
                      <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit rounded-xl">
                        <div className="items-center box-border caret-transparent flex h-24 justify-center min-h-[auto] min-w-[auto] w-24 md:h-28 md:w-28">
                          <a className="text-violet-600 box-border caret-transparent block min-h-[auto] min-w-[auto] underline hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none">
                            <img
                              alt="License Validation - GCB"
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/q257VWDy.svg"
                              className="box-border caret-transparent inline-block h-[57px] max-w-full w-[57px] md:h-[73px] md:w-[73px] hover:text-violet-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                    <div className="box-border caret-transparent mb-3">
                      <p className="text-sm font-bold box-border caret-transparent leading-5">
                        Responsible Gambling
                      </p>
                    </div>
                    <div className="items-center box-border caret-transparent gap-x-4 flex flex-wrap min-h-fit gap-y-4">
                      <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit rounded-xl">
                        <div className="items-center box-border caret-transparent flex h-24 justify-center min-h-[auto] min-w-[auto] w-[132px] pt-[11px] pb-4 px-4 md:h-28 md:w-[126px]">
                          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto]">
                            <p className="text-yellow-500 text-sm font-black box-border caret-transparent tracking-[0.13132px] leading-5 min-h-[auto] min-w-[auto] text-center text-nowrap mb-[2.5px]">
                              Be Legendary
                            </p>
                            <p className="text-xs font-medium box-border caret-transparent tracking-[0.11256px] leading-[14px] min-h-[auto] min-w-[auto] text-center">
                              Know when to
                            </p>
                            <p className="text-xs font-medium box-border caret-transparent tracking-[0.11256px] leading-[13px] min-h-[auto] min-w-[auto] text-center">
                              walk away
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit rounded-xl">
                        <div className="items-center box-border caret-transparent flex h-24 justify-center min-h-[auto] min-w-[auto] w-24 md:h-28 md:w-28">
                          <a
                            href="https://www.gambleaware.org/"
                            className="text-violet-600 box-border caret-transparent block h-16 min-h-[auto] min-w-[auto] underline md:h-20 hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                          >
                            <img
                              alt="Responsible Gambling - GambleAware"
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/C03lf8JF.svg"
                              className="box-border caret-transparent inline-block h-16 max-w-full w-16 md:h-20 md:w-20 hover:text-violet-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit rounded-xl">
                        <div className="items-center box-border caret-transparent flex h-24 justify-center min-h-[auto] min-w-[auto] w-24 md:h-28 md:w-28">
                          <a
                            href="https://www.gambleaware.org/"
                            className="text-violet-600 box-border caret-transparent block h-10 min-h-[auto] min-w-[auto] underline md:h-[50px] hover:text-violet-700 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                          >
                            <img
                              alt="Responsible Gambling - 18Plus"
                              src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-18.svg"
                              className="box-border caret-transparent inline-block h-10 max-w-full w-10 md:h-[50px] md:w-[50px] hover:text-violet-600 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-violet-600 hover:rounded-none hover:border-0 hover:border-none"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border caret-transparent tracking-[normal] min-h-[auto] min-w-[auto]">
                <div className="box-border caret-transparent mb-3">
                  <p className="text-sm font-bold box-border caret-transparent leading-5">
                    Partners
                  </p>
                </div>
                <div className="relative box-border caret-transparent gap-x-4 flex flex-wrap gap-y-4">
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="Skrill"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/DV4H2zSC.png"
                      className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[88px]"
                    />
                  </div>
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="AstroPay"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-19.png"
                      className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[107px]"
                    />
                  </div>
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="Interac"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-20.png"
                      className="box-border caret-transparent h-10 max-w-full min-h-[auto] min-w-[auto] w-[55px]"
                    />
                  </div>
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="Pix"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-21.png"
                      className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[90px]"
                    />
                  </div>
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="WebPayPlus"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-22.png"
                      className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[61px]"
                    />
                  </div>
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="UPI"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-23.png"
                      className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[111px]"
                    />
                  </div>
                  <div className="items-center bg-slate-800 box-border caret-transparent gap-x-1 flex h-24 justify-center min-h-[auto] min-w-[auto] gap-y-1 w-fit p-6 rounded-xl">
                    <img
                      alt="EF"
                      src="https://c.animaapp.com/mndr0fyp9c515x/assets/image-24.png"
                      className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-950 box-border caret-transparent flex justify-center pb-4 px-4 md:pb-6 md:px-6">
            <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-6 w-full z-[1] mx-auto md:gap-x-8 md:gap-y-8">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                <hr className="text-zinc-500 bg-slate-800 box-border caret-transparent h-0.5 mx-auto" />
              </div>
              <div className="box-border caret-transparent gap-x-2 flex flex-col min-h-[auto] min-w-[auto] gap-y-2 md:gap-x-4 md:gap-y-4">
                <img
                  alt="Roobet Logo"
                  src="https://c.animaapp.com/mndr0fyp9c515x/assets/r-NQNxh0.svg"
                  className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[123px]"
                />
                <span className="text-slate-400 text-xs box-border caret-transparent block tracking-[normal] leading-4 min-h-[auto] min-w-[auto]">
                  Roobet.com is a brand name of Raw Entertainment B.V, Reg No
                  157205, having its registered address at Korporaalweg 10,
                  Curacao, licensed to conduct online gaming operations by the
                  Government of Curacao under license OGL/2024/687/0427. Raw
                  Entertainment Ltd, Reg No HE421735, having its registered
                  address at Voukourestiou, 25, Neptune House, 1st Floor,
                  Flat/Office11, Zakaki, 3045, Limassol, Cyprus is a company of
                  the Roobet group that acts as a paying and operational agent
                  on behalf of Raw Entertainment B.V. 18+ to play.
                </span>
              </div>
            </div>
          </div>
          <div className="relative bg-slate-950 box-border caret-transparent flex justify-center pb-6 px-4 md:pb-8 md:px-6"></div>
        </div>
        <Sidebar />
      </div>
      <div className="box-border caret-transparent flex grow flex-wrap min-w-0 md:grow-0 md:min-w-72"></div>
      <div className="box-border caret-transparent hidden"></div>
      <iframe
        src="/~partytown/partytown-sandbox-sw.html?1774904806460"
        className="box-border caret-transparent h-0 align-baseline invisible w-0"
      ></iframe>
      <img
        src="https://c.animaapp.com/mndr0fyp9c515x/assets/157.gif"
        className="aspect-[auto_1_/_1] box-border caret-transparent hidden h-px align-baseline w-px"
      />
      <button className="fixed text-black text-[13.3333px] bg-transparent caret-transparent flex h-[35px] tracking-[normal] leading-[normal] text-center w-[72px] z-[200] p-0 -top-full font-arial hover:text-neutral-900 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:rounded-none hover:border-0 hover:border-none hover:border-black">
        <div className="text-slate-500 text-sm items-center bg-white shadow-[rgba(34,34,34,0.1)_0px_8px_20px_0px] box-border caret-transparent flex h-[35px] justify-around min-h-[auto] min-w-[auto] w-[72px] rounded-lg">
          <div className="box-border caret-transparent flex justify-evenly min-h-[auto] min-w-[auto] text-nowrap w-[70px] px-px py-[9px] rounded-md hover:text-slate-500 hover:bg-slate-100 hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:no-underline hover:decoration-solid hover:decoration-auto hover:border-slate-500 hover:rounded-md hover:border-0 hover:border-none">
            <img
              src="https://c.animaapp.com/mndr0fyp9c515x/assets/icon-71.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 text-nowrap align-baseline w-4"
            />
            Edit
          </div>
        </div>
      </button>
      <iframe
        src="https://insight.adsrvr.org/track/cei?advertiser_id=fghhxvu&cookie_sync=1&upv=3.0.0&upid=m5796bt&ref=https://roobet.com/"
        title="TTD Universal Pixel"
        className="box-border caret-transparent hidden h-0 align-baseline w-0"
      ></iframe>
      <div className="fixed box-border caret-transparent h-0 w-0 z-[2147483001] font-system_ui"></div>
    </body>
  );
};
