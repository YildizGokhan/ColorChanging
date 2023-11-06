function randomColor() {
    let items = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += items[Math.floor(Math.random() * 16)];
    }
    return color;
}

const main = document.querySelector(".bgDiv");
const inputBox = document.querySelector("#colorInput");
const colorNo = document.querySelector("#colorText");
const pText = document.querySelector("#colorText");

document.getElementById("colorButton").addEventListener("click", () => {
    const generatedColor = randomColor();
    main.style.backgroundColor = generatedColor;
    inputBox.value = generatedColor;
    colorNo.textContent = generatedColor;
    pText.style.color = generatedColor;
});

const mouseOver = document.querySelector("#mouseOver");
mouseOver.addEventListener("mouseover", () => {
    const generatedColor = randomColor();
    main.style.backgroundColor = generatedColor;
    inputBox.value = generatedColor;
    colorNo.textContent = generatedColor;
    pText.style.color = generatedColor
});

window.addEventListener("load", () => {
    const generatedColor = randomColor();
    inputBox.value = generatedColor;
    main.style.backgroundColor = generatedColor;
    colorNo.textContent = generatedColor;
});

inputBox.addEventListener("input", () => {
    colorNo.innerText = inputBox.value;
    main.style.backgroundColor = inputBox.value;
});

const copyButton = document.getElementById("copyy");
copyButton.addEventListener("click", () => {
    const textToCopy = colorNo.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log("Text copied successfully!");
    }).catch((error) => {
        console.error("Failed to copy text:", error);
    });
});