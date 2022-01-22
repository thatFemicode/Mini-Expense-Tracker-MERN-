import styled from "styled-components";

export const AddTransactionStyled = styled.div`
  margin-top: 1.3rem;
  text-align: center;
  label {
    display: inline-block;
    margin: 10px 0;
  }

  input {
    border: 1px solid #dedede;
    border-radius: 5px;
    display: block;
    font-size: 16px;
    padding: 10px;
    width: 100%;
  }

  .btn {
    cursor: pointer;
    background: linear-gradient(to right bottom, #323941, #061018);
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 25px 0;
    padding: 10px;
    width: 100%;
    border-radius: 10px;
    box-shadow: $shadow-2;
  }

  .btn:focus,
  .delete-btn:focus {
    outline: 0;
  }
`;
