const reduce = (a, ...args) => a.reduce(...args);

function myReduce(array, cb, initialValue) {
  let currentValue = initialValue
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (initialValue == null && i === 0) {
      currentValue = element
    } else {
      currentValue = cb(currentValue, element, i, array)
    }
  }
  return currentValue
}


module.exports = {

  myReduce,
  reduce

}
