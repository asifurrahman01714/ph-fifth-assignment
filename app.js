const submit = document.getElementById('submit');
        submit.addEventListener('click', function () {
            const mealName = document.getElementById('mealName');

            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName.value)
                .then(res => res.json())
                .then(data => {
                    const mealInput = document.getElementById('mealName').value;
                    const meal = data.meals;
                    if (mealInput == "") {
                        alert("Please Enter your Food Name")
                    } else if (meal == null) {
                        alert("Don't Match Any Food Item");
                    } else {
                        displayData(data);
                    }

                })
        });


        const displayData = (data) => {
            console.log(data);
            console.log(data.meals);
            console.log(data.meals[0]);
            console.log(data.meals[0].strMealThumb);
            console.log(data.meals[0].strMeal);


            const mealName = data.meals[0].strMeal;
            const mealThumbnail = data.meals[0].strMealThumb;
            const mealArea = data.meals[0].strArea;
            const mealDiv = document.getElementById('mealDiv');
            const mealDivAppend = document.createElement('div');
            const mealInfo = `
                     <img class="img-fluid" src="${mealThumbnail}" alt="">
                     <h3 class ="meal-name"> ${mealName} </h3>
                     <h5 class ="meal-area"> ${mealArea} </h5>
                 `;

            mealDivAppend.innerHTML = mealInfo;
            mealDivAppend.className = 'main-part';
            mealDiv.appendChild(mealDivAppend);


            mealDiv.addEventListener('click', function () {
                const dataMeal = data.meals[0];
                const mealDetails = document.getElementById('mealDetails');
                const mealDetailAppend = document.createElement('div');
                const mealInfo = `
                     <img class="detail-img" src="${mealThumbnail}" alt="">
                     <h3 class ="meal-name"> ${mealName} </h3>
                     <h3 class ="meal-name"> Ingredients </h3>
                     <ul>
                        <li>${dataMeal.strMeasure1} ${dataMeal.strIngredient1}</li>
                        <li>${dataMeal.strMeasure2} ${dataMeal.strIngredient2}</li>
                        <li>${dataMeal.strMeasure3} ${dataMeal.strIngredient3}</li>
                        <li>${dataMeal.strMeasure4} ${dataMeal.strIngredient4}</li>
                        <li>${dataMeal.strMeasure5} ${dataMeal.strIngredient5}</li>
                        <li>${dataMeal.strMeasure6} ${dataMeal.strIngredient6}</li>
                        <li>${dataMeal.strMeasure7} ${dataMeal.strIngredient7}</li>
                        <li>${dataMeal.strMeasure8} ${dataMeal.strIngredient8}</li>
                        
                    </ul

                 `;

                mealDetailAppend.innerHTML = mealInfo;
                mealDetailAppend.className = 'meal-details';
                mealDetails.appendChild(mealDetailAppend);
            })


        };