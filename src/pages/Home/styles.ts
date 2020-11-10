import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;

  background-color: #fefefe;
`;

export const Card = styled.div`
  border: 1px solid #dedede;
  background-color: #dedede;
  border-radius: 10px;
  width: 50%;
  margin: 10px auto;
  padding: 20px;
  cursor: pointer;
  opacity: .7;
  transition: all .3s;
  
  &:hover {
    opacity: 1;
    border: 1px solid #000;
  }
`;
