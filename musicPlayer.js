
let songs = document.querySelector('#songs');
let albums = document.querySelector('#albums');

let artists = document.querySelector('#artists');

let playlists = document.querySelector('#playlists');



let songs2 = document.querySelector('#songs2');
let albums2 = document.querySelector('#albums2');

let artists2 = document.querySelector('#artists2');


let playlists2 = document.querySelector('#playlists2');
/*
songs.addEventListener('click', ()=>{
    songs2.style.display = "block";
    albums2.style.display = "none";
    artists2.style.display = "none";
    playlists2.style.display = "none";


})

albums.addEventListener('click', ()=>{
    albums2.style.display = "block";
    songs2.style.display = "none";
   
    artists2.style.display = "none";
    playlists2.style.display = "none";
    
})

artists.addEventListener('click', ()=>{
    artists2.style.display = "block";
    albums2.style.display = "none";
    songs2.style.display = "none";
    playlists2.style.display = "none";  
})
playlists .addEventListener('click', ()=>{
    playlists2.style.display = "block"; 
    artists2.style.display = "none";
    albums2.style.display = "none";
    songs2.style.display = "none";
   
})




*/







let audios = [
    "music/BLOW.mp3",
   "music/cent.mp3",
  "music/game.mp3"
 
];

let cover = ["image/a.jpg","image/b.jpg","image/c.jpg"];
let currentTime = document.querySelector(".currentTime");
let durationTime = document.querySelector(".durationTime");
let audio = new Audio();
let currentSong = 0;



let blow = document.querySelector('#blow');
let cent = document.querySelector('#cent');
let game = document.querySelector('#game');
let slideGame = document.querySelectorAll('.slide');
let slideblow = document.querySelectorAll('.slide');
let slidecent = document.querySelectorAll('.slide');
let slideblowupload = document.querySelectorAll('.slide');






let seekslider = document.getElementById('seekslider');
let volumeslider = document.getElementById('volumeslider');
let currentTime1 = document.querySelector('.currentTime');
let durationTime1 = document.querySelector('.durationTime');

seekslider.addEventListener('mousedown', function(event){
    seeking = true;
    seekTimeupdate(event); });
seekslider.addEventListener("mousemove", function(event){
    seek(event);});
seekslider.addEventListener("mouseup", function(){
    seeking = false;
});

//volumeslider.addEventListener("mousemove", setvolume());









window.onload = start;


