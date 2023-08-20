import { loadImage, loadLevel } from "./loaders.js";
import SpriteSheet from "./SpriteSheet.js";
import Sprite from './Sprite.js';
import Sprites from "./Sprites.js";
import createBackgroundCanvas from './background.js';


Promise.all([
    loadImage('./img/tiles.png'),
    loadImage('./img/characters.gif'),
    loadLevel('1-1'),
]).then(([ tilesPng, charactersGif, level]) => {

    const charactersSpriteSheet = new SpriteSheet(charactersGif);
    const marioCanvas = charactersSpriteSheet.createCanvasByPixel(276, 44, 16, 16)
    const marioSprite = new Sprite(marioCanvas);
    marioSprite.pos.set(64, 200);
    marioSprite.vel.set(10, -10);

    const tilesSpriteSheet = new SpriteSheet(tilesPng, 16, 16);
    const groundCanvas = tilesSpriteSheet.createCanvasByTile(0, 0);
    const skyCanvas = tilesSpriteSheet.createCanvasByTile(3, 23);
    const backgroundCanvas = createBackgroundCanvas(level, {
        'ground': groundCanvas,
        'sky': skyCanvas
    });
    const backgroundSprite = new Sprite(backgroundCanvas);
    
    const sprites = new Sprites([ backgroundSprite, marioSprite]);

    const screen = document.getElementById("screen");
    const context = screen.getContext('2d');

    function update() {
        sprites.draw(context);
        marioSprite.pos.x += marioSprite.vel.x
        marioSprite.pos.y += marioSprite.vel.y
        marioSprite.vel.y += 1;
        requestAnimationFrame(update);
    }

    update();
});
    