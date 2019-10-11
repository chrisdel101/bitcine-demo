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
  let hash = window.location.hash
  return hash === routeName ? true : false
}
// useed when deployed to GH pages
function checkForParams(hash) {
  // works only for create react app with # in route
  var re = /^#\/[\w]+\/[\w]+/
  if (re.test(hash)) {
    return true
  }
  return false
}
function isObjEmpty(obj) {
  return Object.entries(obj).length === 0 && obj.constructor === Object
    ? true
    : false
}
module.exports = {
  isObjEmpty,
  checkForParams,
  range,
  checkRoute
}
