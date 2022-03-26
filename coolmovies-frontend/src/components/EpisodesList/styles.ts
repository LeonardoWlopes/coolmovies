import { styled as sty } from "@mui/material";
import styled from "styled-components";

export const Container = sty("div")({
  width: "100%",
  minHeight: "220px",
  display: "flex",
  flexDirection: "column",
  padding: "0px 12px",
});

export const TitleContainer = sty("div")({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  color: "#ffff",
  padding: "0px 24px",
});

export const Title = sty("h2")({
  textTransform: "capitalize",
});

export const ShowsContainer = sty("div")({
  width: "100%",
  height: "210px",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  color: "#ffff",
  overflow: "hidden",
  position: "relative",
});

export const LeftIconContainer = styled.div`
  width: 60px;
  height: 210px;
  align-items: center;
  display: flex;
  left: 0;
  position: absolute;
  transition: 0.2s;

  opacity: 0;

  :hover {
    opacity: 1;
  }

  svg {
    width: 50px;
    height: 100px;
    color: white;
    margin: 0px 8px;
    cursor: pointer;

    :active {
      opacity: 0.7;
    }
  }
`;

export const RightIconContainer = styled.div`
  width: 60px;
  height: 210px;
  align-items: center;
  display: flex;
  right: 0;
  position: absolute;
  transition: 0.2s;

  opacity: 0;

  :hover {
    opacity: 1;
  }

  svg {
    width: 50px;
    height: 100px;
    color: white;
    margin: 0px 8px;
    cursor: pointer;

    :active {
      opacity: 0.7;
    }
  }
`;
