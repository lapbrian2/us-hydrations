import { Splash } from "./components/Splash";
import { ProgressBar } from "./components/ProgressBar";
import { CustomCursor } from "./components/CustomCursor";
import { TextureOverlay } from "./components/TextureOverlay";
import { Navbar } from "./components/Navbar";
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
  return (
    <>
      <Splash />
      <ProgressBar />
      <CustomCursor />
      <TextureOverlay />
      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <Capabilities />
        <Products />
        <Leadership />
        <Badges />
        <Story />
        <Cta />
        <Footer />
      </main>
    </>
  );
}
