import styled from "styled-components";

export const SingleTransactionStyled = styled.div`
  text-transform: capitalize;
`;
export const List = styled.li`
  background-color: #fff;
  box-shadow: $shadow-2;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  margin: 10px 0;
  border-right: ${({ transactions }) =>
    transactions < 0 ? " 5px solid #ff5e57" : "5px solid #0be881"};
  span {
    @media (max-width: ${({ theme }) => theme.se}) {
      font-size: 0.9rem;
    }
  }
  .transaction-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    .transaction-text {
      @media (max-width: ${({ theme }) => theme.se}) {
        font-size: 0.9rem;
      }
    }
    .transaction-date {
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
      padding-top: 10px;
      @media (max-width: ${({ theme }) => theme.se}) {
        font-size: 9px;
      }
    }
  }
  .delete-btn {
    cursor: pointer;
    border: 0;
    color: #ff5e57;
    font-size: 0.9rem;
    line-height: 20px;
    padding: 6px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .delete-btn {
    opacity: 1;
  }
`;
