import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar({ solid = false }) {
  return (
    <>
      <DesktopNavbar solid={solid} />
      <MobileNavbar solid={solid} />
    </>
  );
}