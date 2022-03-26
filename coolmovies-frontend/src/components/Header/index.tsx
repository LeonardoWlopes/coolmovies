import React from "react";
import * as S from "./styles";

import { useRouter } from "next/router";

//icons
import { Search, Notifications } from "@mui/icons-material";

//components
import Image from "next/image";

//images
import logo from "../../assets/logo.svg";

function Header() {
  const router = useRouter();

  function moveToHome() {
    router.push("/");
  }

  return (
    <S.Header>
      <div>
        <Image src={logo.src} alt="Logo" height="31px" width="110px" />
        <S.Nav>
          <ul>
            <li onClick={moveToHome}>Home</li>
          </ul>
        </S.Nav>
      </div>
      <div>
        <Search />
        <Notifications />
      </div>
    </S.Header>
  );
}

export { Header };
