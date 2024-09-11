
let box = document.getElementById("box")



setInterval(() => {
    let rgb_range = 255
    let percent_range = 100 
    let width = Math.floor(Math.random() * percent_range);
    let height = Math.floor(Math.random() * percent_range);

    let r = Math.floor(Math.random() * rgb_range);
    let g = Math.floor(Math.random() * rgb_range);
    let b = Math.floor(Math.random() * rgb_range);
    let a = Number(Math.random().toPrecision(2));

    let transformX = `translateX(${Math.floor(Math.random() * 90)}vw)`;
    let transformY = `translateY(${Math.floor(Math.random() * 90)}vh)`;
    let color = `rgba(${r},${g},${b},${a})`

    box.style.backgroundColor = color;
    box.style.width = `${width}%`
    box.style.height = `${height}%`
    box.style.transform = `${transformX} ${transformY}`

   
    let box_outline = `${Math.floor(Math.random() * 25)}px`

    r = Math.floor(Math.random() * rgb_range);
    g = Math.floor(Math.random() * rgb_range);
    b = Math.floor(Math.random() * rgb_range);
    a = Number(Math.random().toPrecision(2));
    color = `rgba(${r},${g},${b},${a})`
    box.style.border = `${box_outline} solid ${color}`

}, 2000);
