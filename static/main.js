// Source - https://stackoverflow.com/a/18628124
// Posted by Uri, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-01, License - CC BY-SA 4.0

var lizardAudio = new Audio('static/lizard-button.mp3');



// Select our play button
const playButton = document.getElementById("lizardButton");

playButton.addEventListener("click", () => {
    lizardAudio.play();
});