// console.log('hola')

let dimensioneGriglia = 10    //dichiaro il numero delle colonne della griglia
let numeroCelle = dimensioneGriglia ** 2    //dichiaro il numero di celle
let griglia = document.querySelector('.griglia')  //recupero la tabella ove appenderò la griglia
let btnPlay = document.querySelector('.btn-play')  //recupero il bottone per iniziare a giocare 
let selectedValue
      //quando clicco parte il gioco

// generaGriglia(dimensioneGriglia, griglia)
// function generaGriglia(dimensione, griglia){
// let numeroCelle = dimensione ** 2
// }


    btnPlay.addEventListener('click', function(){
        if(document.getElementById('lv1').checked) {   
            selectedValue === ('lv1').value;  
        for (let i = 0; i < numeroCelle; i++) {
            let cell = getSquareElement()
            cell.innerHTML = i +1
            griglia.append(cell);
        }} else if(document.getElementById('lv2').checked) {   
            selectedValue === ('lv2').value;
            griglia.classList.remove('griglia')
            griglia.classList.add('griglia2')  
            dimensioneGriglia = 9
            numeroCelle = dimensioneGriglia ** 2
        for (let i = 0; i < numeroCelle; i++) {
            let cell = getSquareElement()
            cell.innerHTML = i +1
            griglia.append(cell);
        }}
         
        
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





