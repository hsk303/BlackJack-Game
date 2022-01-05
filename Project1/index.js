// let myAge=23
// let humanDogRatio=7
// let myDogAge= myAge*humanDogRatio
// console.log(myDogAge)

// function myfunc(){
//     console.log(42)
// }
// myfunc()

let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")
let count=0
function increment(){
    count=count+1
    countEl.innerText=count
}

function save(){
  saveEl.textContent+= count+" - "
  countEl.textContent=0
  count=0 
}

// let name="Harshit "
// let greeting= "Hii, my name is "
// let myGreeting=  greeting + name
// console.log(myGreeting)