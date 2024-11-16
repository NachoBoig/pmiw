//link del video explicativo (Ignacio Boig): https://youtu.be/G96aSMF0TsM

let imagenes = [];
let numImagenes = 4;
let pantalla = 0;
let cancion;
let juego;
let imgAuto = [];
let ganaste;
let perdiste;
let creditos;

function preload() {
  for (let i = 1; i <= numImagenes; i++) {
    let img = loadImage(`assets/Imagen${i}.png`);
    imagenes.push(img);
  }
   for (let i = 1; i <= 4; i++) {
    imgAuto[i] = loadImage('assets/auto'+i+'.png');// arreglo para las imagenes de los autos
}

  ganaste = loadImage(`assets/GanastePantalla.png`);
  perdiste = loadImage(`assets/PerdistePantalla.png`);
  creditos = loadImage(`assets/CreditosPantalla.png`);
 
  soundFormats('mp3', 'ogg');
  cancion = loadSound('assets/Futurama.mp3');
}
function setup() {
  createCanvas(640, 480);
  textSize(24);
  textAlign(CENTER, CENTER);
  cancion.setVolume(0.5);
  imgAuto[1].resize(70, 150);
  imgAuto[2].resize(75, 160);
  imgAuto[3].resize(60, 140);
  imgAuto[4].resize(80, 200);
 
  juego = new Juego();
}


function draw() {
  juego.dibujar();   
}

function mousePressed(){
juego.Actualizarpantallas();
}

function keyPressed(){ 
  juego.teclaPresionada();
}
