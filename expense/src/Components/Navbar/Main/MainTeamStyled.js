import styled from "styled-components";

export const MainTeamStyled = styled.div`
  justify-self: center;
  p {
    font-size: 0.7rem;
    mix-blend-mode: difference;
    margin-top: 0.5rem;
  }
`;
export const PlayLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  @media (max-width: ${({ theme }) => theme.images}) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    width: 60px;
    height: 60px;
  }
  img {
    mix-blend-mode: darken;
  }
`;