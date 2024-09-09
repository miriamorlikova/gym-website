import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Button } from "./Button";
import NavLink from "./NavLink";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import BecomeMemberButton from "./BecomeMemberButton";
import useScroll from "@/hooks/useScroll";

type NavbarProps = {};

export default function Navbar(props: NavbarProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1075px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 550px)");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { isTopOfPage } = useScroll();

  return (
    <div className="flex justify-between">
      {isAboveMediumScreens ? (
        <div className="flex justify-between">
          <div className="lg:gap-16 hidden md:flex">
            <nav
              className={`lg:text-sm flex items-center justify-between gap-1 font-exo text-xs capitalize ${isTopOfPage ? "" : "bg-primary-dark drop-shadow"}`}
            >
              <NavLink page="home" />
              <NavLink page="benefits" />
              <NavLink page="our classes" />
              <NavLink page="contact us" />
            </nav>

            <div className="flex items-center justify-between gap-2 text-nowrap">
              <Button variant="secondary">sign in</Button>
              <BecomeMemberButton />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            variant="small"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenu />
          </Button>
          {isAboveSmallScreens && (
            <div className="items-center justify-between gap-3">
              <Button variant="secondary">sign in</Button>
            </div>
          )}
        </div>
      )}
      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuOpen && (
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
      )}
    </div>
  );
}
