import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  0%, 20% {
    opacity: 0;
    transform: translateX(-50px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  min-height: 24rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:  #FED983;
  border-radius: 2rem;
  margin: 0rem 3rem;
  color: #3857A3;
  padding: 1.5rem 0rem 1.5rem 3rem;

  @media (max-width: 480px) {
    flex-direction: column;
    min-height: 45rem;
  }

  /* Animações */
  animation: ${appearFromLeft} 2s;
`;

export const Values = styled.div`
  height: 100%;
  padding-top: 0.5rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  h2 {
    color: #0D2662;
    font-size: 3.6rem;
    font-weight: 600;
    margin-bottom: 3.5rem;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    span {
      font-size: 2.2rem;
      font-weight: 500;
    }
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 700;

    span {
      font-size: 1.4rem;
      font-weight: 500;
    }
  }
`;

export const ChartAndLegend = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`

export const Chart = styled.div`
  background-color: #F0C768;
  width: 28rem;
  height: 19rem;
  border-radius: 2rem;
  margin-right: 2rem;

  @media (max-width: 480px) {
    width: 25rem;
    height: 14rem;
    margin-bottom: 1rem;
  }
`;

export const Legend = styled.div`
  padding-top: 0.3rem;
  width: 18vw; /* ATENÇÃO */

  >div {

    h4 {
      font-size: 1.6rem;
      font-weight: 500;
    }

    &:first-child {
      div {
        display: flex;
        flex-direction: row;
        margin-bottom: 1rem;
        align-items: center;

        img {
          min-width: 1.83rem;
          min-height: 1.4rem;
          margin-right: 0.5rem;
        }
      }
    }

    &:last-child {
      display: flex;
      justify-content: flex-end;
      img {
        margin:0rem -2rem -4rem 0rem;
        width: 26.225rem;
        height: 16rem;
      }
      
    }
  }

  @media (max-width: 480px) {
    > div {

      &:first-child {
        display: flex;
        flex-direction: row;
        width: 20rem;
        justify-content: space-between;
      }

      &:last-child {
        img {
          display: none;
        }
      }
    }
  }
`;
