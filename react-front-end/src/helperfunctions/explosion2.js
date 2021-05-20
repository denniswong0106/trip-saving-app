// taken from https://codepen.io/deanwagman/pen/EjLBdQ and modified

function explosion2(
  canvas,
  ctx,
  bag,
  sfxBoom,
  sfx2Boom,
  sfxShake,
  surpriseMechanic,
  trip_id,
  background1,
  background2
) {
  // Set Canvas to be window size
  canvas.width = 500; //window.innerWidth;
  canvas.height = 650; //window.innerHeight;

  // Configuration, Play with these
  var config = {
    particleNumber: 800,
    maxParticleSize: 10,
    maxSpeed: 40,
    colorVariation: 25,
  };
  let imageSize = 150;
  // let coinX = 0;
  // let coinY = 0;
  let showBag = true;
  let shake = false;
  ctx.font = "30px Arial";
  let text = `$0 added to your account!`;

  // Colors
  var colorPalette = {
    //backroud colour
    bg: { r: 248, g: 248, b: 255 },
    matter: [
      { r: 205, g: 202, b: 191 },
      { r: 246, g: 202, b: 27 },
      { r: 255, g: 205, b: 0 },
      { r: 252, g: 178, b: 96 }, // solorFlare
      { r: 253, g: 238, b: 152 }, // totesASun
    ],
  };

  // Some Variables hanging out
  var particles = [],
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    drawBg,
    // Draws the background for the canvas, because space
    drawBg = function (ctx, color) {
      ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

  // Particle Constructor
  var Particle = function (x, y) {
    // X Coordinate
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = colorVariation(
      colorPalette.matter[
        Math.floor(Math.random() * colorPalette.matter.length)
      ],
      true
    );
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
  };

  // Provides some nice color variation
  // Accepts an rgba object
  // returns a modified rgba object or a rgba string if true is passed in for argument 2
  var colorVariation = function (color, returnString) {
    var r, g, b, a, variation;
    r = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.r
    );
    g = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.g
    );
    b = Math.round(
      Math.random() * config.colorVariation -
        config.colorVariation / 2 +
        color.b
    );
    a = Math.random() + 0.5;
    if (returnString) {
      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
      return { r, g, b, a };
    }
  };

  // Used to find the rocks next point in space, accounting for speed and direction
  var updateParticleModel = function (p) {
    var a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180
      ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
      : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
    p.d > 90 && p.d < 270
      ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
      : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
    return p;
  };

  // Just the function that physically draws the particles
  // Physically? sure why not, physically.
  var drawParticle = function (x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.closePath();
  };

  // Remove particles that aren't on the canvas
  var cleanUpArray = function () {
    particles = particles.filter((p) => {
      return p.x > -100 && p.y > -100;
    });
  };

  var initParticles = function (numParticles, x, y) {
    // coinX = x-imageSize/2;
    // coinY = y-imageSize/2;
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle(x, y));
    }
    particles.forEach((p) => {
      drawParticle(p.x, p.y, p.r, p.c);
    });
  };

  // That thing
  window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();

  let drawBg2 = function (imageSand, imageSky) {
    ctx.drawImage(imageSand, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageSky, 0, 0, canvas.width, canvas.height);
  };
  // Our Frame function
  // let y = canvas.height / 2 - imageSize / 2;
  let y = 0;
  let gravity = 0.2;
  let gravitySpeed = 0;
  var frame = function () {
    function stopMotion() {
      let stopValue = 300;
      if (y > stopValue) {
        y = stopValue;
      }
    }
    let x = canvas.width / 2 - imageSize / 2;
    gravitySpeed += gravity;
    y += gravitySpeed;
    stopMotion();
    // Draw background first
    drawBg2(background1, background2);
    // drawBg(ctx, colorPalette.bg);
    // Update Particle models to new position
    particles.map((p) => {
      return updateParticleModel(p);
    });
    // Draw em'
    particles.forEach((p) => {
      drawParticle(p.x, p.y, p.r, p.c);
    });
    // Draw bag if needed
    if (showBag === true) {
      // Shake bag if needed
      if (shake === true) {
        sfxShake.play();
        x = x + Math.random() * 10;
        y = y + Math.random() * 10;
      }
      ctx.drawImage(bag, x, y, imageSize, (imageSize * 3) / 4);
      ctx.drawImage(bag, x, y, imageSize, (imageSize * 3) / 4);
    } else {
      // Draw text after opening
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }
    // ctx.drawImage(coin, coinX, coinY, imageSize, imageSize);
    // Play the same song? Ok!
    window.requestAnimFrame(frame);
  };

  // Click listener
  document.body.addEventListener("click", function (event) {
    let x = event.offsetX,
      y = event.offsetY;
    //if the click is inside the bounds of money bag x/y
    if (
      x > canvas.width / 2 - imageSize / 2 &&
      x < canvas.width / 2 - imageSize / 2 + imageSize &&
      y > canvas.height / 2 - imageSize / 2 &&
      y < canvas.height / 2 - imageSize / 2 + imageSize &&
      showBag === true &&
      (text = `$${surpriseMechanic(trip_id)} added to your account!`)
    ) {
      // Sfx on opening
      sfx2Boom.play();
      sfxBoom.play();
      showBag = false;
      cleanUpArray();
      initParticles(config.particleNumber, x, y);
    }
  });

  // Listens for mouse over
  document.body.addEventListener("mousemove", (event) => {
    let x = event.offsetX;
    let y = event.offsetY;
    //if you are over the bag x/y bounds shake will be true
    if (
      x > canvas.width / 2 - imageSize / 2 &&
      x < canvas.width / 2 - imageSize / 2 + imageSize &&
      y > canvas.height / 2 - imageSize / 2 &&
      y < canvas.height / 2 - imageSize / 2 + imageSize &&
      showBag === true
    ) {
      shake = true;
    } else {
      shake = false;
    }
  });

  // First Frame
  frame();

  // First particle explosion
  initParticles(config.particleNumber);
}

export default explosion2;
