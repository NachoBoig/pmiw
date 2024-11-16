class AntesdelJuego {
  constructor() {
  }

  dibujoNarrativa() { // dibuja las pantallas de la narrativa
    background(220);
    if (pantalla >= 0 && pantalla < imagenes.length) {
      image(imagenes[pantalla], 0, 0);
    }
    if (pantalla === 0) {
      fill(100);
      circle(600, 40, 30, 30);
      rect(279, 330, 120, 40);
      rect(279, 400, 120, 40);
      fill(250);
      text('Jugar', 337, 350);
      text('Tutorial', 337, 422);
      text('c', 600, 40);
    }
    if (pantalla === 3) {
      fill(255, 0, 0);
      rect(width / 2 - 225, height - 60, 450, 40);
      fill(255);
      text('Roba el perro', width / 2, height - 40);
      text('Fry quiere recuperar a su perro.', width - 320, height - 100);
    }
    if (pantalla === 4){
     juego.actualizarjuego(); 
      
    }
    if (pantalla === 5) {
      print("pantallatutorial");
      background(200);
      fill(100);
      rect(190, 0, 130, height);
      rect(320, 0, 130, height);
      rect(450, 0, 130, height);
      fill(0, 0, 10);
      rect(279, 400, 120, 40);
      fill(255);
      text("Reglas:", width/11, 30);
      text("Esquivar los autos hasta que se acabe el tiempo", 279, 60);
      text("Autos:", width/11.5, 90);
      text("Velocidad:", width/9, 300);
      text("Lenta", width/2.5, 300);
      text("Media", 384, 300);
      text("Alta", 520, 300);
      text('Menu', 338, 422);
      image(imgAuto[1], 220, 110);
      image(imgAuto[2], 347, 110);
      image(imgAuto[3], 490, 110);
   
    }
    
    if (pantalla === 6) {
      textSize(28);
      image(perdiste, 0, 0);
      fill(100);
      rect(279, 400, 120, 40);
      fill(255);
      text('toca "r" para reiniciar', width/2+150, 360);
      text('Creditos', 390, 410);
    }
    
    if (pantalla === 7) {
      textSize(28);
      image(ganaste, 0, 0);
      fill(100);
      rect(279, 400, 120, 40);
      fill(255);
      text('toca "r" para reiniciar', width/2+150, 360);
      text('Creditos', 390, 410);
    }
    
    if (pantalla === 8){
      image(creditos, 0, 0);
    }
  }
  botonJugar() { // pone los limites del boton
    this.botonjugar = mouseX >279 && mouseX < 397 && mouseY > 330 && mouseY < 368;
    return this.botonjugar;
  }
  botonTutorial() {
    this.botontutorial = mouseX >279 && mouseX < 397 && mouseY > 400 && mouseY < 438;
    return this.botontutorial;
  }
  botonRobar() {
    this.botonrobar = mouseX >65 && mouseX < 515 && mouseY > 420 && mouseY < 460;
    return this.botonrobar;
  }
  ActualizarPantallas() {  // cambia de estado a las pantallas 
  
  let distancia = dist(mouseX, mouseY, 600, 40);
    if (pantalla === 0 && this.botonJugar()) {
      pantalla = 1;
    }
    if (pantalla === 0 && this.botonTutorial()) {
      pantalla = 5;
    } else if (pantalla === 5 && this.botonTutorial()) {
      pantalla = 0;
    }
    
    else if (pantalla === 6 && this.botonTutorial()) {
      pantalla = 8;
    }
    else if (pantalla === 7 && this.botonTutorial()) {
      pantalla = 8;
    }
    
    else if (pantalla === 3 && this.botonRobar()) {
      pantalla = 4;
      frameCount = 0;
    }
    
    else if (distancia <= 30 / 2 && pantalla === 0){
        pantalla = 8;
    } 
      
  }
  teclaPresionada() {
    if (pantalla < 3  && pantalla > 0 && key === ' ') { // si las pantallas son menos que la tercera, con espacio vas pasando de 1 a otra
      pantalla++;
    } 
    else if (pantalla === 4 && juego.estado === "jugando") { // si la pantalla es la del Juego, con a y d se puede mover el jugador
      if (key === 'a' || key === 'd') {
        juego.jugador.mover(key);
      }
    }

    if (key === 'v') {
      if (cancion.isPlaying()) {
        cancion.pause();
      } else {
        cancion.play();
      }
    }
    if (key === 'r') {  // si apretas r se reinicia, hay que agregarle una condicion para que sea cuando pierdas
      juego.reiniciar();
    }
  }
}
