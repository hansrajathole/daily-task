
let colorDiv = document.querySelector(".color")
let color  = document.querySelector("input")
let body = document.querySelector("body")
// console.log(colorDiv);
console.log(color.current);

colorDiv.addEventListener("click",()=>{
    colorDiv.style.display = "none"
    color.style.display = "initial"
    body.style.backgroundColor = color.value

    
    color.addEventListener("input",()=>{
        console.log(color.value);
        body.style.backgroundColor = color.value

        
    })
})