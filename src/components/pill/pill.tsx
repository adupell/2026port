import { StyledPill } from "./pill.styles";

interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return <StyledPill>{text}</StyledPill>;
};

export default Pill;
