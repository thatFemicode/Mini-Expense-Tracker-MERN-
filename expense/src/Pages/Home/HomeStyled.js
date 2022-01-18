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
      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 60%;
      }
      img {
        mix-blend-mode: difference;
        width: 400px;
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 350px;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 400px;
        }
      }
    }
    &-right {
      width: 60%;
      position: relative;
      .text {
        position: absolute;
        font-size: clamp(2rem, 10vh, 6rem);
        /* @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        
        } */
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 4.3rem;
        }
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
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 100px;
        }
      }
      .logo {
        position: absolute;
        bottom: 0;
        right: 0;
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 40px;
        }
      }
      a {
        position: absolute;
        bottom: 120px;
        display: inline-flex;
        /* justify-content: space-between; */
        align-items: center;
        padding-left: 0.625rem;
        padding-right: 0.725rem;
        border-radius: 9999px;
        background-color: rgba(245, 245, 245, 1);
        padding-top: 0.5625rem;
        padding-bottom: 0.5625rem;
        color: rgba(0, 0, 0, 1);
        /* width: 60%; */
        .view {
          border-radius: 1.5rem;
          background-color: rgba(0, 85, 186, 1);
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          color: #fff;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          font-size: 0.775rem;
          font-weight: 700;
        }
        .track {
          margin-left: 0.63rem;
          font-size: 0.875rem;
        }
      }
    }
  }
`;
