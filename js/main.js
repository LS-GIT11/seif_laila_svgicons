console.log("JS file connected");

document.addEventListener("DOMContentLoaded", function () {
    console.log("JS file connected");
  
    const almondIcon = document.getElementById("almond-icon");
    const hazelIcon = document.getElementById("hazel-icon");
    const pistaIcon = document.getElementById("pista-icon");
    const macaIcon = document.getElementById("maca-icon");
    const almondVIcon = document.getElementById("almond-v-icon");
    const cocoVIcon = document.getElementById("coco-v-icon");
  
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

  document.getElementById("rotate-almond-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(10deg)";
});

document.getElementById("rotate-almond-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-almond-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.getElementById("rotate-almond-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});


/*--pistachio--*/

document.getElementById("rotate-pista-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(10deg)";
});

document.getElementById("rotate-pista-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-pista-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.getElementById("rotate-pista-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});



/*--macadamia--*/


document.getElementById("rotate-maca-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-10deg)";
});

document.getElementById("rotate-maca-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-maca-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.getElementById("rotate-maca-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

/*--hazelnut--*/


document.getElementById("rotate-hazel").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.getElementById("rotate-hazel").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-hazelnut").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-10deg)";
});

document.getElementById("rotate-hazelnut").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});


/*--almond vegan--*/

document.getElementById("rotate-almond-v-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(10deg)";
});

document.getElementById("rotate-almond-v-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-almond-v-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.getElementById("rotate-almond-v-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-almond-v-leaf1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.getElementById("rotate-almond-v-leaf1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-almond-v-leaf2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.getElementById("rotate-almond-v-leaf2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});


/*--coconut vegan--*/

document.getElementById("rotate-coco-1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-10deg)";
});

document.getElementById("rotate-coco-1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-coco-2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(5deg)";
});

document.getElementById("rotate-coco-2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-coco-leaf1").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.getElementById("rotate-coco-leaf1").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});

document.getElementById("rotate-coco-leaf2").addEventListener("mouseenter", function() {
    this.style.transform = "rotate(-5deg)";
});

document.getElementById("rotate-coco-leaf2").addEventListener("mouseleave", function() {
    this.style.transform = "rotate(0deg)";
});
