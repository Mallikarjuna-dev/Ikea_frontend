import { LoginWrapper } from "./LoginWrapper";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [auth, setAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getLocalToken();
  });

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const getLocalToken = () => {
    const token = JSON.parse(localStorage.getItem("ikeaLogin")) || "";
    if (token.token) {
      setAuth(true);
      window.location.href = "/";
    }
  };

  //handleSubmit
  const handleChange = (e) => {
    console.log(e.target.value);
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();

    axios
      .post(`https://ikea-backend-u5.herokuapp.com/user/login`, form)
      .then(({ data }) => {
        if (!data.token) {
          console.log("No");
        } else {
          console.log("Yes");
          console.log(data);
          console.log(data.token);
          localStorage.setItem(
            "ikeaLogin",
            JSON.stringify({
              userName: data.item.firstName,
              token: data.token,
              status: true,
            })
          );
          //   window.location.reload();
          window.location.href = "/";
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <LoginWrapper>
      <div className="mainDiv">
        <div className="leftDiv">
          <div className="logo">
            <div className="icon">
              {/* <AiOutlineArrowLeft
                style={{ fontSize: "28px", color: "white", margin: 12 }}
              /> */}
            </div>
            <div className="logoImage">
              {/* <img
                src="https://in.accounts.ikea.com/resources/static/logo.svg"
                alt=""
                style={{
                  height: "100%",
                  width: 100,
                  objectFit: "contain",
                  marginLeft: 10,
                }}
              /> */}
            </div>
          </div>
          <div className="midSection">
            <div style={{ color: "white" }}>
              <h2 style={{ color: "white" }}>
                <span style={{ color: "yellow", fontWeight: "bold" }}>
                  Login{" "}
                </span>{" "}
                to your IKEA account.
              </h2>
              <br />
              <p>
                Too many passwords? <br />
                You can now login with an OTP we will send on your email address
                or verified mobile number.
              </p>
              <br />
              <p>
                Access your IKEA account using your email address to add and
                verify your mobile number.
              </p>
            </div>
          </div>
          <div className="bottom" style={{ color: "white", fontSize: 10 }}>
            <div style={{ margin: 25, marginLeft: 200 }}>
              <p>
                IKEA.in - Cookie Policy and Privacy Policy <br />© Inter IKEA
                Systems B.V. 1999-2022
              </p>
            </div>
          </div>
        </div>
        <div className="rightDiv">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="formDiv">
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="">Email: </label>
              </div>
              <div>
                <input
                  type="text"
                  id="email"
                  style={{ width: "80%", height: "40px" }}
                  placeholder="user@abc.com"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <br />
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="">Password: </label>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  style={{ width: "80%", height: "40px" }}
                  placeholder="enter your password"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <br />
              <a href="#" style={{ fontSize: 14, color: "black" }}>
                Forgot your password?
              </a>
              <div className="submitBtn" style={{ margin: 10 }}>
                <button>Continue</button>
              </div>
            </div>
          </form>
          <div className="signUpDiv">
            <p style={{ fontWeight: "bold", marginBottom: 20 }}>
              Do not have an IKEA account? Create one now:
            </p>
            <div className="homeBtn" style={{ margin: "auto", marginLeft: 25 }}>
              <button>
                <Link className="linkTag" to="/register">
                  I'm buying for my home
                </Link>
              </button>
            </div>
            <div
              className="companyBtn"
              style={{ margin: "auto", marginLeft: 25 }}
            >
              <button>
                <Link className="linkTag" to="/register">
                  I'm buying for my company
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
};
