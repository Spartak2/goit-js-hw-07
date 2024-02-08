"use strice"

// const categoriesList = document.querySelector("#categories");
// const categoriesItems = document.querySelectorAll(".item");

// // Порахує і виведе в консоль кількість категорій
// console.log(`Кількість категорій: ${categoriesItems.length}`);

// // Для кожної категорії виведе в консоль назву та кількість елементів
// categoriesItems.forEach(category => {
//   const categoryName = category.querySelector("h2").textContent;
//   const categoryItemsCount = category.querySelectorAll("ul li").length;
//   console.log(`Категорія: ${categoryName}`);
//   console.log(`Кількість елементів: ${categoryItemsCount}`);
// });

const categoriesList = document.querySelector("#categories");
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
const categoryName = category.querySelector("h2").textContent;
const categoryItemsCount = category.querySelectorAll("ul li").length;

console.log(`Categories ${categoryName}`);
console.log(`Elements ${categoryItemsCount}`);
});
