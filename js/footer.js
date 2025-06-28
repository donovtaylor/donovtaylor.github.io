// dynamically load the navbar
fetch("footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-placeholder").outerHTML = data;
  })
  .catch(error => console.error('Error loading footer:', error));