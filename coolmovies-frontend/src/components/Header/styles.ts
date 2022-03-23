import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 68px;
  background-color: grey;
  display: flex;
  align-items: center;
  padding: 0px 56px;
  justify-content: space-between;

  div {
    display: flex;
  }

  svg {
    width: 30px;
    height: 30px;
    color: white;
    margin: 0px 8px;
    cursor: pointer;

    :active {
      opacity: 0.7;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;

    li {
      font-size: 14px;
      line-height: 16.8px;
      color: white;
      cursor: pointer;

      :hover {
        font-weight: 700;
      }
    }
  }
`;
