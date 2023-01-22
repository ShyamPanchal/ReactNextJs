import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import makeStore from "@/lib/store";

const appStore = makeStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={appStore.store}>
      <Component {...pageProps} />
    </Provider>
  );
}
