import styled from 'styled-components';

const containerColor = (props) => {
    if (props.rowType === 'even') {
        return '#F7F7FF';
    }

    return '#FFFFFF';
};

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${containerColor};
  color: #0D2662;

  h4 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const CheckBoxDiv = styled.div`
  width: 30px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameDiv = styled.div`
  width: 45rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-left: 10px;
`;

export const StatusDiv = styled.div`
  width: 8rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BasketDiv = styled.div`
  width: 13rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const LastDonationDateDiv = styled.div`
  width: 17rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const TotalFamilyMembersDiv = styled.div`
  width: 15rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ActionDiv = styled.div`
  width: 15rem;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  label {
    &:hover {
      color: #0D2662;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
