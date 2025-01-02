let parent = document.querySelectorAll(".parent")


parent.forEach(function(elem){

    elem.addEventListener("mouseenter",function(dets){
        elem.childNodes[5].style.opacity = 1
        
        
    })
    elem.addEventListener("mouseleave",function(dets){
        elem.childNodes[5].style.opacity = 0   
    })

    elem.addEventListener("mousemove",function(dets){
        elem.childNodes[5].style.left = dets.x+'px'
        
    })
})