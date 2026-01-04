let slider = document.getElementById("slider");
let index = 0;

let startX = 0;
let endX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

document.addEventListener("mousedown", e => {
    startX = e.clientX;
});

document.addEventListener("mouseup", e => {
    endX = e.clientX;
    handleSwipe();
});

function handleSwipe() {
    if (startX - endX > 50 && index < 3) {
        index++;
    } else if (endX - startX > 50 && index > 0) {
        index--;
    }

    slider.style.transform = `translateX(-${index * 100}vw)`;
}
