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
    <div class="cards" onclick="virarCarta(this)">
      <div class="card papagaio">
        <img src="/img/back.png" alt="" srcset="">
      </div>
      <div class="card carta front" value="${cartasEmbaralhadas[i]}">
        <img src="/img/${cartasEmbaralhadas[i]}.gif" alt="${cartasEmbaralhadas[i]}">
      </div>
    </div>
  `
}

let cardFront1 = ""
let cardBack1 = ""
let cardFront2 = ""
let cardBack2 = ""
let cartasViradas = []

let jogadas = 0

let contador = 1
function virarCarta(cards) {
  if (contador == 1) {
    cardFront1 = cards.querySelector(".carta")
    cardBack1 = cards.querySelector(".papagaio")

    cardFront1.classList.remove("front")
    cardBack1.classList.add("front")
    cardBack1.classList.remove("back")

    contador++

    cartasViradas.push(cards)
    cards.onclick = null

    jogadas++

  } else if (contador == 2) {
    cardFront2 = cards.querySelector(".carta")
    cardBack2 = cards.querySelector(".papagaio")

    cardFront2.classList.remove("front")
    cardBack2.classList.add("front")
    cardBack2.classList.remove("back")

    contador++

    cartasViradas.push(cards)
    cards.onclick = null

    jogadas++

    verificaPar()

    if (paresFeitos == (quantidadeDeCartas/2)) {
      setTimeout(fimDeJogo, 800)
    }
  }

}


let paresFeitos = 0
function verificaPar() {
  let teste = cardFront1.getAttribute("value") == cardFront2.getAttribute("value")

    if (teste) { 
      paresFeitos++
      resetCards()

    } else {
      setTimeout(() => {
        cardFront1.classList.add("front")
        cardBack1.classList.remove("front")
        cardBack1.classList.add("back")
    
        cardFront2.classList.add("front")
        cardBack2.classList.remove("front")
        cardBack2.classList.add("back")
      
        cartasViradas.forEach(function (card) {
          card.onclick = function (){
            virarCarta(this)
          }
        })
        
        resetCards()

      }, 1000)
    }

}

function resetCards() {
  contador = 1
  cardFront1 = ""
  cardBack1 = ""
  cardFront2 = ""
  cardBack2 = ""

  cartasViradas = []
}

function fimDeJogo() {
  alert(`Você ganhou em ${jogadas} jogadas!`)
  window.location.reload()
}

