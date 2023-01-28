import styled from "styled-components";


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f8f8;
  padding: 2rem;
`;

export const StyledInput = styled.input`
  padding: 1rem;
  margin: 1rem 0;
  color: black;
  background-color: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 3px;
  width: 300px;
  font-size: 1.5rem;
`;

export const StyledError = styled.div`
  margin: 1rem 0;
  color: red;
  font-size: 1.2rem;
`;

export const StyledButton = styled.button`
  padding: 1rem;
  margin: 1rem 0;
  color: #ffffff;
  background-color: #ff9900;
  border: none;
  border-radius: 3px;
  width: 150px;
  font-size: 1.5rem;
  &:hover {
    background-color: #ff6600;
  }
`;