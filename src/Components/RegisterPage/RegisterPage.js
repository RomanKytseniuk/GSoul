import { React, useEffect, useState } from "react";
import "./RegisterPage.css";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const params = useParams();
  const [address, setAddress] = useState(params.address);
  const [domain, setDomain] = useState(params.domain);
  const [accessToken, setAccessToken] = useState(params.accessToken);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");

  const signUp = async () => {
    const data = {
      name,
      lastName,
      birthday,
      email,
      sex,
    };
      navigate(`/mainPage/${name}/${lastName}`);
  };

  return (
    <div className="loginPage">
      <header className="loginPage-header">
        <div className="loginPage-wrapper">
          <form>
            <input
              className="register-input"
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="register-input"
              type="text"
              placeholder="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="register-input"
              type="text"
              placeholder="birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <input
              className="register-input"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="register-input"
              type="text"
              placeholder="sex"
              onChange={(e) => setSex(e.target.value)}
            />
            <button className="register-button" type="button" onClick={signUp}>
              Sign Up
            </button>
          </form>
        </div>
      </header>
    </div>
  );
}
