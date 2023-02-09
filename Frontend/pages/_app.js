import { StateContext } from "../context/StateContext";

import "../styles/Navbar.scss";
import "../styles/index.scss";
import { Toaster } from "react-hot-toast";
import { PageLayout } from "../components/PageLayout";
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <PageLayout>
        <Toaster />
        <Component {...pageProps} />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </PageLayout>
    </StateContext>
  );
}

export default MyApp;