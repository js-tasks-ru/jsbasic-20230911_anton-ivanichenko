// const button = document.querySelector('.toggle-text-button');
// const hideText = document.querySelector('#text');

// function toggleText() {

//   button.addEventListener('click', function () {

//     hideText.hidden = !hideText.hidden;
//   });
// }

function toggleText() {
  document.querySelector('.toggle-text-button').onclick = function () {
    const textElement = document.getElementById('text');

    if (textElement.hasAttribute('hidden')) {
      textElement.removeAttribute('hidden');
      return;
    }

    textElement.setAttribute('hidden', 'hidden');
  }
}