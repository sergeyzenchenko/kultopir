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

const acc = document.getElementsByClassName("accordion-button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    const panel = this.nextElementSibling;
    panel.classList.toggle('active')
  });
}