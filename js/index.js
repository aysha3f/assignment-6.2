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

// fetch categories from API
async function loadCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
  const data = await res.json();
  disPlayCategories(data.categories);
};
// show categories as buttons
function disPlayCategories (categories){
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = "";
  categories.forEach(item => {
    const button = document.createElement("button");
   button.innerHTML = `
  <img src="${item.category_icon}" alt="${item.category}" class="w-6 h-6 inline-block mr-2">
      ${item.category}
    `;
    button.className = "px-4 py-2  rounded-lg ";
button.addEventListener("click", () => loadPetsByCategory(item.category));
 categoryContainer.appendChild(button);
  });
};
loadCategories();


