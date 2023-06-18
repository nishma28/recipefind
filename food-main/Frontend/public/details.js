// Sample recipe data (replace with your actual recipe data)
const recipes = [
    {
      name: "Dosa",
      image: "images/dish-1.png",
      cuisine: "Indian",
      ingredients: ["rice", "lentils"],
      instructions: "Soak, grind, ferment batter. Cook thin round dosas. Serve hot with chutney and sambar."
    },
    {
      name: "Chicken Nugget",
      image: "images/dish-2.png",
      cuisine: "American",
      ingredients: ["chicken", "breadcrumbs"],
      instructions: "Coat chicken in breadcrumbs. Bake until golden. Serve with dipping sauce."
    },
    {
      name: "Chicken",
      image: "images/dish-3.png",
      cuisine: "Indian",
      ingredients: ["chicken", "spices"],
      instructions: " Sauté onions, garlic, ginger, and spices. Add chicken, tomatoes, and broth. Simmer until chicken is cooked and flavors are blended. Garnish with cilantro and serve hot "
    },
    {
      name: "Egg Curry",
      image: "images/dish-4.png",
      cuisine: "Indian",
      ingredients: ["eggs", "onions", "tomatoes"],
      instructions: "Boil eggs. Sauté onions, tomatoes, spices. Add water/milk for gravy. Simmer with eggs. Garnish and serve."
    },
    {
      name: "Poori",
      image: "images/dish-5.png",
      cuisine: "Indian",
      ingredients: ["wheat flour", "oil"],
      instructions: "Make dough with wheat flour. Roll out circles. Deep fry until puffed and golden. Serve with side dish."
    },
    {
      name: "Fried Chicken",
      image: "images/dish-6.png",
      cuisine: "American",
      ingredients: ["chicken", "flour", "spices"],
      instructions: "Marinate chicken. Coat in flour mixture. Deep fry until golden and cooked. Serve hot with sauce."
    }
  ];
  
  
  const recipeContainer = document.querySelector(".recipe-container");
  const ingredientsInput = document.getElementById("ingredients");
  const cuisineSelect = document.getElementById("cuisine");
  const filterBtn = document.getElementById("filter-btn");
  
  // Function to display recipes
  function displayRecipes(recipes) {
    recipeContainer.innerHTML = "";
  
    if (recipes.length === 0) {
      recipeContainer.innerHTML = "<p>No recipe found. Please try again.</p>";
      return;
    }
  
    recipes.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");
  
      const recipeImage = document.createElement("img");
      recipeImage.src = recipe.image;
      recipeImage.alt = recipe.name;
  
      // Add event listener to show recipe details when the image is clicked
      recipeImage.addEventListener("click", function () {
        showRecipeDetails(recipe);
      });
  
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
  
      const recipeName = document.createElement("h3");
      recipeName.textContent = recipe.name;
  
      const recipeInstructions = document.createElement("p");
      recipeInstructions.textContent = recipe.instructions;
  
      cardContent.appendChild(recipeName);
      cardContent.appendChild(recipeInstructions);
  
      recipeCard.appendChild(recipeImage);
      recipeCard.appendChild(cardContent);
  
      recipeContainer.appendChild(recipeCard);
    });
  }
  function showRecipeDetails(recipe) {
    // Create the overlay modal
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    // Create the modal content
    const modal = document.createElement("div");
    modal.classList.add("modal");
  
    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.innerHTML = "&times;";
  
    // Create the recipe name element
    const recipeName = document.createElement("h2");
    recipeName.textContent = recipe.name;
  
    // Create the recipe image element
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;
  
    // Create the ingredients list element
    const ingredientsList = document.createElement("ul");
    recipe.ingredients.forEach((ingredient) => {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
    });
  
    // Create the instructions element
    const instructions = document.createElement("p");
    instructions.textContent = recipe.instructions;
  
    // Append the elements to the modal
    modal.appendChild(closeButton);
    modal.appendChild(recipeName);
    modal.appendChild(recipeImage);
    modal.appendChild(ingredientsList);
    modal.appendChild(instructions);
  
    // Append the modal to the overlay
    overlay.appendChild(modal);
  
    // Append the overlay to the document body
    document.body.appendChild(overlay);
  
    // Close the modal when the close button is clicked
    closeButton.addEventListener("click", function () {
      document.body.removeChild(overlay);
    });
  }
  
  
  // Function to filter recipes
  function filterRecipes() {
    const ingredients = ingredientsInput.value.toLowerCase().trim();
    const cuisine = cuisineSelect.value;
  
    let filteredRecipes = recipes;
  
    if (ingredients) {
      filteredRecipes = filteredRecipes.filter((recipe) => {
        return recipe.ingredients.some((ingredient) => {
          return ingredient.toLowerCase().includes(ingredients);
        });
      });
    }
  
    if (cuisine !== "All") {
      filteredRecipes = filteredRecipes.filter(
        (recipe) => recipe.cuisine === cuisine
      );
    }
  
    displayRecipes(filteredRecipes);
  }
  
  // Event listener for filter button click
  filterBtn.addEventListener("click", filterRecipes);
  
  // Display all recipes initially
  displayRecipes(recipes);
  