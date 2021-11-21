window.onload = function() {
    alert('Hello world');
    saludo();
    console.log(getListRandom(10, 1, 10));
    //buttonOpacity();
}

function saludo() {
    var hoy = new Date();
    var hora = hoy.getHours();
    if (hora < 7 || hora > 17) {
        document.getElementById('mensaje_hor').innerHTML = '¡Buenas noches!';
        document.getElementById('body').style.background = '#3E3730';
    } else {
        document.getElementById('mensaje_hor').innerHTML = '¡Buenos días!';
        document.getElementById('body').style.background = 'rgb(238, 107, 47)';
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getListRandom(n, min, max) {
    var nums_rnd = []
    for (let i = 0; i < n; i++) {
        let numr = getRndInteger(min, max);
        if (nums_rnd.includes(numr)) {
            i--;
        } else {
            nums_rnd.push(numr);
        }
    }
    return nums_rnd;
}

function buttonOpacity() {
    let opa = document.getElementById('pokeball').style.opacity;
    if (opa == 0.5) {
        //console.log('opacidad 0.5');
        document.getElementById('pokeball').style.opacity = '1';
    } else {
        //console.log('opacidad 1');
        document.getElementById('pokeball').style.opacity = '0.5';
    }
}

function listRandom() {
    buttonOpacity();
    galleryRandom();
}

function galleryRandom() {
    let n = 17;
    let min = 1;
    let max = 17;
    let images = document.getElementsByClassName('rnd');
    let listRnd = getListRandom(n, min, max);
    //console.log(images);
    for (i = 0; i < n; i++) {
        images[i].setAttribute("src", "./IMG/IMG_" + listRnd[i] + ".PNG");
    }
}