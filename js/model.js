function Game() {
	var game = `abcdefghijklmnop`;
	var gameArr = game.split('');
	const WIN = 'win';
	const PLAY = 'play';
	const WINNER = `abcdefghijklmnop`;



	this.statusGame = function() {
		var i = gameArr.join('');
		if (WIN !== i) {
			return PLAY;
		}
		return WINNER;
	};

	this.startGame = function() {
        var currentIndex = gameArr.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = gameArr[currentIndex];
            gameArr[currentIndex] = gameArr[randomIndex];
            gameArr[randomIndex] = temporaryValue;
        }

        return gameArr;
    };

    this.position1 =  function() {
        var i = gameArr[5];
        gameArr[5] = gameArr[1];
        gameArr[1] = gameArr[0];
        gameArr[0] = gameArr[4];
        gameArr[4] = i;
        return gameArr;
    };


    this.position2 = function() {
        var i =gameArr[6];
        gameArr[6] = gameArr[2];
        gameArr[2] = gameArr[1];
        gameArr[1] = gameArr[5];
        gameArr[5] = i;
        return gameArr;
    };


    this.position3 =  function() {
        var i = gameArr[7];
        gameArr[7] = gameArr[3];
        gameArr[3] = gameArr[2];
        gameArr[2] = gameArr[6];
        gameArr[6] = i;
        return gameArr;
    };


    this.position4 =  function() {
        var i = gameArr[9];
        gameArr[9] = gameArr[5];
        gameArr[5] = gameArr[4];
        gameArr[4] = gameArr[8];
        gameArr[8] = i;
        return gameArr;
    };


    this.position5 =  function() {
        var i = gameArr[10];
        gameArr[10] = gameArr[6];
        gameArr[6] = gameArr[5];
        gameArr[5] = gameArr[9];
        gameArr[9] = i;
        return gameArr;
    };


    this.position6 = function() {
        var i = gameArr[11];
        gameArr[11] = gameArr[7];
        gameArr[7] = gameArr[6];
        gameArr[6] = gameArr[10];
        gameArr[10] = i;
        return gameArr;
    };


    this.position7 =  function() {
        var i = gameArr[13];
        gameArr[13] = gameArr[9];
        gameArr[9] = gameArr[8];
        gameArr[8] = gameArr[12];
        gameArr[12] = i;
        return gameArr;
    };


    this.position8 = function() {
        var i =gameArr[14];
        gameArr[14] = gameArr[10];
        gameArr[10] = gameArr[9];
        gameArr[9] = gameArr[13];
        gameArr[13] = i;
        return gameArr;
    };


    this.position9 =  function() {
        var i = gameArr[15];
        gameArr[15] = gameArr[11];
        gameArr[11] = gameArr[10];
        gameArr[10] = gameArr[14];
        gameArr[14] = i;
        return gameArr;
    };

    this.modelLink = function() {
        return gameArr;
    };
}

var game = new Game();




game.statusGame()
