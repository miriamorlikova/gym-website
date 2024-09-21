import { HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import { SelectedPageValueType } from "@/App";

type MobileNavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  selectedPage: SelectedPageValueType;
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function MobileNavbar({
  isMenuOpen,
  setIsMenuOpen,
  setSelectedPage,
  selectedPage,
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
        <NavLink
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          page="home"
        />
        <NavLink
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          page="benefits"
        />
        <NavLink
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          page="our classes"
        />
        <NavLink
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          page="contact us"
        />
      </nav>
    </div>
  );
}
