import React from "react";
import * as S from "./styles";

import { useRouter } from "next/router";

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
    </S.Header>
  );
}

export { Header };
