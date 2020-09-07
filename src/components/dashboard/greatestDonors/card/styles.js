import styled from 'styled-components';

const cardColor = (props) => {
    if (props.position === 1) {
        return '#FED983';
    } else if (props.position === 2) {
        return '#E6E6E6';
    } else if (props.position === 3) {
        return '#FBA85B';
    } else {
        return '#3857A3';
    }
};

export const Container = styled.div`
  width: 100%;
  height: 100;
  display: flex;
  flex-direction: row;
  padding: 1rem 3rem 0 3rem;
`;

export const IconContainer = styled.div`
  width: 7rem;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${cardColor};
  border-radius: 1rem 0 0 1rem;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    color: #FFFFFF;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const DonorInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 1rem 1rem 1rem 1rem;
  background: #FFFFFF;
  border: 2px solid ${cardColor};
  color: #0D2662;
  font-size: 18px;
`;
