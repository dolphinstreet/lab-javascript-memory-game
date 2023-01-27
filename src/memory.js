class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }


  shuffleCards() {
    if (this.cards){
      for (let i = this.cards.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[random];
        this.cards[random] = temp;
      }
      return this.cards;
    }else{
      return undefined;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++ 
    if (card1 === card2){
      this.pairsGuessed++
      return true;
    }
    return false
  }

  checkIfFinished() {
    return this.pairsGuessed === (this.cards.length)/2
    
  }
}

