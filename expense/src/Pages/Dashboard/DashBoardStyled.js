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

    .sidebar {
      display: flex;
      flex-direction: column;
      height: 70vh;
      align-items: center;
      padding: 20px 0;
      flex: 30%;
      position: sticky;
    }
    .mainbar {
      padding: 0 50px;
      flex: 70%;
      height: 80vh;
      overflow: auto;
      /* padding-top: 5rem; */
    }
  }
`;
