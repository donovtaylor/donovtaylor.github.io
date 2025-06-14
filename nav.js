$.get("navbar.html", function(data) {
  $("#replace-with-navbar").replaceWith(data);
});