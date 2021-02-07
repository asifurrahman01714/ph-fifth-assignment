const submit = document.getElementById('submit');
        submit.addEventListener('click', function () {
            const mealName = document.getElementById('mealName');

            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName.value}`)
                .then(res => res.json())
                .then(data => {
                    const mealInput = document.getElementById('mealName').value;
                    const meal = data.meals;
                    if (mealInput == "") {
                        alert("Please Enter your Food Name")
                    } else if (meal == null) {
                        alert("Don't Match Any Food Item");
                    } else {
                        displayData(data.meals);
                    }

                })
                .catch(error => console.log(error))
        });


        //mealData = data.meals
        const displayData = (mealData) => {
            const mealDiv = document.getElementById('mealDiv');
            clearAllYourData('mealDiv');
            clearAllYourData('mealDetails');
            //allMeal = data.meals
            mealData.forEach(allMeal => {
                const mealDivAppend = document.createElement('div');
                mealDivAppend.className = 'main-part';
                
                const mealInfo = `
                     <img class="img-fluid" src="${allMeal.strMealThumb}" alt="">
                     <h3 class ="meal-name"> ${allMeal.strMeal} </h3>
                     <h5 class ="meal-area"> ${allMeal.strArea} </h5>
                 `;
                mealDivAppend.innerHTML = mealInfo;

                mealDiv.addEventListener('click', function () {
                    singleMealDetails(allMeal.idMeal);

                });
                mealDiv.appendChild(mealDivAppend);
            });
            document.getElementById('mealName').value = '';
        };


        const singleMealDetails = id => {
            const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
            fetch(url)
                .then(res => res.json())
                .then(data => displayMealDetails(data.meals))
        }

        const displayMealDetails = (allMealDetails) => {
            const mealDetails = document.getElementById('mealDetails');
            clearAllYourData('mealDetails');
            allMealDetails.forEach(allMeal => {
                const mealDetailAppend = document.createElement('div');
                mealDetailAppend.className = 'meal-details';
                const mealInfo = `
                     <img class="detail-img" src="${allMeal.strMealThumb}" alt="">
                     <h3 class ="meal-name"> ${allMeal.strMeal} </h3>
                     <h3 class ="meal-name"> Ingredients </h3>
                     <ul>
                        <li>${allMeal.strMeasure1} ${allMeal.strIngredient1}</li>
                        <li>${allMeal.strMeasure2} ${allMeal.strIngredient2}</li>
                        <li>${allMeal.strMeasure3} ${allMeal.strIngredient3}</li>
                        <li>${allMeal.strMeasure4} ${allMeal.strIngredient4}</li>
                        <li>${allMeal.strMeasure5} ${allMeal.strIngredient5}</li>
                        <li>${allMeal.strMeasure6} ${allMeal.strIngredient6}</li>
                        <li>${allMeal.strMeasure7} ${allMeal.strIngredient7}</li>
                        <li>${allMeal.strMeasure8} ${allMeal.strIngredient8}</li>
                        
                    </ul

                 `;
                mealDetailAppend.innerHTML = mealInfo;
                mealDetails.appendChild(mealDetailAppend);
            });
           
        }

        const clearAllYourData = id => {
            const mealDetails = document.getElementById(id);
            mealDetails.innerHTML = "";
        }