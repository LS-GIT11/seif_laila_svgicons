console.log("JS file connected");

document.addEventListener("querySelector", function () {
    console.log("JS file connected");
  
    const almondIcon = document.querySelector('#almond-icon');
    const hazelIcon = document.querySelector('#hazel-icon');
    const pistaIcon = document.querySelector('#pista-icon');
    const macaIcon = document.querySelector('#maca-icon');
    const almondVIcon = document.querySelector('#almond-v-icon');
    const cocoVIcon = document.querySelector('#coco-v-icon');
  
    almondIcon.addEventListener("click", function () {
      console.log("Almond Alert icon clicked!");
    });
  
    hazelIcon.addEventListener("click", function () {
      console.log("Hazelnut Hype icon clicked!");
    });
  
    pistaIcon.addEventListener("click", function () {
      console.log("Pistachio Punch icon clicked!");
    });
  
    macaIcon.addEventListener("click", function () {
      console.log("Macadamia Momentum icon clicked!");
    });
  
    almondVIcon.addEventListener("click", function () {
      console.log("Almond Alert Vegan icon clicked!");
    });
  
    cocoVIcon.addEventListener("click", function () {
      console.log("Coconut Charge Vegan icon clicked!");
    });
  });
  


  /* animations */


  /*--almond regular--*/

  document.querySelector("#rotate-almond-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(10deg)";
});

document.querySelector("#rotate-almond-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-almond-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.querySelector("#rotate-almond-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});


/*--pistachio--*/

document.querySelector("#rotate-pista-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(10deg)";
});

document.querySelector("#rotate-pista-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-pista-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.querySelector("#rotate-pista-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});



/*--macadamia--*/


document.querySelector("#rotate-maca-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-10deg)";
});

document.querySelector("#rotate-maca-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-maca-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.querySelector("#rotate-maca-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

/*--hazelnut--*/


document.querySelector("#rotate-hazel").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.querySelector("#rotate-hazel").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-hazelnut").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-10deg)";
});

document.querySelector("#rotate-hazelnut").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});


/*--almond vegan--*/

document.querySelector("#rotate-almond-v-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(10deg)";
});

document.querySelector("#rotate-almond-v-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-almond-v-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.querySelector("#rotate-almond-v-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-almond-v-leaf1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.querySelector("#rotate-almond-v-leaf1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-almond-v-leaf2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.querySelector("#rotate-almond-v-leaf2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});


/*--coconut vegan--*/

document.querySelector("#rotate-coco-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-10deg)";
});

document.querySelector("#rotate-coco-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-coco-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.querySelector("#rotate-coco-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-coco-leaf1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.querySelector("#rotate-coco-leaf1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.querySelector("#rotate-coco-leaf2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.querySelector("#rotate-coco-leaf2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});
