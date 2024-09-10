import { HiX } from "react-icons/hi";
import NavLink from "./NavLink";

type MobileNavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

export default function MobileNavbar({
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavbarProps) {
  return (
    <div className="items-right fixed bottom-0 right-0 z-40 flex h-full w-[300px] flex-col border-l border-primary-light border-opacity-50 bg-primary-medium shadow-gray-20 drop-shadow-xl">
      <button
        className="flex justify-end p-8 hover:text-gold-accent"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HiX className="h-5 w-5" />
      </button>

      <nav className="ml-[17%] mr-[17%] flex flex-col gap-2 font-exo">
        <NavLink page="home" />
        <NavLink page="benefits" />
        <NavLink page="our classes" />
        <NavLink page="contact us" />
      </nav>
    </div>
  );
}
