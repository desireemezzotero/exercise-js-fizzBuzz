const button = document.querySelector('.btn');
const container = document.querySelector('.container')

button.addEventListener('click', generateFizzBuzz)


function generateFizzBuzz() {
/* con il ciclo for genero 100 numeri;
   ad ogni ciclo genero un nuovo box;
   se l'indice è divisibile per 3, 5 o 15 scrivo fizz, buzz o fizzbuzz e aggiungo la relativa classe altrimenti stampo il numero;
   ogni box viene aggiunto al container;
*/
for (let i = 1; i <= 100; i++) {
  const box = document.createElement('div')
  box.className = 'box'
  box.innerText = i
  if (!(i % 15)) {
    box.innerText = 'fizzBuzz'
    box.classList.add('fizzbuzz')
  } else if (! ( i % 3)) {
    box.innerText = 'fizz'
    box.classList.add('fizz')
  } else if (! ( i % 5)) {
    box.innerText = 'buzz'
    box.classList.add('buzz')
  } 
  container.append(box)
}

button.classList.add('hide')
console.log('ciao')
}