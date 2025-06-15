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
}