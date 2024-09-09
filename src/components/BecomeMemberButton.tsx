import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "./Button";
import {
  SelectedPageValueType,
  useSelectedPage,
} from "@/hooks/useSelectedPage";

type BecomeMemberButtonProps = {};

export default function BecomeMemberButton(props: BecomeMemberButtonProps) {
  const { setSelectedPage } = useSelectedPage();
  return (
    <AnchorLink
      onClick={() => {
        setSelectedPage(SelectedPageValueType.ContactUs);
      }}
      href={`#${SelectedPageValueType.ContactUs}`}
    >
      <Button>become a member</Button>
    </AnchorLink>
  );
}
