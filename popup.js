const URL = 'https://www.youtube.com/results?search_query=';
let input, button;

document.addEventListener('DOMContentLoaded', () => {
  input = document.getElementById('input');
  button = document.getElementById('button');

  input.addEventListener('keypress', search);
  button.addEventListener('click', search);

  input.focus();
});

function search(event) {
  if (event.type === 'keypress' && event.keyCode !== 13) {
    return;
  }

  const query = input.value.trim();

  if (query === "") {
    return;
  }

  chrome.tabs.create({ url: `${URL}${query}` });
}
