const slider = document.getElementById("slider-photos")
const images = document.getElementsByTagName("img")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const size = images[0].clientWidth
const play=document.getElementById("play")
const stop=document.getElementById("stop")
console.log(images.length)
let count = 0
if(count==0) {
    prev.style.display= 'none'
}
next.addEventListener('click' , () => {
    prev.style.display= 'block'
    if(count==images.length-1)  return
    if(count==images.length-2)  next.style.display= 'none'
    slider.style.transition='transform 0.5s ease-in-out'
    count++
    slider.style.transform = 'translateX(' + (-size * count) + 'px)'
    
})


document.addEventListener("keydown", function(evt) {
    if (evt.code === "ArrowRight" ) {
        prev.style.display= 'block'
        if(count==images.length-1)  return
        if(count==images.length-2)  next.style.display= 'none'
        slider.style.transition='transform 0.5s ease-in-out'
        count++
        slider.style.transform = 'translateX(' + (-size * count) + 'px)'
    }
}
)

prev.addEventListener('click' , () => {
    if(count==0) return
    if(count==1) {
        prev.style.display= 'none'
    }
    next.style.display= 'block'
    slider.style.transition='transform 0.5s ease-in-out'
    count--
    slider.style.transform = 'translateX(' + (-size * count) + 'px)'
 
})

document.addEventListener("keydown", function(evt) {
    if (evt.code === "ArrowLeft" ) {
        if(count==0) return
        if(count==1) {
            prev.style.display= 'none'
        }
        next.style.display= 'block'
        slider.style.transition='transform 0.5s ease-in-out'
        count--
        slider.style.transform = 'translateX(' + (-size * count) + 'px)'
        console.log(count)
    }
}
)
play.addEventListener('click',() => {
    let timerId = setInterval(() => {
        prev.style.display= 'block'
        if(count==images.length-1)  {
            clearInterval(timerId)
            return
        }
        if(count==images.length-2)  next.style.display= 'none'
        slider.style.transition='transform 1s ease-in-out'
        count++
        slider.style.transform = 'translateX(' + (-size * count) + 'px)'
    }, 1000)
    stop.addEventListener('click' , () => {
     
       clearInterval(timerId)
    })
})

