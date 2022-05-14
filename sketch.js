//Creative Coding Final Project - Araceli Gonzalez-Rocha
// series of resistence and radical themed posters

// references:

// https://antiboredom.github.io/p5.riso/

// Poster 1 credit:
// * inspired by the wretched of the earth - frantz fanon

// * photo:  https://www.feargalmac.org/world/frantz-fanon-and-decolonisation/

// Poster 2: Mark of the Beast credit
//*  inspired by the song E.Coli by Earl Sweatshirt

// * photo: https://flic.kr/p/azAV2i attribution to Sarah Armitt for photography (not affiliated)
// photo has been further manipulated by me

// * for offset: https://editor.p5js.org/ftobon@heartofla.org/sketches/rkf13c_uX

// *police badge from wikipedia commons: https://commons.wikimedia.org/wiki/File:Patch_of_the_New_York_City_Police_Department.svg#/media/File:Patch_of_the_New_York_City_Police_Department.svg

// poster 3 credit:
// * for stars: https://p5js.org/examples/form-star.html
// * photo1: https://www.uncut.co.uk/reviews/gil-scott-heron-the-revolution-begins-the-flying-dutchman-masters-2067/
// * photo 2: https://ilovemy4c-hair.tumblr.com/post/100218838072/culturesoul-1970s-afro-visions-credits-from-top

let state; // controlling poster executed

// riso layers

//poster 1
let red;
let black;

// poster 2
let blue;
let black2;
let white;

//poster 3
let green;

// poster 1 imagess
let fanon;
let fanonQ;
// poster 2 images
let cops;
let badge;
// poster 3 images
let rightGil, leftGil;
let dither1, dither2;

// poster 1 layer color
let colorImage, colorQuote;
// poster 2 layer color
let colorBlock;

// star color
let c;

let canvas;

// change to  png when printing
function preload() {
  // poster 1 images
  fanon = loadImage("assets/poster1/FrankFanon.jpeg");
  fanonQ = loadImage("assets/poster1/fanonquote.jpeg");
  // poster 2 images
  badge = loadImage("assets/poster2/badgeColor.png");
  cops = loadImage("assets/poster2/cops.jpeg");
  // poster 3 images
  rightGil = loadImage("assets/poster3/rightGil.png");
  leftGil = loadImage("assets/poster3/leftGil.png");
}

function setup() {
  pixelDensity(1);
  let canvas = createCanvas(11 * 72, 17 * 72);
  canvas.position(((windowWidth-width)/2), ((windowHeight-height)/2));

  // riso layers
  //poster 1
  red = new Riso("red");
  black = new Riso("black");

  // poster 2
  black2 = new Riso("black");
  blue = new Riso("blue");
  white = new Riso("white");

  //poster 3
  green = new Riso("green");

  state = 0; // initializing intro

  noCursor(); // removoving cursor

  c = color(255, 233, 0); // star color
}

function draw() {
  // poster functions
  intro();
  poster1();
  poster2();
  poster3();

  // styling red dot cursor
  fill(255, 0, 0);
  stroke(0);
  ellipse(mouseX, mouseY, 15, 15);
}

// increase "state" variable when mouseClick,
// changes poster function executed
function mouseClicked() {
  if (state >= 0) {
    state = state + 1;
  }
  if (state > 3) {
    window.location.reload();
  }
}
// drawing star with riso
// https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints, layer) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  layer.beginShape();
  layer.stroke(255);
  layer.fill(255);
  layer.strokeWeight(1);
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    layer.vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    layer.vertex(sx, sy);
  }
  layer.endShape(CLOSE);
}

// drawing star without riso https://p5js.org/examples/form-star.html
function star2(x, y, radius1, radius2, npoints, co) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  noStroke();
  fill(co);
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// intro page design
function intro() {
  if (state == 0) {
    background(255, 0, 0);
    // styling text
    fill(255);
    textStyle(BOLD);
    textFont("Futura");
    textAlign(CENTER);
    textSize(52);
    text("PRINT IS RESISTANCE", width / 2, 200);
    textSize(25);
    textStyle(NORMAL);
    text("a poster series with themes of", width / 2, height - 220);
    text("radicalism and resistance", width / 2, height - 190);
    textSize(20);
    text("click to navigate", width / 2, height - 100);
    text("move mouse to interact", width / 2, height - 80);
    // styling rect graphic
    fill(0);
    rectMode(CENTER);
    rect(width / 2, height / 2, 500, 500);

    star2(width / 2, height / 2, 10, 25, 5, c);
  }
}

