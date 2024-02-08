"use strict";


const input = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

input.addEventListener("input", setOutput);

function setOutput(event) {
    const enteredName = event.currentTarget.value.trim();
    textOutput.textContent = enteredName || "Anonymous";
}
