import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  height: 11rem;
  justify-content: space-between;
`;

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 6.2rem;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #0D2662;
  font-weight: 500;
  padding: 0.5rem 0rem;

  img {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 1rem;
  }
  
  > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    div {
      height: 1.7rem;
      width: 1.7rem;
      border: 1.5px solid #707070;
      border-radius: 50%;
      opacity: 0.74;
      margin: 0;
      margin-right: 1rem; 
    }
  }
`;
