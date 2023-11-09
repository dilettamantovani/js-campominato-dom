let difficultyLevel = document.getElementById('difficultyLevel');
let cellNum = '';
let grid = document.getElementById('grid');
let playBtn = document.getElementById('playBtn');
let squareSize = '';
let bomb = [];
let gameOver = false;
let points = 0;

// start game

playBtn.addEventListener('click', function () {

    console.log('Inizio partita');

    gameOver = true;
    points = 0;

    // void
    grid.innerHTML = '';

    // set difficulty level
    if(difficultyLevel.value == 'easy') {
        cellNum = 100;
        squareSize = 'squareEasy';

    }else if(difficultyLevel.value == 'medium') {
        cellNum = 81;
        squareSize = 'squareMedium';

    }else{
        cellNum = 49;
        squareSize ='squareHard';
    }

    for (let i = 1; i <= cellNum; i++) {
        let oneCell = buildSquare(i);
        grid.appendChild(oneCell);

        if(i < 16) {
            bomb = Math.floor(Math.random() * cellNum);
        }
    }
    
    console.log(bomb);

});

// buildSquare

function buildSquare(num) {
    const cell = document.createElement('div');
    cell.classList.add(squareSize);
    cell.innerHTML = num;

    cell.addEventListener('click', function () {


    // escono solo verdi :(   

        if(gameOver == true) { 

            for (let i = 1; i <= 16; i++) {

                if(num == bomb[i]) {
                    cell.classList.toggle('bomb');
        //             alert(`Game Over! Your score is ${points} points!`);
                    gameOver = false;
                    break;
                 }
            }

            cell.classList.toggle('selected');
            points += 1;
            console.log(points);
        
        // }else{
        //     alert("You won! CLick the play button to play again!");
         }

    });
    return cell;
}