let b = document.getElementById('caro');
let data = '';
let board = [];
let h = 1;
for (let i = 0; i < 5; i++) {
    board[i] = ['(.)', '(.)', '(.)', '(.)', '(.)']
}

for (let i = 0; i < 5; i++) {
    data += '<br>' + '<br>';
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + '&ensp;' + '&ensp;' + '&ensp;';
    }
}
b.innerHTML = data;

function myFunction() {
    let x = parseInt(prompt('Enter the position X:'));
    let y = parseInt(prompt('Enter the position Y:'));
    data = '';
    if (h % 2 == 0) {
        board[x][y] = 'x';
    } else {
        board[x][y] = 'o';
    }
    h++;
    for (let i = 0; i < 5; i++) {
        data += '<br>'+'<br>';
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + '&ensp;' + '&ensp;' + '&ensp;';
        }
    }
    b.innerHTML = data;
}

