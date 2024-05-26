import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ title }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    const animation = gsap.fromTo(
      textElement,
      { x: "-100%" },
      {
        x: window.innerWidth <= 768 ? "0%" : "100%",
        ease: "none",
        duration: 0.8,
        scrollTrigger: {
          trigger: textElement,
          start: "top center",
          end: "bottom top",
          scrub: "none",
          markers: false,
        },
      }
    );

    return () => {
      animation?.kill();
      ScrollTrigger.getById(textElement)?.kill();
    };
  }, []);

  return (
    <div className="position-relative py-5" style={{ overflowX: "hidden" }}>
      <div
        className="text-element position-relative"
        ref={textRef}
        style={{ whiteSpace: "nowrap", transform: "translateX(0)" }}
      >
        {title}
      </div>

      <div className="text-center heading pb-5">
        <h2 className="text-white">{title}</h2>
        <div className="line">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
