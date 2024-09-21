import AnchorLink from "react-anchor-link-smooth-scroll";
import { HiOutlineMenu } from "react-icons/hi";
import { Button } from "./Button";
import NavLink from "./NavLink";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPageValueType } from "@/App";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  selectedPage: SelectedPageValueType;
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  setSelectedPage,
  selectedPage,
}: NavbarProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1075px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 550px)");

  return (
    <div className="flex justify-between">
      {isAboveMediumScreens ? (
        <div className="flex justify-between">
          <div className="hidden md:flex lg:gap-16">
            <nav className="flex items-center justify-between gap-1 font-exo text-xs capitalize lg:text-sm">
              <NavLink
                page="home"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <NavLink
                page="benefits"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <NavLink
                page="our classes"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
              <NavLink
                page="contact us"
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
            </nav>

            <div className="flex items-center justify-between gap-2 text-nowrap">
              <Button variant="secondary">
                <AnchorLink
                  onClick={() =>
                    setSelectedPage(SelectedPageValueType.ContactUs)
                  }
                  href={`#${SelectedPageValueType.ContactUs}`}
                >
                  sign in
                </AnchorLink>
              </Button>
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
                <AnchorLink
                  onClick={() =>
                    setSelectedPage(SelectedPageValueType.ContactUs)
                  }
                  href={`#${SelectedPageValueType.ContactUs}`}
                >
                  sign in
                </AnchorLink>
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
