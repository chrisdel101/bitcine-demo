function range(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step },
    (_, i) => start + i * step
  )
}
// check if this route
function checkRoute(routeName) {
  // works for both dev and prod
  routeName = `#/${routeName}`
  // console.log('route', routeName)
  let hash = window.location.hash
  // console.log('hash', hash)
  return hash === routeName ? true : false
}
module.exports = {
  range,
  checkRoute
}
