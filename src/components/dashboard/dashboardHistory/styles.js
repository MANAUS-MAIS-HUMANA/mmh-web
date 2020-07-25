import styled, { keyframes } from 'styled-components';
import { darken } from 'polished'

const appearFromTop = keyframes`
  0%, 50% {
    opacity: 0;
    transform: translateY(-50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

export const Header = styled.div`
  min-height: 7.8rem;
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  color: #0D2662;
  font-weight: 600;
  padding: 0rem 2rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0rem 2rem;

  /* Animações */
  animation: ${appearFromTop} 2s;
`;

export const Card = styled.div`
  margin: 0rem 0rem 1.5rem 0rem;
  width: 100%;

  h5 {
    font-size: 1.2rem;
    color: #8999B0;
    font-weight: 400;
    margin: 0rem 0rem 0.5rem 1rem;
  }

  >div {
    background-color: #fff;
    border-radius: 1.5rem;
    padding: 1.3rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #0D2662;

      &:first-child {
        flex-direction: row;
        margin-bottom: 1.2rem;

        img {
          width: 2.4rem;
          margin-right: 0.5rem;
        }

        h4 {
          font-size: 1.6rem;
        }
      }

      &:last-child {
        h4 {
          margin-bottom: 1rem;
          font-size: 1.6rem;
          font-weight: 500;

          &:first-child {
            color: #8999B0;
            font-weight: 600;
          }
        }

      }
      
    }
  }
`;
export const Footer = styled.div`
  min-height: 13.2rem;
  display: flex;
  align-items: center;
  margin-top: auto;
  width: 100%;
  padding: 0rem 2rem;

  button {
    border: none;
    background-color: #7AFFB7;
    border-radius: 4rem;
    width: 100%;
    height: 6.2rem;
    color: #0D2662;
    font-size: 1.6rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background-color: ${darken(0.2, '#7AFFB7')};
    }
  }
`;
