// pegando as classes das imagens
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');
const restart_button = document.querySelector('#new_game');
const end_game_message = document.querySelector('.end_game_message');
const pontuacaoFinal = document.querySelector('.pontuacao');
const clouds = document.querySelector('.clouds');
const clouds_ = document.querySelector('.clouds_');
const clouds__ = document.querySelector('.clouds__');
let pontuacao = 1;
let vivo = true;
let timePipe = 1.5;
let timeCloud = 20;
let timeCloud_ = 17;
let timeCloud__ = 23;

// Fazendo a animação de pular
const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    scores()
}

function scores() {
    if (vivo == true) {
        score.textContent = `score:${pontuacao++}`;
    }
}

const loop = setInterval(() => {
    // Pegando as posições das imagens
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // O '+' antes de uma string, tenta convertela para numero se posivel.

    // fim de jogo
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Posição do pipe
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        // Posião do mario
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        // Animação de derrota
        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop);
        endGame();
    } else {
        if (timePipe >= 0.9) {
            timePipe -= 0.0004;
            pipe.style.animation = `pipe-animation ${timePipe}s infinite linear`;

            if (timeCloud >= 10) {
                timeCloud -= 0.01;
                clouds.style.animation = `clouds-animation ${timeCloud}s infinite linear`;
            }

            if (timeCloud__ >= 13) {
                timeCloud__ -= 0.01;
                clouds__.style.animation = `clouds-animation ${timeCloud__}s infinite linear`;
            }

            if (timeCloud_ >= 7) {
                timeCloud_ -= 0.01;
                clouds_.style.animation = `clouds-animation ${timeCloud_}s infinite linear`;
            }

        }
    }
}, 10);

restart_button.addEventListener('click', () => {
    reset();
});

function endGame() {
    vivo = false;

    setTimeout(() => {
        end_game_message.classList.add('show');
        pontuacaoFinal.textContent = `Sua pontução foi: ${pontuacao - 1}`;
    }, 1300);

};

function reset() {
    // Recarrega a página
    location.reload();
}

document.addEventListener('keydown', (e) => {
    if (e.key == ' ' || e.key == 'ArrowUp') {
        jump();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        reset();
    }
});