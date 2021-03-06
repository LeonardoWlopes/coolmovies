import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 0px 50px;

  @media screen and (max-width: 1160px) {
    flex-direction: column;
    height: auto;
    padding: 0;
  }
`;

export const ImgContainer = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1160px) {
    height: auto;
    width: 100vw;
    padding-top: 100px;
  }
`;

export const Img = styled.img`
  height: auto;
  max-height: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;

  @media screen and (max-width: 400px) {
    max-width: 265px;
  }
`;

export const ReviewsContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 100px 0px;
  overflow: auto;

  @media screen and (max-width: 1160px) {
    width: 100%;
  }
`;

export const Reviews = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 100px 0px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const AddContainer = styled.div`
  width: 100%;
  max-width: 370px;
  height: 100px;
  margin: auto;
  border-radius: 15px;
  background: #5c5c5c;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 12px;

  @media screen and (max-width: 1160px) {
    flex-direction: column;
    height: auto;
    margin: 50px auto;
  }

  :active {
    opacity: 0.8;
  }

  svg {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
`;
