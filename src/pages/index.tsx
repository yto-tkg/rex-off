import type { NextPage } from "next";

import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "next/app";

const IndexPage: NextPage = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default IndexPage;
