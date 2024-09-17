import HText from "@/components/HText";
import InteractiveBg from "@/components/InteractiveBg";
import {
  SelectedPageValueType,
  useSelectedPage,
} from "@/hooks/useSelectedPage";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

type Props = {};

export default function ContactUsSection(props: Props) {
  const { setSelectedPage } = useSelectedPage();
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();
  const handleSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contactus"
      className="relative h-screen w-full bg-primary-dark px-8 py-16 pt-36 md:px-16"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.ContactUs)}
      >
        <div className="absolute inset-0">
          <InteractiveBg />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-gold-accent">Join now</span> to get in shape
          </HText>
        </motion.div>
        <p className="text-xs font-light tracking-normal sm:text-sm md:max-w-[900px]">
          Ready to take the next step in your fitness journey? Whether you’re
          looking to tone up, build strength, or improve overall wellness, we’re
          here to help you achieve your goals. Contact us by filling the form
          below, and let’s get started on building the best version of yourself
          today!
        </p>
        <motion.div
          className="mt-10 justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form target="_blank" onSubmit={handleSubmit}></form>
        </motion.div>
      </motion.div>
    </section>
  );
}
