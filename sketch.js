// by Frederik 'zlyfa' Shull, inspired by Coding Train.

var msColor = true;
var sColor = true;
var mColor = true;
var hColor = true;

function preload() {}

function setup() {
  // noLoop();
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(width / 2, height / 2);
  frameRate(120);
  background(20);
  noFill();
  stroke(30);

  var ms = new Date().getMilliseconds();
  var s = second();
  var m = minute();
  var h = hour();

  var msAngle = (TAU / 1000) * (ms + TAU / 1000) - HALF_PI;
  var sAngle = (TAU / 60) * (s + ms / 1000) + (TAU / 1000) - HALF_PI;
  var mAngle = (TAU / 60) * (m + (s / 60) + (ms / 100000)) + (TAU / 1000) - HALF_PI;
  var hAngle = (TAU / 12) * (h + (m / 60) + (s / 6000) + (ms / 10000000)) + (TAU / 1000) - HALF_PI; // May be (TAU / 24).

  var msSize = 300;
  var sSize = 400;
  var mSize = 500;
  var hSize = 600;

  var msv = p5.Vector.fromAngle(msAngle).mult(20); // Too distracting. EDIT: Maybe the small variant is better.
  var sv = p5.Vector.fromAngle(sAngle).mult(100);
  var mv = p5.Vector.fromAngle(mAngle).mult(80);
  var hv = p5.Vector.fromAngle(hAngle).mult(60);

  // strokeWeight(2); // Messes up the theme.
  // for (let i = 0; i <= TAU; i += TAU / 12) { // Is TAU / 6 better?
  //   var v = p5.Vector.fromAngle(i).mult(100);
  //   line(0, 0, v.x, v.y);
  // }

  strokeWeight(3);

  arc(0, 0, msSize, msSize, 0, TAU);
  arc(0, 0, sSize, sSize, 0, TAU);
  arc(0, 0, mSize, mSize, 0, TAU);
  arc(0, 0, hSize, hSize, 0, TAU);

  // Milliseconds
  stroke(76, 175, 80);
  // arc(0, 0, msSize, msSize, -HALF_PI, msAngle); // Original.
  arc(0, 0, msSize, msSize, msAngle - HALF_PI, msAngle); // Better flow?
  line(0, 0, msv.x, msv.y); // See msv declaration.

  // Seconds
  stroke(244, 67, 54);
  arc(0, 0, sSize, sSize, -HALF_PI, sAngle);
  line(0, 0, sv.x, sv.y);

  // Minutes
  stroke(255, 235, 59);
  arc(0, 0, mSize, mSize, -HALF_PI, mAngle);
  line(0, 0, mv.x, mv.y);

  // Hours
  stroke(33, 150, 243);
  arc(0, 0, hSize, hSize, -HALF_PI, hAngle);
  line(0, 0, hv.x, hv.y);
}
