let button = document.getElementById("btn")

button.onclick = function(){

    alert ("Bienvenido a elemental games");

    const nombre = prompt ("Ingrese su nombre");

    const nombreAzar = ["Armando Esteban Quito", "Elton Tito", "Lola Mento", "Helen Chufe", "Marco Paredes de la Torre", "Jonhy Tetoco", "Elda Masco", "Zoyla Marcia Ana", "Elena Nito", "Elsa Capunta", "Estela Gartija", "Elba Sura", "Alan Bresito Delgado"];
    const nombreResultado = nombreAzar[Math.floor(Math.random() * nombreAzar.length)];

    alert ("Bienvenido " + nombre + "\ntu contrincante es: " + nombreResultado);

    alert ("Guía del juego \nDebes elegir un elemento y si es superior al de tu enemigo ganas la ronda");
    alert ("Los elementos son: \nFuego, agua, tierra, aire, rayo, hielo y metal");

    let vidaP = 3
    let vidaE = 3

    // let game = function (){
    //     let juego = 1
        while(vidaP != 0 && vidaE != 0){
        let yo = parseInt(prompt("Elige tu elemento \n1. Fuego \n2. Agua \n3. Tierra \n4. Aire \n5. Rayo \n6. Hielo \n7. Metal"));
        
        const opc = ["fuego", "agua", "tierra", "aire", "rayo", "hielo", "metal"];
        const enemigo = opc[Math.floor(Math.random() * opc.length)];

    // fuego
        if(yo == 1 && enemigo == "fuego"){
            alert("Empate! " + "\nTu enemigo también eligió: "+ enemigo)
        }
        else if(yo == 1 && enemigo == "agua"){
            vidaP--
            alert("Perdiste!" + "\nTu enemigo eligió: " + enemigo + "\nTu fuego ha sido apagado" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 1 && enemigo == "tierra"){
            vidaP--
            alert("Perdiste!" + "\nTu enemigo eligió: " + enemigo + "\nTu fuego ha sido apagado" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 1 && enemigo == "aire"){
            vidaP--
            alert("Perdiste!" + "\nTu enemigo eligió: " + enemigo + "\nTu fuego ha sido apagado" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 1 && enemigo == "rayo"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas absorivdo el calor del rayo para incrementar tu fuego" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 1 && enemigo == "hielo"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas derretido el bloque hielo de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 1 && enemigo == "metal"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas derretido la roca métalica de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
    //agua
        else if(yo == 2 && enemigo == "fuego"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas apagado el fuego de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 2 && enemigo == "agua"){
            alert("Empate! " + "\nTu enemigo también eligió: " + enemigo)
        }
        else if(yo == 2 && enemigo == "tierra"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nConvertiste la roca de tu enemigo en lodo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 2 && enemigo == "aire"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu enemigo usó el aire para devolverte el agua que lanzaste" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 2 && enemigo == "rayo"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu elemento fue conductor de la electricidad" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 2 && enemigo == "hielo"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu elemento ha sido congelado" +"\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 2 && enemigo == "metal"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas hecho que el metal del enemigo flotara sobre ti, regresándolo hacia él" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
    //tierra
        else if(yo == 3 && enemigo == "fuego"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas apago el fuego de tu enemigo"+ "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 3 && enemigo == "agua"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu terreno ha sido inundado" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 3 && enemigo == "tierra"){
            alert("Empate! " + "\nTu enemigo también eligió: " + enemigo)
        }
        else if(yo == 3 && enemigo == "aire"){
            vidaE--
            lert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nTu enemigo no pudo desviar la roca que le lanzasate" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 3 && enemigo == "rayo"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHiciste descarga a tierra" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 3 && enemigo == "hielo"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu terrno ha sido congelado" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 3 && enemigo == "metal"){
            vidaP--
            alert("Perdiste! " + "\Tnu enemigo eligió: " + enemigo + "\nEl metal lanzado por tu enemigo destruyó la roca que le lanzaste" + "\nTe queda: " + vidaP + " vida")
        }
    //aire
        else if(yo == 4 && enemigo == "fuego"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas apagado el fuego de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 4 && enemigo == "agua"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas desviado el elemtno de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 4 && enemigo == "tierra"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nLa roca que te lanzo tu enemigo era muy pesado, no pudiste desviarla" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 4 && enemigo == "aire"){
            alert("Empate! " + "\nTu enemigo también eligió: " + enemigo)
        }
        else if(yo == 4 && enemigo == "rayo"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas desviado el rayo de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 4 && enemigo == "hielo"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nEl enemigo congelo el aire que utilizaste" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 4 && enemigo == "metal"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nLa roca metálica que te lanzo tu enemigo era muy pesado, no pudiste desviarla" + "\nTe queda: " + vidaP + " vida")
        }
    //rayo
        else if(yo == 5 && enemigo == "fuego"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nEl enemigo uso el calor de tu elemnto para amplificar el suyo" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 5 && enemigo == "agua"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas utilizado el elemento de tu enemigo como conductor para hacerle daño" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 5 && enemigo == "tierra"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu enemigo ha realizado su elemento para hacer descarga a tierra" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 5 && enemigo == "aire"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu enemigo ha desviado tu rayo" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 5 && enemigo == "rayo"){
            alert("Empate! " + "\nTu enemigo también eligió: " + enemigo)
        }
        else if(yo == 5 && enemigo == "hielo"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nTu rayo partio el bloque de hielo de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 5 && enemigo == "metal"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas utilizado el elemento de tu enemigo como conductor para hacerle daño" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
    //hielo
        else if(yo == 6 && enemigo == "fuego"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu bloque de hielo ha sido derretiro" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 6 && enemigo == "agua"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas congelado el agua de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 6 && enemigo == "tierra"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas congelado el terreno de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 6 && enemigo == "aire"){
            vidaE--
            aalert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nHas congelado el aire de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 6 && enemigo == "rayo"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nEl rayo de tu enemigo rompió tu bloque de hielo" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 6 && enemigo == "hielo"){
            alert("Empate! " + "\nTu enemigo también eligió: "  + enemigo)
        }
        else if(yo == 6 && enemigo == "metal"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nLa roca metálica que te lenzó tu enemigo rompió tu bloque de hielo" + "\nTe queda: " + vidaP + " vida")
        }
    //metal
        else if(yo == 7 && enemigo == "fuego"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nHan derretido tu elemento" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 7 && enemigo == "agua"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu enemigo hizo qaue tu roca metálica flotará, devolviéndotela" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 7 && enemigo == "tierra"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nTu roca metálica colisionó con la roca de tu enemigo, pero la tuya fue más resistente" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 7 && enemigo == "aire"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nLa roca metálica que lanzaste era muy pesada, tu enemigo no pudo desviarla" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 7 && enemigo == "rayo"){
            vidaP--
            alert("Perdiste! " + "\nTu enemigo eligió: " + enemigo + "\nTu enemigo usó tu elemento como conductor" + "\nTe queda: " + vidaP + " vida")
        }
        else if(yo == 7 && enemigo == "hielo"){
            vidaE--
            alert("Ganaste! " + "\nTu enemigo eligió: " + enemigo + "\nLa roca metálica que lanzaste partió el bloque de hielo de tu enemigo" + "\nAl enemigo le queda: " + vidaE + " vida")
        }
        else if(yo == 7 && enemigo == "metal"){
            alert("Empate! " + "\nTu enemigo también eligió: " + enemigo)
        }
        }

        if(vidaE == 0){
            alert ("Felicitaciones! Has ganado")
        }else if(vidaP == 0){
            alert ("Has perdido")}

    alert("Gracias por jugar")
}