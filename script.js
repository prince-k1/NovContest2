let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const show = document.querySelector('.show');
const aboveRating = document.getElementById('above4');
const belowRating = document.getElementById('below4');
const searchInput = document.getElementById('search');
const menu = document.querySelector('.menu');
const options = document.querySelector('.dropDown');
displayAll();

let click = 0;
menu.addEventListener('click',  () => {
    if(click == 0){
        options.style.display = 'block';
        click = 1;
    }
    else{
        options.style.display = 'none';
        click = 0;
    }
    
})



aboveRating.addEventListener('change', () => {
    
    if(aboveRating.checked){
        if(belowRating.checked){
            belowRating.checked = false;
        }
        show.innerHTML = '';
        arr.forEach((elem) => {
            if(elem.rating >= 4.5){
                makeCards(elem);
            }
        })
    }else{
        displayAll();
    }

})
belowRating.addEventListener('change', () => {
    
    if(belowRating.checked){
        if(aboveRating.checked){
            aboveRating.checked = false;
        }
        show.innerHTML = '';
        arr.forEach((elem) => {
            if(elem.rating < 4){
                makeCards(elem);
            }
        })
    }else{
        displayAll();
    }

})

function makeCards(obj){
    let cards = document.createElement('div');
    cards.className = 'cards';
    cards.innerHTML = `
    <img src = ${obj.imageSrc}>
                <p>${obj.type}</p>
                <div class="name">
                    <div>${obj.name}</div>
                    <div class="rating">${obj.rating}</div>
                </div>
                <div class="time">
                    <div>${obj.time}</div>
                    <div class="img">
                        <img class = "unlike" src="./images/unlike.png" onclick = "changeLike(this)"alt="">
                        <img src="./images/comments.png" alt="">
                    </div>
                </div>
    `;
    show.appendChild(cards);
}

function changeLike(event){
    console.log(event.className);
    if(event.className == 'unlike'){
        event.className = 'like';
        event.src = './images/like.png';
    }else{
        event.className = 'unlike';
        event.src = './images/unlike.png';
    }
    
}

function displayAll(){
    show.innerHTML ='';
    arr.forEach((elem) => {
        makeCards(elem);
    })
};

function displayVeg(){
    show.innerHTML = '';
    arr.forEach((elem) => {
        
        if(elem.type == 'veg'){
            makeCards(elem);
        }
    })
}

function displayNonVeg(){
    show.innerHTML = '';
    arr.forEach((elem) => {
        
        if(elem.type == 'non-veg'){
            makeCards(elem);
        }
    })
}

function  searchRecipe(){
    let val = searchInput.value.trim().toLowerCase();

    show.innerHTML = ''; 
    arr.forEach((elem) => {
        let name = elem.name.toLowerCase();
        if(name.includes(val)){
             makeCards(elem);
            // console.log(elem);
            
        }
    })
}