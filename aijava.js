
document.querySelectorAll('.imageguess a').forEach(link => {
  link.addEventListener('click', function() {
    const para = this.parentElement.querySelector('p');
    para.classList.add('revealed');
  });
});
