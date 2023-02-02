const tl = gsap.timeline({ defaults: { ease:'power1.out' }});

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 3, delay: 0.5 });
tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=3");
tl.fromTo(".hero-buttons", { opacity: 0 }, { opacity: 1, duration: 3 }, "-=3");
