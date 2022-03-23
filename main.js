document.addEventListener('click', (event) => {
  const item = event.target.closest('.js-button-copy');

  if (!item) {
    return
  }

  const number = item.dataset.number;

  navigator.clipboard.writeText(number).then(
    () => console.log('Async: Copying to clipboard was successful!'),
    (err) => console.error('Async: Could not copy text: ', err)
  );
});