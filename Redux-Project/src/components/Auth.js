import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store';

const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();

    console.log(isAuth);

    dispatch(authActions.login())

  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
