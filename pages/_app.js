import 'bootstrap/dist/css/bootstrap.css';
import Main from '../components/Main';
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  )
}

export default MyApp
