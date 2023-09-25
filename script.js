const bands = [
    {
      name: 'lorem 1',
      genre: 'alternative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 2',
      genre: 'metal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 3',
      genre: 'heavymetal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 4',
      genre: 'hardrock',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 5',
      genre: 'alternative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 6',
      genre: 'metal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 7',
      genre: 'heavymetal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 8',
      genre: 'hardrock',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 9',
      genre: 'alternative',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    },
    {
      name: 'lorem 10',
      genre: 'metal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis dui, sodales ut fermentum et, laoreet non diam. Fusce quis tristique eros. Curabitur malesuada risus nec lobortis tristique.'
    }
  ]

 let newBand =
   `<div class="band-card">
    <img src="https://images.unsplash.com/photo-1604514288114-3851479df2f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9jayUyMGJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="esc">
    <div class="band-card-text">
      <h3>${bands[1].name}</h3>
      <p>${bands[1].description}</p>
    </div>
  </div>`

for (let i = 0; i < 12; i++) {
  document.getElementById("container-bands").innerHTML += newBand
}

function radioClick(){
  const genre = console.log(document.querySelector('input[name=genre]:checked').value)
  return genre
}
