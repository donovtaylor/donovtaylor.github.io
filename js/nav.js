// highlight the active tab in the top bar based on the current URL
function highlightActiveTab() {
    var top_bar = document.querySelector('.top-bar');
    if (top_bar) {
        var currentPath = window.location.pathname;
        var links = top_bar.querySelectorAll('a');

        links.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href && currentPath.includes(href)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        // If no link is active, set the first link as active
        if (!top_bar.querySelector('.active') && links.length > 0) {
            links[0].classList.add('active');
        }
    }
}

// dynamically load the navbar
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").outerHTML = data;
    highlightActiveTab();
  })
  .catch(error => console.error('Error loading navbar:', error));
