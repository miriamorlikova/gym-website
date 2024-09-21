import { SelectedPageValueType } from "../App";
import { motion } from "framer-motion";
import HText from "@/components/HText";
import Classes from "@/components/Classes";

type ClassesSectionType = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};
export default function ClassesSection({
  setSelectedPage,
}: ClassesSectionType) {
  return (
    <section
      id="ourclasses"
      className="mt-16 w-full bg-primary-dark py-16 pt-24 md:px-16 md:py-36"
    >
      <motion.div
        onViewportEnter={() =>
          setSelectedPage(SelectedPageValueType.OurClasses)
        }
      >
        <motion.div
          className="mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="px-8">
            <HText>Our classes</HText>
            <p className="mb-2 text-xs font-light tracking-normal sm:text-sm md:max-w-[900px]">
              Find your strength, your peace, your passion. Your class awaits.
            </p>
          </div>
        </motion.div>
        <Classes />
      </motion.div>
    </section>
  );
}
