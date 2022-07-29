// console.log('hola')

let dimensioneGriglia = 10    //dichiaro il numero delle colonne della griglia
let numeroCelle = dimensioneGriglia **2   //dichiaro il numero di celle
let griglia = document.querySelector('.griglia') 

let btnPlay = document.querySelector('.btn-play')  //recupero il bottone per iniziare a giocare 
let selectedValue = document.getElementById('livelli')


let livelloDifficolta = selectedValue.value;
console.log(livelloDifficolta)

// if (livelloDifficolta === 2) {
//     dimensioneGriglia = 9;
// } else if (livelloDifficolta === 3) {
//     dimensioneGriglia = 7;
// }

    btnPlay.addEventListener('click', function(){
        
        for (let i = 0; i < numeroCelle; i++) {
            let cell = getSquareElement()
            cell.innerHTML = i +1
            griglia.append(cell);
        } 
         
        
        function getSquareElement () {
        const square = document.createElement('div');
        square.classList.add('cella');
        square.addEventListener('click', clickCell);

        return square
        
        }

        function clickCell() {
            const square = this
            square.classList.toggle('clicked');
            console.log(square);
        }

})





