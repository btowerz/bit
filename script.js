const texts = [
    "IT Administrator",
    "IT Support Specialist",
    "System Administration",
    "Technical Troubleshooter"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = texts[textIndex];

    const typingElement = document.getElementById("typing");

    if (!deleting) {

        typingElement.textContent =
            current.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            current.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

typeEffect();

const year = new Date().getFullYear();

document.getElementById("footer").textContent =
    `© ${year} Bryan Ian Torres`;