import { InsideContainerStyle } from "./style";

type Props = {
  children: JSX.Element;
};

export default function InsideContainer({ children }: Props) {
  return <InsideContainerStyle> {children} </InsideContainerStyle>;
}
