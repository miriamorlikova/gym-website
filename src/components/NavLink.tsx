import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSelectedPage } from "@/hooks/useSelectedPage";
import { type SelectedPageValueType } from "@/hooks/useSelectedPage";

type Props = {
  page: string;
};

export default function NavLink({ page }: Props) {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as SelectedPageValueType;
  const { selectedPage, setSelectedPage } = useSelectedPage();
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
