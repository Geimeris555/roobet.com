import { RegisterForm } from "@/components/forms/RegisterForm";

export const HeroBanner = () => {
  return (
    <div className="bg-slate-800 box-border caret-transparent grid grid-cols-[1fr] grid-rows-[1fr] h-auto max-w-[1200px] min-h-[auto] min-w-[auto] w-full overflow-hidden rounded-xl md:grid-cols-[1fr_auto] md:h-[260px]">
      <img
        src="https://c.animaapp.com/mndr0fyp9c515x/assets/CcBLqI9l.png"
        className="box-border caret-transparent h-[188px] max-w-full min-h-[auto] min-w-[auto] object-cover w-[768px] md:h-[260px] md:w-[793px]"
      />
      <div className="items-center box-border caret-transparent gap-x-4 flex flex-col min-h-[auto] min-w-[auto] gap-y-4 px-3 py-4 md:min-w-[407px] md:p-6">
        <RegisterForm variant="welcome" />
        <RegisterForm variant="registerButton" />
        <RegisterForm variant="socialLogin" />
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
  );
};
