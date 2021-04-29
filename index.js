'use strict';

console.log('funguju');

const shirt = document.getElementById('product-image');
const colorDivs = document.querySelectorAll('.color-box');
const btn = document.getElementById('button');
const productColorsEl = document.querySelector('.product__colors');
const container = document.querySelector('.product');

const init = function () {
  colorDivs.forEach((div) => {
    div.style.border = 'none';
    div.style.filter = 'blur(2px)';
    div.classList.remove('selected');
  });
};

init();

const highlight = function (e) {
  init();
  const div = e.target;
  if (!div.classList.contains('white')) {
    div.style.border = '1px solid white';
  } else {
    div.style.border = '1px solid black';
  }
  div.classList.add('selected');
  div.style.filter = 'none';
  shirt.style = `fill: ${div.dataset.color}`;
};

colorDivs.forEach((div) => {
  div.addEventListener('click', highlight);
});

const order = function () {
  container.insertAdjacentHTML(
    'afterend',
    `<div class="ordered">Děkujeme za Vaši objednávku!</div>`,
  );
};

btn.addEventListener('click', order);
