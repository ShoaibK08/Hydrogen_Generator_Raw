document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll('*'); // Select text elements
    
    textElements.forEach((textElement) => {
        // Animation to scale and fade in each element at the same time
        textElement.animate([
            { transform: 'scale(0)', opacity: 0 },        // Start scaled down and transparent
            { transform: 'scale(1.5)', opacity: 1 },      // Bounce up to slightly larger than normal
            { transform: 'scale(1)', opacity: 1 }         // End at normal size
        ], {
            duration: 1000, // Duration of the animation (1 second)
            easing: 'ease-in-out',
            fill: 'forwards'
        });
    });
});






// document.addEventListener("DOMContentLoaded", () => {
//     // Select text and link elements
//     const textElements = document.querySelectorAll('h1, p, h3, footer, header, img'); // Select text elements
//     const linkElements = document.querySelectorAll('a'); // Select <a> elements (links)

//     // Sequential animation for each text element
//     textElements.forEach((textElement, index) => {
//         gsap.fromTo(textElement, {
//             scale: 0.5,
//             opacity: 0
//         }, {
//             scale: 1,
//             opacity: 1,
//             duration: 1.5, // 1.5 seconds
//             delay: index * 0.03, // Delay each element's animation by 30ms
//             ease: "easeOut"
//         });
//     });

//     // Jumping animation for each <a> element (links)
//     linkElements.forEach((linkElement) => {
//         const jumpTimes = Math.floor(Math.random() * 3) + 1;  // Randomly choose 1, 2, or 3 jumps
//         gsap.to(linkElement, {
//             y: -10,
//             opacity: 1,
//             duration: 0.5, // Duration of one jump (500ms)
//             yoyo: true, // Make the animation reverse
//             repeat: jumpTimes - 1, // Repeat the jump a random number of times (1 to 3)
//             ease: "power1.inOut"
//         });
//     });
// });
