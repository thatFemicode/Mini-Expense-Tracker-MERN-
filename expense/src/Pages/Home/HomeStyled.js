import styled from "styled-components";
export const HomeStyled = styled.main`
  /* max-height: 100vh; */
  overflow: hidden;
  padding-top: 8rem;
  position: relative;
  visibility: hidden;
  @media (max-width: ${({ theme }) => theme.desktop}) {
    padding-top: 10rem;
  }
  @media (max-width: ${({ theme }) => theme.blogNav}) {
    height: 100vh;
    padding-top: 6rem;
  }
  .hero {
    display: flex;
    /* justify-content: space-between; */
    /* align-items: center; */
    position: relative;
    @media (max-width: ${({ theme }) => theme.blogNav}) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    &-left {
      width: 40%;
      position: relative;
      @media (max-width: ${({ theme }) => theme.mind}) {
        width: 60%;
      }
      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        width: 90%;
      }
      @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
        width: 70%;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: unset;
      }
      @media (min-width: ${({ theme }) => theme.auth}) {
        width: 90%;
      }
      /* @media (max-width: ${({ theme }) => theme.images}) {
        width: 90%;
      } */
      /* @media (max-width: ${({ theme }) => theme.blogNav}) {
        width: 50%;
        margin: 0 auto;
      } */
      img {
        mix-blend-mode: difference;
        width: 400px;
        position: relative;
        @media (max-width: ${({ theme }) => theme.mind}) {
          width: 400px;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 700px;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          width: 500px;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          width: 250px;

          /* transform: translateX(-50%); */
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          width: 190px;
        }
        @media screen and (max-width: 375px) and (max-height: 812px) {
          width: 210px;
          top: 50px;
        }
        @media screen and (max-width: 375px) and (max-height: 667px) {
          width: 170px;
        }
        @media (min-width: ${({ theme }) => theme.auth}) {
          width: 2000px;
        }
      }
    }
    &-right {
      width: 60%;
      position: relative;
      @media (max-width: ${({ theme }) => theme.blogNav}) {
        width: 80%;
        margin: 0 auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
      }
      .text {
        position: relative;
        font-size: clamp(2rem, 15vh, 6.5rem);
        transition: all 0.1s ease-in-out;
        /* @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        
        } */
        @media (max-width: ${({ theme }) => theme.mind}) {
          font-size: 5rem;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          font-size: 4.5rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 4rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 5.5rem;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          font-size: 4.5rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          font-size: 3.3rem;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          font-size: 3rem;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          font-size: 2.5rem;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          font-size: 2.4rem;
        }
        @media screen and (max-width: 375px) and (max-height: 812px) {
          font-size: 2.5rem;
        }
        @media screen and (max-width: 375px) and (max-height: 667px) {
          font-size: 2.2rem;
        }
        @media (min-width: ${({ theme }) => theme.auth}) {
          font-size: 8rem;
        }
        &.express {
          top: 15%;
          left: 0;
          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            left: -20%;
          }
          @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
            top: 10%;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: -5%;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
          }
        }
        &.expense {
          top: 15%;
          left: 10%;
          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            top: 25%;
            left: -5%;
          }
          @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
            top: 10%;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: 5%;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            left: 15%;
          }
          @media (min-width: ${({ theme }) => theme.auth}) {
            top: 25%;
          }
        }
        &.tracker {
          left: 25%;
          top: 15%;
          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            top: 35%;
            left: 10%;
          }
          @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
            top: 10%;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            left: 15%;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            left: 30%;
          }
          @media (min-width: ${({ theme }) => theme.auth}) {
            top: 35%;
          }
        }
      }

      .hand {
        /* mix-blend-mode: difference; */
        width: 130px;
        transform: rotateY(900deg) rotateX(900deg);
        position: absolute;
        right: 0;
        top: 0;
        @media (max-width: ${({ theme }) => theme.mind}) {
          width: 100px;
          /* top: -60px; */
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          width: 80px;
          right: 20px;
          /* top: -40px; */
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 100px;
        }
        @media (max-width: ${({ theme }) => theme.service}) {
          right: 0;
          /* top: -40px; */
        }
        @media (max-width: ${({ theme }) => theme.adapt}) {
          width: 70px;
          /* top: -40px; */
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
        position: relative;
        top: 200px;
        left: -10px;
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
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          top: 40%;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          top: 20%;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          position: relative;
          top: 10px;
          left: -30px;
          padding-left: 0.525rem;
          padding-right: 0.525rem;
        }
        @media (min-width: ${({ theme }) => theme.auth}) {
          top: 40%;
        }
        /* width: 60%; */
        .view {
          border-radius: 1.5rem;
          /* background-color: rgba(0, 85, 186, 1); */
          background: linear-gradient(to right bottom, #323941, #061018);
          padding-left: 0.75rem;
          padding-right: 0.75rem;
          color: #fff;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          font-size: 0.775rem;
          font-weight: 700;
          @media (max-width: ${({ theme }) => theme.images}) {
            font-size: 0.65rem;
          }
          @media (min-width: ${({ theme }) => theme.auth}) {
            font-size: 1.2rem;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            font-size: 0.6rem;
          }
        }
        .track {
          margin-left: 0.63rem;
          font-size: 0.875rem;
          @media (max-width: ${({ theme }) => theme.images}) {
            font-size: 0.75rem;
          }
          @media (max-width: ${({ theme }) => theme.blogNav}) {
            font-size: 0.7rem;
          }
          @media (min-width: ${({ theme }) => theme.auth}) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  .scroll {
    position: absolute;

    bottom: -10px;
    right: 40px;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.images}) {
      width: 40px;
      /* bottom: -170px; */
    }
    /* @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      bottom: -300px;
      width: 80px;
    } */
    @media (max-width: ${({ theme }) => theme.max}) {
      width: 30px;
      bottom: -40px;
    }
  }
`;
