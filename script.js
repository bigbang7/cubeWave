// Trying to recreate the gif shown here: https://twitter.com/beesandbombs/status/940639806522085376
// using p5 and webgl

let angle = 0;
let offSlider;
let offInput;

function setup(){
  createCanvas(400,400);

  offSlider = createSlider(0, 1, 0.1, 0.01);
  offSlider.position(10, height + 10);


}

function draw(){
  background(0);
  translate(width/2 ,height/2);
  rectMode(CENTER);

  let offset = 0;
  let offsetIncrement = offSlider.value();

  text("offset = " + offSlider.value(), -200, -190);

  for(let x = 0; x < width; x+=10){
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 100);
    fill(255);
    rect(x - width/2, 0, 9, h);
    offset += offsetIncrement;
  }


  angle += 0.05;
}
