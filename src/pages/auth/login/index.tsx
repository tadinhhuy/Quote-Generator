import './style.scss';

const LogIn = () => {
  return (
    <>
      <div className="login-page">
        <div className="login-page__card">
          <form>
            <label htmlFor="email">Email</label>
            <input name="email" />
            <label htmlFor="password">Password</label>
            <input name="password" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
