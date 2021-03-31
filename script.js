let prev_button = document.getElementById('prev');
let next_button = document.getElementById('next');
let circles = document.querySelectorAll('.circle');
let progress = document.querySelector('.active_progress');

let current_active = 1;

next_button.addEventListener('click', () => {
    current_active++;

    if (current_active > circles.length) {
        current_active = circles.length;
    }

    update();
});


prev_button.addEventListener('click', () => {

    current_active--;

    if (current_active < 1) {
        current_active = 1;

    }

    update();
});

function update() {

    circles.forEach((circle, index) => {

        if (index < current_active) {
            circle.classList.add("active");
        }

        else {
            circle.classList.remove('active');
        }
    });

    actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (current_active === 1) {
        prev_button.disabled = true;
    }

    else if (current_active === circles.length) {
        next_button.disabled = true;
    }

    else {
        prev_button.disabled = false;
        next_button.disabled = false;
    }

}