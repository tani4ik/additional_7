module.exports = function solveSudoku(matrix) {
    solve(matrix);
    return matrix;
}

function numberInRow(matrix, row, number) {
    for (let i = 0; i < 9; i++) {
        if (matrix[row][i] === number) {
            return true;
        }
    }
    return false;
}

function numberInCol(matrix, col, number) {
    for (let i = 0; i < 9; i++) {
        if (matrix[i][col] === number) {
            return true;
        }
    }
    return false;
}

function numberInSquare(matrix, row, col, number) {
    let r = row - row % 3;
    let c = col - col % 3;
    for (let i = r; i < r + 3; i++) {
        for (let j = c; j < c + 3; j++) {
            if (matrix[i][j] == number) {
                return true;
            }
        }
    }
    return false;
}

function isSuitableNumber(matrix, row, col, number) {
    return !numberInRow(matrix, row, number) && !numberInCol(matrix, col, number) && !numberInSquare(matrix, row, col, number);
}

function solve(matrix) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (matrix[row][col] == 0) {
                for (let number = 1; number <= 9; number++) {
                    if (isSuitableNumber(matrix, row, col, number)) {
                        matrix[row][col] = number;
                        if (solve(matrix)) {
                            return true;
                        } else {
                            matrix[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}