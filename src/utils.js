async function fetchAPI(url) {
  let response = await fetch(url)
  const data = await response.json()
  return data
}
module.exports = {
  fetchAPI
}
