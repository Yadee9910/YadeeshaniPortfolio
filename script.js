const toggleButtons = document.querySelectorAll('.toggle-button');
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.parentElement.parentElement.nextElementSibling;
      content.querySelector('.content.active').classList.remove('active');
      content.querySelector(`.content.${button.textContent.toLowerCase().replace(' ', '-')}`).classList.add('active');
    });
  });