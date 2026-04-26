
const searchInput = document.getElementById("sr");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    const blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
        const title = block.querySelector("h3").textContent.toLowerCase();

        if (title.includes(searchValue)) {
            block.style.display = "block";
        } else {
            block.style.display = "none";
        }
    });
});

const cards = document.querySelectorAll(".block");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.95)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 150);
    });
});