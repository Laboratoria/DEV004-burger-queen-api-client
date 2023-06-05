import { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import fiveguys from "../images/fiveguys-logo.webp";
import envelope from "../images/envelope.png";
import lock from "../images/lock.png";
//import restaurant from '../images/five-restaurant.png'
import redBanner from "../images/redAndWhite.png";
import "../Login.css";
import { loginAxios } from '../api/axios'

const LoginPage = () => {
  //Funciones
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("false");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
    loginAxios(user, pwd)
    .then(res => {
      console.log(res);
    } 
    )
    .catch(err => {
      console.log(err)
      if(err.response.data === "Incorrect password"){
        console.log("Incorrect password")
      }
    })
  };
  //HTML
  return (
    <>
      {/* {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/pin">Go to Home</a>
          </p>
        </section>
      ) : ( */}
        <div>
          <div>
            <img src={redBanner} alt="red Banner" className="w-50" />
          </div>
          <section>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </section>
          <div className="bg-white d-flex justify-content-center align-items-center vh-100 w-50">
            <div className="bg-light p-5 rounded-5">
              <div className="d-flex justify-content-center">
                <img
                  src={fiveguys}
                  alt="five guys logo"
                  style={{
                    width: 120,
                    height: 75,
                  }}
                />
              </div>
              <div style={{ width: "20rem" }}>
                <h3 className="fw-bold">Hello Again!</h3>
                <h6 className="text-secondary">Welcome Back</h6>
              </div>
              <section>
                <form onSubmit={handleSubmit}>
                  <div className="input-group mt-4">
                    <div className="input-group-text border border-danger">
                      <img
                        src={envelope}
                        alt="envelope"
                        style={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                    <input
                      className="form-control border border-danger"
                      type="text"
                      placeholder="Username"
                      id="username"
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                    />
                  </div>
                  <div className="input-group  mt-2">
                    <div className="input-group-text border border-danger">
                      <img
                        src={lock}
                        alt="lock"
                        style={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </div>
                    <input
                      className="form-control border border-danger"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={pwd}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-around">
                    <a
                      href="www.google.com"
                      className="pt-2 text-decoration-none text-secondary fw-light ForgotPassword"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <button className="btn bg-danger text-white w-100 mt-4 rounded-5">
                    Login
                  </button>
                </form>
              </section>

              {/* <div className=' d-flex justify-content-around'>
                <a href="/pin" className='text-danger mt-4 ContinuePin'>Continue with PIN</a>
            </div> */}
            </div>
          </div>
        </div>
       {/* )} */}
    </>
  );
};

export default LoginPage;
