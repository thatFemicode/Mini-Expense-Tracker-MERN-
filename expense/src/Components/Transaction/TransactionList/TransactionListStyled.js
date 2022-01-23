import styled from "styled-components";

export const TransactionListStyled = styled.div`
  text-align: center;
  h3 {
    padding-bottom: 10px;
    margin: 0 0 10px;
    text-transform: capitalize;
    font-size: 2rem;

    @media (max-width: ${({ theme }) => theme.max}) {
      font-size: 1.5rem;
    }
    @media (max-width: ${({ theme }) => theme.se}) {
      font-size: 1rem;
    }
  }
`;
