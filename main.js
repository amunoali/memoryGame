const cardArray = [
    {
        name: 'js',
        img: 'images/img1.svg'
    },
    {
        name: 'js',
        img: 'images/img1.svg'
    },
    {
        name: 'pink',
        img: 'images/img2.svg'
    },
    {
        name: 'pink',
        img: 'images/img2.svg'
    },
    {
        name: 'anular',
        img: 'images/img3.svg'
    },
    {
        name: 'anular',
        img: 'images/img3.svg'
    },
    {
        name: 'blue',
        img: 'images/img4.svg'
    },
    {
        name: 'blue',
        img: 'images/img4.svg'
    },
    {
        name: 'react',
        img: 'images/img5.svg'
    },
    {
        name: 'react',
        img: 'images/img5.svg'
    },
    {
        name: 'vshape',
        img: 'images/img6.svg'
    },
    {
        name: 'vshape',
        img: 'images/img6.svg'
    },
    {
        name: 'css',
        img: 'images/img7.png'
    },
    {
        name: 'css',
        img: 'images/img7.png'
    },
    {
        name: 'html',
        img: 'images/img8.png'
    },
    {
        name: 'html',
        img: 'images/img8.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

 const grid = document.querySelector('.grid')
 const resultDisplay = document.querySelector('#result')
 let cardsChosen = []
 let cardchosenId = []
 let cardsWon = []
 let disableDeck = false;
 

 function Board(){
     for (let i = 0; i< cardArray.length; i++){
         let card = document.createElement('img')
         card.setAttribute('src', 'images/backImg.png')
         card.setAttribute('data-id', i)
         card.addEventListener('click', flipCard)
         grid.appendChild(card)
     }
 }

 //check for matches function
 function checkForMatch(){
     let cards = document.querySelectorAll('img')
     const optionOneId = cardchosenId[0]
     const optionTwoId = cardchosenId[1]
     if (cardsChosen[0] == cardsChosen[1]){
         disableDeck = true
         cards[optionOneId].setAttribute('src', 'images/img12.png')
         cards[optionTwoId].setAttribute('src', 'images/img12.png')
         cardsWon.push(cardsChosen)
     }else{
        cards[optionOneId].setAttribute('src', 'images/backImg.png')
        cards[optionTwoId].setAttribute('src', 'images/backImg.png')
        flipCard()

     }


     cardsChosen = []
     cardchosenId = []
     resultDisplay.textContent = cardsWon.length
     if(cardsWon.length === cardArray.length/2 ){
         resultDisplay.textContent = "You Won"
     }

 }
 function shuffleCard() {
    matched = 0;
    disableDeck = false;
    optionOneId = optionTwoId = "";
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `./images/img-${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}

 //shuffle card


 //flip card function
 function flipCard(){
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardchosenId.push(cardId)
this.setAttribute('src', cardArray[cardId].img)
if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 500)
    }
 }
 Board()
