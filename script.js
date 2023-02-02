const tl = gsap.timeline({ defaults: { ease:'power1.out' }});

//hero page

tl.fromTo(["nav", ".title", ".hero-buttons"], { opacity: 0 }, { opacity: 1, duration: 3, delay: 0.5});
