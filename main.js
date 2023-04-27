//gsap.to(".box", {rotation: 27, x: 100, duration: 1});


document.addEventListener("mousemove", function(event){
    const width = window.innerWidth, 
    height = window.innerHeight,
    positionX = (event.clientX/width)-0.55,
    positionY = (event.clientY/height)-0.55;
    gsap.to(".image-box img, img-caption h2", {
       rotationY:positionX * 50,
       rotationX:-positionY * 50,
       ease:"none"
    });

})