function start(){ 
   
    for(b2 = 0; b2 < slideblow.length; b2++){
        slideblowupload[0].style.display = 'block';
      

      }  

    game.addEventListener('click', () =>{
        for(d = 0; d < audios.length; d++){
            audio.src = audios[2];
            audio.play();
        }

      for(g = 0; g < slideGame.length; g++){
        slideGame[2].style.display = 'block';
        slideGame[0].style.display = 'none';
        slideGame[1].style.display = 'none';

      }  



    })

    blow.addEventListener('click', () =>{
        for(y = 0; y < audios.length; y++){
            audio.src = audios[0];
            audio.play();
        }
        for(b = 0; b < slideblow.length; b++){
            slideblow[0].style.display = 'block';
            slideblow[1].style.display = 'none';
            slideblow[2].style.display = 'none';

          }  
    
    })
    
    cent.addEventListener('click', () =>{
        for(c = 0; c < audios.length; c++){
            audio.src = audios[1];
            audio.play();
        }
        for(c = 0; c < slideblow.length; c++){
            slidecent[1].style.display = 'block';
            slidecent[0].style.display = 'none';
            slidecent[2].style.display = 'none';


          }  
    })

 
   audio.src = audios[currentSong];

//audio.src = audios;


for(i = 0; i < audios.length; i++){
    audio.play();
    let PausePlay = document.querySelector("#PausePlay");
    PausePlay.addEventListener('click', ()=>{
    
    
    if(audio.paused){
    
    audio.play();
    
    
    
    let Play = document.querySelector('#PausePlay');
    Play.innerHTML = "Pause";
    
    }else{
    audio.pause();
    let Pause = document.querySelector('#PausePlay');
    Pause.innerHTML = "Play";
    } 
    
    
    })
}


let stopNow = document.querySelector('#stopNow');

stopNow.addEventListener('click', () =>{
    
for(i = 0; i < audios.length; i++){

    audio.pause();
    audio.currentTime = 0;
    
}

document.querySelector('#PausePlay').innerHTML = "Play";

})







audio.addEventListener('timeupdate', function(){
let position = audio.currentTime/audio.duration;

})



let next = document.querySelector(".next");
next.addEventListener('click', () =>{
currentSong++;
if(currentSong > 2){
currentSong = 0;
}
start();
//audio.load();
if(currentSong == 0){
    for(bb = 0; bb < slideblow.length; bb++){
        slideblow[0].style.display = 'block';
        slideblow[1].style.display = 'none';
        slideblow[2].style.display = 'none';

      }  
}

if(currentSong == 1){
    for(cc = 0; cc < slideblow.length; cc++){
        slidecent[1].style.display = 'block';
        slidecent[0].style.display = 'none';
        slidecent[2].style.display = 'none';


      }  
}


if(currentSong == 2){
    for(gg = 0; gg < slideGame.length; gg++){
        slideGame[2].style.display = 'block';
        slideGame[0].style.display = 'none';
        slideGame[1].style.display = 'none';

      }  
}


//for(i = 0; i < audios.length; i++){
    audio.play();
    let PausePlay = document.querySelector("#PausePlay");
    PausePlay.addEventListener('click', ()=>{
    
    
    if(audio.paused){
    
    audio.play();
    
    
    
    let Play = document.querySelector('#PausePlay');
    Play.innerHTML = "Pause";
    
    }else{
    audio.pause();
    let Pause = document.querySelector('#PausePlay');
    Pause.innerHTML = "Play";
    } 
    
    
    })




})


let prev = document.querySelector('.prev');
prev.addEventListener('click', () =>{
currentSong--;
if(currentSong < 0){
currentSong = 2;
}
start();


if(currentSong == 0){
    for(bbb = 0; bbb < slideblow.length; bbb++){
        slideblow[0].style.display = 'block';
        slideblow[1].style.display = 'none';
        slideblow[2].style.display = 'none';

      }  
}

if(currentSong == 1){
    for(ccc = 0; ccc < slideblow.length; ccc++){
        slidecent[1].style.display = 'block';
        slidecent[0].style.display = 'none';
        slidecent[2].style.display = 'none';


      }  
}


if(currentSong == 2){
    for(ggg = 0; ggg < slideGame.length; ggg++){
        slideGame[2].style.display = 'block';
        slideGame[0].style.display = 'none';
        slideGame[1].style.display = 'none';

      }  
}




audio.play();
let PausePlay = document.querySelector("#PausePlay");
PausePlay.addEventListener('click', ()=>{


if(audio.paused){

audio.play();



let Play = document.querySelector('#PausePlay');
Play.innerHTML = "Pause";

}else{
audio.pause();
let Pause = document.querySelector('#PausePlay');
Pause.innerHTML = "Play";
} 


})
})

if(audio.ended){
nextAudio()
}













 


















/*
let currentSlide = 0;
let slide = document.querySelectorAll('.slide');
const init = (n) =>{
slide.forEach((slide) => {
slide.style.display = 'none'
})
slide[n].style.display = 'block'
};


document.addEventListener("DOMContentLoaded", init(currentSlide))
const next11 = () =>{
currentSlide >= slide.length - 1 ? currentSlide = 0 : currentSlide++;
init(currentSlide)
};


const prev11 = () =>{
currentSlide <= 0 ? currentSlide = slide.length -  1 : currentSlide--;
init(currentSlide)
};

document.querySelector('.prev').addEventListener('click', prev11);
document.querySelector('.next').addEventListener('click', next11);

*/






};

let progressBar = document.querySelector('#progress-bar');
function updateProgressValue(){
   
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
 
    document.querySelector('.currentTime').innerHTML = formatTime(audio.currentTime);
 
    document.querySelector('.durationTime').innerHTML = formatTime(audio.duration);
 
 setInterval(updateProgressValue, 500);
 };


function changeProgressBar(){
    audio.currentTime = progressBar.value;
};






function seekTimeupdate(){
    if(audio.duration){

    }
}










