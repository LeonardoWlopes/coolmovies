import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 2;
  display: flex;
  background-color: #000000d4;
`;

export const Container = styled.div`
  width: 600px;
  height: 550px;
  background-color: #5c5c5c;
  margin: auto;
  border-radius: 10px;
  padding: 10px 30px;
`;

export const RatingContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 28px;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 35px;
    height: 35px;
    margin-right: 12px;
    cursor: pointer;
  }
`;

export const InputRating = styled.input`
  width: 60px;
  height: 40px;
  outline: none;
  border: solid 1px white;
  background: transparent;
  border-radius: 12px;
  padding: 10px;
  color: white;
  font-weight: bold;
`;

export const Body = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: solid 1px white;
  background: transparent;
  border-radius: 12px;
  padding: 10px;
  color: white;
  font-weight: bold;
  margin: auto;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  border: solid 2px white;
  background: transparent;
  border-radius: 12px;
  outline: none;
  padding: 10px;
  color: white;
  font-weight: bold;
  resize: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #bfbfbf;
  margin: auto;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 18px;

  :active {
    opacity: 0.8;
  }
`;
