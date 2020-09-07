import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  >div {

    &:first-child {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      font-size: 1.6rem;
      height: 2rem;

      h4 {
        color: #0D2662;
        font-weight: 600;
        font-size: 1.6rem;
      }

      span {
        color: #3857A3;
        font-weight: 400;
        cursor: pointer;

        &:hover {
          border-bottom: 1px solid #3857A3;
        }
      }
    }
  }

`;

export const NeighList = styled.div`
  background-color: #F7F7FF;
  border-radius: 2rem;
  width: 100%;

    >div {

      &:first-child {
        height: 21.1rem;
      }
      &:last-child {
        height: auto;
        padding: 0rem 2.4rem 0rem 2.4rem;
      }
    }
`;

export const Neighborhood = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  div {
    background-color: ${props => props.color};
    width: 1.8rem;
    height: 1.4rem;
    margin-right: 1rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
