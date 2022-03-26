import { styled } from "@mui/styles";

export const Container = styled("div")({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const RecomendedShow = styled("img")({
  width: "100%",
  height: "70vh",
  objectFit: "cover",
});

export const ListsContainer = styled("div")({
  width: "100%",
  minHeight: "30vh",
  background:
    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(11,11,11,0.8575805322128851) 15%, rgba(20,20,20,1) 30%)",
  marginTop: "-130px",
});
