import { Provider } from 'react-redux';
import Counter from './components/Counter';
import store from './store';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
     <Fragment>
     <Header />
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
        <Counter />
     </Fragment>
    </>
  );
}

export default App;
