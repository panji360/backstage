const openButton = document.getElementById("content_link-1")


const picAnim = document.getElementById("img1")

openButton.addEventListener('mouseenter', () => {
    gsap.killTweensOf(picAnim)
    gsap.to(picAnim, {
        duration: 2,
        ease: 'power4',
        scale: 1.2
    })
})

openButton.addEventListener('mouseleave', () => {
    gsap.killTweensOf(picAnim)
    gsap.to(picAnim, {
        duration: 0.7,
        ease: 'expo',
        scale: 1
    })
})

openButton.addEventListener('click', click)

const articleView = document.getElementById("article1")
const body = document.getElementsByTagName("BODY")[0]; 

function click() {
    articleView.style.display = "block"
    body.style.overflow = "hidden" //hide the scrollbar on original body to prevent double scrolls
}

var span = document.getElementsByClassName("close")[0]

span.onclick = function() {
    articleView.style.display = "none"
    body.style.overflow = "auto"
  }
  