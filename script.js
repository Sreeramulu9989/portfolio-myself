const t1 = gsap.timeline();

t1.from("section p",{
    x:-250,
    opaccity:0,
    duration:1

})

t1.from("section img",{
    x:250,
    opaccity:0,
    duration:1.3

})

t1.from("nav li",{
    y:50,
    opaccity:0,
    stagger:3,
    duration:1.2

})