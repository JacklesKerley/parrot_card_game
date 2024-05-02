let quantidadeDeCartas = 0

qtdCartas()

function qtdCartas () {
  quantidadeDeCartas = Number(prompt('Escolha a quantidade de cartas (4 a 14). Somente numeros pares:'))

  if (quantidadeDeCartas < 4 || quantidadeDeCartas > 14 ) {
    qtdCartas()
  } else if (quantidadeDeCartas % 2 != 0) {
    qtdCartas()
  }

}

let listaDeCartas = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot']
let cartasEmbaralhadas = []

for (let i = 0; i < (quantidadeDeCartas / 2); i++) {
  cartasEmbaralhadas.push(listaDeCartas[i])  
  cartasEmbaralhadas.push(listaDeCartas[i])
}

cartasEmbaralhadas.sort(embaralharCartas)

function embaralharCartas() {
  return Math.random() -0.5
}

for (let i = 0; i < cartasEmbaralhadas.length; i++) {
  let cards = document.querySelector('.containerCards')

  cards.innerHTML += `
    <div class="card escondido">
      <img src="/img/${cartasEmbaralhadas[i]}.gif" alt="${cartasEmbaralhadas[i]}">
    </div>
  `
}