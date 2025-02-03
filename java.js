document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(" .card");
    let index = 0;

    // Prikazuje samo prve tri kartice na početku
    cards.forEach((card, i) => {
        if (i < 3) {
            card.style.opacity = "1";
            card.style.transform = "translateX(0)";
        } else {
            card.style.opacity = "0";
            card.style.transform = "translateX(50px)";
            card.style.position = "absolute";
            card.style.visibility = "hidden";
        }
    });

    function rotateCards() {
        const currentCard = cards[index];
        const nextCard = cards[(index + 3) % cards.length];

        // Animacija za odlazeću karticu
        currentCard.style.opacity = "0";
        currentCard.style.transform = "translateX(-50px)";
        setTimeout(() => {
            currentCard.style.visibility = "hidden";
            currentCard.style.position = "absolute";
        }, 500);

        // Animacija za dolazeću karticu
        nextCard.style.visibility = "visible";
        nextCard.style.position = "relative";
        nextCard.style.opacity = "0";
        nextCard.style.transform = "translateX(50px)";
        setTimeout(() => {
            nextCard.style.opacity = "1";
            nextCard.style.transform = "translateX(0)";
        }, 100);

        index = (index + 1) % cards.length;
    }

    setInterval(rotateCards, 3000);
});
