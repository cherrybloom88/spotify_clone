console.log("Welcome to Spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Let me love you - Justin Beiber", filePath: "songs/1.mp3", coverPath: "covers/let.jpeg" },
    { songName: "Thinkin' bout you - Rei brown", filePath: "songs/2.mp3", coverPath: "covers/thinkinboutyou.png" },
    { songName: "Dark Paradise - Lana Del Ray", filePath: "songs/3.mp3", coverPath: "covers/dark_paradise.jpg" },
    { songName: "Blood Sweat & Tears - BTS", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "The Machine - ReedWonder,Aurora Olivas", filePath: "songs/5.mp3", coverPath: "covers/themachine.jpg" },
    { songName: "Heaven & Back - Chase Atlantic", filePath: "songs/6.mp3", coverPath: "covers/heavenandback.webp" },
    { songName: "Overused(feat.gansh) - Clara Mae", filePath: "songs/7.mp3", coverPath: "covers/overused.jpg" },
    { songName: "Who?(feat.shiloh Dynasty", filePath: "songs/8.mp3", coverPath: "covers/who.jpg" },
    { songName: "reminder - The weekend", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]
songItem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})