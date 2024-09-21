import { Button } from "@/components/Button";
import HText from "@/components/HText";
import InteractiveBg from "@/components/InteractiveBg";
import { SelectedPageValueType } from "@/App";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import image from "../assets/contact-us-image.jpg";
import { MdOutlineErrorOutline } from "react-icons/md";
import useMediaQuery from "@/hooks/useMediaQuery";

type ContactUsSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function ContactUsSection({
  setSelectedPage,
}: ContactUsSectionProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1500px)");
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
      className="relative min-h-screen w-full bg-primary-dark px-8 py-16 pt-36 md:px-16"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.ContactUs)}
        className="flex justify-between gap-4"
      >
        <div>
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
            <p className="text-xs font-light tracking-normal sm:text-sm md:max-w-[900px]">
              Ready to take the next step in your fitness journey? Whether
              you’re looking to tone up, build strength, or improve overall
              wellness, we’re here to help you achieve your goals. Contact us by
              filling the form below, and let’s get started on building the best
              version of yourself today!
            </p>
          </motion.div>

          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit}
              action="https://formsubmit.co/398e822ab519ed57613864fc3792cba7"
              method="POST"
              className="z-25 relative"
            >
              <input
                type="text"
                className="input"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <div className="mt-1 flex max-w-fit items-center gap-1 px-2 py-1 text-red-warning">
                  <MdOutlineErrorOutline />
                  <p className="font-semibold">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 100 characters."}
                  </p>
                </div>
              )}
              <input
                type="email"
                className="input"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <div className="mt-1 flex max-w-fit items-center gap-1 px-2 py-1 text-red-warning">
                  <MdOutlineErrorOutline />
                  <p className="font-semibold">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email adress."}
                  </p>
                </div>
              )}
              <textarea
                rows={4}
                cols={50}
                className="input"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <div className="mt-1 flex max-w-fit items-center gap-1 px-2 py-1 text-red-warning">
                  <MdOutlineErrorOutline />
                  <p className="font-semibold">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 characters."}
                  </p>
                </div>
              )}
              <Button type="submit" className="my-8">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`z-25 relative h-auto max-w-[50%] ${isAboveMediumScreens ? "block" : "hidden"}`}
        >
          <img src={image} alt="shoe" className="rounded-lg" />
        </motion.div>
      </motion.div>
    </section>
  );
}
