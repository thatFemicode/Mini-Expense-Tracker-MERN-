import styled from "styled-components";
export const HomeStyled = styled.main`
  /* max-height: 100vh; */
  overflow: hidden;
  padding-top: 8rem;
  position: relative;
  .hero {
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    position: relative;
    &-left {
      width: 40%;
      position: relative;
      img {
        mix-blend-mode: difference;
        width: 400px;
      }
    }
    &-right {
      width: 60%;
      position: relative;
      .text {
        position: absolute;
        font-size: clamp(2rem, 15vh, 6.5rem);

        &.express {
          top: 5%;
          left: 0;
        }
        &.expense {
          top: 25%;
          left: 10%;
        }
        &.tracker {
          left: 25%;
          top: 45%;
        }
      }

      .hand {
        /* mix-blend-mode: difference; */
        width: 130px;
        transform: rotateY(900deg) rotateX(900deg);
        position: absolute;
        right: 0;
        top: 0;
      }
      .logo {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
`;
