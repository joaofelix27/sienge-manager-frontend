import Menubar from "../Menubar";
import { OutsideContainer, OutsideGrid } from "./style";

type Props = {
  children: JSX.Element;
  withoutHeader?: boolean | undefined
};

export default function Container({ children, withoutHeader }: Props) {
  return (
    <OutsideContainer>
      {!withoutHeader && <Menubar/> }
      <OutsideGrid>{children}</OutsideGrid>
    </OutsideContainer>
  );
}
