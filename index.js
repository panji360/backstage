
const imgList = document.querySelectorAll(".item__img-inner")
const btnList = document.querySelectorAll(".item__link")

for (var b = 0; b < btnList.length; b++)
{
    btnList[b].addEventListener('mouseenter', (e) => {
        gsap.killTweensOf(imgList[b])
        gsap.to(imgList[b], {
            duration: 2,
            ease: 'power4',
            scale: 1.5
        })
    })

    btnList[b].addEventListener('mouseleave', (e) => {
        gsap.killTweensOf(imgList[b])
        gsap.to(imgList[b], {
            duration: 0.7,
            ease: 'expo',
            scale: 1
        })
    })

}