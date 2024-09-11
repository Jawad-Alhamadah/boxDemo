


let box = document.getElementById("box")


setInterval(() => {
 


    let width =Math.floor(Math.random() * 1000);
    let height=Math.floor(Math.random() * 1000);
    
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color= `rgb(${r},${g},${b})`


    box.style.color = color
    box.style.width= `${width}px`
    box.style.height= `${height}px`

    

    
}, 2000);