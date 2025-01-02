let image = [{
    src : "https://purepng.com/public/uploads/large/purepng.com-insectnature-macro-fly-danger-insect-beetle-bug-pest-wild-zoology-bite-dangerous-smallanimals-8215239941282xfvd.png"
},{
    src : "https://www.pngplay.com/wp-content/uploads/7/Bug-PNG-Photos.png"
},{
    src : "https://pngimg.com/uploads/bug/bug_PNG3995.png"
},{
    src : "https://purepng.com/public/uploads/large/purepng.com-insectnature-macro-fly-danger-insect-beetle-bug-pest-wild-zoology-bite-dangerous-smallanimals-821523994202ik5od.png"
},{
    src : "https://lh4.googleusercontent.com/proxy/sv_AVEhK0JcNFPirE-Epp15RvACSEOgIvXrg9DR9Ojt-fRH6io-46GPovEY-aI-jJ0N6g0ISWd8UQYV5YAGeYjhJ7wcMtAhYflOGRAkIbD2T"
}]

let btn = document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener("click",function(){
    let img = document.createElement("img")
    let imglength = Math.floor(Math.random()*image.length)
    img.setAttribute('src',`${image[imglength].src}`)
    img.style.position = "absolute"
    img.style.left = Math.random()*90+"%"
    img.style.top = Math.random()*90+"%"
    img.style.height = "50px"
    img.style.rotate = Math.random()*360+'deg'

    body.appendChild(img)
    console.log(img)
    
    
})