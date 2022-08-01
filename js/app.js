// console.log('hola')


let btnPlay = document.querySelector('.btn-play')  //recupero il bottone per iniziare a giocare 
let griglia = document.querySelector('.griglia')  //recupero griglia
let selectedValue = document.getElementById('livelli')  //recupero la selezione deo livelli
griglia.innerHTML= ""
// console.log(griglia)
let posizioniBombe = []//******************** */


function getLevelMode(input) {   //funzione per la selezione dei livelli
    let level = parseInt(input.value);
    if (level === 2) {
        return 'livello 2';
    } else if (level === 3) {
        return 'livello 3';
    }
    return 'livello 1';
}

btnPlay.addEventListener('click', function(){   //al click del bottone 
    let livelloDifficolta = getLevelMode(selectedValue);
    let gridSize = 10; 
    

    if (livelloDifficolta === 'livello 2') {
        gridSize = 9;
        // console.log(livelloDifficolta)
    } else if (livelloDifficolta === 'livello 3') {
        gridSize = 7;
        // console.log(livelloDifficolta)
    }
    let numeroCelle = gridSize ** 2

    posizioniBombe = generatoreBombe(numeroCelle)//*********************** */
    console.log(posizioniBombe)

    for (let i = 0; i < numeroCelle; i++) {
        let square = createSquareEl();
        square.innerHTML = i + 1;
        if (livelloDifficolta === 'livello 2') {
            griglia.classList.add('grigliaDue');
            console.log(livelloDifficolta)
        } else if (livelloDifficolta === 'livello 3') {
            griglia.classList.add('grigliaTre');
        } else {
            griglia.classList.add('griglia');
        }
        griglia.append(square);
    }
})

function createSquareEl() {
    let square = document.createElement('div');
    square.classList.add('cella');
    square.addEventListener('click', clickHandler);
    return square;
}

function clickHandler() {
    const square = this;
    let numeroCella = parseInt(square.innerHTML)
    // console.log(numeroCella)
    // console.log(posizioniBombe.includes(numeroCella))
}

function generatoreBombe(max) {  // funzione per generare le bombe
    let bombe = []
    while (bombe.length < 16) {
        let n = getRandomIntInclusive (1, max)
        if ( !bombe.includes(n)) {
            bombe.push(n)
        }
    }
    return  bombe
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  