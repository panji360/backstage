const imgList=document.getElementsByClassName("item__img-inner"),btnList=document.getElementsByClassName("item__link");for(let e=0;e<btnList.length;e++)btnList[e].addEventListener("mouseenter",(()=>{gsap.killTweensOf(imgList[e]),gsap.to(imgList[e],{duration:2,ease:"power4",scale:1.5})})),btnList[e].addEventListener("mouseleave",(()=>{gsap.killTweensOf(imgList[e]),gsap.to(imgList[e],{duration:.7,ease:"expo",scale:1})}));