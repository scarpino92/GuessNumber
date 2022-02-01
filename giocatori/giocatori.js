/*Indovina il numero*/
var player1;
var player2;
var randomNum;
$(function () {
    function startGame() {
        $('#verify').on('click', function () {
            var casuale = Math.floor(Math.random() * 101);
            player1 = Number($('#player1').val());
            player2 = Number($('#player2').val());
            randomNum = Number($('#randomNum').val());
            if (!player1 && !player2) {
                $('#randomNum').text("Inserire un numero da 1 a 100");
                $('#result').hide();
            }
            else if (!player1 && player2 > 0) {
                $('#randomNum').text("Il giocatore1 deve inserire un numero valido da 1 a 100");
                $('#result').hide();
            }
            else if (!player2 && player1 > 0) {
                $('#randomNum').text("Il giocatore2 deve inserire un numero valido da 1 a 100");
                $('#result').hide();
            }
            else {
                $('#randomNum').text("Il numero casuale generato \u00E8: ".concat(casuale));
                $('#result').show();
            }
            var vicino1 = Math.abs(casuale - player1);
            var vicino2 = Math.abs(casuale - player2);
            if (casuale === player1) {
                $('#result').text("Il GIOCATORE 1 ha indovinato il numero! COMPLIMENTI!");
            }
            else if (casuale === player2) {
                $('#result').text("Il GIOCATORE 2 ha indovinato il numero! COMPLIMENTI!");
            }
            else {
                if (vicino1 < vicino2) {
                    $('#result').text("Nessuno ha indovinato il numero ma il GIOCATORE 1 c'\u00E8 andato pi\u00F9 vicino!");
                }
                else if (vicino1 > vicino2) {
                    $('#result').text("Nessuno ha indovinato il numero ma il GIOCATORE 2 c'\u00E8 andato pi\u00F9 vicino!");
                }
                else {
                    $('#result').text("Nessuno ha indovinato il numero!");
                }
            }
        });
    }
    $('#playAgain').on('click', function () {
        $('#player1').val('');
        $('#player2').val('');
        $('#randomNum').text('');
        $('#result').text('');
        startGame();
    });
});
