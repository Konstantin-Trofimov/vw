

    
const allBranchesBtn = document.querySelector('.circle-block__first-clicked-aria');
const staffBtn = document.querySelector('.circle-block__third-clicked-aria');
const planBtn = document.querySelector('.circle-block__fifth-clicked-aria');

const allBranchesBg = document.querySelector('.circle-first__icon');
const staffBg = document.querySelector('.staff-bg');
const planBg = document.querySelector('.plan-bg');


function animateButtonHover(clickedElement, bgElement, className) {
    clickedElement.addEventListener('mouseover', () => {
        bgElement.classList.add(className);
    });

    clickedElement.addEventListener('mouseout', () => {
        bgElement.classList.remove(className);
    });
}

animateButtonHover(staffBtn, staffBg, 'max-opacity');
animateButtonHover(allBranchesBtn, allBranchesBg, 'scale');
animateButtonHover(planBtn, planBg, 'white-stroke');
