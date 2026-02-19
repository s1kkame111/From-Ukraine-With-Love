const moon = document.getElementById("moon");
const ramadanContainer = document.getElementById("ramadanContainer");
const messageCard = document.getElementById("messageCard");
const timerElement = document.getElementById("timer");
const starsContainer = document.querySelector(".stars");

let reversed = false;

/* ========================= */
/* STARS */
/* ========================= */

setTimeout(() => {
    for (let i = 0; i < 80; i++) {
        const star = document.createElement("span");
        const size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.top = Math.random() * 70 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 2 + "s";
        starsContainer.appendChild(star);
    }
}, 2000);

/* ========================= */
/* MOON APPEAR */
/* ========================= */

setTimeout(() => {
    moon.classList.add("active");

    setTimeout(() => {
        moon.classList.add("glow");
        moon.classList.add("breath");
    }, 2500);

}, 2500);

/* ========================= */
/* RAMADAN TEXT + TIMER */
/* ========================= */

setTimeout(() => {

    ramadanContainer.classList.add("show");

    // Ramadan countdown (example target date)
    const target = new Date("March 10, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = target - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        timerElement.innerHTML = days + " days remaining";

        if (distance < 0) {
            clearInterval(interval);
            timerElement.innerHTML = "Ramadan is here";
        }
    }, 1000);

    // disappear after 6 seconds
    setTimeout(() => {
        ramadanContainer.classList.remove("show");
    }, 6000);

}, 6000);

/* ========================= */
/* MESSAGE CARD */
/* ========================= */

setTimeout(() => {
    messageCard.classList.add("show");
    messageCard.classList.add("float");
}, 12000);

/* ========================= */
/* CLICK REVERSE */
/* ========================= */

document.addEventListener("click", () => {

    if (!reversed) {
        messageCard.classList.add("hide");
        moon.classList.remove("breath");
        moon.classList.remove("glow");
        moon.classList.remove("active");
        reversed = true;
    }

});
