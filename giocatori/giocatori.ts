/*Indovina il numero*/ 
let player1: number;
let player2: number;
let randomNum: number;

$(() => {
    function startGame(){
    $('#verify').on('click', function(){
        let casuale: number =  Math.floor(Math.random()* 101);
        player1 = Number($('#player1').val());
        player2 = Number($('#player2').val());
        randomNum = Number($('#randomNum').val());
        if(!player1 && !player2){
            $('#randomNum').text(`Inserire un numero da 1 a 100`);
            $('#result').hide();
        }else if(!player1 && player2 > 0){
                $('#randomNum').text(`Il giocatore1 deve inserire un numero valido da 1 a 100`);
                $('#result').hide();
            }else if(!player2 && player1 > 0){
                $('#randomNum').text(`Il giocatore2 deve inserire un numero valido da 1 a 100`);
                $('#result').hide();
            }else{
                $('#randomNum').text(`Il numero casuale generato è: ${casuale}`);
                $('#result').show();
        }
        let vicino1 = Math.abs(casuale - player1);
        let vicino2 = Math.abs(casuale - player2);
        if(casuale === player1){
            $('#result').text(`Il GIOCATORE 1 ha indovinato il numero! COMPLIMENTI!`);
        }else if(casuale === player2){
            $('#result').text(`Il GIOCATORE 2 ha indovinato il numero! COMPLIMENTI!`);
        }else{
            if(vicino1 < vicino2){
                $('#result').text(`Nessuno ha indovinato il numero ma il GIOCATORE 1 c'è andato più vicino!`);
            }else if(vicino1 > vicino2){
                $('#result').text(`Nessuno ha indovinato il numero ma il GIOCATORE 2 c'è andato più vicino!`);
            }else{
                $('#result').text(`Nessuno ha indovinato il numero!`);
            }
        }
    });
    }
    $('#playAgain').on('click',function(){
        $('#player1').val('');
        $('#player2').val('');
        $('#randomNum').text('');
        $('#result').text('');
        startGame();
    });   
});

