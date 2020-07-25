import styled from 'styled-components';
import { shade } from 'polished';
import select_arrow from '../../assets/select_arrow.svg'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 4rem 0rem 0rem 4rem;

  @media (max-width: 480px) {
    border-radius: 0rem;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0rem 3rem; 
  }

  label {
    font-size: 1.8rem;
    font-weight: 500;
    color: #0D2662;
    
  }

  span {
      color: red;
      font-size: 1.2rem;
    }

  select, input {
    min-height: 6.2rem;
    border: none;
    border-radius: 1.7rem;
    background-color: #E6EAED;
    padding: 0rem 2rem;
    font-size: 1.7rem;

    &::placeholder {
      color: #8999B0;
      opacity: 0.54;
    }
  }

  select {
    background: url(${select_arrow}) no-repeat right #E6EAED ;
    -webkit-appearance: none;
    background-position-x: 92%;
    background-size: 1.6rem 1rem;
    align-items: center;
  }
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

export const Line = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 9rem;
  align-items: center;
  justify-content: space-between;

  .halfgrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.3rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
      grid-template-columns: 1fr;
      grid-gap: 1.3rem;
    }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 3rem;
 
 button {
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   height: 6rem;
   width: 16.3rem;
   border: none;
   border-radius: 0.5rem;
   background-color: #ffffff;
   font-size: 2.4rem;
   font-weight: 500;
   transition: background 0.2s;


   &:last-child {
   color: #FFFFFF;
   background-color: #3857A3;

   p {
     margin-right: 1rem;
   }

   .MuiCircularProgress-svg {
     color: #ffffff;
     
   }
   &:hover {
     background-color: ${shade(0.2, '#3857A3')};
   }


   &:disabled {
     cursor: not-allowed;
     background-color: ${shade(0.2, '#3857A3')};
   }
   }
 }
`;
