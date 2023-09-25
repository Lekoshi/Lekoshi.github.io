let counter = 1;
let audio = new Audio('js/easteregg.mp3')
audio.volume = 0.5;

$('span.name').on('click', () => {
    if(counter == 5){
        audio.play();
        $('#name').css('color', `rgb(255, 255, 255)`);
        counter = 1;
    }
    
    if(audio.paused) {
        let color = Math.floor(255 / ((counter+1) * 0.6));
        $('#name').css('color', `rgb(${color}, 255, ${color})`);
        counter++;
    }
});