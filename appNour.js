const gameButtons = document.querySelectorAll("#game button")
let values = ['red','red','blue','blue','green','green','purple','purple','lightblue','lightblue','pink','pink']
let paused = false
let randomValues = []

let firstChosedImage 
let firstChosedNode
//FUNCTION randomFill
initGame()
function initGame(){
    for(let i = 0; i < 12; i++){
        const index = Math.floor(Math.random() * values.length)
        const randomValue = values[index]
        values.splice(index,1)
        randomValues.push(randomValue)
    }
}


function chose(i){
    if(!paused){
        const node = document.querySelector(`#item_${i}`)
        const value = randomValues[i]
        if(firstChosedImage){ //if we have chosed first image
            if(value === firstChosedImage){
                node.classList.add(value)
                pause()     
                setTimeout(()=>{
                    node.classList.add('hide')
                    firstChosedNode.classList.add('hide')
                    firstChosedImage = null
                    firstChosedNode = null
                },1000)       
            }else{
                node.classList.add(value)
                pause()
                setTimeout(()=>{
                    firstChosedNode.classList.remove(firstChosedImage)
                    node.classList.remove(value)
                    firstChosedNode = null
                    firstChosedImage = null
                },1000)
            }
        }else{
            node.classList.add(value)
            firstChosedImage = value
            firstChosedNode = node
    
        }
    }
}
async function pause(){
    paused = true
    setTimeout(()=>paused = false, 1000)
}



let timer = setInterval(()=>{
 //TODO: Timer Count down
},1000)

function restart(){
    //TODO:
    //1. restart html
    //2. restart js variables
}

function showWinner(){
    //TODO
}

function count(){
    //TODO
}