export function loadNavbar() {
  fetch("/navbar/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("navbar").innerHTML = html;
    });
}
