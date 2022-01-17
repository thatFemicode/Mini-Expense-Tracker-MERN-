import styled from "styled-components";

export const HamburgerStyled = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;

  .menu-secondary-background-color {
    background: #1d428a;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .menu-primary-background-color {
    background: #ffc72c;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .menu-layer {
    position: relative;
    background: #fff;
    height: 100%;
    overflow: hidden;
    z-index: 90;

    /* overflow: auto; */
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      overflow: auto;
    }
    @media (max-width: ${({ theme }) => theme.images}) {
      overflow: hidden;
    }
    .wrapper {
      position: relative;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .menu-links {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      position: relative;
      top: 150px;
      @media (max-width: ${({ theme }) => theme.mind}) {
        flex-direction: column-reverse;
      }

      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        flex-direction: column-reverse;
      }
      .img {
        position: relative;
        img {
          position: relative;
          width: 600px;
          bottom: 220px;
          @media (max-width: ${({ theme }) => theme.mins}) {
            width: 500px;
            bottom: 150px;
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 300px;
            left: 75%;
            bottom: 300px;
            /* right: 0; */
          }
          @media (max-width: ${({ theme }) => theme.image}) {
            width: 200px;
            left: 80%;
            bottom: 200px;
            /* right: 0; */
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            width: 180px;
            left: 75%;
            bottom: 150px;
            /* right: 0; */
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            display: none;
          }

          @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
            width: 400px;
            right: -63%;
            bottom: 100px;
          }
          @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
            width: 500px;
            bottom: 135px;
          }
          @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
            width: 350px;
            bottom: 100px;
          }
          @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
            width: 250px;
            bottom: 120px;
          }
          @media (max-width: ${({ theme }) => theme.make}) {
            display: unset;
            width: 150px;
            bottom: 30px;
          }
          @media (max-width: ${({ theme }) => theme.adapt}) {
            width: 180px;
            left: 50%;
            bottom: 40px;
            /* right: 0; */
          }
          /* height: clamp(400px, 70vw, 80vw); */
        }
      }
      nav {
        display: block;
        ul {
          margin: 0;
          padding: 0;
          li {
            list-style: none;
            font-size: 6rem;
            font-weight: 700;
            cursor: pointer;
            height: 135px;
            overflow: hidden;
            position: relative;
            width: 700px;
            a {
              position: absolute;
              color: #fff;
              mix-blend-mode: difference;
              text-decoration: none;
              transition: all 0.5s ease-in-out;

              &:hover {
                color: #000;
              }
            }
          }
        }
      }
      .info {
        @media (max-width: ${({ theme }) => theme.post}) {
          width: 90%;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          width: 100%;

          /* right: 0; */
        }
        .main {
          /* display: flex; */
          justify-content: space-between;
          align-items: center;
          /* margin-right: 3rem; */

          .coaches {
            margin-bottom: 1rem;
            @media (max-width: ${({ theme }) => theme.make}) {
              width: 500px;
              /* right: 0; */
            }
            @media (max-width: ${({ theme }) => theme.adapt}) {
              width: 350px;
              /* right: 0; */
            }
            &-text {
              margin-bottom: 1rem;
              font-size: 1rem;
            }
          }
          .roster {
            @media (max-width: ${({ theme }) => theme.make}) {
              width: 450px;
              /* right: 0; */
            }
            @media (max-width: ${({ theme }) => theme.adapt}) {
              width: 300px;
              /* right: 0; */
            }
          }
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;

  margin-bottom: ${(props) => (props.noMarginBottom ? 0 : "1rem")};
  /* color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")}; */
`;
export const Flex = styled.div`
  margin-top: 3rem;
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
`;
export const FlexD = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(7, minmax(0px, 1fr));
    @media (max-width: ${({ theme }) => theme.images}) {
      gap: 4rem;
      /* right: 0; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      gap: 5rem;
      /* right: 0; */
      overflow: auto;
      padding-left: 1.8rem;
    }
  }
`;
export const FlexS = styled.div`
  width: 100%;
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
    @media (max-width: ${({ theme }) => theme.make}) {
      margin: 0;
      /* right: 0; */
    }
  }
  .teams-img {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(6, minmax(0px, 1fr));
    @media (max-width: ${({ theme }) => theme.images}) {
      gap: 4rem;
      /* right: 0; */
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      gap: 5rem;
      /* right: 0; */
      overflow: auto;
      padding-left: 1.8rem;
      grid-template-columns: repeat(18, minmax(0px, 1fr));
    }
  }
`;
