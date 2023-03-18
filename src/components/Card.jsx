import React, { useState } from "react";
import Calculator from "./Calculator";
import Results from "./Results";
import logo from "../assets/images/logo.svg";
import ReactHowler from "react-howler";
import laland from "../assets/music/lalast.ogg";

function Card() {
  const [newData, setNewData] = useState({
    input: 0,
    bill: 0,
    people: 0,
  });

  return (
    <>
      <ReactHowler src={laland} playing={true} loop={true} />
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main className="section-container-main">
        <div className=" section-card">
          <div className="row">
            <div className="col-12 col-md-6">
              <Calculator newData={newData} setNewData={setNewData} />
            </div>
            <div className="col-12 col-md-6">
              <Results newData={newData} />
            </div>
          </div>
      <div className="attribution ">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/OctopusMichael" target="_blank">Michael Diaz</a>.
      </div>
        </div>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default Card;
