let isMouseDown = false;
const color = document.querySelector(".color")
let painting = document.querySelector("#container")
const paper = document.querySelector(".paper")
let touch = false
function load(){
  

    let squareSize = 360/128

    for(i = 2 ; i<=128*128 ; i++){

        const paperg = document.createElement("div")
        paperg.style.backgroundColor = "white"
        paperg.style.width = `${squareSize}px`
        paperg.style.height = `${squareSize}px`
        paperg.classList.add("paper")
        paperg.setAttribute("onmouseover",`change(this)`)
        
        paperg.addEventListener("touchstart",function(e){
            touch = true
            change(paperg)
        })

        painting.appendChild(paperg)

        
        
    }

}
load()
let clear = document.body.innerHTML
let docData = [painting.innerHTML]
let docDataret = []




function udpateBody(){
    docData.push(painting.innerHTML)
}

document.addEventListener('mousedown', function() {
    isMouseDown = true;
    
});

// Event listener for mouseup
document.addEventListener('mouseup', function() {
    isMouseDown = false;
    udpateBody();
});


document.addEventListener("keydown" , function(e){
if(e.ctrlKey && e.key.toLowerCase() == "z" && docData.length-1>0){
    
    
    docDataret.push(docData.pop())
    painting.innerHTML = docData[docData.length-1] 
}
})

document.addEventListener("keydown",function(e){
    if(e.ctrlKey && e.key.toLowerCase() == "y"&& docDataret.length>0){
        let temp = docDataret.pop()
        painting.innerHTML = temp
        docData.push(temp)

        
    }

})
function change(e){
    if(isMouseDown || touch) e.style.backgroundColor = color.value
    
}

function reset(){
    document.body.innerHTML = clear
}













