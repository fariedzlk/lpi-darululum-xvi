import Navbar from "@/components/Unit/Navbar";
import Footer from "@/components/Unit/Footer";
import { unitContent } from "@/data/unitContent";
import { unitThemes } from "@/data/unitThemes";


import {
  Hero,
  VisionMission,
  Programs,
  Teachers,
  Gallery,
} from "@/components/Unit";

export default function MIPage() {

const content = unitContent.mi;
const theme = unitThemes.mi;
  return (
    <>
      <Navbar theme={theme} />

      <Hero
  {...content.hero}
  theme={theme}
/>

<VisionMission
  {...content.vision}
  theme={theme}
/>
<Programs
  {...content.programs}
  theme={theme}
/>
<Teachers
  teachers={content.teachers}
  theme={theme}
/>
<Gallery
  gallery={content.gallery}
  theme={theme}
/>

<Footer
  {...content.footer}
  theme={theme}
/>
      
      
    </>
  );
}