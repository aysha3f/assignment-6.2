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
 const loadCategories = () => {fetch("https://openapi.programming-hero.com/api/peddy/categories")
.then (res => res.json())
.then(data => displayCategories(data.categories))
.catch(error =>  console.error(error));
// console.log(data)
 }
// {
//     "id": 3,
//     "category": "Rabbit",
//     "category_icon": "https://i.ibb.co.com/3hftmLC/rabbit.png"
// }
 // displaycategories
 const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
   categoryContainer.innerHTML = ""; 
categories.forEach((item) => {
  // console.log(item);
  // create a button 
  const button = document.createElement("button");
  button.classList=('adoptPet btn  flex items-center gap-2 rounded-lg px-4 py-2 border border-[#cc802f]');
  button.innerHTML = `
<img class="w-6 h-6" src="${item.category_icon}">
 <span>${item.category}</span>
  `
// add button to category container
categoryContainer.append(button)
});


const buttons = document.querySelectorAll(".adoptPet");


const btnArray = Array.from(buttons);
console.log( "checking",btnArray)

console.log("selecting kutta",btnArray[2])
btnArray[2].classList.add("!bg-[#0E7AA8]/30", "!rounded-full");


 }
loadCategories();

//selecting kutta


// btnArray.forEach(btn => console.log(btn.innerText));
