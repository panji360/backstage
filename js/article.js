const openButton = document.getElementById("content_link-1")

const overlayArticle = new TimelineMax({paused: true})
overlayArticle.to(".overlay", 1, {top:"-10%", ease: Power3.easeInOut})

/*
// Close open
function click() {
    //overlayArticle.reversed() ? overlayArticle.play() : overlayArticle.reverse();  
}
*/

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


var modalOverlay = document.querySelector(".modalOverlay");
var modal = document.querySelector(".messageWrapper");

TweenMax.set([modalOverlay, modal], { autoAlpha: 0 });


function click() {
    var newRect = getPosition(modal, openButton);

  TweenMax.set(modal, {
    x: newRect.left,
    y: newRect.top,
    width: newRect.width,
    height: newRect.height
  });

  var tl = new TimelineMax();

  tl.to(modalOverlay, 0.5, { autoAlpha: 0.75 });
  tl.to(modal, 0.5, {
    x: 0,
    y: 0,
    width: 800,
    height: 400,
    autoAlpha: 1
  });

  document.querySelector(".message").innerHTML = "Modal Content Here";
}

modalOverlay.addEventListener("click", function() {
  var newRect = getPosition(modal, openButton);
  var tl = new TimelineMax();

  tl.to(modal, 0.5, {
    autoAlpha: 0,
    x: newRect.left,
    y: newRect.top,
    height: newRect.height,
    width: newRect.width
  });
  tl.to(".modalOverlay", 0.5, { autoAlpha: 0 });
});



function getPosition(elem, target) {
  var targetRect = target.getBoundingClientRect();
  var elemRect = elem.getBoundingClientRect();

  TweenLite.set(elem, {
    x: 0,
    y: 0,
    width: targetRect.width,
    height: targetRect.height
  });
  var newRect = elem.getBoundingClientRect();
  TweenLite.set(elem, { width: elemRect.width, height: elemRect.height });
  return {
    left: targetRect.left - newRect.left,
    top: targetRect.top - newRect.top,
    width: newRect.width,
    height: newRect.height
  };
}