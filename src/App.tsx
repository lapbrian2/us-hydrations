import { useEffect } from "react";
import { Splash } from "./components/Splash";
import { ProgressBar } from "./components/ProgressBar";
import { CustomCursor } from "./components/CustomCursor";
import { TextureOverlay } from "./components/TextureOverlay";
import { Navbar } from "./components/Navbar";
import { SmoothScroll } from "./components/SmoothScroll";
import { SectionNav } from "./components/SectionNav";
import { ClipReveal } from "./components/ClipReveal";
import { bindMagneticIn } from "./lib/magnetic";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Capabilities } from "./sections/Capabilities";
import { Products } from "./sections/Products";
import { Leadership } from "./sections/Leadership";
import { Badges } from "./sections/Badges";
import { Story } from "./sections/Story";
import { Cta } from "./sections/Cta";
import { Footer } from "./sections/Footer";

export function App() {
  // Bind magnetic behavior to any element carrying data-magnetic
  useEffect(() => {
    // Defer to after splash so elements are mounted and positioned
    const t = window.setTimeout(() => bindMagneticIn(document, 0.2), 2200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SmoothScroll />
      <Splash />
      <ProgressBar />
      <CustomCursor />
      <TextureOverlay />
      <Navbar />
      <SectionNav />

      <main id="main">
        <Hero />
        <Marquee />
        <ClipReveal>
          <Capabilities />
        </ClipReveal>
        <ClipReveal>
          <Products />
        </ClipReveal>
        <ClipReveal>
          <Leadership />
        </ClipReveal>
        <ClipReveal>
          <Badges />
        </ClipReveal>
        <ClipReveal>
          <Story />
        </ClipReveal>
        <Cta />
        <Footer />
      </main>
    </>
  );
}
