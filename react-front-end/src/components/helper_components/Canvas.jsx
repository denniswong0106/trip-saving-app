import React, { useRef, useEffect, useContext } from "react";
import explosion from "../../helperfunctions/explosion";
import DataContext from "../../helperfunctions/DataContext";

function Canvas(props) {
  const canvasRef = useRef(null);
  let bag = document.createElement("img");
  bag.src = require("../../pics/moneyBag.gif");

  let sfx = document.createElement("audio");
  sfx.src = require("../../pics/coins-drop.mp3");

  let sfx2 = document.createElement("audio");
  sfx2.src = require("../../pics/explosion.mp3");

  let horns = document.createElement("audio");
  sfx2.src = require("../../pics/horns2.mp3");

  let sfxShake = document.createElement("audio");
  sfxShake.src = require("../../pics/change-drop3.mp3");

  let background1 = document.createElement("img");
  background1.src = require("../../pics/sandBottm.png");

  let background2 = document.createElement("img");
  background2.src = require("../../pics/skybeach.png");

  // used use context to use surpriseMechanic
  const { surpriseMechanic } = useContext(DataContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    explosion(
      canvas,
      context,
      bag,
      sfx,
      sfx2,
      sfxShake,
      surpriseMechanic,
      props.trip_id,
      horns,
      background1,
      background2
    );
  }, [explosion]);

  return (
    <>
      {/* <img src={require('../../pics/coin.gif')} /> */}
      <canvas ref={canvasRef} {...props} />
    </>
  );
}

export default Canvas;
