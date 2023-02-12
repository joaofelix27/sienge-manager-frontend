import MenubarAlternative from "../Menubar";
import { OutsideContainer, OutsideGrid } from "./style";

type Props = {
  children: JSX.Element;
};

export default function Container({ children }: Props) {
  return (
    <OutsideContainer>
      <MenubarAlternative></MenubarAlternative>
      <OutsideGrid>{children}</OutsideGrid>
    </OutsideContainer>
  );
}
