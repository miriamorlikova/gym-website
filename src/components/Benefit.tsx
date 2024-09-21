import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import InteractiveBg from "./InteractiveBg";
import { SelectedPageValueType } from "@/App";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type BenefitProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function Benefit({
  icon,
  title,
  description,
  setSelectedPage,
}: BenefitProps) {
  return (
    <motion.div
      className="mt-5 rounded-md border border-primary-dark bg-primary-medium bg-opacity-50 px-5 py-16 text-center shadow-xl"
      variants={childVariant}
    >
      <div className="relative px-8 py-16 md:px-16">
        <div className="absolute inset-0">
          <InteractiveBg />
        </div>
        <div className="mb-4 flex justify-center">
          <div className="rounded-full border border-gray-20 border-opacity-50 bg-rose-dark p-4">
            {icon}
          </div>
        </div>
      </div>

      <h2 className="font-exo font-bold uppercase tracking-wide">{title}</h2>
      <p className="my-3 text-xs font-light tracking-normal sm:text-sm">
        {description}
      </p>
      <AnchorLink
        className="text-gold-accent hover:text-yellow-400 hover:underline hover:underline-offset-4"
        onClick={() => {
          setSelectedPage(SelectedPageValueType.ContactUs);
        }}
        href={`#${SelectedPageValueType.ContactUs}`}
      >
        Learn more
      </AnchorLink>
    </motion.div>
  );
}
