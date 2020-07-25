import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3857A3;
`;

export const MenuHeader = styled.div`
  height: 5rem;
  width: 100%;
  color: #fff;
  margin: 2.57rem 0rem 7.7rem 0rem;
  display: flex;
  justify-content: center;

  img {
    height: 5rem;
    width: 8.1rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const MenuButtons = styled.div`
  .item {
    div {
      width: 6.2rem;
      height: 6.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4.3rem;
      background-color: #0D2662;
      opacity: 0.3;
      transition: opacity 0.3s;

      img {
        width: 4rem;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .active {
    div {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    padding: 0 2.6rem;

    > div {
      display: flex;
      align-items: center;
    }

    .item {
    div {
      width: 6.2rem;
      height: 6.2rem;
      align-items: center;
      justify-content: center;
      margin-bottom: 0rem;

      img {
        width: 4rem;
      }
    }
  }

  }
  
`;

export const MenuFooter = styled.div`
  margin-top: auto;

  div {
    width: 6.2rem;
    height: 6.2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    background-color: #0D2662;
    opacity: 0.3;
    transition: opacity 0.3s;
    cursor: pointer;

    img {
      width: 4rem;
    }

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    display: none;
  }
`;