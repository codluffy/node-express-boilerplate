//  4x4 matrix multiplication
// Define a function to multiply two 4x4 matrices
function multiply4x4(a, b) {
  // Initialize an empty 4x4 matrix to store the result
  var c = []
  for (var x = 0; x < 4; x++) {
    c[x] = []
  }
  // Loop through each row of a and each column of b
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      // Initialize the element at (i, j) to zero
      c[i][j] = 0
      // Loop through each element of the row and column
      for (var k = 0; k < 4; k++) {
        // Add the product of the corresponding elements to the result
        c[i][j] += a[i][k] * b[k][j]
      }
    }
  }
  // Return the result matrix
  return c
}
// This is a straightforward implementation that follows the definition of matrix multiplication. It uses three nested loops to iterate over the elements of the matrices and compute the dot product of each row and column. It has a time complexity of O(n^3), where n is the size of the matrices.
// There are more efficient algorithms for matrix multiplication, such as Strassen's algorithm, which can reduce the number of multiplications from 64 to 49 for 4x4 matrices¹. However, these algorithms are more complex and may not be worth the extra overhead for small matrices. You can find more details about Strassen's algorithm and its implementation in [this article](^3^).
// Source: Conversation with Bing, 11/19/2023
// (1) javascript - How to multiply a 4x4 Matrix with a vector-array of .... https://stackoverflow.com/questions/30060402/how-to-multiply-a-4x4-matrix-with-a-vector-array-of-arbitrary-length.
// (2) iphone - Fast 4x4 Matrix Multiplication in C - Stack Overflow. https://stackoverflow.com/questions/1674005/fast-4x4-matrix-multiplication-in-c.
// (3) Matrix Multiplication in Typescript - Code Review Stack Exchange. https://codereview.stackexchange.com/questions/237674/matrix-multiplication-in-typescript.
// (4) Computational Complexity: Alpha Tensor. https://blog.computationalcomplexity.org/2022/10/alpha-tensor.html.
// Implementation of 4x4 matrices
var matrixA = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]
var matrixB = [
  [16, 15, 14, 13],
  [12, 11, 10, 9],
  [8, 7, 6, 5],
  [4, 3, 2, 1],
]
// Calling the 4x4 Matrix Multiplication
console.log('\n\t4x4 Matrix Multiplication\n')
console.log('\tMatrix A: '.concat(matrixA, '\n'))
console.log('\tMatrix B: '.concat(matrixB, '\n'))
console.log(multiply4x4(matrixA, matrixB))
