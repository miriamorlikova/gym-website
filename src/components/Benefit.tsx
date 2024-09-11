import { HiOutlineHomeModern } from "react-icons/hi2";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BenefitType } from "@/layouts/BenefitsSection";
import { useSelectedPage } from "@/hooks/useSelectedPage";
import { Button } from "./Button";

export default function Benefit({ icon, title, description }: BenefitType) {
  const { setSelectedPage } = useSelectedPage();
  return (
    <div className="mt-5 rounded-md border border-primary-dark bg-primary-medium bg-opacity-50 px-5 py-16 text-center shadow-xl">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border border-gray-20 border-opacity-50 bg-rose-dark p-4">
          {icon}
        </div>
      </div>

      <h2 className="font-exo font-bold uppercase tracking-wide">{title}</h2>
      <p className="my-3 text-xs font-light tracking-normal sm:text-sm">
        {description}
      </p>
      <AnchorLink className="text-gold-accent hover:text-yellow-400 hover:underline hover:underline-offset-4">
        Learn more
      </AnchorLink>
    </div>
  );
}
