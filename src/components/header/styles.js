import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3857A3;
`;

export const HeaderLeft = styled.div`
  height: 1rem;
  width: 100%;
  color: #fff;
  margin: 1rem 0rem 5.7rem 3rem;
  display: flex;

  img {
    height: 5rem;
    width: 8.1rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  margin: 1rem 2rem 2rem 0rem;
  align-items: center;

  .button {
    margin-top: 1rem;
    background-color: #3857A3;
    border: 2px solid #fff;
    border-radius: 15px;
    font-size: 18px;
    display: block;
    width: 275px;
  }
`;
