import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;

  p {
    color: var(--white);
    font-size: 1rem;
    margin-right: 0.5rem;
    font-weight: normal;
    margin-bottom: 0;
  }
`;

export const RegisterText = styled.button`
  color: var(--purple);
  font-size: 1rem;
`;
