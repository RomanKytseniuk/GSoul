import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import { sbt } from "../../helpers/configure-sbt";
import { storage } from "../../helpers/configure-storage";
import { create } from "ipfs-http-client";
import { Buffer } from "buffer";
import { provider, sbt_address } from "../../helpers/constants";

export default function MainPage() {
  const params = useParams();
  const [domain, setDomain] = useState(params.domain);

  const [hasToken, setHasToken] = useState();
  const [karma, setKarma] = useState("");
 
  const [receiver, setReceiver] = useState("");

  const mintToken = () =>{
     setHasToken(true);
  }

  if (!hasToken) {
    return (
      <div className="loginPage">
        <header className="loginPage-header">
          <div className="loginPage-wrapper">
            <p>Welcome, {domain}</p>
            <a className="loginPage-link" href="#" onClick={mintToken} >
              Mint your token
            </a>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="loginPage">
        <header className="loginPage-header">
          <div className="loginPage-wrapper">
            <p>Welcome, {domain}</p>
            <form>
              <input
                className="register-input"
                type="text"
                placeholder="upvote address"
                onChange={(e) => {
                  setReceiver(e.target.value);
                }}
              />
              <button
                type="button"
                className="register-button"
              >
                Upvote
              </button>
            </form>
            <form>
              <input
                className="register-input"
                type="text"
                placeholder="downvote address"
                onChange={(e) => {
                  setReceiver(e.target.value);
                }}
              />
              <button
                type="button"
                className="register-button"
              
              >
                Downvote
              </button>
            </form>
          </div>
        </header>
      </div>
    );
  }
}
