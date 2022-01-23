import styled from "styled-components";
export const DashBoardStyled = styled.main`
  position: relative;
  height: 100%;
  width: 100%;
  padding-top: 7rem;

  .dashboard {
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    @media (max-width: ${({ theme }) => theme.desktop}) {
      flex-direction: column;
    }
    .sidebar {
      display: flex;
      flex-direction: column;
      height: 60vh;
      align-items: center;
      padding: 20px 0;
      flex: 30%;
      position: sticky;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }

      @media (max-width: ${({ theme }) => theme.desktop}) {
        flex: unset;
        height: 21vh;
        overflow: auto;
      }
      @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
        height: 180px;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        height: 180px;
      }

      .inc-exp {
        margin-top: 3rem;
      }
    }
    .mainbar {
      padding: 0 50px;
      padding-top: 20px;
      flex: 70%;
      height: 80vh;
      overflow: auto;

      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        flex: unset;
        margin-top: 5rem;
        overflow: auto;
        height: 50vh;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        height: 40vh;
      }
      /* padding-top: 5rem; */
    }
  }
`;
