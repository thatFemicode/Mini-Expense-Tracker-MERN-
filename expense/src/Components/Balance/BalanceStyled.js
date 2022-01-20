import styled from "styled-components";

export const BalanceStyled = styled.div`
  position: relative;
  .container {
    position: relative;
    /* left: 50%; */
    /* top: 0%; */
    /* transform: translate(-50%); */
    background: linear-gradient(to right bottom, #323941, #061018);
    width: 420px;
    height: 120px;
    border-radius: 20px;
    box-shadow: 0px 56px 72px -30px rgba(50, 55, 63, 0.66);
    padding: 30px;
    cursor: pointer;
    overflow: hidden;
  }

  .container .logo {
    width: 50px;
    position: absolute;
    right: 30px;
    top: 45px;
  }

  .container .card-name {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.473);
  }

  .container .card-balance {
    color: #fff;
    font-size: 22px;
  }

  .container .sim {
    width: 40px;
    position: absolute;
    bottom: -40px;
    opacity: 0;
  }

  .container .card-logo {
    position: absolute;
    top: -40px;
    right: -550px;
    height: 200px;
    transform: rotate(-12deg);
  }

  .container .card-number {
    right: -200px;
    position: absolute;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.473);
    bottom: 56px;
  }

  .container .due-date {
    right: -100px;
    position: absolute;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.473);
    bottom: 30px;
  }
`;
