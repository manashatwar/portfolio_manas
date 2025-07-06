import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

export default function NeonName() {
  useEffect(() => {
    // Dynamically import SplitText for SSR compatibility
    let split, split2;
    let chars;
    let flickerTimeout: ReturnType<typeof setTimeout> | undefined;
    let isMounted = true;

    import("gsap/SplitText").then(({ SplitText }) => {
      gsap.registerPlugin(SplitText);
      split = new SplitText("#main-neon", { type: "chars", charsClass: "char++" });
      chars = split.chars;
      split2 = new SplitText("#reflection-neon", { type: "chars", charsClass: "char++" });

      function flickerChar() {
        if (!isMounted) return;
        const randomChar = `.char${Math.floor(Math.random() * chars.length) + 1}`;
        gsap.to(randomChar, {
          opacity: 0.1,
          duration: 0.05,
          yoyo: true,
          repeat: 3,
          onComplete: function () {
            flickerTimeout = setTimeout(flickerChar, 2000 + Math.random() * 1000);
          }
        });
      }
      flickerChar();

      gsap.to("#main-neon", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
      });
      gsap.to("#reflection-neon", {
        y: 40,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut"
      });
    });
    return () => {
      isMounted = false;
      if (flickerTimeout) clearTimeout(flickerTimeout);
    };
  }, []);

  return (
    <div className="neon-container">
      <h1 id="main-neon">Manas Hatwar</h1>
      <h1 id="reflection-neon">Manas Hatwar</h1>
    </div>
  );
}
