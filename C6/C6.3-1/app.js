
const btn = document.querySelector('.j-btn-test');
const ber2 = document.querySelector('.btn_icon2');
const ber1 = document.querySelector('.btn_icon');

btn.addEventListener('click', () => {
      ber1.classList.toggle("btn_icon2_unvis");
      ber2.classList.toggle("btn_icon2_unvis");

});