import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10rem;
  padding: 0rem 3rem;

  h2 {
    color: #0D2662;
    font-size: 3.6rem;
    font-weight: 600;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20rem;

  .button {
    background-color: #3857A3;
    font-size: 16px;
    margin-left: 3rem;
    font-weight: normal;
    border-radius: 5px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 3rem 10rem 0rem 5rem;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    font-size: 3rem;
    font-weight: normal;
  }
`;

export const PreviousDiv = styled.div`
  margin-left: 2rem;
`;

export const CurrentPageDiv = styled.div`
  width: 5rem;
  height: auto;
  display: flex;
  margin: 0rem 2rem 0rem 2rem;

  input {
    text-align: center;
  }
`;

export const NextDiv = styled.div`
  margin-right: 2rem;
`;
