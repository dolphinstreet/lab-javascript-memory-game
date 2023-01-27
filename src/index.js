
const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];


const memoryGame = new MemoryGame(cards);
const modal = document.getElementById("dialog")
const resetButton = modal.querySelector("button")

resetButton.addEventListener('click', () =>{
    
    document.querySelectorAll(".turned").forEach((card) => {
      card.classList.remove("turned")
    })
    resetGame()
  })

function startGame() {
  
  modal.close()
  memoryGame.shuffleCards()  


  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  memoryGame.shuffleCards()
  
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {

      
      flipCards(card)
      checkWinner()
      
      

  });
});

}



function flipCards(card){
  
  if (memoryGame.pickedCards.length===2){ return } // If it has already a pair, we can't click
  
  card.classList.add("turned")  

  memoryGame.pickedCards.push(card)

  if (memoryGame.pickedCards.length===2){

      if (memoryGame.checkIfPair(memoryGame.pickedCards[0].dataset.cardName,memoryGame.pickedCards[1].dataset.cardName) ){
        memoryGame.pickedCards.splice(0,memoryGame.pickedCards.length) // je remet à 0
        document.getElementById("pairs-clicked").textContent=memoryGame.pairsClicked 
        document.getElementById("pairs-guessed").textContent=memoryGame.pairsGuessed
          
      } else {
        
        setTimeout(() => {
          memoryGame.pickedCards[0].classList.remove("turned")
          memoryGame.pickedCards[1].classList.remove("turned")
          memoryGame.pickedCards.splice(0,memoryGame.pickedCards.length)
          document.getElementById("pairs-clicked").textContent=memoryGame.pairsClicked

        }, 1500);
      }   
  }
}

function checkWinner(){
  if ( memoryGame.checkIfFinished()) {
    setTimeout(() => {
      console.log("ok")
      modal.showModal()
      modal.querySelector("p").textContent = `Score : ${memoryGame.pairsClicked} points`
    }, 200)
    
  }
}
function resetGame(){
  
    memoryGame.pickedCards = [];
    memoryGame.pairsClicked = 0;
    memoryGame.pairsGuessed = 0;
    startGame()

  
}

startGame();







