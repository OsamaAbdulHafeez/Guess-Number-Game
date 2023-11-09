

// console.log(random)
const NumberCheck = document.querySelector('#Number')
const button = document.querySelector('button')
const main = document.querySelector('.main')
let score = document.querySelector('#Score')
let condition = document.querySelector('#condition')
const restrict = document.querySelector('#restrict')
const ScoreInfo = document.querySelector('.ScoreInfo')
console.log(ScoreInfo.firstElementChild.textContent)
let number = 20
score.textContent = `Score:${number}`
button.addEventListener('click',()=>{
    if(NumberCheck.value == ""){
        restrict.style.visibility = "visible"
        restrict.style.animation = "zoomInAndOutNullRestriction 1s ease infinite"
        condition.classList.remove('condition')
    }
    else{
        if(NumberCheck.value > 20){
            restrict.style.visibility = "hidden"
            condition.classList.add('condition')
        }
        else{
            const random = Math.ceil(Math.random()*20)
            restrict.style.visibility = "hidden"
            condition.classList.remove('condition')
            console.log(random)
            if(NumberCheck.value == random){
                main.style.backgroundColor = "green"
            }
            else if(NumberCheck.value != random){
                score.textContent = `Score:${number-=1}`
                if(NumberCheck.value>random){
                    ScoreInfo.firstElementChild.textContent = "Too High"
                }
                else if(NumberCheck.value<random){
                   ScoreInfo.firstElementChild.textContent = "Too Low" 
                }
                
            }
        }
    }
    
    
    NumberCheck.value = ""
})
