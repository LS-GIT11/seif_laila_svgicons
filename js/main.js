console.log('JavaScript is running!');

/*--logging icons--*/

/* almond */
const almondIcon = document.querySelector('#almond-icon');

almondIcon.addEventListener('click', () => {
    console.log('Almond Alert was clicked!');
});


/* hazelnut */
const hazelIcon = document.querySelector('#hazel-icon');

hazelIcon.addEventListener('click', () => {
    console.log('Hazelnut Hype was clicked!');
});

/* pistachio */
const pistaIcon = document.querySelector('#pista-icon');

pistaIcon.addEventListener('click', () => {
    console.log('Pistachio Punch was clicked!');
});

/* macadamia */
const macaIcon = document.querySelector('#maca-icon');

macaIcon.addEventListener('click', () => {
    console.log('Macadamia Momentum was clicked!');
});

/* almond vegan */

const almondVIcon = document.querySelector('#almond-v-icon');

almondVIcon.addEventListener('click', () => {
    console.log('Almond Alert Vegan was clicked!');
});

/* coconut vegan */
const cocoVIcon = document.querySelector('#coco-v-icon');

cocoVIcon.addEventListener('click', () => {
    console.log('Coconut Charge Vegan was clicked!');

});




/*-- animation unison --*/
const nutIcons = document.querySelectorAll('svg');

nutIcons.forEach(function(icon) {
    icon.addEventListener('mouseenter', function() {
        const allParts = this.querySelectorAll('g');
        allParts.forEach(function(parts) {
            parts.classList.add('hover');
        });
    });

    icon.addEventListener('mouseleave', function() {
        const allParts = this.querySelectorAll('g');
        allParts.forEach(function(parts) {
            parts.classList.remove('hover');
        });
    });
});