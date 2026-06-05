function toggleMoreWorks() {
  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');

  if (!dropdown || !button) {
    return;
  }

  dropdown.classList.toggle('show');
  button.classList.toggle('active');
}

document.addEventListener('click', function (event) {
  const container = document.querySelector('.more-works-container');
  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');

  if (container && dropdown && button && !container.contains(event.target)) {
    dropdown.classList.remove('show');
    button.classList.remove('active');
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key !== 'Escape') {
    return;
  }

  const dropdown = document.getElementById('moreWorksDropdown');
  const button = document.querySelector('.more-works-btn');

  if (dropdown && button) {
    dropdown.classList.remove('show');
    button.classList.remove('active');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const scrollButton = document.querySelector('.scroll-to-top');

  if (!scrollButton) {
    return;
  }

  if (window.pageYOffset > 300) {
    scrollButton.classList.add('visible');
  } else {
    scrollButton.classList.remove('visible');
  }
});
