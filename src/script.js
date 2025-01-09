// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.body;
//     const textElements = document.querySelectorAll('h1, p, h3, footer, header,img'); // Select text elements to animate

//     // Animation for the entire page (left to right)
//     body.animate([
//         { transform: 'translateX(-100%)', opacity: 0 }, // Start off the screen (left side)
//         { transform: 'translateX(0)', opacity: 1 }      // Move to original position
//     ], {
//         duration: 2000, // Animation duration (3 seconds)
//         easing: 'ease-out',
//         fill: 'forwards' // Keeps the final state after animation
//     });

//     // Animation for text elements (up and down)
//     textElements.forEach((textElement) => {
//         textElement.animate([
//             { transform: 'translateY(50px)', opacity: 0 }, // Start slightly down with opacity 0
//             { transform: 'translateY(0)', opacity: 1 }      // Move to original position with full opacity
//         ], {
//             duration: 2000, // Animation duration (3 seconds)
//             easing: 'ease-out',
//             fill: 'forwards', // Keeps the final state after animation
//             delay: 1000       // Delay the text animation a little after the page comes in
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const body = document.body;

//     // Bounce effect for the page
//     body.animate([
//         { transform: 'translateY(100px)', opacity: 0 },      // Start below and invisible
//         { transform: 'translateY(-20px)', opacity: 1 },      // Bounce up slightly
//         { transform: 'translateY(0)', opacity: 1 }           // Settle back into original position
//     ], {
//         duration: 2000,  // Animation duration (2 seconds)
//         easing: 'ease-in-out',
//         fill: 'forwards'
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll('h1, p, h3, footer, header, img'); // Select text elements
    const linkElements = document.querySelectorAll('a'); // Select <a> elements (links)

    // Sequential animation for each text element
    textElements.forEach((textElement, index) => {
        textElement.animate([
            { transform: 'scale(0.5)', opacity: 0 },     // Start scaled down and transparent
            { transform: 'scale(1)', opacity: 1 }        // End at full size and fully visible
        ], {
            duration: 1500, // Duration (1.5 seconds)
            easing: 'ease-out',
            fill: 'forwards',
            delay: index * 30  // Delay each text element's animation by a small interval (300ms)
        });
    });

    // Jumping animation for each <a> element (links)
    linkElements.forEach((linkElement) => {
        const jumpTimes = Math.floor(Math.random() * 3) + 1;  // Randomly choose 1, 2, or 3 jumps
        linkElement.animate([
            { transform: 'translateY(0)', opacity: 1 },    // Start at normal position
            { transform: 'translateY(-10px)', opacity: 1 }, // Jump upwards by 10px
            { transform: 'translateY(0)', opacity: 1 }     // Return to the original position
        ], {
            duration: 500, // Duration of one jump (500ms)
            easing: 'ease-in-out',
            iterations: jumpTimes, // Repeat the jump a random number of times (1 to 3)
            fill: 'forwards'
        });
    });
});

