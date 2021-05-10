import React, { useRef, useEffect } from 'react'
import explosion from '../../helperfunctions/explosion';

function Canvas(props) {
    const canvasRef = useRef(null);
    let coin = new Image();
    coin.src = '../../pics/coin.gif';

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        explosion(canvas, context, coin);
    }, [explosion])

    return (
    <>
        <canvas ref={canvasRef} {...props}/>
    </>
    )
}

export default Canvas