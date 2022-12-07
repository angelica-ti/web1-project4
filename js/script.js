function getRandom(n){
    return parseInt(Math.random() * n)+1
}
function createBoxes(){
    const qtdMax = parseInt(document.querySelector("#iptMax").value);
    const bttCreateBox = document.querySelector("#bttStartGame");
    var tipBox = document.querySelector('#tip');
    var gradesBox = document.querySelector('#grades');
    var error, tip;
    var grades = 10, idRandom=0;

    for(let i=1; i<=qtdMax; i++){
        const elem = document.createElement('button');
        elem.setAttribute('type', 'button');
        elem.setAttribute('class', 'box');
        elem.setAttribute('id',i);

        elem.addEventListener("click",function(){
            console.log(this.id);
            console.log(idRandom);
            if(this.id == idRandom){
                alert(`Parabéns! Você acertou o número sorteado com pontuação ${grades.toFixed(2)}`);
                restartGame();
                error = false;             
            } 
            else if(this.id > idRandom){
                tip = "menor";
                error = true;
            }
            else{
                tip = "maior";
                error = true;
            }

            if(error){
                tipBox.innerHTML = `Número sorteado é ${tip} que o valor escolhido!`;
                this.style.backgroundColor = "#FF6666";
                grades -= 10/qtdMax;
                gradesBox.innerHTML = grades.toFixed(2) + " pontos";
                this.disabled = true;
            }
        });
        elem.textContent = i;
        document.body.appendChild(elem);
    }

    if(qtdMax){
        idRandom = getRandom(qtdMax);
        bttCreateBox.disabled = true;
    }
}

function removeBoxes(max){
    for(let i=1;i<=max;i++){
        const elem = document.getElementById(i);
        elem.remove();
    }
}

function restartGame(){
    var qtdMax = document.querySelector("#iptMax");
    const bttCreateBox = document.querySelector("#bttStartGame");
    var tipBox = document.querySelector('#tip');
    var gradesBox = document.querySelector('#grades');
    removeBoxes(parseInt(qtdMax.value));
    bttCreateBox.disabled = false;    
    gradesBox.innerHTML = 10;
    tipBox.innerHTML = "Tente acertar o botão selecionado!";
    qtdMax.value = 0;
}
