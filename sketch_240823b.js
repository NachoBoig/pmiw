//Video explicativo (nuevo-tp4): https://youtu.be/g75sgZ6TSPE
//Video explicativo (viejo-tp3): https://youtu.be/2s0I8W2dc7k

let centroX = 200;
let centroY = 200;
let diametro = 370;
let distanciaMouseBoton;

let tam = 3;

let tempx = (centroX - (diametro / 2));
let tempy = (centroY - (diametro / 2));

let img = 0;

let colorRandom = [255, 255, 255];

let OPart;
let OPartOriginal;

//(agregado despues de grabar el video)
function preload(){
  OPart = loadImage('data/OpART.png');
  OPartOriginal = loadImage('data/OpARToriginal.jpg');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  // DEBUG
  if (tam === 0) {
    tam = 2;
  }
  
  background(255);
  
  if (img === 0) {
    image(OPart, 0, 0);
  } else {
    image(OPartOriginal, 0, 0);
  }
  
  // GRILLA 1
  for (let x = 0; x < width / tam; x += 1) {
    for (let y = 0; y < height / tam; y += 1) {
      fill(0);
      ellipse(x * tam * 2 + 400, y * tam * 2, tam, tam);
    }
  }
  
  fill(30);
  noStroke();
  circle(centroX + 400, centroY, diametro); 
  
  // GRILLA 2
  for (let x = 0; x < 400; x += 2) {
    for (let y = 0; y < 400; y += 2) {
      if (dist(tempx + x * tam, tempy + y * tam, centroX, centroY) < diametro / 2) {
        fill(colorRandom);
        
        let distancia = dist(centroX, centroY, tempx + x * tam, 200);
        let distancia2 = dist(centroX, centroY - 30, 200, tempy + y * tam);
        
        let ancho = map(distancia, 0, 200, 60, 0);
        let alto = map(distancia2, 0, 200, 60, 0);
        ellipse((tempx + x * tam - tam / 2) + 400, (tempy + y * tam - tam / 2), ancho / 7, alto / 9);
      } 
    } 
  }
  
  fill(0, 210, 180);
  rect(725, 350, 45, 30);
}

function cambiarPx() { 
  centroX = mouseX - 400;
  return centroX;
}

function cambiarPy() { 
  centroY = mouseY;
  return centroY;
}

function cambioColor(cambio) {
  colorRandom = cambio;
  return colorRandom;
}

function botonReiANDcmabioDeColor(x, y, z) {
  if (725 < mouseX && mouseX < 770 && 350 < mouseY && mouseY < 380) {
    tam = x;
    colorRandom = cambioColor([255, 255, 255]);
    diametro = y;
    centroX = z;
    centroY = z;
  } else {
    tam = x;
    diametro = y;
    cambioColor([random(100, 255), random(100, 255), random(100, 255)]); 
    centroX = z;
    centroY = z;
  }
}

function mousePressed() {
  if (mouseX > 400) {
    botonReiANDcmabioDeColor(3, 370, 200);
  } else {
    img = (img === 0) ? 1 : 0;
  }
}

function keyPressed() {
  if (key === 'r') {
    botonReiANDcmabioDeColor(3, 370, 200);
    centroX = 200;
    cambioColor([255, 255, 255]);
  } else if (key === 'x') {
    cambiarPx();
  } else if (key === 'y') {
    cambiarPy();
  } else if (key === 'd') {
    botonReiANDcmabioDeColor(3, dist(mouseX, mouseY, centroX+400, centroY), 200);
  } else {
    botonReiANDcmabioDeColor(random(0, 20), 370, 200);
  }
}
