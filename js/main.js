gsap.registerPlugin(ScrollTrigger);

function init(){
    
    /*gsap.to('#intro img', {opacity: 0, scrollTrigger: {
        trigger: '#intro',
        start: 'top top',
        end: 'bottom center',
        scrub: true,
        markers: false
    }});*/

    /*gsap.set('#project02', {scrollTrigger: {
        trigger: '#project02', 
        start: 'top bottom-=10%', 
        end: 'bottom center-=10%',
        toggleClass: 'active',
        markers: false
    }});

    //parralax timeline
    const parallaxTl = gsap.timeline({
        ease: 'none',
        scrollTrigger: {
            trigger: '.bcg-parallax',
            start: 'top bottom',
            scrub: true
        }
    });

    parallaxTl
        .from('.content-wrapper', {duration: 0.4, autoAlpha: 0}, 0.4)
        .from('.bcg', {duration: 2, y: '-30%'}, 0)
    
    //pin example
    gsap.to(['#intro h1','#intro p'], {
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
            trigger: '#intro .content',
            start: 'top top+=5%', 
            pin: true,
            scrub: true,
            markers: true
        }
    });*/

    //Triggering Multiple Sections
    const projects = document.querySelectorAll('.project');

    projects.forEach((project) => {

        gsap.from(project, {
            opacity: 0,
            yPercent: 5,
            scrollTrigger: {
                trigger: project.querySelector('img'),
                start: 'top bottom-=200',
                end: 'top center',
                toggleActions: 'play none none reverse',
                scrub: true,
                onUpdate: ({progress, direction}) => console.log(progress, direction),
                markers: true
            }

        })
    });
}

window.addEventListener('load', function(){
    init();
}); 
