// Declarações de variáveis
let randomMsg = (Math.round(Math.random() * 4))
console.log(randomMsg)
const cooky = document.querySelector('.screen1 img')
const button = document.querySelector('button')
const msg1 = "If it Never Rains, You'll Never Grow"
const msg2 = "If it rains everyday, John will not be able to play soccer outside"
const msg3 = "Jack is six years old, Jack can Jump, Jack can run, Jack can swim"
const msg4 = "You gotta get up and try, try , try"
const msg5 = "O vento que te trouxe para cá, espero que não volte jamais, porque se ele perceber , que deixou você, vai querer correr atrás"




function OpenCooky (){
  document.querySelector(".screen1").classList.toggle('hide')
  document.querySelector(".screen2").classList.toggle('hide')

  if (randomMsg == 0){
    document.querySelector(".screen2 h3").innerText = msg1
  } else if(randomMsg == 1){
    document.querySelector(".screen2 h3").innerText = msg2
  }
  else if(randomMsg == 2){
  document.querySelector(".screen2 h3").innerText = msg3
  }else if(randomMsg == 3){
    document.querySelector(".screen2 h3").innerText = msg4
  }
  else if(randomMsg == 4){
  document.querySelector(".screen2 h3").innerText = msg5
}
}


cooky.addEventListener('click', OpenCooky)

button.addEventListener('click', function(){
  document.querySelector(".screen2").classList.toggle('hide')
  document.querySelector(".screen1").classList.toggle('hide')

  randomMsg = (Math.round(Math.random() * 4))
  console.log(randomMsg)
  
})