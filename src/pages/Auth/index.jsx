import { useState } from 'react';

import { LoginForm } from '../../components/LoginForm';
import { SignUpForm } from '../../components/SignUpForm';
import styles from './auth.module.scss';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    fullname: '',
    email: '',
    password: '',
    role: 'Student',
  });

  const onLoginChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const onSignUpChangeData = (e) => {
    setSignUpData({ ...signUpData, [e.target.id]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    console.log(signUpData);
  };

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.imagewrapper}></div>
        <div className={styles.form}>
          <div className={styles.loginselector}>
            <button
              className={isLogin ? styles.selected : null}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!isLogin ? styles.selected : null}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          <form onSubmit={onSubmitHandler} autoComplete='off'>
            {isLogin ? (
              <LoginForm
                loginData={loginData}
                onChange={onLoginChangeHandler}
              />
            ) : (
              <SignUpForm
                signUpData={signUpData}
                onChange={onSignUpChangeData}
              />
            )}
            <button type='submit'>{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Auth };
