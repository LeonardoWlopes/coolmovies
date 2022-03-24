import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  padding: 0px 50px;
`;

export const ImgContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  height: 100%;
  max-height: 650px;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

export const ReviewsContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 100px 0px;
  overflow: auto;
`;

export const Reviews = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 100px 0px;
  overflow: auto;
`;
