export function loadNavbar() {
  const nav = document.createElement("nav");
  nav.className = "navbar";

  const left = document.createElement("div");
  left.className = "nav-left";

  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";
  hamburger.textContent = "☰";

  hamburger.setAttribute("aria-label", "Toggle menu");
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;

  const title = document.createElement("a");
  title.href = "./dashboard.html";
  title.className = "app-title";
  title.textContent = "Cafe App";

  left.append(title, hamburger);

  const navLinks = document.createElement("div");
  navLinks.className = "nav-links";

  const menuItems = [
    { name: "orders", url: "./myOrders.html" },
    { name: "categories", url: "./categories.html" },
    { name: "wallet", url: "./memberCard.html" },
    { name: "management", url: "./management.html" },
  ];

  menuItems.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.url;
    link.textContent = item.name;
    link.className = "nav-item";

    if (window.location.pathname.endsWith(item.url)) {
      link.classList.add("current");
    }

    navLinks.appendChild(link);
  });

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  nav.append(left, navLinks);
  document.body.prepend(nav);
}

document.addEventListener("DOMContentLoaded", loadNavbar);
