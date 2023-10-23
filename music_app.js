let pop_song_left = document.querySelector('#Pop_song_left');
let pop_song_right = document.querySelector('#Pop_song_right');
let pop_song = document.querySelector('#Pop_song');

const music = new Audio('playlists/songs/anime1.mp3');
// music.play();
const songs = [
    {
        id: 1,
        songName: `Fukashigi no Carte<br>
        <div class="subtitle">Selphius</div>`,
        poster: "playlists/anime/anime1.jpeg"
    },
    {
        id: 2,
        songName: `Shinzo wo sasageyo <br>
        <div class="subtitle">Linked Horizon</div>`,
        poster: "playlists/anime/anime2.JPEG"
    },
    {
        id: 3,
        songName: `Goose House<br>
        <div class="subtitle">Goose House</div>`,
        poster: "playlists/anime/anime3.jpeg"
    },
    {
        id: 4,
        songName: `Kimi no sae<br>
        <div class="subtitle">Studio Rascal</div>`,
        poster: "playlists/anime/anime4.jpeg"
    },
    {
        id: 5,
        songName: `Tokyo<br>
        <div class="subtitle">Leat'eq</div>`,
        poster: "playlists/anime/anime5.jpeg"
    },
    {
        id: 6,
        songName: `Chokra Jawaan<br>
        <div class="subtitle">Sunidhi Chawaan</div>`,
        poster: "playlists/bollywood/bolly1.jpeg"
    },
    {
        id: 7,
        songName: `High Heels<br>
        <div class="subtitle">Honey Singh/div>`,
        poster: "playlists/bollywood/bolly2.jpeg"
    },
    {
        id: 8,
        songName: `Lat Lag Gayi<br>
        <div class="subtitle">Pritam</div>`,
        poster: "playlists/bollywood/bolly3.jpeg"
    },
    {
        id: 9,
        songName: `Gandi Baat<br>
        <div class="subtitle">Mika Singh</div>`,
        poster: "playlists/bollywood/bolly4.jpeg"
    },
    {
        id: 10,
        songName: `Thug Le<br>
        <div class="subtitle">Vishal Dhadlani</div>`,
        poster: "playlists/bollywood/bolly5.jpeg"
    },
    {
        id: 11,
        songName: `venom<br>
        <div class="subtitle">Eminem</div>`,
        poster: "playlists/workout/workout1.jpeg"
    },
    {
        id: 12,
        songName: `Industry Baby<br>
        <div class="subtitle">Lil Nas</div>`,
        poster: "playlists/workout/workout2.jpeg"
    },
    {
        id: 13,
        songName: `Without Me<br>
        <div class="subtitle">Eminem</div>`,
        poster: "playlists/workout/workout3.jpeg"
    },
    {
        id: 14,
        songName: `Mask Off<br>
        <div class="subtitle">someone</div>`,
        poster: "playlists/workout/workout4.jpeg"
    },
    {
        id: 15,
        songName: `Lose yourself<br>
        <div class="subtitle">Eminem</div>`,
        poster: "playlists/workout/workout5.jpeg"
    },
    {
        id: 16,
        songName: `Saath Samundar<br>
        <div class="subtitle">Udit Narayan</div>`,
        poster: "playlists/old/old1.jpg"
    },
    {
        id: 17,
        songName: `Jadoo Hai Tera<br>
        <div class="subtitle">Kumar Sanu</div>`,
        poster: "playlists/old/old2.jpg"
    },
    {
        id: 18,
        songName: `Tera Dil<br>
        <div class="subtitle">Udit Narayan</div>`,
        poster: "playlists/old/old3.jpg"
    },
    {
        id: 19,
        songName: `Dholna<br>
        <div class="subtitle">Uttam Singh, Lata Mangeshkar</div>`,
        poster: "playlists/old/old4.jpg"
    },
    {
        id: 20,
        songName: `Zara se Jhoom Lu mei<br>
        <div class="subtitle">Ashna Bhosle</div>`,
        poster: "playlists/old/old5.jpg"
    },
    {
        id: 21,
        songName: `0 to 100<br>
        <div class="subtitle">Punjabi</div>`,
        poster: "playlists/old/old6.jpg"
    },
    {
        id: 22,
        songName: `Mast Kalandar<br>
        <div class="subtitle">Honey singh</div>`,
        poster: "playlists/old/old7.jpg"
    },
    {
        id: 23,
        songName: `Teri Baaton Mei<br>
        <div class="subtitle">Raghav</div>`,
        poster: "playlists/old/old8.jpg"
    },
    {
        id: 24,
        songName: `Ollulleru<br>
        <div class="subtitle">Emmual joseph</div>`,
        poster: "playlists/old/old9.jpg"
    },
    {
        id: 25,
        songName: `Still Rollin<br>
        <div class="subtitle">Shubh</div>`,
        poster: "playlists/old/old10.jpg"
    },
    {
        id: 26,
        songName: `high heels<br>
        <div class="subtitle">honey Singh</div>`,
        poster: "playlists/workout/workout1.jpeg"
    }
    
]



pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 320;
})
pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 320;
})

let playlist_box_left = document.querySelector('#playlist_box_left');
let playlist_box_right = document.querySelector('#playlist_box_right');
let playlist_song = document.querySelector('#playlist_song_box');

playlist_box_left.addEventListener('click', () => {
    playlist_song.scrollLeft -= 320;
})
playlist_box_right.addEventListener('click', () => {
    playlist_song.scrollLeft += 320;
})




let masterplay = document.getElementById('masterplay');
let masterpause = document.getElementById('masterpause');

masterplay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    }
    else {
        music.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');

    }

}
)



let master_play_poster = document.getElementById('master_player_poster');
let index = 0;
let master_player_title = document.getElementById('master-player-title');
Array.from(document.getElementsByClassName('fa-circle-play')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `playlists/songs/music${index}.mp3`;
        console.log("vedi cray cray");
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";

        for (i = 0; i <= 26; i++) {
            if (songs[i].id == index) {
                master_player_title.innerHTML = songs[i].songName;
                break;
            }
        }
        music.play();
        if (masterplay.classList.contains('fa-play')) {
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
        }
        if (0 < index && index <= 5) {
            master_play_poster.src = `playlists/anime/anime${index}.JPEG`;
        }
        else if (5 < index && index <= 10) {
            master_play_poster.src = `playlists/bollywood/bolly${index - 5}.JPEG`;
        }
        else if (10 < index && index <= 15) {
            master_play_poster.src = `playlists/workout/workout${index - 10}.JPEG`;

        }
        else if (15 < index && index <= 26) {
            master_play_poster.src = `playlists/old/old${index - 15}.JPG`;

        }
    })
})

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = 'rgb(105,105,105,.0)';
        // last one denotes opacity!
    })
}


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek=document.getElementById('seek');




music.addEventListener('timeupdate', () => {
   let music_curr= music.currentTime;
   let music_dur=music.duration;
   let min1=Math.floor(music_dur/60);
   let sec1= Math.floor(music_dur%60);

   if(sec1<10){
    sec1=`0${sec1}`
   }

   currentEnd.innerText=`${min1}:${sec1}`;

   let min2= Math.floor(music_curr/60);
   let sec2= Math.floor(music_curr %60);
   if(sec2<10){
    sec2=`0${sec2}`
   }
   currentStart.innerText=`${min2}:${sec2}`;

   

//    updating the bar now
let progressBar=parseInt((music_curr/ music_dur)*100);
seek.value=progressBar;

})

seek.addEventListener('change', ()=>{
    music.currentTime=seek.value * music.duration/100;
});






let back=document.getElementById('back');
let next=document.getElementById('next');


back.addEventListener('click', ()=>{
    console.log(index);
    index-=1;
    if(index==0){
        index=0;
    }
    music.src = `playlists/songs/music${index}.mp3`;
    console.log("vedi cray cray");
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";

    for (i = 0; i <= 26; i++) {
        if (songs[i].id == index) {
            master_player_title.innerHTML = songs[i].songName;
            break;
        }
    }
    music.play();
    if (masterplay.classList.contains('fa-play')) {
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    if (1 < index && index <= 5) {
        master_play_poster.src = `playlists/anime/anime${index}.JPEG`;
    }
    else if (5 < index && index <= 10) {
        master_play_poster.src = `playlists/bollywood/bolly${index - 5}.JPEG`;
    }
    else if (10 < index && index <= 15) {
        master_play_poster.src = `playlists/workout/workout${index - 10}.JPEG`;

    }
    else if (15 < index && index <= 26) {
        master_play_poster.src = `playlists/old/old${index - 15}.JPG`;

    }
    console.log(index);
})
next.addEventListener('click', ()=>{
    index++;
    if(index==27){
        index=1;
    }
    music.src = `playlists/songs/music${index}.mp3`;
    console.log("vedi cray cray");
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";

    for (i = 0; i <= 26; i++) {
        if (songs[i].id == index) {
            master_player_title.innerHTML = songs[i].songName;
            break;
        }
    }
    music.play();
    if (masterplay.classList.contains('fa-play')) {
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    if (0 < index && index <= 5) {
        master_play_poster.src = `playlists/anime/anime${index}.JPEG`;
    }
    else if (5 < index && index <= 10) {
        master_play_poster.src = `playlists/bollywood/bolly${index - 5}.JPEG`;
    }
    else if (10 < index && index <= 15) {
        master_play_poster.src = `playlists/workout/workout${index - 10}.JPEG`;

    }
    else if (15 < index && index <= 26) {
        master_play_poster.src = `playlists/old/old${index - 15}.JPG`;

    }
})
Array.from(document.getElementsByClassName('songItemx')).forEach((ex, i) => {
    ex.getElementsByTagName('img')[0].src = play_queue[i].poster;
    ex.getElementsByTagName('h5')[0].innerHTML = play_queue[i].PlayListName;
})

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


