const searchCockTail = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayDrinks(data.drinks))
}

const displayDrinks = drinks => {
    console.log(drinks);
    const searchResult = document.getElementById('search-result');

    drinks.forEach(drink => {
        console.log(drink);

        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML = `
        <div class="card">
                <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${drink.strDrink}</h5>
                    <p class="card-text">${drink.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;

        searchResult.appendChild(div);
    })

}