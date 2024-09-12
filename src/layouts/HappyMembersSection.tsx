import { Button } from "@/components/Button";
import HText from "@/components/HText";
import secondSectionPic from "../assets/second-section-picture.png";

type Props = {};

export default function HappyMembersSection(props: Props) {
  return (
    <section className="h-auto max-w-full gap-16 pt-16 md:h-screen md:pb-0">
      <div className="items-center justify-center md:flex">
        {/* PICTURE */}
        <div className="mt-0 sm:-mt-12 md:mt-12 md:max-w-[900px] md:basis-3/5 md:justify-items-start">
          <img src={secondSectionPic} alt="fit women" />
        </div>

        {/* HEADING + SECTION TEXT */}
        <div className="pt-16 md:justify-items-end">
          <div className="relative">
            <div className="pb-6 md:before:absolute md:before:-left-20 md:before:-top-20 md:before:z-[1] md:before:content-abstractwaves">
              <HText>
                Milions of happy members across the world getting{" "}
                <span className="text-gold-accent">fit</span>.
              </HText>
            </div>
          </div>
          <p className="mb-2 text-xs font-light tracking-normal sm:text-sm md:max-w-[900px]">
            At Furi Gym, we're proud to have helped millions of members from all
            corners of the world achieve their fitness goals. Whether they're
            just beginning their journey or are seasoned athletes, our community
            is built on the shared passion for health and wellness.
          </p>

          <p className="text-xs font-light tracking-normal sm:text-sm md:max-w-[900px]">
            From customized workout plans to motivating group classes, we’re
            here to support every step of the way. Join our global family and be
            part of the movement towards a healthier, happier life!
          </p>

          {/* BUTTON */}
          <div className="mt-16 md:relative">
            <div className="md:before:absolute md:before:-bottom-20 md:before:right-40 md:before:z-[1] md:before:content-sparkles">
              <Button>join now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
