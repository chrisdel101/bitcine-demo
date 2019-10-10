module.exports = {
  root: 'https://swapi.co/api/',
  allPeople: `people`,
  personsPage: id => {
    return `people/?page=${id}`
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
