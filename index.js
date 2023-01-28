const Piedra = "piedra";
const Papel = "papel";
const Tijeras = "tijeras";

const TIE = 0;
const WIN = 1;
const LOSE = 2;

let isPlaying = false 

const PiedraBtn = document.getElementById("Piedra");
const PapelBtn = document.getElementById("Papel");
const TijerasBtn = document.getElementById("Tijeras");
const inicio = document.getElementById("inicio");
const usuario = document.getElementById("usuario");
const maquina = document.getElementById("maquina");

PiedraBtn.addEventListener("click", ()=>{
    play(Piedra)
});

PapelBtn.addEventListener("click", ()=>{
    play(Papel)
});

TijerasBtn.addEventListener("click", ()=>{
    play(Tijeras)
});


function play(UserOption) {
    if(isPlaying) return;

    isPlaying = true;

    usuario.src = "imagenes/"+ UserOption + ".jpg";

    inicio.innerHTML = "Pensando";

    const interval = setInterval(function(){
        const MachineOption = calcMachineOption();
        
        maquina.src = "imagenes/"+ MachineOption + ".jpg";
    }, 200)


    setTimeout(function (){
        clearInterval(interval);

        const MachineOption = calcMachineOption();
        const Result = CalcResult(UserOption, MachineOption);

        maquina.src = "imagenes/" + MachineOption + ".jpg";

        switch(Result){
            case TIE:
                inicio.innerHTML = "Empate"
                break;
            case WIN:
                inicio.innerHTML = "Tu ganaste"
                break;
            case LOSE:
                inicio.innerHTML = "Tu perdiste"
                break;
    }
    isPlaying = false;
}, 2000);

}
function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number){
        case 0:
            return Piedra;
        case 1:
            return Papel;
        case 2:
            return Tijeras;

    }
}

function CalcResult(UserOption, MachineOption ){
    if(UserOption === MachineOption){
        return TIE;

    }else if(UserOption === Piedra){

        if(MachineOption === Papel) return LOSE;
        if(MachineOption === Tijeras) return WIN;

    }else if(UserOption === Papel){

        if(MachineOption === Tijeras) return LOSE
        if(MachineOption === Piedra) return WIN

    }else if(UserOption === Tijeras){

        if(MachineOption === Piedra) return LOSE
        if(MachineOption === Papel) return WIN
    }

}