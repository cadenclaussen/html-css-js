export default class SpriteSheet {
    constructor(spriteSheetImage, tileWidth, tileHeight) {
        this.spriteSheetImage = spriteSheetImage
        this.tileWidth = tileWidth
        this.tileHeight = tileHeight
    }

    createCanvasByPixel(x, y, width, height) {
        const spriteCanvas = document.createElement('canvas');
        const spriteContext = spriteCanvas.getContext('2d');
        spriteCanvas.width = width
        spriteCanvas.height = height
        spriteContext.drawImage(this.spriteSheetImage, x, y, width, height, 0, 0, width, height);
        return spriteCanvas;
    }

    createCanvasByTile(row, col)  {
        return this.createCanvasByPixel(row * this.tileWidth, col * this.tileHeight, this.tileWidth, this.tileHeight);
    }
}