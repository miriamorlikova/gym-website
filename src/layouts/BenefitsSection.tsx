import { HiOutlineHomeModern } from "react-icons/hi2";
import { GrGroup } from "react-icons/gr";
import { IoFitnessOutline } from "react-icons/io5";
import {
  SelectedPageValueType,
  useSelectedPage,
} from "@/hooks/useSelectedPage";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import Benefit from "@/components/Benefit";

type Props = {};

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const benefits: Array<BenefitType> = [
  {
    icon: <HiOutlineHomeModern className="h-6 w-6" />,
    title: "prime location, easy access",
    description:
      "Conveniently located in the center of Ostrava city, our gym offers easy access with excellent transport links and ample parking.",
  },
  {
    icon: <GrGroup className="h-6 w-6" />,
    title: "a class for everyone",
    description:
      "From high-energy spinning and strength training to yoga, Pilates, and HIIT, our diverse range of classes ensures there's something for everyone.",
  },
  {
    icon: <IoFitnessOutline className="h-6 w-6" />,
    title: "expert and pro trainers",
    description:
      "Our professional trainers are dedicated to helping you succeed, providing personalized guidance for all fitness levels.",
  },
];

export default function BenefitsSection(props: Props) {
  const { setSelectedPage } = useSelectedPage();
  return (
    <section
      id="benefits"
      className="mt-12 min-h-full w-screen gap-16 px-8 py-8 md:h-screen md:px-16 md:py-16"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.Benefits)}
      >
        {/* HEADER SECTION */}
        <div>
          <HText>elevate your life with every workout</HText>
          <p className="text-xs font-light tracking-normal sm:text-sm">
            Your fitness journey is more than just exercise, it's a lifestyle..
          </p>
          <p className="mb-8 text-xs font-light tracking-normal sm:text-sm">
            Every rep, every step, and every drop of sweat brings you closer to
            your best self.
          </p>
        </div>

        {/* BENEFITS SECTIONS */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
          <div></div>
        </div>
      </motion.div>
    </section>
  );
}
