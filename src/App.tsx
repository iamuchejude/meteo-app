import React, { FC, Suspense, lazy } from "react";
import styled from "styled-components";

import GlobalStyles, { CSSReset } from "./styles";
import Spinner from "./components/spinner";
import { Provider } from "./context";

const Weather: FC = lazy(() => import("./components/weather"));

const App: FC = () => {
  return (
    <Provider value={{}}>
      <CSSReset />
      <GlobalStyles />
      <Suspense fallback={<Spinner />}>
        <Wrapper>
          <Weather />
        </Wrapper>
      </Suspense>
    </Provider>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  border: 2px solid #f00;
`;

export default App;
