import styled from "styled-components";

interface TextSectionProps {
  left?: boolean;
  right?: boolean;
}

export const FooterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  animation: fadeInAnimation ease-in-out 1.5s;
  -webkit-animation: fadeInAnimation ease-in-out 1.5s;
  -moz-animation: fadeInAnimation ease-in-out 1.5s;
  -o-animation: fadeInAnimation ease-in-out 1.5s;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 120px;
  flex: 1;

  @media screen and (max-width: 1200px) {
    padding: 80px 100px;
  }

  @media screen and (max-width: 1000px) {
    padding: 48px;
  }
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 120px 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const TextSection = styled(Section)<TextSectionProps>`
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  max-width: 500px;
  margin: 0;

  ${({ left }) => (left ? `margin-right: 80px;` : ``)}
  ${({ right }) => (right ? `margin-left: 80px;` : ``)}

  @media screen and (max-width: 1000px) {
    margin: 50px 0;
    width: 100%;
  }
`;

export const FullImage = styled.img`
  display: flex;
  width: 100%;
  height: auto;
  margin-bottom: 120px;
  background-color: #ffffff;

  @media screen and (max-width: 1000px) {
    margin: 50px 0;
  }
`;

export const HalfImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: contain;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
