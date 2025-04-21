let observer2 = new IntersectionObserver((e)=>{
    e.forEach((cir)=>{
        if(cir.isIntersecting){
            cir.target.style.scale = 1;
            cir.target.style.opacity = 1;
        }else{
            // cir.target.style.scale = 0
            // cir.target.style.opacity = 0
        }
            
    })
})

let circle = document.querySelectorAll('.circle');
observer2.observe(circle[0])
observer2.observe(circle[1])
observer2.observe(circle[2])
observer2.observe(circle[3])
observer2.observe(circle[4])
observer2.observe(circle[5])
observer2.observe(circle[6])
observer2.observe(circle[7])
observer2.observe(circle[8])
observer2.observe(circle[9])