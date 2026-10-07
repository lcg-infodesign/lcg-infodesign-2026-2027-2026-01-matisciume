let xMax = 400;
let yMax = 600;
let yBolle = 0;
let xPesci = 0;
 
function setup() {
  createCanvas(xMax, yMax);
}
 
function draw() {
  background(0, 90, 140);
 
  //bolle
  push();
  stroke(255);
  strokeWeight(1);
  for (let i = 0; i < 90; i++) {
    let sx = (i * 180) % width + i % 2;
    let sy = height - ((i * 189 + yBolle) % height);
 
    if (i % 3 == 0) {
      //1 bolla su 3 grande
      fill(255, 255, 255, 60);
      ellipse(sx, sy, 10, 10);
    } else {
      //le altre piccole
      fill(255, 255, 255, 150);
      ellipse(sx, sy, 2, 2);
    }
  }
  pop();
 
  //fondale
  strokeWeight(0);
  fill(210, 180, 120);
  rect(0, yMax - 25, xMax, 25);
 
  //pesci
  push();
  strokeWeight(0);
  for (let i = 0; i < 9; i++) {
    let py = 30 + i * 65; //altezze diverse
    let percorso = (i * 200 + xPesci) % (xMax + 80);
    let px = percorso - 30; //tutti verso destra

  if (i % 3 == 0) {
    fill(255, 150, 40); //arancione
    }else if(i%2==0) {
    fill(223,50,78); //rosso
  } else {
    fill(255, 110, 150); //rosa
  }

  //coda
  triangle(px - 25, py, px - 50, py - 15, px - 50, py + 15);

  //corpo
  ellipse(px, py, 60, 30);

  //occhio
  push();
  stroke(255);
  strokeWeight(1);
  fill(0);
  ellipse(px + 15, py - 2, 5, 5);
  pop();
}
  pop();
 
 
  yBolle = (yBolle + 1) % yMax; 
  xPesci = (xPesci + 2) % (xMax + 80);
}
 