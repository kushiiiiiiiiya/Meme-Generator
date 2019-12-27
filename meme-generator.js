let topTextInput , bottomTextInput , imageInput , generateBtn , canvas , ctx;

function generateMeme (img){
    canvas.width = img.width;
    canvas.heigth = img.heigth;

    ctx.clearRect(0 , 0, canvas.width, canvas.heigth);
    ctx.drawImage(img , 0 , 0);

}

function init(){
    topTextInput = document.getElementById('top-text');
    bottomTextInput = document.getElementById('bottom-text');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = getElementById('meme-canvas');

    ctx = canvas.getElementById('2d');
    canvas.width = canvas.heigth = 0;

    generateBtn.add
}