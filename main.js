const ratingState = document.querySelector('.rating-state')
const thankyouState = document.querySelector('.thanks-state')
const button = document.querySelector('.button')
const selection = document.querySelector('.selected')

const ratings = [
    document.querySelector('.one'),
    document.querySelector('.two'),
    document.querySelector('.three'),
    document.querySelector('.four'),
    document.querySelector('.five'),
]

let currentRating = null;

ratings.forEach((rating, i) => {

    rating.dataset.value = i + 1;
    rating.addEventListener('click', () => {
        if (currentRating !== null) {
            currentRating.style.backgroundColor = '';
        }
        currentRating = rating;
        selection.innerHTML = rating.dataset.value;
        rating.style.backgroundColor = 'hsl(216, 12%, 54%)';
        rating.style.color = 'white'
        
    })
})

button.addEventListener('click', () => {
    ratingState.style.display = 'none';
    thankyouState.style.display = 'block';
})
