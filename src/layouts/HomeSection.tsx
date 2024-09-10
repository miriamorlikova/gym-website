import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import {
  SelectedPageValueType,
  useSelectedPage,
} from "@/hooks/useSelectedPage";
import useMediaQuery from "@/hooks/useMediaQuery";
import logo from "../assets/basic-logo.png";
import firstSectionPic from "../assets/first-section-pic.png";

type HomeSectionProps = {};

export default function HomeSection(props: HomeSectionProps) {
  const { setSelectedPage } = useSelectedPage();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1075px)");

  return (
    <section id="home" className="w-screen gap-16 py-16 md:h-screen md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="items-center justify-center gap-10 px-8 pt-16 md:flex md:h-5/6 lg:px-12">
        {/* MAIN HEADINGS */}
        <div className="z-10 md:mt-24 md:basis-3/5">
          <div className="pt-6 md:pl-8 md:pt-0">
            <div className="relative">
              <div className="md:before:absolute md:before:-left-8 md:before:-top-20 md:before:z-[-1] md:before:content-furitext">
                <img
                  src={logo}
                  alt="logo"
                  className="z-10 mb-4 h-auto lg:w-auto"
                />
              </div>
            </div>

            <h3 className="mb-6 font-oxanium text-base font-medium tracking-wide text-gold-accent sm:text-lg md:text-xl">
              Became your best self with us
            </h3>
            {/* MAIN TEXT */}
            <div className="">
              <p className="mb-8 max-w-[500px] text-xs font-light tracking-wide sm:text-sm">
                Unlock your full potential with us! At our gym, we believe that
                every workout is a step towards a stronger, healthier, and more
                confident you. Embrace the challenge, commit to your goals, and
                transform your life because your health is your greatest wealth.
                Let's get stronger, together!
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-6 pl-8">
            <Button variant="secondary" size="noxpadding">
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPageValueType.ContactUs)}
                href={`#${SelectedPageValueType.ContactUs}`}
              >
                learn more
              </AnchorLink>
            </Button>
            <Button>
              <AnchorLink
                onClick={() => {
                  setSelectedPage(SelectedPageValueType.ContactUs);
                }}
                href={`#${SelectedPageValueType.ContactUs}`}
              >
                join now
              </AnchorLink>
            </Button>
          </div>
        </div>

        {/* MAIN PICTURE */}
        <div className="mt-0 sm:-mt-12 md:mt-0 md:max-w-[900px] md:basis-3/5">
          <img src={firstSectionPic} alt="fit women" />
        </div>
      </div>
      {/* SPONSORS */}
      {isAboveMediumScreens && <Footer />}
    </section>
  );
}
