import React, { useRef, useEffect } from 'react'
import explosion from '../../helperfunctions/explosion';

function Canvas(props) {
    const canvasRef = useRef(null);
    let coin = document.createElement("img");
    coin.src = require('../../pics/coin.gif');
    
    let bag = document.createElement("img");
    bag.src = require('../../pics/moneyBag.gif');

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        explosion(canvas, context, coin);
    }, [explosion])

    return (
    <>
        {/* <img src={require('../../pics/coin.gif')} /> */}
        <canvas ref={canvasRef} {...props}/>
    </>
    )
}

export default Canvas