import { StyledPill } from "./pill.styles";

interface PillProps {
  type: string;
  text: string;
}

const Pill = ({ type, text }: PillProps) => {
  return <StyledPill type={type}>{text}</StyledPill>;
};

export default Pill;
