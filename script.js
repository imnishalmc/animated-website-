function page1Animation(){
    // first add the gsap cdn in the project here we are gonna use the scroll trigger anuimation as well so also add the scroll trigger cdn


var tl = gsap.timeline()
tl.from("nav h1 ,nav h3",{
    y:-20,
    duration:1,
opacity:0,
delay:0.5,
stagger:0.2
})


tl.from("#center1 h1, #center1 p,#center1 button ",{
    x:-300,
    duration:0.2,
    opacity:0,
    stagger:0.4
})


//to create delay in the timeline we can do this 
tl.from("#center2 img",{
  
    duration:0.6,
    opacity:0,

},"-=.5") //this means start this animation 1 second before the previous animation ends
}
page1Animation();





// var logoss =document.querySelector("sectionlogo")

// // Move the element 80% of its own width to the left (negative X).
//             // The starting position (xPercent: 0) is the rightmost position.
//  gsap.to(logoss,{
//     xPercent:-80,
//     scrollTrigger:{
//         trigger:logoss,
//         start:"top bottom", //when the top of the trigger hits the bottom of the viewport
//         end:"bottom top", // when the bottom of the trigger hits the top of the viewport
//         scrub:1,
//         markers:true,
//     }

    
// })

const logoContainer = document.querySelector(".sectionlogo");

 
        // 2. Define the ScrollTrigger animation
        gsap.to(logoContainer, {
            // Move the element 70% of its own width to the left (negative X).
            // This links the vertical scroll to the horizontal movement.
            xPercent: -70, 
            
            // --- SCROLLTRIGGER CONFIGURATION ---
            scrollTrigger: {
                trigger: ".section-logos-wrapper", // Use the wrapper to define the scroll area
                start: "top 80%",         // Start when the top of the logo section hits the bottom of the viewport
                end: "bottom top",           // End when the bottom of the logo section leaves the top of the viewport
                scrub: 1, 
                          delay:0.1,       // Smoothly links the animation to the scroll position
                // markers: true,           // Uncomment this line to visualize the start/end points
            
            }
        }
        );