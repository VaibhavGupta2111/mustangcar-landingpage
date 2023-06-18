var tl=gsap.timeline();

gsap
tl.from("#comp",{
    opacity:0.2,
    scale: 0,
    ease: "expo.easeinOut",
    duration: 1,
    delay:0.5,
    top:10
})
gsap.to("img",{
    scale:1,
    ease: "expo.easeinOut",
    duration: 3
})
