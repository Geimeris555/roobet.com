export type FooterLegalProps = {
  variant: string;
};

export const FooterLegal = (props: FooterLegalProps) => {
  if (props.variant === "legal-text") {
    return (
      <div className="relative bg-slate-950 box-border caret-transparent flex justify-center px-4 md:px-6 pb-4 md:pb-6">
        <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-6 w-full z-[1] mx-auto md:gap-x-8 md:gap-y-8">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <hr className="text-zinc-500 bg-slate-800 box-border caret-transparent h-0.5 mx-auto" />
          </div>
          <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4">
            <img
              alt="Roobet Logo"
              src="https://c.animaapp.com/mndr0fyp9c515x/assets/r-NQNxh0.svg"
              className="box-border caret-transparent h-8 max-w-full min-h-[auto] min-w-[auto] w-[123px]"
            />
            <span className="text-slate-400 text-xs box-border caret-transparent block tracking-[normal] leading-4 min-h-[auto] min-w-[auto]">
              Roobet.com is a brand name of Raw Entertainment B.V, Reg No
              157205, having its registered address at Korporaalweg 10, Curacao,
              licensed to conduct online gaming operations by the Government of
              Curacao under license OGL/2024/687/0427. Raw Entertainment Ltd,
              Reg No HE421735, having its registered address at Voukourestiou,
              25, Neptune House, 1st Floor, Flat/Office11, Zakaki, 3045,
              Limassol, Cyprus is a company of the Roobet group that acts as a
              paying and operational agent on behalf of Raw Entertainment B.V.
              18+ to play.
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-950 box-border caret-transparent flex justify-center px-4 md:px-6 pb-6 md:pb-8">
      <div className="box-border caret-transparent gap-x-6 flex flex-col max-w-[1200px] min-h-[auto] min-w-[auto] gap-y-6 w-full z-[1] mx-auto md:gap-x-8 md:gap-y-8">
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
          <hr className="text-zinc-500 bg-slate-800 box-border caret-transparent h-0.5 mx-auto" />
        </div>
        <div className="box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-10">
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
  );
};
