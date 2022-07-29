console.log('hola')

let dimensioneGriglia = 10    //dichiaro il numero delle colonne della griglia
let numeroCelle = dimensioneGriglia **2     //dichiaro il numero di celle
let griglia = document.querySelector('.griglia')  //recupero la tabella ove appenderò la griglia
let btnPlay = document.querySelector('.btn-play')  //recupero il bottone per iniziare a giocare 
      //quando clicco parte il gioco
    btnPlay.addEventListener('click', function(){})
        for (let i = 0; i < numeroCelle; i++) {
            let cell = getSquareElement()
            cell.innerHTML = i +1
            griglia.append(cell)
        }
        
    

        function getSquareElement () {
        let square = document.createElement('div');
        square.classList.add('cella')

        return square
        }








