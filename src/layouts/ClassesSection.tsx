import {
  SelectedPageValueType,
  useSelectedPage,
} from "../hooks/useSelectedPage";

import { motion } from "framer-motion";
import HText from "@/components/HText";
import Classes from "@/components/Classes";

type Props = {};
export default function ClassesSection(props: Props) {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="ourclasses" className="w-full bg-primary-dark py-16 md:px-16">
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
