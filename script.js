let isMouseDown = false;


function load(){
    const con = document.querySelector("#container")

   

    for(i = 1 ; i<=128*128 ; i++){
        const id = `pa${i}`
        const paper = document.createElement("div")
        paper.classList.add("paper")
        paper.id = id
        paper.setAttribute("onmouseenter",`changecolor(${id})`)
        con.appendChild(paper)
    }

}
load()
let docData = [document.body.innerHTML]
let docDataret = []
function changecolor(item){
    if(isMouseDown)  {
        item.classList.add("colored");
        
    }
}


function udpateBody(){

    docData.push(document.body.innerHTML)
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
    document.body.innerHTML = docData[docData.length-1] 
}
})

document.addEventListener("keydown",function(e){
    if(e.ctrlKey && e.key.toLowerCase() == "y"&& docDataret.length>0){
        let temp = docDataret.pop()
        document.body.innerHTML = temp
        docData.push(temp)

        
    }

})








