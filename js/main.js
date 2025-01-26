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
  