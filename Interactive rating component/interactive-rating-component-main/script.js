let main = document.querySelector('.card')
let thanks = document.querySelector('.card-rating')
let submit = document.getElementById('submit-btn')
let rating = document.querySelector('.rate')
let rates = document.querySelectorAll('.btn')

submit.addEventListener('click', () => {
  thanks.classList.remove('hidden')
  main.style.display = 'none'
})


rates.forEach((rate) => {
  rate.addEventListener('click', () => {
    rating.innerHTML = `You selected ${rate.innerHTML} out of 5`
  } )
})