// poster 1 design
// Poster 1 credit:
// inspired by the wretched of the earth - frantz fanon
// photo: © Siemens Stiftung
function poster1() {
  if (state == 1) {
    background(255);

    clearRiso();

    // postiton of fanon
    let xFanon = 80;
    let yFanon = 235;
    // size of fanon
    let widthFanon = 712;
    let heightFanon = 991;
    // setting dither of fanon
    let dither = ditherImage(fanon, "none", 135);
    // setting gap between dithered images
    let gap = 80;
    // change color of text and image layer based on mouse Y position
    if (mouseY < height / 2) {
      colorImage = red;
      colorQuote = black;
    } else {
      colorImage = black;
      colorQuote = red;
    }

    // positioning quote & making it dark
    colorQuote.fill(255);
    colorQuote.image(fanonQ, 0, 0, 800, 600);
    colorQuote.image(fanonQ, 0, 0, 800, 600);
    colorQuote.image(fanonQ, 0, 0, 800, 600);
    colorQuote.image(fanonQ, 0, 0, 800, 600);

    colorQuote.textStyle(BOLD);
    colorQuote.textFont("Futura");
    colorQuote.textAlign(CENTER, CENTER);
    colorQuote.textSize(30);
    colorQuote.text("- Frantz Fanon", width / 4 - 20, 900);
    // positioning image
    colorImage.fill(255);
    colorImage.image(dither, xFanon, 235, widthFanon, heightFanon);
    // adding echo image based on mouseX
    if (mouseX < width / 2 && mouseX > width / 4) {
      colorImage.fill(100);
      colorImage.image(dither, xFanon - gap, 235, widthFanon, heightFanon);
    }
    if (mouseX < width / 4) {
      colorImage.fill(100);
      colorImage.image(dither, xFanon - gap, 235, widthFanon, heightFanon);
      colorImage.fill(50);
      colorImage.image(dither, xFanon - gap * 2, 235, widthFanon, heightFanon);
    }
    // cutting out overlap
    colorImage.cutout(colorQuote);

    drawRiso();
  }
}

// Poster 2: Mark of the Beast
// credits:
// inspired by the song E.Coli by Earl Sweatshirt
// photo: https://flic.kr/p/azAV2i attribution to Sarah Armitt for photography (not affiliated)
// photo has been further manipulated by me

function poster2() {
  if (state == 2) {
    background(255);
    clearRiso();

    // control dither level
    let threshold = map(mouseY, 0, height, 100, 150);

    // positioning text
    white.fill(255);
    white.textStyle(BOLD);
    white.textFont("Futura");
    white.textSize(82);
    white.textAlign(CENTER);
    white.text("MARK OF", width / 2, 130);
    white.text("THE BEAST", width / 2, 220);

    // cop image dithered
    let dithered = ditherImage(cops, "bayer", threshold);
    black.fill(255);
    black.imageMode(CENTER);
    black.image(dithered, width / 2, height / 2, width + 20, height + 20);
    // badge image
    black2.fill(255);
    black2.imageMode(CENTER);
    black2.image(badge, width / 2, height / 2 + 250, 200, 248);
    // change rectangle color depending on mouseX
    if (mouseX < width / 2) {
      colorBlock = red;
    } else {
      colorBlock = blue;
    }
    // rectangle
    colorBlock.fill(255);
    colorBlock.rectMode(CENTER);
    colorBlock.rect(width / 2, height / 2 + 250, 220, 265);
    // display badge
    black.cutout(white);
    black.cutout(colorBlock);
    black.cutout(black2);

    drawRiso();
  }
}

// Poster 3
function poster3() {
  if (state == 3) {
    background(255);
    clearRiso();
    // positioning and displaying quote
    black.fill(255);
    black.textFont("Futura");
    black.textStyle(BOLD);
    black.textAlign(CENTER);
    black.textSize(52);
    black.text("the revolution will not", width / 2, 100);
    black.text("be televised because its", width / 2, 170);
    black.text("between the ears", width / 2, 240);
    black.text("gil scott heron", width / 2, height - 110);
    // drawing stars
    for (i = 0; i < 3; i++) {
      star(i * 120 + 270, height - 210, 10, 25, 5, black);
    }
    for (i = 0; i < 2; i++) {
      star(i * 120 + 340, height - 270, 10, 25, 5, black);
    }
    // setting dither of images
    dither1 = ditherImage(leftGil, "atkinson");
    dither2 = ditherImage(rightGil, "atkinson");
    // variables that control image opacities
    let fillLevel = map(mouseX, 0, width, 100, 255);
    let rightFill = fillLevel;
    let leftFill = 355 - fillLevel;

    // for offset: https://editor.p5js.org/ftobon@heartofla.org/sketches/rkf13c_uX
    let offset = sin(frameCount * 0.2) * 10;
    // red gil scott
    red.fill(rightFill);
    red.imageMode(CENTER);
    red.image(dither2, width / 2 + offset, height / 2);
    // green gil scott
    green.fill(leftFill);
    green.imageMode(CENTER);
    green.image(dither1, width / 2 - offset, height / 2);

    drawRiso();
  }
}
