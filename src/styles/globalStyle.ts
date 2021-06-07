import { css } from "@emotion/react";

export const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  #root{
    height: 100%;
  }
  *{
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  body{
    height: 100vh;
    margin: 0;
  }
`;