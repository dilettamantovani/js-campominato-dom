let difficultyLevel = document.getElementById('difficultyLevel');
let cellNum = '';
let grid = document.getElementById('grid');
let playBtn = document.getElementById('playBtn');
let squareSize = '';
let bomb = [];
let points = 0;
let game = false;

// start game

playBtn.addEventListener('click', function () {

    console.log('Inizio partita');

    game = true;
    points = 0;

    // void
    grid.innerHTML = '';

    // set difficulty
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
        let oneCell = buildSquare(i, bomb);
        grid.appendChild(oneCell);

        if(i < 16) {
            bomb = Math.round(Math.random() * cellNum) + 1;
        }
    }
    
    console.log(bomb);

});

// buildSquare

function buildSquare(num, bomb) {
    const cell = document.createElement('div');
    cell.classList.add(squareSize);
    cell.innerHTML = num;

    cell.addEventListener('click', function () {


    //  continuano ad uscire solo verdi :(  

        if(game == true) { 

            for (let i = 1; i <= 16; i++) {

                if(num == bomb[i]) {
                    cell.classList.toggle('bomb');
                    alert(`Game Over! Your score is ${points} points!`);
                    game = false;
                    break;
                 }
            }

            cell.classList.toggle('selected');
            points += 1;
            console.log(points);
        
        }else{
            alert("You won! CLick the play button to play again!");
        }

    });
    return cell;
}