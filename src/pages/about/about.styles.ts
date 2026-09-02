import styled from "styled-components";

export const PillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 100px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 48px 0;
`;

export const RightSide = styled(SectionContainer)`
  padding: 0 0 0 80px;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

export const StyledImg = styled.img`
  position: sticky;
  top: 120px;
  border-radius: 10000px;
  height: 225px;
  width: 225px;

  @media screen and (max-width: 1200px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    flex-direction: column;
    top: 0;
  }
`;
