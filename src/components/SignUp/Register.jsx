// import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterWrapper } from "./RegisterWarapper";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    mobile: "",
    dob: "",
    gender: "",
    postCode: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    // console.log(event.target.value);
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`https://ikea-backend-u5.herokuapp.com/user/register`, form)
      .then(() => {
        alert(
          `Congratulations! ${form.firstName} your account has been created`
        );
        console.log(form);
        changeSign();
      });
  };

  const changeSign = () => {
    navigate(`/login`);
  };

  return (
    <RegisterWrapper>
      <div className="leftDiv">
        <p className="pTag">
          Create an
          <span style={{ color: "blue" }} className="leftDivFont">
            IKEA Family
          </span>
          <br />
          Profile
        </p>

        <div className="imgDiv">
          <div className="imgDivLeft">
            <div className="varImageDiv" style={{ height: "275px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/da397fb7ef6e6d94257db1af77290435.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "200px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/281cff11b1bbb9d08737f5d656d7f8d6.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "275px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/a620cf6567e1d802e42dad2d419da1a1.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "200px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/558de95264a0f9501533593ab355259e.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="imgDivRight">
            <div className="varImageDiv" style={{ height: "200px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/5fdf8de127f0c602066c3aee7254c463.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "275px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/ddc28f908192eea06190ca5bf8657069.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "200px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/471c4b31a982119d5ad6018388835e64.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "275px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/3e48e8734c5c5751bd6b21045258bfac.jpg"
                alt=""
              />
            </div>
            <div className="varImageDiv" style={{ height: "200px" }}>
              <img
                src="https://www.ikea.com/in/en/profile/6c9a5b763c764348260c1831ee856f56.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <div className="radioMainDiv">
            <p className="radio">
              Become a member of IKEA Family today. Did we mention <br /> it's
              free to join?
            </p>

            <div className="radioDiv">
              <input
                type="radio"
                className="formText"
                value={"xx"}
                id={"yes"}
                style={{ marginRight: "10px" }}
                onChange={(event) => handleChange(event)}
              />
              <p htmlFor="">
                Yes, I want to enjoy rewards, discounts and a lot more! Get the
                details
              </p>
            </div>
            <div className="radioDiv">
              <input
                type="radio"
                className="formText"
                value={"jjj"}
                id={"no"}
                style={{ marginRight: "10px" }}
                onChange={(event) => handleChange(event)}
              />
              <p htmlFor="">
                No thanks, I just want to create an IKEA account today. Maybe
                another day. Get the details
              </p>
            </div>
          </div>

          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">First Name: </label>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="formText"
                id={"firstName"}
                placeholder="Enter your name"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Surname: </label>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="formText"
                id={"surname"}
                placeholder="Enter your surname"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Mobile(+91): </label>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="formText"
                id={"mobile"}
                placeholder="10 Digits only"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">DOB: </label>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="formText"
                id={"dob"}
                placeholder="DD-MM-YYYY"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Gender: </label>
            </div>
            <div className="inputDiv">
              <select
                name=""
                id="gender"
                className="selectTag"
                onChange={(event) => handleChange(event)}
              >
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Postcode: </label>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="formText"
                id={"postCode"}
                placeholder="6 Digits only"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Preferred Store: </label>
            </div>
            <div className="inputDiv">
              <select
                name=""
                id="store"
                className="selectTag"
                // onChange={(event) => handleChange(event)}
              >
                <option value="male">Hyderabad</option>
                <option value="female">Worli</option>
                <option value="male">Navi Mumbai</option>
                <option value="female">Online Store</option>
              </select>
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Email: </label>
            </div>
            <div className="inputDiv">
              <input
                type="text"
                className="formText"
                id={"email"}
                placeholder="user@abc.com"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="formText">
            <div className="labelDiv">
              <label htmlFor="">Password: </label>
            </div>
            <div className="inputDiv">
              <input
                type="password"
                className="formText"
                id={"password"}
                placeholder="Test@123"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <br />
          <div className="submitDiv">
            <input
              type="submit"
              value={"Create Profile"}
              className="submitBtn"
            />
          </div>
        </form>
      </div>
    </RegisterWrapper>
  );
};
