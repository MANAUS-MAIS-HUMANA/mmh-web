import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export const MenuDiv = styled.div`
  display: flex;
  width: 12.3rem;
  height: 100%;

  @media (max-width: 480px) {
    order: 1;
    width: 100%;
    min-height: 7.6rem;
  }
`;

export const PageDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #3857A3;

  @media (max-width: 480px) {
    order: 0;
    max-height: calc(100% - 7.6rem);
  }
`;