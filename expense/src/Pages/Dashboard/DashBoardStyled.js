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
      height: 70vh;
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
        height: 37vh;
        overflow: auto;
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
        height: 30vh;
      }
      /* padding-top: 5rem; */
    }
  }
`;
