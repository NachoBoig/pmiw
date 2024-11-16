class AutoEnemigo {
  constructor(tipo) { // tipo como parametro
    this.tipo = tipo; // que es una variable de nombre tipo que es = a tipo, el parametro de constructor
    this.velocidad = this.definirVelocidad(tipo); // que a la vez es otro parametro en definiirVelocidad
    this.ancho = this.definirAncho(tipo); // y en definirAncho
    this.alto = this.definirAlto(tipo); // y en definirAlto
    this.x = random([190, 320, 450]);  // Posiciones en los carriles disponibles
    
    // Genera una posición inicial en Y aleatoria
    this.y = random(-height * 2, -this.alto * 4);  // Ajusta la separación entre autos
    this.img = imgAuto[tipo]; // carga las imagenes de los autos en esta clase
}

  // Definir la velocidad de cada tipo de auto
  definirVelocidad(tipo) { // el parametro tipo es = a 1 o 2, si es 1 devuelve 4, o sea se incrementa por 4, si no es ni 1 o 2 te da 6, o sea el verde
    if (tipo === 1) return 4;  // Amarillo, lento
    if (tipo === 2) return 5;  // Rojo, velocidad media
    return 6;                  // Verde, rápido
  }

  // Definir el ancho de cada tipo de auto
  definirAncho(tipo) {
    if (tipo === 1) return 70;  // Amarillo
    if (tipo === 2) return 75;  // Rojo
    return 60;                  // Verde
  }

  // Definir el alto de cada tipo de auto
  definirAlto(tipo) {
    if (tipo === 1) return 150; // Amarillo
    if (tipo === 2) return 160; // Rojo
    return 140;                 // Verde
  }

  // Movimiento del auto
  mover() {
    this.y += this.velocidad;  // Mueve el auto hacia abajo

    // Recicla el auto si sale de la pantalla, generando una nueva posición en y
    if (this.y > height) {
      this.y = -this.alto * 4;  // Reaparece en la parte superior
      this.x = random([190, 320, 450]);  // Nueva posición en X aleatoriaS
    }
  }

  // Dibujar el auto en pantalla
  dibujar() {
     image(this.img, this.x, this.y, this.ancho, this.alto);  // Dibuja el rectángulo representando el auto
  }

  // Comprobar si hay colisión con el jugador
  colision(jugador) {
    return (
      this.x < jugador.x + jugador.ancho && // como un boton
      this.x + this.ancho > jugador.x &&
      this.y < jugador.y + jugador.alto &&
      this.y + this.alto > jugador.y
      );
  }
}
