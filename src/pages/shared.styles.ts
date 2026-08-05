import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 125px 0;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    margin: 50px 0;
    flex-direction: column;
    padding: 0;
  }
`;

export const FullImage = styled.img`
  mix-blend-mode: darken;
  display: flex;
  width: 100%;
  height: auto;
`;

export const HalfImage = styled.img`
  width: 50%;
  height: auto;
  mix-blend-mode: darken;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;
