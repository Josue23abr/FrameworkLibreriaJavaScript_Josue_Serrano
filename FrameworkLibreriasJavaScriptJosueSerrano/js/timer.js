var centesimas = 0;
var segundos = 60;
var minutos = 02;
var control;

function temporizadorCero() {
    if (segundos == 50) {
        parar();
    }
}

function inicio() {
    control = setInterval(cronometro, 1);

}

function parar() {
    clearInterval(control);

}

function reinicio() {
    clearInterval(control);
    centesimas = 0;
    segundos = 60;
    minutos = 2;
    Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":02";

}

function cronometro() {
    if (centesimas > 0) {
        centesimas--;
        if (centesimas < 10) { centesimas = "0" + centesimas }
        Centesimas.innerHTML = ":" + centesimas;
    }
    if (centesimas == 0) {
        centesimas = 99;
    }
    if (centesimas == 99) {
        segundos--;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos;
    }
    if (segundos == 0) {
        segundos = 60;
    }

    if ((centesimas == 99) && (segundos == 59)) {
        minutos--;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ":" + minutos;
    }

    if ((segundos == 60) && (minutos == 0)) {
        parar();
        finJuego();
    }


}