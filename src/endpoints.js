module.exports = {
  root: 'https://swapi.co/api/',
  allPeople: `people`,
  people: id => {
    return `people/${id}`
  },
  films: id => {
    return `films/${id}`
  },
  starships: id => {
    return `starships/${id}`
  },
  vehicles: id => {
    return `vehicles/${id}`
  },
  species: id => {
    return `species/${id}`
  },
  planets: id => {
    return `planets/${id}`
  }
}
