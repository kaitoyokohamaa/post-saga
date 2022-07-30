import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { CookiesProvider } from "react-cookie";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;
