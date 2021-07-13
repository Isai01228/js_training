// POO (videoGames)
class VideoGames {
    constructor(code, images, controls, beginning, gender, contex, mainCharacter, console, dimension, screen, playersNum, fps, gameOver) {
        this.code = code;
        this.images = images;
        this.controls = controls;
        this.beginning = beginning
        this.gender = gender
        this.contex = contex;
        this.mainCharacter = mainCharacter;
        this.console = console;
        this.dimension = dimension;
        this.screen = screen
        this.playersNum = playersNum
        this.fps = fps
        this.gameOver = gameOver
    }

    moves() {
        console.log('Yo puedo moverme')
    }
}

const dinosaurGame = new VideoGames(true, true, 1, true, 'plataforms', 'dinosaurs', 1, 'pc', '2D', true, 1, true, true)
console.log(dinosaurGame)

// HERENCIA
class SimpleVideoGame extends VideoGames {
    constructor(music, code, images, controls, beginning, end, gender, contex, mainCharacter, console, dimension, screen, playersNum, fps, gameOver) {
        super(code, images, controls, beginning, gender, contex, mainCharacter, console, dimension, screen, playersNum, fps, gameOver)
        this.music = music;
        this.end = end;
    }
}
const pacman = new SimpleVideoGame(true, true, true, true, 1, true, 'platafoms', 'dinosurs', 1, 'Atari', '2D', 1, 1, true, true)
console.log(pacman)

//HERENCIA
class adventureGame extends SimpleVideoGame {
    constructor(finalBoss, music, code, images, controls, beginning, end, gender, contex, mainCharacter, console, dimension, screen, playersNum, fps, gameOver) {
        super(music, code, images, controls, beginning, end, gender, contex, mainCharacter, console, dimension, screen, playersNum, fps, gameOver)
        this.finalBoss = finalBoss
    }

    jumps() {
        console.log('en este juego puedes saltar')
    }
    bend() {
        console.log('en este juego puedes agacharte')
    }
    kick() {
        console.log('en este juego puedes patear')
    }
    grab() {
        console.log('en este juego puedes agarrar')
    }
}
const marioBros = new adventureGame(1, true, true, true, 2, true, true, "plataforms", "salvar a la princesa", 1, 'nientiendo', '2D', true, 2, true, true)
console.log(marioBros)