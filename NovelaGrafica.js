//video explicativo: link https://youtu.be/HBklx2MIbXo

let imagenes = [];
let numImagenes = 16;
let pantalla = 0;

let opacidad1 = 50;
let opacidad2 = 50;

let cancion;

function preload() {
  for (let i = 1; i <= numImagenes; i++) {
    let img = loadImage(`assets/Imagen${i}.png`);
    imagenes.push(img);
  }

  soundFormats('mp3', 'ogg');
  cancion = loadSound('assets/Futurama.mp3');
}

function setup() {
  createCanvas(640, 480);
  textSize(24);
  textAlign(CENTER, CENTER);
  cancion.setVolume(0.5);
}

function draw() {
  background(220);
  
  MousePosicion();

  if (pantalla >= 0 && pantalla < imagenes.length) {
    image(imagenes[pantalla], 0, 0);
  }

  if (pantalla === 3) {
    BotonDePantalla3();
  }

  if (pantalla === 7) {
    BotonDePantalla7();
  }

  if (pantalla === 11) {
    BotonDePantalla11();
  }

  if (pantalla === 9 || pantalla === 12 || pantalla === 15) {
    BotonReiniciar();
  }
  
  if (pantalla === 9) {
    TipoFinal("b");
  } else if (pantalla === 12) {
    TipoFinal("g");
  } else if (pantalla === 15) {
    TipoFinal("s");
  }
  
  if (pantalla == 0){
    fill(255);
    text('Toca espacio para avanzar', width/2, 100);
  }
}

function BotonDePantalla3() {
  fill(255, 0, 0);
  rect(70, height - 60, 230, 40);
  fill(255);
  text('Roba el perro', 70 + 230 / 2, height - 40);

  fill(0, 0, 255);
  rect(width - 330, height - 60, 230, 40);
  fill(255);
  text('Hace un ahuelga', width - 330 + 230 / 2, height - 40);

  text('Fry quiere recuperar a su perro.', width - 320, height - 100);
}

function BotonDePantalla7() {
  fill(60, 60, 255, opacidad1);
  rect(0, 0, width / 2, height);
  fill(255, 255, 255, opacidad1 + 80);
  text('Hablar con Bender', 160, height / 2);

  fill(255, 60, 60, opacidad2);
  rect(width / 2, 0, width / 2, height);
  fill(255, 255, 255, opacidad2 + 80);
  text('Enfrentar a Bender', width - 160, height / 2);
}

function BotonDePantalla11() {
  textSize(40);
  fill(40, 40, 40, opacidad1 + 30);
  rect(0, 0, width / 2, height-85);
  fill(255, 255, 255, opacidad1 + 80);
  text('Si', 160, height / 2);

  fill(205, 60, 60, opacidad2);
  rect(width / 2, 0, width / 2, height-85);
  fill(255, 255, 255, opacidad2 + 80);
  text('No', width - 160, height / 2);
  
  fill(255);
  text('¿Quieres clonarlo?', width / 2, height / 2 - 175);
  textSize(24);
}

function BotonReiniciar() {
  fill(0, 255, 0);
  rect(width / 2 - 80, height - 140, 160, 40);
  fill(255);
  text('Reiniciar', width / 2, height - 120);
}

function TipoFinal(T) {
  textSize(45);
  if (T == "b") {
    fill(0);
    text('Final Malo', width / 2 - 3, 100 - 3);
    text('Final Malo', width / 2 + 3, 100 - 3);
    text('Final Malo', width / 2 - 3, 100 + 3);
    text('Final Malo', width / 2 + 3, 100 + 3);
    
    fill(220, 20, 60);
    text('Final Malo', width / 2, 100);
  } else if (T == "g") {
    fill(0);
    text('Final Feliz', width / 2 - 3, 100 - 3);
    text('Final Feliz', width / 2 + 3, 100 - 3);
    text('Final Feliz', width / 2 - 3, 100 + 3);
    text('Final Feliz', width / 2 + 3, 100 + 3);
    
    fill(255, 255, 51);
    text('Final Feliz', width / 2, 100);
  } else if (T == "s") {
    fill(0);
    text('Final Triste', width / 2 - 3, 100 - 3);
    text('Final Triste', width / 2 + 3, 100 - 3);
    text('Final Triste', width / 2 - 3, 100 + 3);
    text('Final Triste', width / 2 + 3, 100 + 3);
    
    fill(70, 130, 180);
    text('Final Triste', width / 2, 100);
  }
  
  textSize(24);
}

function MousePosicion() {
  if (mouseX < width / 2) {
    opacidad1 = 175;
    opacidad2 = 50;
  } else {
    opacidad2 = 175;
    opacidad1 = 50;
  }
}

function mousePressed() {
  if (pantalla === 3) {
    if (mouseX > 70 && mouseX < 300 && mouseY > height - 60 && mouseY < height - 20) {
      pantalla = 6;
    }
    
    if (mouseX > width - 330 && mouseX < width - 100 && mouseY > height - 60 && mouseY < height - 20) {
      pantalla = 4;
    }
  }

  if (pantalla === 7) {
    if (mouseX < width / 2) {
      pantalla = 10;
    }

    if (mouseX > width / 2) {
      pantalla = 8;
    }
  }

  if (pantalla === 11) {
    if (mouseX < width / 2) {
      pantalla = 12;
    }

    if (mouseX > width / 2) {
      pantalla = 13;
    }
  }

  if (pantalla === 9 || pantalla === 12 || pantalla === 15) {
    if (mouseX > width / 2 - 80 && mouseX < width / 2 + 80 && mouseY > height - 140 && mouseY < height - 100) {
      pantalla = 0;
      cancion.stop();
      cancion.play();
    }
  }
}

function keyPressed() {
  if (pantalla === 4 && (key === ' ')) {
    pantalla = 5;
  } else if (pantalla === 5 && (key === ' ')) {
    pantalla = 7;
  } else if (pantalla === 8 && (key === ' ')) {
    pantalla = 9;
  } else if (pantalla === 10 && (key === ' ')) {
    pantalla = 11;
  } else if (pantalla !== 3 && pantalla !== 4 && pantalla !== 5 && pantalla !== 7 && pantalla !== 8 && pantalla !== 10 && pantalla !== 11 && pantalla !== 9 && pantalla !== 12 && pantalla !== 15) {
    if (key === ' ') {
      pantalla += 1;
      if (pantalla >= numImagenes) {
        pantalla = 0;
      }
    }
  }

  if (key === 'v') {
    if (cancion.isPlaying()) {
      cancion.pause();
    } else {
      cancion.play();
    }
  }
}















  
