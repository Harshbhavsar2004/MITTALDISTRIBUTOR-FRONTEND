import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RequestQuoteForm from "./RequestQuoteForm";

function RequestQuote() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 });
  }, []);

  return (
    <div className="flex flex-col m-20 rounded-none transition-colors duration-300">
      <div className="pt-8 pr-6 pl-16 w-full bg-blue-950 rounded-[30px] max-md:px-4 max-md:max-w-full">
        <div className="flex gap-4 max-md:flex-col">
          <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start mt-8 font-bold max-md:mt-8 max-md:max-w-full" ref={textRef}>
              <div className="text-base tracking-widest text-red-600 uppercase">
                Request A Quote
              </div>
              <div className="flex shrink-0 mt-3 h-0.5 bg-red-600 w-[70px]" />
              <div className="mt-3 text-3xl text-white w-[350px] max-md:max-w-full">
                talk about how we can help you reduce your energy
              </div>
              <div className="self-stretch mt-4 text-md leading-7 text-white max-md:max-w-full">
                costs and successfully manage your carbon emissions with
                investment free solar technologies.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-4 w-7/12 max-md:ml-0 max-md:w-full">
            <RequestQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestQuote;
