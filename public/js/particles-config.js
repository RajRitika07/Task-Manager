// /* Particles.js Config for Ritika Task Management 🌻 *
// particlesJS("particles-js", {
//   "particles": {
//     "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
//     "color": { "value": "#FFD700" }, /* Golden Sparks *
//     "shape": { "type": "circle" },
//     "opacity": { "value": 0.5, "random": true, "anim": { "enable": false } },
//     "size": { "value": 3, "random": true, "anim": { "enable": false } },
//     /* 1. Defines the lines connecting the constellation *
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#333333", /* Fine, faint lines like the image *
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 1.5, /* Slow, floating movement *
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       /* 2. Critically: Hook up cursor movement *
//       "onhover": {
//         "enable": true,
//         "mode": "grab" /* 'grab' connects the particles to your cursor *
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": { "distance": 200, "line_linked": { "opacity": 1 } },
//       "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
//       "repulse": { "distance": 200, "duration": 0.4 },
//       "push": { "particles_nb": 4 },
//       "remove": { "particles_nb": 2 }
//     }
//   },
//   "retina_detect": true
// });







particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "color": { "value": "#00f2ff" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3 },
    "size": { "value": 2 },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00f2ff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.8, // Slow, "zero-g" float
      "out_mode": "bounce"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // This links the dots to your cursor
      },
      "onclick": { "enable": true, "mode": "repulse" }
    },
    "modes": {
      "grab": { 
        "distance": 250, 
        "line_linked": { "opacity": 1 } 
      },
      "repulse": { "distance": 400 }
    }
  }
});