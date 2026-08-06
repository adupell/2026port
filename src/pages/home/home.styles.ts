import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  @media screen and (max-width: 1200px) {
    padding: 64px 0;
  }

  @media screen and (max-width: 1000px) {
    padding: 40px 0;
  }
`;
