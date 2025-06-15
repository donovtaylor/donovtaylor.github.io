fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").outerHTML = data;
  })
  .catch(error => console.error('Error loading navbar:', error));
