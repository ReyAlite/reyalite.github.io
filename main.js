// Code for matter.js demo with custom canvas rendering


// const WINDOW_WIDTH = window.innerWidth;
// const WINDOW_HEIGHT = window.innerHeight;

// // module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Bodies = Matter.Bodies,
//     Composite = Matter.Composite;

// // create an engine
// var engine = Engine.create();

// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine
// });

// var canvas = document.createElement('canvas'),
//     context = canvas.getContext('2d');

// canvas.width = WINDOW_WIDTH;
// canvas.height = WINDOW_HEIGHT;

// document.body.appendChild(canvas);

// // create two boxes and a ground
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// let rectWidth = 180
// let rectHight = 180
// let groundStart = WINDOW_HEIGHT-50

// var boxA = Bodies.rectangle(getRandomInt(WINDOW_WIDTH), 0, rectWidth, rectHight);
// var boxB = Bodies.rectangle(getRandomInt(WINDOW_WIDTH), 20, rectWidth, rectHight);
// var boxC = Bodies.rectangle(getRandomInt(WINDOW_WIDTH), 80, rectWidth, rectHight);
// var boxD = Bodies.rectangle(getRandomInt(WINDOW_WIDTH), 0, rectWidth, rectHight);
// var boxE = Bodies.rectangle(getRandomInt(WINDOW_WIDTH), 10, rectWidth, rectHight);
// var boxF = Bodies.rectangle(getRandomInt(WINDOW_WIDTH), 0, rectWidth, rectHight);
// var ground = Bodies.rectangle(WINDOW_WIDTH/2 , WINDOW_HEIGHT, WINDOW_WIDTH, 1, { isStatic: true });

// (function render() {
//     var bodies = Composite.allBodies(engine.world);

//     window.requestAnimationFrame(render);

//     context.fillStyle = '#540763';
//     context.fillRect(0, 0, canvas.width, canvas.height);

//     context.beginPath();

//     for (var i = 0; i < bodies.length; i += 1) {
//         var vertices = bodies[i].vertices;

//         context.moveTo(vertices[0].x, vertices[0].y);

//         for (var j = 1; j < vertices.length; j += 1) {
//             context.lineTo(vertices[j].x, vertices[j].y);
//         }

//         context.lineTo(vertices[0].x, vertices[0].y);
//     }

//     context.lineWidth = 1;
//     context.strokeStyle = '#fff';
//     context.stroke();
// })();

// // add all of the bodies to the world
// Composite.add(engine.world, [boxA, boxB, boxC, boxD, boxE, boxF, ground]);

// // run the renderer
// Render.run(render);

// // create runner
// var runner = Runner.create();

// // run the engine
// Runner.run(runner, engine);

// Animation?
console.log(document.querySelector('#project-details-modal')); // Log the modal element

// Sliding section functionality
document.querySelectorAll('[data-slide-target="project-details"]').forEach(element => {
    element.addEventListener('click', () => {
        console.log("Slide target found:", element); // Log the element
        const slideSection = document.querySelector('#project-details-slide');
        if (slideSection) {
            slideSection.classList.remove('d-none'); 
            slideSection.classList.remove('animate__slideOutRight'); 
            slideSection.classList.add('animate__slideInRight'); 
            slideSection.setAttribute('aria-hidden', 'false');
        }
    });
});

// Close sliding section functionality
document.querySelectorAll('[data-slide-close]').forEach(closeButton => { // Use querySelectorAll
    console.log("close");
    closeButton.addEventListener('click', () => {
        const slideSection = closeButton.closest('#project-details-slide');
        if (slideSection) {
            slideSection.classList.remove('animate__slideInRight'); 
            slideSection.classList.add('animate__slideOutRight'); 
            slideSection.setAttribute('aria-hidden', 'true');
        }
    });
});

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

