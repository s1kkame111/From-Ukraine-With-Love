const moon = document.getElementById("moon");
const ramadanContainer = document.getElementById("ramadanContainer");
const messageCard = document.getElementById("messageCard");
const timerElement = document.getElementById("timer");

let reversed = false;

/* ========================= */
/* DRAMATIC STARS */
/* ========================= */

function createStars(layerClass, count) {
    const layer = document.querySelector("." + layerClass);

    for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.top = Math.random() * 75 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 5 + "s";

        layer.appendChild(star);
    }
}

setTimeout(() => {
    createStars("layer1", 60);
    createStars("layer2", 40);
    createStars("layer3", 30);
}, 2000);

/* ========================= */
/* MOON APPEAR */
/* ========================= */

setTimeout(() => {
    moon.classList.add("active");

    setTimeout(() => {
        moon.classList.add("breath");
    }, 3000);

}, 2500);

/* ========================= */
/* RAMADAN TEXT */
/* ========================= */

setTimeout(() => {

    ramadanContainer.classList.add("show");

    const target = new Date("March 10, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        timerElement.innerHTML = days + " days remaining";
    }, 1000);

    setTimeout(() => {
        ramadanContainer.classList.remove("show");
        clearInterval(interval);
    }, 7000);

}, 6000);

/* ========================= */
/* MESSAGE CARD */
/* ========================= */

setTimeout(() => {
    messageCard.classList.add("show");
    messageCard.classList.add("float");
}, 13000);

/* ========================= */
/* REVERSE ON CLICK */
/* ========================= */

document.addEventListener("click", () => {

    if (!reversed) {
        messageCard.classList.add("hide");
        moon.classList.remove("breath");
        moon.classList.remove("active");
        reversed = true;
    }

});
