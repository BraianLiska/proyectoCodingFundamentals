alert ("Bievenido al juego");

const nombre = prompt ("Ingrese su nombre");

// const nombreResultado = nombreAzar[Math.floor(Math.random() * nombreAzar.length)];

const nombreAzar = ["Armando Esteban Quito", "Elton Tito", "Lola Mento", "Helen Chufe", "Marco Paredes de la Torre", "Jonhy Tetoco", "Elda Masco", "Zoyla Marcia Ana", "Elena Nito", "Elsa Capunta", "Estela Gartija", "Elba Sura", "Alan Bresito Delgado"];
const nombreResultado = nombreAzar[Math.floor(Math.random() * nombreAzar.length)];

alert ("Bienvenido " + nombre + ", " + " tu contrincante es: " + nombreResultado);

// const fuego  
// const agua 
// const tierra
// const aire
// const rayo
// const hielo
// const metal

alert ("Guía del juego \nDebes elegir un elemento y si es superior al de tu enemigo ganas la ronda");
alert ("Los elementos son: \nFuego, agua, tierra, aire, rayo, hielo y metal");


// FUEGO > hielo, metal y rayo < agua, tierra aire
// * Derrite al hielo y al metal
// * Abosrve el calor del rayo
// * Es apagado por el agua, la tierra y el aire

// AGUA > fuego, tierra y metal < aire, rayo y hielo
// * Apaga el fuego
// * La tierra y el metal no puede evitar ser inundados
// * El aire empuja al agua
// * El agua es conductor del electricidad
// * El hielo congela el agua

// TIERRA > fuego y aire, rayo < agua, hielo y metal
// * Apaga el fuego
// * El aire no aguanta el peso de la tierra
// * Hace descarga a tierra de la electricidad

// AIRE > fuego, agua y rayo < hielo, tierra y metal 

// RAYO > agua, hielo, metal > fuego, tierra y aire

// HIELO > agua, tierra y aire < fuego, rayo y metal

// METAL > aire, tierra y hielo < fuego, agua y rayo


// const fuego
// const agua
// const tierra
// const aire
// const rayo
// const hielo
// const metal



const vidaPersonaje = 3
const vidaEnemigo = 3

// const enemigo = ["fuego", "agua", "tierra", "aire", "rayo", "hielo", "metal"];
// const enemigoResultado = enemigo[Math.floor(Math.random() * enemigo.length)];
// console.log (enemigoResultado)

const miPersonaje = prompt ("Elige tu elemento \n1. Fuego, \n2. Agua, \n3. Tierra, \n4. Aire, \n5. Rayo, \n6. Hielo y \n7. Metal");

const enemigo = ["fuego", "agua", "tierra", "aire", "rayo", "hielo", "metal"];
const enemigoResultado = enemigo[Math.floor(Math.random() * enemigo.length)];

while (vidaPersonaje <= 0 || vidaEnemigo <= 0) {
    
// const miPersonaje = prompt ("Elige tu elemento \n1. Fuego, \n2. Agua, \n3. Tierra, \n4. Aire, \n5. Rayo, \n6. Hielo y \n7. Metal");

// const enemigo = ["fuego", "agua", "tierra", "aire", "rayo", "hielo", "metal"];
// const enemigoResultado = enemigo[Math.floor(Math.random() * enemigo.length)];

    if (miPersonaje === "fuego" || "1" && enemigoResultado === "fuego") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "empate")
        vidaPersonaje--
        }
        else if (miPersonaje === "fuego" || "1" && enemigoResultado === "agua") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "pediste")
        vidaPersonaje--
        }else if (miPersonaje === "fuego" || "1" && enemigoResultado === "tierra") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "perdiste")
        vidaPersonaje--
        }else if (miPersonaje === "fuego" || "1" && enemigoResultado === "aire") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "perdiste")
        vidaPersonaje--
        }else if (miPersonaje === "fuego" || "1" && enemigoResultado === "rayo") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "ganaste")
        vidaEnemigo--
        }else if (miPersonaje === "fuego" || "1" && enemigoResultado === "hielo") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "ganaste")
        vidaEnemigo--
        }else if (miPersonaje === "fuego" || "1" && enemigoResultado === "metal") {
        alert ("Tu contrincante eligio " + enemigoResultado + ": " + "ganaste")
        vidaEnemigo--
        }
        else{
        }
}