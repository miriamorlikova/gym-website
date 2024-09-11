import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";
import { Button } from "./Button";
import NavLink from "./NavLink";
import MobileNavbar from "./MobileNavbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  SelectedPageValueType,
  useSelectedPage,
} from "@/hooks/useSelectedPage";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1075px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 550px)");
  const { setSelectedPage } = useSelectedPage();
  return (
    <div className="flex justify-between">
      {isAboveMediumScreens ? (
        <div className="flex justify-between">
          <div className="hidden md:flex lg:gap-16">
            <nav className="flex items-center justify-between gap-1 font-exo text-xs capitalize lg:text-sm">
              <NavLink page="home" />
              <NavLink page="benefits" />
              <NavLink page="our classes" />
              <NavLink page="contact us" />
            </nav>

            <div className="flex items-center justify-between gap-2 text-nowrap">
              <Button variant="secondary">sign in</Button>
              <Button>
                <AnchorLink
                  onClick={() => {
                    setSelectedPage(SelectedPageValueType.ContactUs);
                  }}
                  href={`#${SelectedPageValueType.ContactUs}`}
                >
                  become a member
                </AnchorLink>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            variant="small"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenu />
          </Button>
          {isAboveSmallScreens && (
            <div className="items-center">
              <Button variant="secondary" size="noxpadding">
                sign in
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
