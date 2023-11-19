// Define a type alias for a matrix of any size
type Matrix = number[][]

// Define a function to multiply two matrices of compatible sizes
function multiplyMatrix(a: Matrix, b: Matrix): Matrix {
  // Get the dimensions of the matrices
  let rowsA = a.length // number of rows in A
  let colsA = a[0].length // number of columns in A
  let rowsB = b.length // number of rows in B
  let colsB = b[0].length // number of columns in B

  // Check if the matrices are compatible for multiplication
  if (colsA !== rowsB) {
    throw new Error('The matrices cannot be multiplied')
  }

  // Initialize an empty matrix to store the result
  let c: Matrix = []
  for (let i = 0; i < rowsA; i++) {
    c[i] = []
  }

  // Loop through each row of A and each column of B
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      // Initialize the element at (i, j) to zero
      c[i][j] = 0
      // Loop through each element of the row and column
      for (let k = 0; k < colsA; k++) {
        // Add the product of the corresponding elements to the result
        c[i][j] += a[i][k] * b[k][j]
      }
    }
  }

  // Return the result matrix
  return c
}

// Implementation of the NxM matrix multiplication

console.log('\tMatrix A')

let matA: Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  //[9, 2, 9, 8],
]
console.log(matA)

console.log('\tmatrix B')

let matB: Matrix = [
  [16, 15, 14, 13],
  [12, 11, 10, 9],
  [8, 7, 6, 5],
  [4, 3, 2, 1],
  //[10, 2, 5, 7],
]
console.log(matB)

// Matrix Multiplication

console.log('matrix multiplication\n')

console.log(multiplyMatrix(matA, matB))
