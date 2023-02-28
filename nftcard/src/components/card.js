import React from "react";
import nft from "../images/image-equilibrium.jpg";
import eth from "../images/icon-ethereum.svg";
import time from "../images/icon-clock.svg";
import "../App.css";
import pfp from "../images/image-avatar.png";
import eye from "../images/icon-view.svg";

function card() {
  return (
    <div id="card">
      <div id="container">
        <div id="imgandh1">
          <div id="eyediv">
            <img src={eye} id="eye" alt="view"></img>
          </div>
          <img src={nft} id="nft" alt="Equilibrium #3429 NFT"></img>
          <div className="overlay"></div>
        </div>
      </div>
      <div id="titleandp">
        <h1>Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>

      <div id="ethandtime">
        <div id="ethtextdiv">
          <img src={eth} alt="eth logo"></img>
          <span id="ethtext">0.041 ETH</span>
        </div>
        <div id="timetextdiv">
          <img src={time} alt="clock"></img>
          <span id="timetext">3 days left</span>
        </div>
      </div>
      <hr></hr>
      <div id="pfpdiv">
        <img src={pfp} id="pfp" alt="Jules profile image"></img>
        <p id="creation">Creation of&nbsp;</p>
        <span id="jules">Jules Wyvern</span>
      </div>
    </div>
  );
}

export default card;
