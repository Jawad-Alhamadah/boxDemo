


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

     r = Math.floor(Math.random() * 255);
     g = Math.floor(Math.random() * 255);
     b = Math.floor(Math.random() * 255);
     color= `rgb(${r},${g},${b})`

     let box_outline = `${Math.floor(Math.random() * 50)}px`

     box.style.border=`${box_outline} solid ${color}`

}, 2000);

