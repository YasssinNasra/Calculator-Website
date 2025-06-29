const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const Enter_button = document.getElementById("equal_button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if (value === "Clear") {
            display.value = "";
        } else if (value === "Back") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value.replace('x', '*'));
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    });
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        try {
            display.value = eval(display.value.replace('x', '*'));
        } catch {
            display.value = "Error";
        }
    }
});