function seek(event){
   if(audio.duration == 0){
       null
   }else{
       if(seeking){
           seekslider.value = event.clientX - seekslider.offsetLeft;
           seekto = audio.duration * (seekslider.value / 100);
           audio.currentTime = seekto;
       }
   }
}

function setvolume(){
    audio.volume = volumeslider.value / 100;
}


function seekTimeupdate(){
    if(audio.duration){
        let nt = audio.currentTime1 * (100 / audio.duration);
        seekslider.value = nt;
        var curmins = Math.floor(audio.currentTime1 / 60);
        var cursecs = Math.floor(audio.currentTime1 - curmins * 60);
        var durmins = Math.floor(audio.duration / 60);
        var dursecs = Math.floor(audio.duration - duration * 60);
        if(cursecs < 10){cursecs = "0" * cursecs}
        if(dursecs < 10){dursecs = "0" + dursecs}
        if(curmins < 10){curmins = "0" + curmins}
        if(dursecs < 10){dursecs = "0" + dursecs}
        currentTime1.innerHTML = curmins + ":" +cursecs;
        durationTime1.innerHTML = durmins+ ":" +dursecs;
    }else{
        currentTime1.innerHTML = "00" + ":" + "00";
        durationTime1.innerHTML = "00" + ":" + "00";
    }
}












function decreaseVolume(){
audio.volume -= 0.25;
}

function increaseVolume(){
audio.volume += 0.25;
}





let volumeUp = document.querySelector(".volume-up");
volumeUp.addEventListener('click', function(){
if(audio.volume === 1){
audio.volume = 0;
document.querySelector('.volume-up').innerHTML = "Unmute";

}else{
audio.volume = 1;
document.querySelector('.volume-up').innerHTML = "Mute";
}
})








/*

let i = 0;

//let music_player = document.querySelector("#music_list audio");

function next(){
  if(i === audios.length - 1){
      i = 0;
  }else{
      i++;
  }
  audio.src = audios[i];
}
if(audio === null){
  throw "Playlist Player does not exists...";
}else{audio.src = audios[i];

//music_player.addEventListener('ended', next, false)
}
*/











/*
let audio = new Audio('music/cent.mp3');
function play(){ 

audio.paused? audio.play() : audio.pause();

}

function pause(){
audio.pause();
}

*/

























/*  
function appendMsg(button){
button.onclick = null;
document.getElementById('wrapper').innerHTML += "triggerOnceforShare" + "<br />"
}

*/


/*
let startTime = 1;
let time = startTime * 60;

let countDown = document.getElementById("demo1");

let x = setInterval(updatedCountDown, 1000);

function updatedCountDown(){
let minutes = Math.floor(time / 60);
let Seconds = time % 60;

countDown.innerHTML = `Time Remaining: ${minutes}:${Seconds}`;
time--;

if(time < 0){
clearInterval(x);
countDown.innerHTML = "Time Up";

}
}
*/


/*

let currentSlide = 0;
let slide = document.querySelectorAll('.music');
const init = (n) =>{
slide.forEach((slide) => {
slide.style.display = 'none'
})
slide[n].style.display = 'block'

}

document.addEventListener("DOMContentLoaded", init(currentSlide))
const next11 = () =>{
    currentSlide >= slide.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide)
  
    
}


const prev11 = () =>{
    currentSlide <= 0 ? currentSlide = slide.length -  1 : currentSlide--;
    init(currentSlide)
 
}

document.querySelector('.prev').addEventListener('click', prev11)
document.querySelector('.next').addEventListener('click', next11)



let myMusic = document.querySelectorAll(".music");


function play(){
    myMusic.forEach(function(myMusic){
       // let isPlaying = true;
  myMusic.paused? myMusic.play() : myMusic.pause()
  
})
}

function stop(){
    myMusic.forEach(function(myMusic){
    myMusic.pause();
    myMusic.currentTime = 0;
    })
}



function stopOtherAudio(event){
    for(const audio of document.querySelectorAll(".slide")){
        audio.pause();
    }
}
/*
function pause(){
    myMusic.forEach(function(myMusic){
        myMusic.load();
    myMusic.pause();
})

}
*/