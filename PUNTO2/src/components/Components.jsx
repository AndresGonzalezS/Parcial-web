import "./components.css";

function Components() {
  return (
    <>
      <div className="container">
        <div className="header">
          <p>Need help?</p>
        </div>
        <div className="containerSection">
          <div className="LogoContainer">
            <div className="Logo">
              <img src="./OIP.svg" alt="Logo clean Car" width="150px" color="green" />
              <p>India´s first waterless car cleaning company</p>
            </div>
          </div>
          <div className="SignUpContainer">
            <div className="form-section">
              <div className="title">Log In</div>
              <form>
                <label>Email</label>
                <input type="text" placeholder="joe@gmail.com" />
                <label>Password</label>
                <input type="text" placeholder="Enter your password" />
                <p className="labelForgotPassword">forgot password?</p>
              </form>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Components;
