class Juego{
 constructor(){
    this.CreaAntesdelJuego();
    this.jugador = new AutoJugador(); 
    this.enemigos = [new AutoEnemigo(1), new AutoEnemigo(2), new AutoEnemigo(3)]; // los 3 tipos de enemigos, el parametro es el tipo de enemigo. Esto después termina en el método definirVelocidad(tipo); 
    this.estado = "jugando"; // cambia el estado
    this.carretera = new Carretera();
    this.tiempo = frameCount/60;
 }
 CreaAntesdelJuego(){
   this.antesdeljuego = new AntesdelJuego();  
 }
 dibujar(){ 
   this.antesdeljuego.dibujoNarrativa(); // llama a el método que dibuja toda la narrativa
 }
 Actualizarpantallas(){ 
  this.antesdeljuego.ActualizarPantallas(); //llama al método que actualiza las pantallas
 }
  teclaPresionada(){
   this.antesdeljuego.teclaPresionada(); // detecta la tecla presionada antes del juego
   
  }
  actualizarjuego(){
    if (this.estado === "jugando") {
      this.carretera.dibujar();
      this.jugador.dibujar();
      fill(0);
      textSize(20);
      textAlign(RIGHT, TOP);
      text(20 - floor(frameCount/60), width - 10, 10);
      for (let enemigo of this.enemigos) { // modificar, fijarse
        enemigo.mover();
        enemigo.dibujar();
        if (enemigo.colision(this.jugador)) {
          this.estado = "perdido";
          pantalla = 6;
        }
        
        if (frameCount/60 > 20) {
          this.estado = "ganaste";
          pantalla = 7;
        }
      }

    } else {
      this.mostrarResultado();
    }
  }
  reiniciar() {
    if (pantalla === 6 || pantalla === 7  || pantalla === 8){
      
      this.estado = "jugando";
      this.jugador = new AutoJugador();
      this.enemigos = [new AutoEnemigo(1), new AutoEnemigo(2), new AutoEnemigo(3)];
      frameCount = 0;
      pantalla = 4;
    }
  }
}

class Carretera { // la clase del juego, donde se dibuja el juego
  constructor() {}

  dibujar() {
    background(200);
    fill(100);
    rect(190, 0, 130, height);
    rect(320, 0, 130, height);
    rect(450, 0, 130, height);
  }
}
