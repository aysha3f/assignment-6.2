// nav
const navItems = ["Home", "Adopt", "About"];
const navLinks = document.getElementById("navLinks");
 navItems.forEach(item => {
    let li =document.createElement('li');
    li.innerHTML = `<a href="#">${item}</a>`;
  navLinks.appendChild(li);
 });
 // banner
 document.getElementById("viewMoreBtn").addEventListener("click", () => {
  document.getElementById("adopt").scrollIntoView({ behavior: "smooth" });
});
