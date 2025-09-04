function showSection(id) {
  // hide all sections
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.remove('active');
    sec.style.left = "-100vw"; // move back off-screen
  });

  // show selected section
  document.getElementById(id).classList.add('active');
}
