const tarolo = document.querySelector("#tarolo");
const fetchBtn = document.querySelector("#fetch");

const MEAL_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";


fetchBtn.addEventListener("click", fetchCategories);

async function fetchCategories() {
  try {
    fetchBtn.disabled = true;
    fetchBtn.textContent = "Töltés...";

    const response = await fetch(MEAL_URL);
    const data = await response.json();

    
    displayCategories(data.categories);
  } catch (error) {
    alert(error);
  } finally {
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Fetch";
  }
}

function displayCategories(categories) {
  if (!categories) {
    return alert("A tömböt elfelejtetted küldeni (data.categories).");
  }


  tarolo.innerHTML = "";

  categories.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = cat.strCategoryThumb;
    img.alt = cat.strCategory;

 
    const title = document.createElement("div");
    title.className = "card-title";
    title.textContent = `Kategória: ${cat.strCategory}`;

    card.appendChild(img);
    card.appendChild(title);

    tarolo.appendChild(card);
  });
}
