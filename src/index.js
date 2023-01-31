
// You should implement your task here.

module.exports = function towelSort (matrix) {
  module.exports = function towelSort (matrix) {
  const result = []
    let a = 1
    if (matrix) {
        matrix.forEach((element) => {
            if (a == -1) {
                element.reverse()
            }
            element.forEach((el) => {
                result.push(el)
            })
            a *= -1
        })
    }
    return result
}

