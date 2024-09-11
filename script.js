


let box = document.getElementById("box")


setInterval(() => {

    let width = Math.floor(Math.random() * 100);
    let height = Math.floor(Math.random() * 100);

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let a = Number(Math.random().toPrecision(2));
    let transformX = `translateX(${Math.floor(Math.random() * 90)}vw)`;
    let transformY = `translateY(${Math.floor(Math.random() * 90)}vh)`;
    let color = `rgba(${r},${g},${b},${a})`

    box.style.backgroundColor = color;
    box.style.width = `${width}%`
    box.style.height = `${height}%`
    box.style.transform = `${transformX} ${transformY}`

   

    let box_outline = `${Math.floor(Math.random() * 25)}px`

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    a = Number(Math.random().toPrecision(2));
    color = `rgba(${r},${g},${b},${a})`
    box.style.border = `${box_outline} solid ${color}`

}, 2000);

