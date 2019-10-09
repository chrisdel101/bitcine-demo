function range(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step },
    (_, i) => start + i * step
  )
}
// check if this route
function checkRoute(routeName) {
  // works for both dev and prod
  routeName = `#${routeName}`
  console.log('route', routeName)
  let hash = window.location.hash
  console.log('hash', hash)
  return hash === routeName ? true : false
}
function checkForParams(hash) {
  // const
  console.log('hash', hash)
  var re = /^#\/[\w]+\/[\w]+/
  if (re.test(hash)) {
    return true
  }
  return false
}
module.exports = {
  checkForParams,
  range,
  checkRoute
}
