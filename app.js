const recipeLink = "https://www.themealdb.com/api/json/v1/1/search.php";
      function recipeName(recipe) {
        const url = `${recipeLink}?s=${recipe}`;
        fetch(url)
          .then(Response => Response.json())
         .then(data => displayRecipe(data))
          .catch(error=> alert("please input correct recipe name"))
      }

      document.getElementById("search-button").addEventListener("click", () => {
        const inputRecipe = document.getElementById("search-input").value;
        if (inputRecipe === "") {
          alert("please input recipe name") 
        }
        else {
        recipeName(inputRecipe);
        }
      });
      const displayRecipe = (data) => {
        const item = data.meals;
        item.forEach((element) => {
            const recipeDiv = document.getElementById('recipeDiv');
            const newDiv = document.createElement('div')
            newDiv.className = "col-3 ms-2 mb-5 recipe"
          const discItem = `
              <div onclick="displayDetails('${element.strMeal}')">
            <img class="img-fluid" src="${element.strMealThumb}">
            <h5 class="mt-3">${element.strMeal}</h5>
            </div>`
            newDiv.innerHTML = discItem;
            recipeDiv.appendChild(newDiv);
            document.getElementById("search-input").value = "";
            
        });
        
}
       function displayDetails(recipeTittle){
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeTittle}`
          fetch(url)
          .then(Response => Response.json())
          .then(data =>displayIngredient(data))
}
     
     function  displayIngredient (details) {
        const listItem = details.meals;
        listItem.forEach(element => {
            const ingredient = document.getElementById('ingredient-list');

            const ingredientList = `
       <img class="img-fluid food-img" src="${element.strMealThumb}">
      <div class="recipe-content px-5 pb-2">
      <h2 class="pt-4">${element.strMeal}</h2>
      <h5 class="pt-2 pb-3">ingredient</h5>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure1} ${element.strIngredient1}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure2} ${element.strIngredient2}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure3} ${element.strIngredient3}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure4} ${element.strIngredient4}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure5} ${element.strIngredient5}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure6} ${element.strIngredient6}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure7} ${element.strIngredient7}</p>
      <p><i class="fas fa-check-square icon"></i> ${element.strMeasure8} ${element.strIngredient8}</p>
      </div>`;

            ingredient.innerHTML = ingredientList; 
        });

    }
          
