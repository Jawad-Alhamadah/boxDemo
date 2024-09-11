


let box = document.getElementById("box")


setInterval(() => {
 


    let width =Math.floor(Math.random() * 1000);
    let height=Math.floor(Math.random() * 1000);
    
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let transformX = `translateX(${Math.floor(Math.random() * 255)}px)`;
    let transformY = `translateY(${Math.floor(Math.random() * 255)}px)`;
    let color= `rgb(${r},${g},${b})`


    box.style.backgroundColor = color ;
    box.style.width= `${width}px`
    box.style.height= `${height}px`
    box.style.transform= `${transformX} ${transformY}`

    

    
}, 2000);