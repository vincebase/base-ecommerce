
import "../styles/antd.less";
import "../styles/styles.scss";
import Loading from "../components/other/Loading";

import withReduxStore from "../common/withReduxStore";
import { Provider } from "react-redux";


const App = ({ Component, pageProps, reduxStore }) => {
  return (
    <Provider store={reduxStore}>
    {/* //   <PersistGate loading={<Loading />} persistor={persistor}> */}
        <Component {...pageProps} />
    {/* </PersistGate> */}
    </Provider>
  );
};

export default withReduxStore(App);
