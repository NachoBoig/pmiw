class AutoJugador {
  constructor() {
    this.x = 320;
    this.y = height - 100;
    this.ancho = 80;
    this.alto = 200;
  }

  mover(direccion) {
    if (direccion === 'a' && this.x > 190) {
      this.x -= 130;
    } else if (direccion === 'd' && this.x < 450) {
      this.x += 130;
    }
  }

  dibujar() { // dibuja el auto
    image(imgAuto[4], this.x, this.y);
    
  }
}
