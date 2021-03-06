import styled from "styled-components";

export const ExpenseStyled = styled.div`
  .container {
    position: relative;
    /* left: 50%; */
    /* top: 0%; */
    /* transform: translate(-50%); */
    background: linear-gradient(to right bottom, #323941, #061018);
    width: 420px;
    height: 100px;
    border-radius: 20px;
    /* box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66); */
    padding: 30px;
    cursor: pointer;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.dont}) {
      max-width: 100%;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      max-width: 80%;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.se}) {
      max-width: 70%;
    }
  }

  .container .logo {
    width: 50px;
    position: absolute;
    right: 30px;
    top: 45px;
    @media (max-width: ${({ theme }) => theme.dont}) {
      right: 40px;
    }
  }

  .container .card-name {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.473);
  }

  .container .card-balance {
    color: #fff;
    font-size: 22px;
  }
`;
