
      let score = JSON.parse(localStorage.getItem('score')) ||  {
        ganhos: 0,
        perdas: 0,
        empates: 0
      };

      updateScoreElement();

      console.log();

      let isAutoPlaying = false;
      let intervalId;

      function autoPlay() {
        if (!isAutoPlaying) {
          intervalId = setInterval(() => {
          const playerMove = pickComputerMove();
          playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;

        document.querySelector('.js-autoplay-button')
          .innerHTML = 'Parar jogo';

        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
          
          document.querySelector('.js-autoplay-button')
            .innerHTML = 'Jogo Automático';
        }};

        document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
          playGame('Pedra');
        });

        document.querySelector('.js-paper-button')
        .addEventListener('click', () => {
          playGame('Papel');
        });

        document.querySelector('.js-tesoura-button')
        .addEventListener('click', () => {
          playGame('Tesoura');
        });

        document.querySelector('.js-autoplay-button')
        
        .addEventListener('click', () => {
          autoPlay();
        });


        document.body.addEventListener('keydown', (event) => {
          if (event.key === 'p'){
            playGame('Pedra');
          } else if (event.key === 'f') {
            playGame('Papel');
          } else if (event.key === 't') {
            playGame('Tesoura');
          }
        });


      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'Tesoura') {
          if(computerMove === 'Pedra') {
          result = 'Você perdeu!';
        } else if (computerMove === 'Papel') {
          result = 'Você ganhou!';
        } else if (computerMove === 'Tesoura') {
          result = 'Empatou.';
        }

        } else if (playerMove === 'Papel') {
          if(computerMove === 'Pedra') {
          result = 'Você ganhou!';
        } else if (computerMove === 'Papel') {
          result = 'Empatou.';
        } else if (computerMove === 'Tesoura') {
          result = 'Você perdeu!';
        }

        } else if (playerMove === 'Pedra') {
        if(computerMove === 'Pedra') {
          result = 'Empatou.';
        } else if (computerMove === 'Papel') {
          result = 'Você perdeu!'
        } else if (computerMove === 'Tesoura') {
          result = 'Você ganhou!'
        }
        }

              const moveToImage = {
        'Pedra': 'rock',
        'Papel': 'paper',
        'Tesoura': 'scissors'
      };


        if (result === 'Você ganhou!') {
          score.ganhos += 1;
        } else if (result === 'Você perdeu!') {
          score.perdas += 1;
        } else if (result === 'Empatou.') {
          score.empates += 1;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').
        innerHTML = result

        document.querySelector('.js-moves').
        innerHTML = `You
      <img src="images/${moveToImage[playerMove]}-emoji.png" class="move-icon">
      <img src="images/${moveToImage[computerMove]}-emoji.png" class="move-icon">
      Computer `;

      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Ganhos: ${score.ganhos} Perdas: ${score.perdas} Empates: ${score.empates}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber
        < 1 / 3) {
        computerMove='Pedra';
        } else if (randomNumber >= 1 / 3 &&
        randomNumber < 2 / 3) {
        computerMove='Papel';
        } else if (randomNumber >= 2 / 3 && 
        randomNumber < 1) {
        computerMove='Tesoura';
        }

        return computerMove;
        
      }

      

