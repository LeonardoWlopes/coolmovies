import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background-color: #5c5c5c;
  border-radius: 15px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: #fff;
  position: relative;
`;

export const Header = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  margin-bottom: 8px;

  div {
    display: flex;
    align-items: center;
    svg {
      margin-left: 8px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  resize: none;
  background: transparent;
  outline: none;
  border: none;
  font-family: Roboto;
  color: white;
  font-size: 14px;

  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border-radius: 50px;
  }
`;

export const IconContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;

  svg {
    margin-left: 8px;
    cursor: pointer;
    :active {
      opacity: 0.5;
    }
  }
`;
