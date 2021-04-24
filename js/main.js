
const lastDrink = document.querySelector('#lastDrink')
const nextDrink = document.querySelector('#nextDrink')
const findADrink = document.querySelector('#findADrink')
const drinkName = document.querySelector('#drinkName')
const drinkImg = document.querySelector('#drinkImg')
const drinkInstructionsH2 = document.querySelector('.drinkInstructionsH2')
const drinkInstructions = document.querySelector('#drinkInstructions')
const drinkIngredientsH2 = document.querySelector('.drinkIngredientsH2')
const ingredientList = document.querySelector('#ingredientList')

const ingredientArray = []
let currentDrink = 0;

findADrink.addEventListener('click', getDrink)
lastDrink.addEventListener('click', getLastDrink)
nextDrink.addEventListener('click', getNextDrink)

function checkCurrentDrink() {
  if (currentDrink > 0) {
    lastDrink.style.display = 'block';
  } else {
    lastDrink.style.display = 'none';
  }
}


function getDrink() {
  checkCurrentDrink()
  ingredientList.innerHTML = ''
  ingredientArray.splice(0, ingredientArray.length)
  drinkInstructionsH2.style.display = 'block';
  drinkIngredientsH2.style.display = 'block';
  let drinkChoice = document.querySelector('input').value

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.drinks[0])
        drinkName.innerText = data.drinks[0].strDrink.toUpperCase()
        drinkImg.src = data.drinks[0].strDrinkThumb
        drinkInstructions.innerText = data.drinks[0].strInstructions

        //ingredients array
        ingredientArray.splice(0, 0, 
          data.drinks[0].strIngredient1,
          data.drinks[0].strIngredient2,
          data.drinks[0].strIngredient3,
          data.drinks[0].strIngredient4,
          data.drinks[0].strIngredient5,
          data.drinks[0].strIngredient6,
          data.drinks[0].strIngredient7,
          data.drinks[0].strIngredient8,
          data.drinks[0].strIngredient9,
          data.drinks[0].strIngredient10,
          data.drinks[0].strIngredient11,
          data.drinks[0].strIngredient12,
          data.drinks[0].strIngredient13,
          data.drinks[0].strIngredient14,
          data.drinks[0].strIngredient15);
        
          //append to new list
          ingredientArray.filter(Boolean).forEach(ingredient => {
            let newListElement = document.createElement('li');
            let node = document.createTextNode(ingredient)
            newListElement.appendChild(node); 
            ingredientList.appendChild(newListElement);
          });          

          if (typeof data.drinks[currentDrink + 1] === 'undefined') {
            nextDrink.style.display = 'none';
          } else {
            nextDrink.style.display = 'block';
          }

        })

      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getNextDrink() {
  ingredientList.innerHTML = ''
  ingredientArray.splice(0, ingredientArray.length)
  lastDrink.style.display = 'block';
  let drinkChoice = document.querySelector('input').value
  currentDrink++
  checkCurrentDrink()

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        
        drinkName.innerText = data.drinks[currentDrink].strDrink.toUpperCase()
        drinkImg.src = data.drinks[currentDrink].strDrinkThumb
        drinkInstructions.innerText = data.drinks[currentDrink].strInstructions
        
        //ingredients array
        ingredientArray.splice(0, 0, 
          data.drinks[currentDrink].strIngredient1,
          data.drinks[currentDrink].strIngredient2,
          data.drinks[currentDrink].strIngredient3,
          data.drinks[currentDrink].strIngredient4,
          data.drinks[currentDrink].strIngredient5,
          data.drinks[currentDrink].strIngredient6,
          data.drinks[currentDrink].strIngredient7,
          data.drinks[currentDrink].strIngredient8,
          data.drinks[currentDrink].strIngredient9,
          data.drinks[currentDrink].strIngredient10,
          data.drinks[currentDrink].strIngredient11,
          data.drinks[currentDrink].strIngredient12,
          data.drinks[currentDrink].strIngredient13,
          data.drinks[currentDrink].strIngredient14,
          data.drinks[currentDrink].strIngredient15);
        
          //append to new list
          ingredientArray.filter(Boolean).forEach(ingredient => {
            let newListElement = document.createElement('li');
            let node = document.createTextNode(ingredient)
            newListElement.appendChild(node); 
            ingredientList.appendChild(newListElement);
          }); 
          
          if (typeof data.drinks[currentDrink + 1] === 'undefined') {
            nextDrink.style.display = 'none';
          } else {
            nextDrink.style.display = 'block';
          }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getLastDrink() {
  ingredientList.innerHTML = ''
  ingredientArray.splice(0, ingredientArray.length)
  let drinkChoice = document.querySelector('input').value
  currentDrink--
  checkCurrentDrink()


  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+drinkChoice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        drinkName.innerText = data.drinks[currentDrink].strDrink.toUpperCase()
        drinkImg.src = data.drinks[currentDrink].strDrinkThumb
        drinkInstructions.innerText = data.drinks[currentDrink].strInstructions


        //ingredients array
        ingredientArray.splice(0, 0, 
          data.drinks[currentDrink].strIngredient1,
          data.drinks[currentDrink].strIngredient2,
          data.drinks[currentDrink].strIngredient3,
          data.drinks[currentDrink].strIngredient4,
          data.drinks[currentDrink].strIngredient5,
          data.drinks[currentDrink].strIngredient6,
          data.drinks[currentDrink].strIngredient7,
          data.drinks[currentDrink].strIngredient8,
          data.drinks[currentDrink].strIngredient9,
          data.drinks[currentDrink].strIngredient10,
          data.drinks[currentDrink].strIngredient11,
          data.drinks[currentDrink].strIngredient12,
          data.drinks[currentDrink].strIngredient13,
          data.drinks[currentDrink].strIngredient14,
          data.drinks[currentDrink].strIngredient15);
        
          //append to new list
          ingredientArray.filter(Boolean).forEach(ingredient => {
            let newListElement = document.createElement('li');
            let node = document.createTextNode(ingredient)
            newListElement.appendChild(node); 
            ingredientList.appendChild(newListElement);
          });          

          if (typeof data.drinks[currentDrink + 1] === 'undefined') {
            nextDrink.style.display = 'none';
          } else {
            nextDrink.style.display = 'block';
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

