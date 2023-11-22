import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 0;
  gap: 5px;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;
export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: blue;
  }
`;
