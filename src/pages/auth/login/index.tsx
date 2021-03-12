import './style.scss';

const LogIn = () => {
  return (
    <>
      <div className="login-page container">
        <div className="login-page__card">
          <form>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
