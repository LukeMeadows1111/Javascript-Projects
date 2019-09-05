const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const matchScreen = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      matchScreen.classList.add('fadeIn');
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });

    //Computer Options

    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;
        const randNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[randNumber];
        const playerChoice = this.textContent;

        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';

        setTimeout(() => {
          compareHands(playerChoice, computerChoice);
          playerHand.src = `./assets/${playerChoice}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
      });
    });

    const updateScore = () => {
      const playerScore = document.querySelector('.player-score p');
      const computerScore = document.querySelector('.computer-score p');
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
    const compareHands = (playerChoice, computerChoice) => {
      const winner = document.querySelector('.winner');
      if (playerChoice === computerChoice) {
        winner.textContent = 'Draw';
        return;
      }
      if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
        }
      }

      if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        }
      }
      if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins';
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Player Wins';
          pScore++;
          updateScore();
          return;
        }
      }
    };
  };
  // call all the inner functions
  startGame();
  playMatch();
};
//start the game function
game();
