let player={
    name:"Harshit",
    price:200
}
let sum=0
let hasblackjack= false
let isAlive= false
let message= ""
let messageEl= document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl= document.getElementById("player-el")
let cards=[]
playerEl.textContent= player.name +": $"+ player.price
function startGame(){
    isAlive=true
    let firstCard=getrandomCard()
    let secondCard=getrandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard+secondCard
    renderGame()
}
function renderGame(){
    sumEl.textContent= "Sum: " + sum
    cardsEl.textContent= "Cards: "  
    for(let i=0;i<cards.length;i++)
       cardsEl.textContent+=cards[i]+" " 
    if(sum<21){
        message="Do you want to draw a new card?"
    }
    else if(sum===21){
        message="You've got a Blackjack!"
        hasblackjack=true
    }else{
        message="You're out of the game!"
        isAlive=false
    }
   messageEl.textContent=message

}

function newCard(){
    if(isAlive===true && hasblackjack===false){
        let card= getrandomCard()
        cards.push(card)
        sum+=card
        renderGame()
    }
 
}
function getrandomCard(){
    let randomNo= Math.floor(Math.random()*13)+1
    if(randomNo===1){
        return 11
    }else if(randomNo>10){
        return 10
    }else{
        return randomNo
    }
}
