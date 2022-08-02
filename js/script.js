const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');

var pontos = 0;
const jump = () => {
    mario.classList.add('jump');
    pontos +=1; 
    score.innerHTML = pontos;
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // O '+' antes de uma string, tenta convertela para numero se posivel.

    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;


        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        pontos = 0;

        clearInterval(loop);
      
        setTimeout(()=>{
            score.innerHTML = pontos;
        },4000);
    }
}, 10);



document.addEventListener('keydown', jump)