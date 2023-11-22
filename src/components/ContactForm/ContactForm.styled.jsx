import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400 px;
  padding: 20px;
  border: 1px solid black;
  justify-content: center;
`;
export const Label = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding: 8px 12px;
  cursor: pointer;
`;
export const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  max-width: 100px;
  display: block;
  margin: 0 auto;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;
