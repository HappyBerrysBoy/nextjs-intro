import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../styles/globals.css";
// Custom App이 있는 여기에만 css import가 가능하다

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default App;
