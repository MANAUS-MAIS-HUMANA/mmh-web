import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;

  > div {

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
    
    &:last-child {
      background-color: #F7F7FF;
      border-radius: 2rem;
      width: 100%;
      height: 34.4rem;
    }
  }
  
`;
