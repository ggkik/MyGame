function status() {
    if (game.statusGame() == `win`) {
        alert(`YOU WIN!`);
    }
};



but1.addEventListener("click", game.position1);
but1.addEventListener("click", view);
but1.addEventListener(`click`, status)
but2.addEventListener(`click`, game.position2);
but2.addEventListener(`click`, view);
but2.addEventListener(`click`, status)
but3.addEventListener(`click`, game.position3);
but3.addEventListener(`click`, view);
but3.addEventListener(`click`, status)
but4.addEventListener(`click`, game.position4);
but4.addEventListener(`click`, view);
but4.addEventListener(`click`, status)
but5.addEventListener(`click`, game.position5);
but5.addEventListener(`click`, view);
but5.addEventListener(`click`, status)
but6.addEventListener(`click`, game.position6);
but6.addEventListener(`click`, view);
but6.addEventListener(`click`, status)
but7.addEventListener(`click`, game.position7);
but7.addEventListener(`click`, view);
but7.addEventListener(`click`, status)
but8.addEventListener(`click`, game.position8);
but8.addEventListener(`click`, view);
but8.addEventListener(`click`, status)
but9.addEventListener(`click`, game.position9);
but9.addEventListener(`click`, view);
but9.addEventListener(`click`, status)
startGame.addEventListener(`click`, game.startGame);
startGame.addEventListener(`click`, view);