console.log('%c HI', 'color: firebrick')

const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

fetchAllDogs()
fetchAllBreeds()
addEventListeners()
addOptions()
let allBreeds = []


//Data 
function fetchAllDogs() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(dogs => dogs.message.forEach(dog => buildDogImages(dog)))
}

function fetchAllBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        allBreeds = Object.keys(breeds.message)
        allBreeds.forEach(dog => buildBreeds(dog))
    })
}



//DOM Manipulation
function buildDogImages(dog) {
    let dogContainer = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = dog
    dogContainer.appendChild(img)
}

function buildBreeds(dog) {
    console.log(dog)
    let dogUl = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.textContent = dog
    li.id = dog
    li.addEventListener('click', handleClick)
    dogUl.appendChild(li)
}

function addOptions() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let select = document.querySelector('select')
    select.innerHTML = ''
    alphabet.forEach(letter => {
        let op = document.createElement('option')
        op.value = letter
        op.textContent = letter
        select.appendChild(op)
    })
    
}

//Event Handlers
function handleClick(e) {
    let li = document.getElementById(e.target.id)
    li.style.color = 'green'
}


function handleChange(e) {
    let dogBreeds = document.querySelector('#dog-breeds')
    let filteredDogs = allBreeds.filter(dog => dog.startsWith(e.target.value))
    dogBreeds.innerHTML = ''
    filteredDogs.forEach(dog => buildBreeds(dog))
}

//Add Events
function addEventListeners() {
    let select = document.querySelector('select')
    select.addEventListener('change', handleChange)
}