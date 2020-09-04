import { createGlobalStyle } from "styled-components";

export { default as CSSReset } from "./resets";

export default createGlobalStyle`
  :root {
    --primary-color: red;
    /* --primary-color: #405660; */
    --inline-forcast-height: 185px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    overflow-y: hidden;
    user-select: none;
  }

  body {
    margin: 0;
    color: var(--primary-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Catamaran', sans-serif;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
