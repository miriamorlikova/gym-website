import { SelectedPageValueType } from "@/App";
import logo from "@/assets/logo-header.png";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/Navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

type PageHeaderProps = {
  selectedPage: SelectedPageValueType;
  setSelectedPage: (value: SelectedPageValueType) => void;
  isTopOfPage: boolean;
};

export default function PageHeader({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: PageHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1075px)");

  return (
    <>
      <div
        className={`fixed top-0 z-30 flex w-full items-center justify-between px-8 py-6 lg:px-12 ${isTopOfPage ? "" : "bg-gradient-dark drop-shadow"}`}
      >
        <div className="flex w-full items-center justify-between">
          <img src={logo} alt="logo" className="h-8" />
          <Navbar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuOpen && (
        <MobileNavbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
}
