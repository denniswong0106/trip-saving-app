import React, { useRef, useEffect, useContext } from "react";
import explosion2 from "../../helperfunctions/explosion2";
import DataContext from "../../helperfunctions/DataContext";

function Canvas(props) {
  const canvasRef = useRef(null);
  let bag = document.createElement("img");
  bag.src = require("../../pics/moneyBag.gif");

  let sfx = document.createElement("audio");
  sfx.src = require("../../pics/coins-drop.mp3");

  let sfx2 = document.createElement("audio");
  sfx2.src = require("../../pics/explosion.mp3");

  let sfxShake = document.createElement("audio");
  sfxShake.src = require("../../pics/change-drop3.mp3");

  let background = document.createElement("img");
  sfxShake.src = require("../../pics/change-drop3.mp3");

  // used use context to use surpriseMechanic
  const { surpriseMechanic } = useContext(DataContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    explosion2(
      canvas,
      context,
      bag,
      sfx,
      sfx2,
      sfxShake,
      surpriseMechanic,
      props.trip_id,
      background
    );
  }, [explosion2]);

  return (
    <>
      {/* <img src={require('../../pics/coin.gif')} /> */}
      <canvas ref={canvasRef} {...props} />
    </>
  );
}

export default Canvas;
