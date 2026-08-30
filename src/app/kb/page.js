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

export default function KBPage() {

const content = unitContent.kb;
const theme = unitThemes.kb;
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