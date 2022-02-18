import Main from '../main/main';
import Header from '../header/header';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <Main placesCount={placesCount} />
    </div>
  );
}

export default App;
