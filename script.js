const schermo = document.querySelector('.schermo');
const numero = document.querySelectorAll('.numero');
const cancella = document.querySelector('.cancella');
const virgola = document.querySelector('.virgola');
const operatore = document.querySelectorAll('.operatore');
const operatori = ['+', '-', 'x', '÷'];
const uguale = document.querySelector('.uguale');

schermo.textContent = 0;

numero.forEach(function(button) {
        button.addEventListener('click', function() {
            if (schermo.textContent.length < 11) {
                if (schermo.textContent === '0') {
                    schermo.textContent = button.dataset.number;
                } else {
                    schermo.textContent += button.dataset.number;
                }
            }
            
        });
});

cancella.addEventListener('click', function() {
    schermo.textContent = 0;
    contatoreVirgola = 0;
})

let contatoreVirgola = 0;
virgola.addEventListener('click', function() {
    if (schermo.textContent.length < 11 && !operatori.includes(schermo.textContent.charAt(schermo.textContent.length - 1))) {
        if (contatoreVirgola === 0){
            schermo.textContent += '.';
            contatoreVirgola++;
        }
    }
});

operatore.forEach(function(button) {
        button.addEventListener('click', function() {
            if (schermo.textContent.length < 11 && !operatori.includes(schermo.textContent.charAt(schermo.textContent.length - 1))) {
                schermo.textContent += button.dataset.operator;
                contatoreVirgola = 0;
            }
        });
});

uguale.addEventListener('click', function(){

    let espressione = schermo.textContent.replace(/x/g, '*').replace(/÷/g, '/');

    let risultato = eval(espressione);

    let risultatoStringa = (parseFloat(risultato.toFixed(9)).toString().slice(0, 11));

    schermo.textContent = risultatoStringa;

});
