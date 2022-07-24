import styled from "styled-components";

export const Container = styled.div`
  > input {
    color: white;
    &::placeholder {
      color: gray;
    }
  }
`;

export const Error = styled.span`
color: #dc1637;
margin: 2px 0 0 10px;
display: block;
`;