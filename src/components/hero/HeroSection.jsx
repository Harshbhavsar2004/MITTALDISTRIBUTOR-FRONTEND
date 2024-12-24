import * as React from "react";
import { CallToActionButton } from "./CallToActionButton";
import BackgroundImage from "/videoplayback.mp4";
import FloatingMenu from "./sidesection";
import Navbar from "../navigation/navbar";
import { WhyChooseUs } from "../whyChooseUs/WhyChooseUs";
import { Footer } from "../footer/Footer";
import TestimonialSection from "@/pages/swiper/SwiperPage";
import ConsultationForm from "../calculator/calculator";
const HERO_BUTTONS = [
  {
    text: "Call Us Today",
    variant: "primary",
    className: "text-white bg-[#17195A]",
  },
];

export function HeroSection() {
  return (
    <div>
      <Navbar />
      <div className="relative flex items-end px-10 pb-10 w-full h-screen max-md:px-5 max-md:pb-6">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
        >
          <source src={BackgroundImage} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Bottom Left Content */}
        <div className="flex flex-col text-left gap-4 text-white" style={{ marginBottom: '50px' }}>
          <h1 className="text-2xl font-semibold leading-tight tracking-wide max-w-[500px] max-md:text-3xl">
            BRINGING A NEW DAWN FROM NATURAL RESOURCES TO NATURAL ENERGY
          </h1>
          <div className="text-sm tracking-wider">
            {HERO_BUTTONS.map((button, index) => (
              <a href="/contact" key={index}>
                <CallToActionButton key={index} {...button} />
              </a>
            ))}
          </div>
          <FloatingMenu />
        </div>
      </div>
      <WhyChooseUs/>
      <ConsultationForm/>
      <div
        role="separator"
        aria-hidden="true"
        className="mt-14 w-full max-md:mt-10 max-md:max-w-full"
      ></div>
      <TestimonialSection/>
      <Footer/>
    </div>
  );
}
