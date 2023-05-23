import type { NextPage } from "next";
import Head from "next/head";

import Counter from "../features/counter/Counter";
import styles from "../styles/Home.module.css";
import { Provider } from "react-redux";
import store from "../app/store";
import App from "next/app";

const IndexPage: NextPage = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default IndexPage;
