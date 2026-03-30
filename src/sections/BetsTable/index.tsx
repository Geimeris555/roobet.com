import { BetsTableRow } from "@/sections/BetsTable/components/BetsTableRow";

export const BetsTable = () => {
  return (
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
                            <BetsTableRow
                              gameHref="/casino/game/hacksaw:1946"
                              gameAlt="hacksaw"
                              gameImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:1946-kQ402prZc.jpeg"
                              gameName="Jaws of Justice"
                              userImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-14.png"
                              userLabel="Hidden"
                              time="9:07 PM"
                              betAmount="$1,050.00"
                              cryptoAlt="crypto"
                              cryptoImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                              multiplier="4.17x"
                              multiplierClass="md:text-lime-500"
                              payout="$4,375.00"
                              payoutClass="md:text-lime-500"
                            />
                            <BetsTableRow
                              gameHref="/casino/game/blackjack"
                              gameAlt="blackjack"
                              gameImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:blackjack-H4SSRgE2t-1.jpeg"
                              gameName="Blackjack"
                              userImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/D-R-nRxi.png"
                              userLabel="Hidden"
                              time="9:07 PM"
                              betAmount="$100.00"
                              cryptoAlt="sol"
                              cryptoImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-16.svg"
                              multiplier="0.00x"
                              multiplierClass="md:text-slate-500"
                              payout="$0.00"
                              payoutClass="md:text-slate-500"
                            />
                            <BetsTableRow
                              gameHref="/casino/game/hacksaw:2057"
                              gameAlt="hacksaw"
                              gameImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:2057-h4wCzWjm5.jpeg"
                              gameName="Le Fisherman"
                              userImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/CSiML-CW.png"
                              userLabel="Hidden"
                              time="9:07 PM"
                              betAmount="$105.00"
                              cryptoAlt="crypto"
                              cryptoImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                              multiplier="0.00x"
                              multiplierClass="md:text-slate-500"
                              payout="$0.00"
                              payoutClass="md:text-slate-500"
                            />
                            <BetsTableRow
                              gameHref="/casino/game/hacksaw:1562"
                              gameAlt="hacksaw"
                              gameImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw:1562-y8ApFpB0N.jpeg"
                              gameName="Le Pharaoh"
                              userImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-14.png"
                              userLabel="Hidden"
                              time="9:07 PM"
                              betAmount="$1,050.00"
                              cryptoAlt="crypto"
                              cryptoImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                              multiplier="0.00x"
                              multiplierClass="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                              payout="$0.00"
                              payoutClass="text-black caret-black md:text-slate-500 md:aspect-auto md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]"
                            />
                            <BetsTableRow
                              gameHref="/casino/game/hacksaw:1396"
                              gameAlt="hacksaw"
                              gameImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/hacksaw_1396.jpg"
                              gameName="Xmas Drop"
                              userImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-14.png"
                              userLabel="Hidden"
                              time="9:07 PM"
                              betAmount="$1,050.00"
                              cryptoAlt="crypto"
                              cryptoImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-15.svg"
                              multiplier="0.00x"
                              multiplierClass="md:text-slate-500"
                              payout="$0.00"
                              payoutClass="md:text-slate-500"
                            />
                            <BetsTableRow
                              gameHref="/casino/game/blackjack"
                              gameAlt="blackjack"
                              gameImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/housegames:blackjack-H4SSRgE2t-1.jpeg"
                              gameName="Blackjack"
                              userImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/Cz0id5eX.png"
                              userLabel="Hidden"
                              time="9:06 PM"
                              betAmount="$44.00"
                              cryptoAlt="sol"
                              cryptoImageSrc="https://c.animaapp.com/mndr0fyp9c515x/assets/image-16.svg"
                            />
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
                  Roobet brings together everything players look for in a modern
                  crypto casino and crypto sportsbook: quick crypto
                  transactions, sleek design, and a betting platform that
                  actually feels fun to use. Built on blockchain technology,
                  Roobet leans into provably fair mechanics, low house edge
                  games, and transparent rules so you always know what you’re
                  signing up for when you place a bet. From casino spins to
                  sportsbook betting, the site layers in smart features like
                  instant payouts, flexible limits, and a gamified interface
                  that keeps the experience feeling innovative instead of
                  generic.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  As one of the longest-running brands in crypto gambling,
                  Roobet has grown a global audience that hops between slots,
                  Originals, and live matches on the same balance. You get a
                  full-service crypto casino with thousands of titles plus a
                  crypto sportsbook that covers everything from football and
                  basketball to esports, all backed by fast transactions and
                  familiar crypto coins.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Why Choose Roobet for Crypto Gaming and Sports Betting?
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  When you land on the Roobet official website, you immediately
                  notice the focus on safe and straightforward crypto gambling
                  rather than clutter or confusion. Roobet has been live since
                  2019, and in that time, it has processed millions of wagers
                  and pushed past the 10 billion bet mark, building a worldwide
                  player base that values reliability and a smooth experience
                  across casino and sports.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Instead of behaving like a faceless brand, Roobet leans into
                  an interactive community feel, with chat, promos, and events
                  that keep regulars coming back. You can treat it as your main
                  hub for slots, crash games, and sportsbook markets, knowing
                  the same account and wallet will work across every section.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Licensed and Trusted by the Curacao Government
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet is fully licensed and operates under an online gaming
                  license issued by the Government of Curacao, giving the casino
                  and sportsbook legal legitimacy and clear oversight. The
                  operating company (Raw Entertainment B.V.) holds a gaming
                  license recognized by the Curacao government, which requires
                  ongoing regulatory transparency, player protection, and
                  responsible gaming protocols.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  On top of that legal framework, Roobet supports multiple
                  languages and runs a provably fair system for its Originals,
                  making outcomes verifiable through cryptographic proofs rather
                  than blind trust. This combination of audited RNG, clear
                  terms, and ethical standards creates a trustworthy environment
                  where you can focus on playing instead of worrying what’s
                  happening behind the scenes.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Regulation, Security, and Anonymity in Crypto Gaming
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet tries to strike a careful balance between anonymity and
                  safety by using blockchain payments while still following
                  strict regulation and compliance rules. On the surface, the
                  website uses modern security like HTTPs encryption, device
                  checks, and account protections so that every user session
                  stays safe and private.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Behind the scenes, Roobet follows Anti-Money Laundering
                  standards and full compliance procedures, including
                  verification steps and identification checks under Know Your
                  Customer (KYC) rules when needed. You might be asked for an
                  identity document during account review or before larger
                  withdrawals; while that limits pure anonymity, it reinforces
                  trust, supports Roobet’s reputation, and keeps the operation
                  aligned with its Curacao gaming license and regular audits.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Fast and Easy Crypto and Fiat Payments
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet supports both crypto and selected traditional
                  currencies so deposits and withdrawals feel quick and
                  predictable rather than slow and mysterious. You can fund your
                  account with major coins like Bitcoin (BTC), Ethereum (ETH),
                  Tether (USDT), Dogecoin (DOGE), Litecoin (LTC), Ripple (XRP),
                  and USD Coin (USDC), then cash out using the same currencies
                  with short blockchain confirmation times.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  The Cashier is laid out in a simple tabbed format for Deposit,
                  Withdraw, and Buy Crypto, and clearly shows limits, any
                  network fees, and estimated processing speed. Compared to many
                  legacy sites, the mix of instant or near-instant payouts and
                  low crypto transfer fees feels like a genuine USP for both
                  crypto casino and sportsbook fans.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Extensive Game Library
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet’s casino selection is one of its biggest hooks, with
                  more than 7,000 games available across casino games like
                  slots, crash titles, instant wins, and full-featured live
                  dealer tables. You can access games from leading software
                  providers such as Pragmatic Play, Evolution, Play’n GO,
                  Hacksaw Gaming, and more, and many of them show a live RTP
                  panel so you can gauge performance over time rather than
                  guessing.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Players can play in fun mode on certain titles to test
                  mechanics, then flip to real money wagers once they’re
                  comfortable. Alongside regular promotions and bonuses,
                  Roobet’s layout also keeps mobile gambling front and center,
                  so the same catalogue works seamlessly whether you’re on
                  desktop or playing from your phone.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Competitive Odds and Live Betting
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  On the sports side, Roobet leans into its position as an
                  online crypto sportsbook with global and international
                  coverage of leagues, tournaments, and one-off events. You’ll
                  find sharp sports odds and deep sports betting menus, with
                  competitive odds, betting markets for spreads, totals, props,
                  and a strong live betting lineup that updates with real-time
                  odds.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  In-play options pair with occasional promotions and boosted
                  lines, while fast blockchain transactions help wins hit your
                  balance quickly. The interface is fully mobile-ready and tuned
                  for mobile phone screens and iOS devices, so you can track
                  livestreams, tweak multis, and confirm bets with just a few
                  taps.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Official Partnerships and Brand Ambassadors
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Over the years, Roobet has leaned into big-name entertainment
                  and sports collaborations to signal that it’s not some
                  throwaway brand. The roster of official partners and brand
                  ambassadors includes global champions such as Chelsea F.C. in
                  the Premier League, UFC legend Charles Oliveira, and leading
                  esports organizations like 100 Thieves, alongside whom they
                  recently created the 100 Thieves x Roobet team.
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  These partnerships translate into themed campaigns, special
                  odds boosts, and unique content drops around key matches and
                  fight nights. For players, it’s a simple proof point that
                  Roobet is willing to invest in communities they already
                  follow, from UFC pay-per-views to top-flight football
                  fixtures.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    User Experience and Navigation
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet leans heavily into mobile-first design so the user
                  experience feels consistent across desktop, Android, and iOS.
                  The responsive platform adapts quickly as you browse, with
                  fast-loading pages, clear lobby filters, and quick shortcuts
                  into casino or sportsbook navigation menus.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  This focus on accessibility means you can jump from live
                  dealer tables to pre-match coupons without digging through
                  endless menus. Whether you’re on a laptop or a phone, the
                  combination of simple UX and straightforward icons keeps
                  mobile gambling surprisingly frictionless.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    The Roobet Community and Rewards
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet’s Roobettors lean into the brand’s social side as much
                  as its games, with chat, leaderboards, and regular community
                  events. The community picks up on new features quickly, and
                  Roobet supports them with a mix of daily and weekly
                  promotions, mission-style challenges, and occasional social
                  activations on streaming and social channels.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Long-term loyalty is rewarded through layered rewards,
                  including rakeback, cashback, and VIP perks for high-volume
                  players. The net result is a platform that feels alive rather
                  than static, where frequent play unlocks tangible benefits
                  instead of just cosmetic badges.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Best Crypto Casino
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Among crypto-focused sites, Roobet regularly appears in
                  rankings as a best crypto casino option thanks to its scale
                  and transparency. You get over 7,000 games across slots,
                  crash, tables, and live dealer rooms, plus dedicated
                  categories for{" "}
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
                  Roobet’s catalogue leans into high RTP titles and low house
                  edge formats, backed by provably fair tech on its Originals,
                  so you can double-check that results haven’t been tampered
                  with. The in-house “Roobet Originals” section sits alongside
                  familiar networks and makes the lobby feel curated rather than
                  just stuffed with random imports.​
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
                  tab hosts Roobet’s own Originals, designed specifically for
                  crypto-native play. Titles like Mission Uncrossable, Roobet
                  Keno, and Roobet CoinFlip are exclusive to the platform,
                  combining simple rules with punchy volatility that Roobettors
                  and the wider community have gravitated toward.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Every Original runs on provably fair logic, letting you verify
                  outcomes after each round rather than just trusting the UI.
                  These games tend to be some of the most popular picks for
                  users who want transparent risk profiles and fast-paced
                  sessions that work well on mobile.​
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
                  providers. You’ll find every imaginable theme plus formats
                  like megaways, high-volatility grids, and classic
                  three-reelers, each packed with bonus features, progressive
                  jackpots, and optional{" "}
                  <a
                    href="/casino/category/bonus-buys"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    bonus buy
                  </a>
                  rounds.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Players can test mechanics in demo mode or jump straight into
                  real money spins on well-known titles such as Sweet Bonanza,
                  Gates of Olympus, The Great Chicken Escape, and Roobet’s
                  exclusive slots like RIP City Roobet or Mad Muertos. Many of
                  these games list high RTP values and high multipliers, which
                  makes them particularly appealing to crypto users who track
                  edge closely.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Classic Table Games
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet’s table section keeps the bitcoin casino feeling
                  complete with a mix of traditional table games powered by RNG
                  engines and live dealers.​
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
                    : Simple rules, quick rounds, and a familiar pacing make
                    baccarat a natural bridge between slots and the blackjack
                    game crowd.
                  </li>
                  <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                    <em className="italic box-border caret-transparent">
                      Blackjack
                    </em>
                    : Fans of classic blackjack get access to both standard
                    tables and edge-friendly side bets, with flexible limits for
                    casual or more serious players.​
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
                    : Crypto regulars can dive into dice games, with options to{" "}
                    <a
                      href="/casino/game/evolution-craps"
                      className="box-border caret-transparent hover:text-slate-400 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-slate-400 hover:rounded-none hover:border-0 hover:border-none"
                    >
                      play Craps
                    </a>
                    or try alternatives like Sic Bo for a different dice-driven
                    flow.
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
                  area recreates a studio-style environment with more than 500
                  different rooms from providers like Evolution Gaming and
                  Pragmatic Play. You enter a central lobby and jump into live
                  dealer games such as blackjack, roulette, baccarat, and shows,
                  with Roobet’s own{" "}
                  <a
                    href="/casino/category/roos-live-lounge"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    Roo&#39;s Live Lounge
                  </a>
                  offering access to customized tables and branding.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Streams are tuned for flexible betting options, higher RTPs in
                  some formats, and low-latency connections so the action stays
                  synced to your screen. Professional hosts and native dealers
                  help bring some of the brick-and-mortar vibe to your browser,
                  and curated{" "}
                  <a
                    href="/casino/category/live-casino-picks"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    live casino picks
                  </a>
                  make it easy to find standout rooms quickly.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Live Blackjack</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Within the{" "}
                  <a
                    href="/casino/category/live-blackjack"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    live blackjack
                  </a>
                  section, you’ll find tables that blend familiar blackjack
                  gameplay with side bets and varied limits. This setup appeals
                  to both new players and crypto high rollers who enjoy reading
                  hands and making fast decisions with real-time dealer
                  interaction.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Live Baccarat</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  The{" "}
                  <a
                    href="/casino/category/live-baccarat"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    live baccarat
                  </a>
                  lobby focuses on streamlined, easy-to-follow hands with low
                  and mid-stakes tables plus faster variants for volume players.
                  It’s a natural option for anyone who wants a simple ruleset
                  and steady tempo with crypto wagers.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Live Roulette</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet’s{" "}
                  <a
                    href="/casino/category/live-roulette"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    live roulette
                  </a>
                  streams deliver the classic spin-and-win rhythm with live
                  wheels and instant bet settlement via blockchain payouts.
                  Multiple camera angles and different table layouts keep
                  sessions varied without overcomplicating the experience.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Game Shows</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  In the{" "}
                  <a
                    href="/casino/category/gameshows"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    casino game shows
                  </a>
                  section, you’ll see titles like Crazy Time and Monopoly Live
                  push a more spectacle-driven style of play. These shows mix
                  chance, animations, and presenter-led segments, while Roobet
                  maintains provably fair or audited outcomes, smooth camera
                  transitions, and easy lobby navigation to keep the experience
                  approachable.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Speed Tables</b>
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
                  resolve quickly, bets lock in faster, and the streaming stack
                  is tuned to minimize lag so the pace matches the name.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">High Stakes</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  For high-volume users, Roobet runs{" "}
                  <a
                    href="/casino/category/live-highstakes"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    high-stakes
                  </a>
                  lobbies with tailored betting limits, private or semi-private
                  layouts, and a clear high roller focus. High-definition
                  streams and priority support pair with instant crypto
                  transactions to keep big sessions running smoothly.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Best Crypto Sportsbook
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  On the sports side, Roobet positions itself as the best crypto
                  sportsbook for bettors who want deep markets and a clean UX
                  rather than just novelty. The{" "}
                  <a
                    href="/sports"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    sports betting
                  </a>
                  hub supports crypto betting with features like live betting,
                  occasional live streaming, multiple odds formats, and tools
                  such as a live match tracker, Quick Bet, and an intuitive
                  Betslip.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  You can browse betting markets and options across dozens of
                  tournaments, teams, and leagues, then use the Event Bet
                  Builder to assemble custom multis. All of this runs on the
                  same wallet, so you don’t have to shuffle balances between
                  casino and sportsbook every time you switch.​
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
                  across top matches, outrights, and futures on competitions
                  like the Premier League, UEFA Champions League, LALIGA, Serie
                  A, Bundesliga, and FIFA tournaments. Roobet’s active link-up
                  with Chelsea F.C. helps underline its commitment to major
                  European markets rather than only niche leagues.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Basketball</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  The{" "}
                  <a
                    href="/sports/basketball-2"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    bet on basketball
                  </a>
                  section covers NBA, EuroLeague, NCAA, the FIBA World Cup, and
                  EuroCup, with competitive lines on spreads, totals, and player
                  props. Live promos often revolve around big nights on the
                  hardwood, giving bettors added reasons to track games in real
                  time.​
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
                  across NFL fixtures, NCAA games, and futures tied to the NFL
                  Draft. Bettors can mix pre-game outrights with live bets as
                  drives unfold, all using crypto balances.​
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
                  flexible markets on moneylines, rounds, and method-of-victory
                  outcomes. Roobet’s partnerships with UFC stars and
                  crypto-themed fight promos add extra flavor around UFC Fight
                  Nights, UFC Series cards, Oktagon events, and KSW shows.​
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
                  Baseball (NPB), and the World Baseball Classic. Run lines,
                  totals, and long-term outrights are all available for crypto
                  bettors who follow the diamond.​
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
                  menu, you’ll find markets on Wimbledon, the US Open, French
                  Open, Australian Open, and ongoing ATP and WTA tours. Bettors
                  can track scores and use the Event Bet Builder to create
                  custom slips across multiple matches.​
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
                  niche, covering CS2, Dota 2, League of Legends, Valorant, and
                  more. You can follow{" "}
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
                  rather than traditional bettors. Roobet even hosted the Roobet
                  Cup in 2022, underlining its commitment to the esports scene.​
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
                  coverage on the Indian Premier League (IPL), ICC World Cup,
                  Big Bash League, The Ashes, and the T20 World Cup. You’ll see
                  markets for totals, player props, and innings results, again
                  with crypto-based settlement. ​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Other Sports</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Beyond the headline categories, Roobet’s bitcoin sportsbook
                  also lists ice hockey (including NHL), golf, horse racing,
                  motorsports, virtual sports like eSoccer, and plenty more.
                  Navigation makes it easy to jump between sports and find
                  specials, including crypto betting promos like Combi Boost and
                  VIP-only odds boosts for higher-stakes users.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Easy and Ultra-Fast Crypto Deposits and Withdrawals
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet focuses heavily on keeping banking fast, predictable,
                  and transparent so you don’t get stuck waiting. Deposits run
                  through the Cashier with clear tabs for Deposit, Buy,
                  Withdraw, and even Tip functions, while withdrawals lean on
                  the same layout to simplify the flow.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  For larger cash-outs, the team may request verified identity
                  checks as part of its KYC and AML commitments, but these
                  processes are framed around regulatory safety and long-term
                  trust rather than unnecessary friction.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    How to Fund Your Roobet Account
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  If you’re wondering how to deposit money on Roobet, the flow
                  is built to work for both crypto newcomers and experienced
                  users. The goal is a clear, repeatable process that makes your
                  Roobet Wallet feel like the central hub for all gaming and
                  betting balances.​
                </p>
                <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  Retrieve Your Deposit Address
                </h1>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  First, log into your Roobet account and head to the Wallet
                  section. From there, you’ll generate a unique deposit address,
                  displayed as a string of characters (both numbers and letters)
                  that’s unique to your account and marked as safe and secure
                  for incoming transfers.​
                </p>
                <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  Choose Your Cryptocurrency
                </h1>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Next, pick from a variety of payment methods and supported
                  cryptocurrencies. Roobet currently supports: Bitcoin (BTC),
                  Ethereum (ETH), Tether (USDT), Dogecoin (DOGE), USD Coin
                  (USDC), Ripple (XRP), Litecoin (LTC), and more, with networks
                  added over time as demand grows.​
                </p>
                <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  Transfer Funds
                </h1>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  You then send funds from your preferred wallet or crypto
                  exchange wallets (including options like Exodus, Coinbase, or
                  other Blockchain-compatible services) to your Roobet deposit
                  address. Double-checking addresses and networks before
                  confirming the send is the best way to avoid mistakes, and
                  Roobet’s help articles walk through examples step by step.​
                </p>
                <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  Optional Fiat Option
                </h1>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  If you’re new to crypto, Roobet also supports traditional
                  currencies via fiat payment methods, including credit/debit
                  cards and bank transfers, routed through regulated processors.
                  These flows perform fiat-to-crypto conversion in the
                  background and deposit to your Roobet deposit address, giving
                  you built-in convenience without juggling extra apps.​
                </p>
                <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  Buy Crypto Directly on Roobet
                </h1>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Within the Cashier, the Buy Crypto tab on the Deposit page
                  lets you complete an on-site crypto purchase without visiting
                  an external exchange. For many players, this “all-in-one”
                  approach makes Roobet feel like a full-stack crypto casino
                  where you can buy, deposit, and play in a single flow.​
                </p>
                <h1 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  Confirmation and Availability
                </h1>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Once sent, deposits wait for the appropriate blockchain
                  confirmation time depending on the network, and you might see
                  different crypto transfer fees for BTC vs. faster chains.
                  After validation, the reflection time is usually short, and
                  your balance appears in the Roobet wallet section of your
                  account, ready for casino or sportsbook use.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    How to Withdraw from Roobet
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  If you’re asking how to withdraw money from Roobet, the steps
                  mirror deposits: choose coin, enter address, and confirm the
                  withdrawal process. Processed requests get pushed to the
                  blockchain quickly, often feeling like an instant payout once
                  Roobet completes any required KYC verification checks on your
                  profile.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Clear withdrawal limits and published timeframes help set
                  expectations so you’re not left wondering when funds will show
                  in your wallet. Combined with Roobet’s Curacao license and AML
                  program, this structure reinforces that payouts are handled
                  inside a regulated environment.​
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
                  double-check details via support, the help center, or FAQs if
                  anything feels unclear.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Cashback systems, rakeback, and on-chain rewards are central
                  to the value proposition, often paying out directly in crypto
                  rather than locked bonus credits. Casino spins, sportsbook
                  boosts, and multipliers are all rolled into a unified
                  framework so both sides of the site feel supported.​
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
                  is Roobet’s invite-only top tier, designed around loyalty and
                  long-term membership rather than one-off boosters. Members get
                  access to exclusive offers, private events, and tailored
                  benefits that sit on top of the public promo schedule.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Outside of VIP, general{" "}
                  <a
                    href="/rewards"
                    className="text-sm font-bold box-border caret-transparent leading-5 md:text-base md:leading-6 hover:text-violet-200 hover:bg-transparent hover:shadow-none hover:outline-offset-0 hover:outline-0 hover:underline hover:decoration-solid hover:decoration-auto hover:border-violet-200 hover:rounded-none hover:border-0 hover:border-none"
                  >
                    rewards
                  </a>
                  include ongoing rakeback, weekly and monthly bonuses, and
                  vault-style mechanics that let you unlock extra value over a
                  fixed period. The net effect is that consistent play gradually
                  levels up your account experience, not just your balance.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Join the Roobet Community Today
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  If you’re wondering how to set up a Roobet account, the
                  process is intentionally straightforward and works from both
                  desktop and mobile. You choose your credentials, accept the
                  terms, and move through any early verification prompts so you
                  can start exploring the lobby quickly.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">Roobet Login</b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Once registered, the Roobet login page lets you access your
                  profile via desktop browser, iOS, or Android devices using the
                  same email and password combo (or supported socials). You can
                  secure that login further with extra safety features such as
                  two-factor authentication (2FA) in your account settings.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Register an Account
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  If you’re still at square one and want to know how to sign up
                  for Roobet, you’ll create an account with your email,
                  password, and region, then accept the user agreement. In some
                  markets, you can also link supported social accounts, which
                  speeds up onboarding and device syncing.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Account Verification
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Roobet applies Know Your Customer (KYC) standards and identity
                  checks in line with its Curacao license and AML policies. At
                  certain thresholds, you may be asked to upload ID, proof of
                  address, or other details so the compliance team can validate
                  activity and keep the platform secure.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Security and Privacy
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  On top of 2FA, Roobet uses modern encryption, infrastructure
                  protections, and well-documented privacy practices to
                  safeguard user data. You can tweak device logins, session
                  controls, and notifications to keep tighter control over who
                  accesses your account and when.​
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
                  across both casino and sportsbook, not just as a checkbox but
                  as a set of practical tools. Under the “Roo Responsibility”
                  approach, players can set deposit limits, lock in cool-off
                  periods, or self-exclude if they need a break.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Educational content and signposting to external support
                  services are also present in the help center so players can
                  read up on safer habits and recognize early warning signs.​
                </p>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    24/7 Live Support and Player Assistance
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Support runs around the clock so you’re not left guessing if
                  something goes wrong.​
                </p>
                <ul className="box-border caret-transparent min-h-[auto] min-w-[auto] mb-2 pl-4">
                  <li className="text-slate-400 font-bold box-border caret-transparent tracking-[normal]">
                    Live Chat support: Always-on chat sits inside the platform
                    and connects you with agents for immediate help on deposits,
                    withdrawals, or gameplay questions.​
                  </li>
                  <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                    Email support: For more complex issues, email channels
                    handle longer threads and attachments.
                  </li>
                  <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                    Help Center Knowledge Base: Roobet’s help site covers topics
                    like crypto deposits, withdrawals, verification, and
                    technical troubleshooting in article form.​
                  </li>
                  <li className="text-slate-400 font-bold box-border caret-transparent gap-x-1 tracking-[normal] gap-y-1">
                    Community and Social channels: Active social feeds and
                    community spaces share announcements, promos, and occasional
                    troubleshooting tips from other players.
                  </li>
                </ul>
                <h2 className="text-violet-200 text-[56px] font-bold box-border caret-transparent tracking-[normal] leading-[64px] min-h-[auto] min-w-[auto]">
                  <b className="box-border caret-transparent">
                    Start Your Adventure at Roobet Crypto Casino and Crypto
                    Sportsbook
                  </b>
                </h2>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  If you’re ready to explore a combined crypto casino and crypto
                  sportsbook built around fast banking, deep markets, and a
                  modern interface, Roobet is set up for that. You can create an
                  account, top up with crypto or fiat, and start playing in
                  minutes, backed by the same security, licensing, and
                  responsible gambling framework that underpins every spin and
                  bet.​
                </p>
                <p className="text-violet-200 text-sm font-medium box-border caret-transparent tracking-[normal] leading-5 min-h-[auto] min-w-[auto] mb-2 md:text-base md:leading-6">
                  Whether you gravitate toward high-RTP slots, live dealer
                  rooms, or big-match betting slips, Roobet’s mix of instant
                  crypto deposits and withdrawals, broad game options,
                  competitive sports odds, and strong data protection makes it a
                  compelling place to play—as long as you keep things fun and
                  stay within your limits.
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
  );
};
