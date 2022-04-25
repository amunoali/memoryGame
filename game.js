const section = document.querySelector('section')
const result = document.querySelector('span')
let playerLives = 7


const getData = () =>[
    { name: 'js', img: 'images/img1.svg' },
    { name: 'js', img: 'images/img1.svg' },
    { name: 'pink', img: 'images/img2.svg' },
    { name: 'pink', img: 'images/img2.svg' },
    { name: 'anular', img: 'images/img3.svg' },
    { name: 'anular', img: 'images/img3.svg'},
    {name: 'blue', img: 'images/img4.svg'},
    { name: 'blue', img: 'images/img4.svg'},
    { name: 'react', img: 'images/img5.svg' },
    { name: 'react', img: 'images/img5.svg' },
    {name: 'vshape', img: 'images/img6.svg' },
    {  name: 'vshape', img: 'images/img6.svg' },
    { name: 'css', img: 'images/img7.png' },
    { name: 'css', img: 'images/img7.png' },
    { name: 'html',img: 'images/img8.png' },
    { name: 'html', img: 'images/img8.png' }
]
//randomize cards
const randomize = () =>{
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
}

//card generator
const cardGenerator = () =>{
    const cardData = randomize()
   //generate html
 
   cardData.forEach((item) =>{
    const card = document.createElement('div')
    const face = document.createElement('img')
    const back = document.createElement('div')
    card.classList = 'card'
    face.classList = 'face'
    back.classList = 'back'
    //attach info to cards
    face.src = item.img
    card.setAttribute('name', item.name)
    //attach card to section
    section.appendChild(card)
    card.appendChild(face)
    card.appendChild(back)
    
    card.addEventListener('click', (e) =>{
        card.classList.toggle('toggleCard')
        checkCards(e)
    })
   })
   
}

//check cards
const checkCards = (e) =>{
    const clickedCard = e.target;
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCard = document.querySelectorAll('.toggleCard')
    console.log(flippedCards)
    if(flippedCards.length === 2){
        if(
            flippedCards[0].getAttribute('name') ===
            flippedCards[1].getAttribute('name')
            ){
                console.log('match')
                flippedCards.forEach(card =>{
                    card.classList.remove('flipped')
                    card.style.pointerEvents = "none"
                })
            }else{
                console.log('wrong')
                flippedCards.forEach((card) =>{
                    card.classList.remove("flipped")
                    setTimeout(() => card.classList.remove('toggleCard'), 1000)
                })
                playerLives--
                result.textContent = playerLives
                if(playerLives == 0){
                    restart("YOU LOST, PLAY AGAIN ")
                }
                
                
            }
    }
    if(toggleCard.length === 16){
        restart("🏆 WINNER 🏆")
    }
}
//restart
const restart = (text) =>{
    let cardData = randomize()
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents = 'none'
    cardData.forEach((item, index) =>{
        cards[index].classList.remove('toggleCard')
        //randomize
        setTimeout(()=>{
            cards[index].style.pointerEvents = 'all'
            faces[index].src = item.img
            cards[index].setAttribute('name', item.name)
            section.style.pointerEvents = 'all'
        }, 1000)
    }) 
    playerLives = 7
    result.textContent = playerLives
    setTimeout(() => window.alert(text), 100)


}
cardGenerator()