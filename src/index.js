// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded',
  function() {
    const dogImgDiv = document.getElementById('dog-image-container')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const dogDropdown = document.getElementById('breed-dropdown')
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dogBreedDiv = document.getElementById('dog-breeds')
    let allBreeds = []
    fetch(imgUrl, { method:'GET' })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      data.message.forEach((url) => {
        dogImgDiv.innerHTML += `<img src=${url}>`
      })
    })
    fetch(breedUrl, { method:'GET' })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
    .then(data => {
      allBreeds = Object.keys(data.message)
      dogBreedDiv.innerHTML = allBreeds.map(breed => `<li> ${breed} </li>`).join('')
      // allBreeds.forEach(breed => {
      //   dogBreedDiv.innerHTML = allBreeds.map
      //   dogBreedDiv.innerHTML += `<li> ${breed} </li>`
      // })
    })
    dogBreedDiv.addEventListener('click', function(event){
      event.target.style.color = 'green'
    })
    dogDropdown.addEventListener('change', (event) => {
      const letter = event.target.value;
      const filtered = allBreeds.filter(breed => breed.startsWith(letter))
      dogBreedDiv.innerHTML = filtered.map(breed => `<li> ${breed} </li>`).join('')
    })
  }
)

// document.addEventListener('DOMContentLoaded', function() {
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//   const dogBreedDiv = document.getElementById('dog-breeds')
//   // console.log(dogBreedDiv);
//   fetch(breedUrl, { method:'GET' })
//   .then(response => {
//     if (response.ok) {
//       return response.json()
//     }
//   })
//   .then(data => {
//     const breeds = Object.keys(data.message)
//     breeds.forEach(breed => {
//       dogBreedDiv.innerHTML += `<li> ${breed} </li>`
//     })
//   })
// })
//
// document.addEventListener('DOMContentLoaded', function() {
//   const dogBreedDiv = document.getElementById('dog-breeds')
//   dogBreedDiv.addEventListener('click', function(event){
//     event.target.style.color = 'green'
//   })
// })
//
// document.addEventListener('DOMContentLoaded', function() {
//   const dogDropdown = document.getElementById('breed-dropdown')
//   dogDropdown.addEventListener('change', (event) => {
//     const letter = event.target.value;
//   })
// })
