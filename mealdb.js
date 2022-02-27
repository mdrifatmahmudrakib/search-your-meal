const searchFood = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    // console.log(inputText);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => dispayMeals(data.meals))
}

const dispayMeals = meals => {
    // console.log(meals);
    // meals.forEach(meal => {
    //     console.log(meal);
    // });



    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";

    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>

        `;
        searchResult.appendChild(div);
    });
}