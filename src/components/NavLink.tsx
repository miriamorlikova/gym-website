import AnchorLink from "react-anchor-link-smooth-scroll";
import { type SelectedPageValueType } from "@/App";

type NavLinkProps = {
  page: string;
  selectedPage: SelectedPageValueType;
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function NavLink({
  selectedPage,
  setSelectedPage,
  page,
}: NavLinkProps) {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPageValueType;
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`rounded-md px-4 py-2.5 transition duration-200 hover:border hover:border-gold-accent hover:text-gold-accent ${selectedPage === lowerCasePage ? "border border-gold-accent text-gold-accent" : ""}`}
    >
      {page}
    </AnchorLink>
  );
}
