let bands = [
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

const containerbands = document.querySelector("#container-bands");
document.insert

let filteredbands = bands.filter(checkGenre)

let checkGenre(genre){
    if (genre_selected == bands.genre){
        return genre
    }
}