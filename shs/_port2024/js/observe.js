let observer = new IntersectionObserver((e)=>{
    e.forEach((main_slide)=>{
        if(main_slide.isIntersecting){
            main_slide.target.style.transform = 'translate(0, -50%)'
        }else{
            main_slide.target.style.transform = 'translate(-100%, -50%)'
        }
            
    })
})

let main_sl = document.querySelector('.main_topic')

observer.observe(main_sl);

