$(function(){


    // introMotion = gsap.timeline({
    //     onComplete:function(){
    //         $('.loading').remove();
    //     }
    // })
    // introMotion.to('.loading .txt1 i',{
    //     delay:1,
    //     yPercent:-100,
    //     stagger:0.1
    // })
    // introMotion.to('.loading .txt2 i',{
    //     yPercent:-100,
    //     stagger:0.1
    // })
    // introMotion.to('.loading .txt2 i',{
    //     yPercent:-200,
    //     stagger:0.1
    // })
    // introMotion.to('.loading .txt3 i',{
    //     yPercent:-100,
    //     stagger:0.1
    // })
    // introMotion.to('.loading',{
    //     scale:2,
    //     opacity:0,
    //     filter: 'blur(16px)'
    // })





    gsap.to('.sc-visual .deco1',{
        scrollTrigger:{
            trigger:".sc-visual",
            start:"0% 0%",
            end:"100% 0%",
            // markers:true,
            scrub:1,
        },
        yPercent:20,
    })



    sc01 = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-01 .img-box",
            start:"0% 0%",
            end:"100% 0%",
            markers:true,
            scrub:1,
            // pin:true,
        },
    })    

    sc01.addLabel('a')
    sc01.to('.sc-01 .img-box img',{
        scale:0.8,
    },'a')
    sc01.to('.sc-01 .img-box .txt',{
        xPercent:-200,
    },'a')





 


    
})