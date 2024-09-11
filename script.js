


let box = document.getElementById("box")


setInterval(() => {
    console.log(Math.floor(Math.random() * 255))
    let width =Math.floor(Math.random() * 100);
    let height=Math.floor(Math.random() * 100);
    
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let transformX = `translateX(${Math.floor(Math.random() * 90)}vw)`;
    let transformY = `translateY(${Math.floor(Math.random() * 90)}vh)`;
    let color= `rgb(${r},${g},${b})`

    box.style.backgroundColor = color ;
    box.style.width= `${width}%`
    box.style.height= `${height}%`
    box.style.transform= `${transformX} ${transformY}`

}, 2000);

