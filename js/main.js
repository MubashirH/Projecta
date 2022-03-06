function headerFooterLoad() {
  $("#header").load("./components/header.html");
  $("#footer").load("./components/footer.html");
}

$(document).ready(function () {
  headerFooterLoad();
});
