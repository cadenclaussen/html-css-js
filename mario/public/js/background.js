export default function createBackgroundCanvas(levelYaml, canvasMap) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 240;

    levelYaml.backgrounds.forEach(background => {
        background.ranges.forEach(([ x1, x2, y1, y2]) => {
            for (let x = x1; x < x2; x++)  {
                for (let y = y1; y < y2; y++) {
                    context.drawImage(canvasMap[background.tile], x * 16, y * 16);
                }
            }
        });
    });

    return canvas;
}