"use strict";

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createBtn.addEventListener('click', function () {
      const amount = parseInt(input.value);
      if (amount >= 1 && amount <= 100) {
          createBoxes(amount);
          input.value = '';
      }
  });

  destroyBtn.addEventListener('click', function () {
      destroyBoxes();
  });

  function createBoxes(amount) {
      let size = 30;
      boxesContainer.innerHTML = '';
      for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          box.style.width = size + 'px';
          box.style.height = size + 'px';
          box.style.backgroundColor = getRandomHexColor();
          boxesContainer.appendChild(box);
          size += 10;
      }
  }

  function destroyBoxes() {
      boxesContainer.innerHTML = '';
  }

  function getRandomHexColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
});
