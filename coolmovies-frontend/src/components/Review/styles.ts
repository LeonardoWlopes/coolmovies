import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 180px;
  background-color: #5c5c5c;
  border-radius: 15px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: #fff;
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
