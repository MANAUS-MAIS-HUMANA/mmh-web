import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Banner = styled.div`
  width: 100%;
  height: 100vh;
  .banner {
    width: 100%;
    height: 100%;
  }
`;

export const LoginUser = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .logo_manaus {
    width: 233, 95px;
    height: 142.59px;
  }

  form {
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  p {
    color: #fff;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
    background-color:#ff3333;
  }

  .textField {
    width: 100%;
  }

  .forpass {
    margin-top: 15px;
    font-size: 12px;
  }
  .button {
    margin-top: 36px;
    margin-left: 22%;
    width:  50%;
    height: 40px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    display: inline-block;
  }

  h1 {
    color: #3857A3;
    margin-bottom: 15px
  }
`;
