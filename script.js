let red = document.querySelector(".red")
let cyan = document.querySelector(".cyan")
let violet = document.querySelector(".violet")
let orange = document.querySelector(".orange")
let pink = document.querySelector(".pink")
let center = document.querySelector(".center")



// in ComputedStyle to access background-color its being converted to backgroundColor
// console.log(window.getComputedStyle(red).backgroundColor);

const getBgColor = function(selctedEle){
    return window.getComputedStyle(selctedEle).backgroundColor;
}

// var orangeElementColor = getBgColor(orange);
// orange.addEventListener("mouseenter",()=>{
//     center.style.background = orangeElementColor;
// })

// var pinkElementColor = getBgColor(pink);
// pink.addEventListener("click",()=>{
//     center.style.background = pinkElementColor;
// })

const magicColorChanger = function(ele, color){
    return ele.addEventListener("mouseenter",()=>{
        center.style.background = color;
    })
}
magicColorChanger(red, getBgColor(red))
magicColorChanger(cyan, getBgColor(cyan))
magicColorChanger(violet, getBgColor(violet))
magicColorChanger(orange, getBgColor(orange))
magicColorChanger(pink, getBgColor(pink))
