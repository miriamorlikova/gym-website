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
import { motion } from "framer-motion";

type HomeSectionProps = {};

export default function HomeSection(props: HomeSectionProps) {
  const { setSelectedPage } = useSelectedPage();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1075px)");

  return (
    <section id="home" className="h-auto w-screen gap-16 pt-16 md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="items-center justify-center gap-10 px-8 pt-16 md:flex md:h-5/6 lg:px-12"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.Home)}
      >
        {/* MAIN HEADINGS */}
        <div className="z-10 md:mt-36 md:basis-3/5">
          <motion.div
            className="pt-6 md:pl-8 md:pt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="md:before:absolute md:before:-left-8 md:before:-top-20 md:before:z-[-1] md:before:content-furitext">
                <img
                  src={logo}
                  alt="logo"
                  className="z-10 mb-4 h-auto lg:w-auto"
                />
              </div>
            </div>

            <h2 className="mb-6 font-oxanium text-base font-medium tracking-wide text-gold-accent sm:text-lg md:text-xl">
              Became your best self with us
            </h2>
            {/* MAIN TEXT */}

            <p className="mb-8 max-w-[500px] text-xs font-light tracking-normal sm:text-sm">
              Unlock your full potential with us! At our gym, we believe that
              every workout is a step towards a stronger, healthier, and more
              confident you. Embrace the challenge, commit to your goals, and
              transform your life because your health is your greatest wealth.
              Let's get stronger, together!
            </p>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="flex gap-6 py-6 md:pl-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Button>
              <AnchorLink
                onClick={() => {
                  setSelectedPage(SelectedPageValueType.ContactUs);
                }}
                href={`#${SelectedPageValueType.ContactUs}`}
              >
                join now
              </AnchorLink>
            </Button>{" "}
            <Button variant="secondary" size="noxpadding">
              <AnchorLink
                onClick={() => setSelectedPage(SelectedPageValueType.ContactUs)}
                href={`#${SelectedPageValueType.ContactUs}`}
              >
                learn more
              </AnchorLink>
            </Button>
          </motion.div>
        </div>

        {/* MAIN PICTURE */}
        <div className="mt-0 sm:-mt-12 md:mt-12 md:max-w-[900px] md:basis-3/5 md:justify-items-end">
          <img src={firstSectionPic} alt="fit women" />
        </div>
      </motion.div>
      {/* SPONSORS */}
      {isAboveMediumScreens && <Footer />}
    </section>
  );
}
