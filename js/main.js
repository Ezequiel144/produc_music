const songlist = [
    {
        title: "Beret - Ojala",
        file: "BERET-OJALÁ(LETRA).mp3",
        cover:"1.jpg"
    },{
        title: "Eminem - Love the way you lie",
        file: "Eminem-LoveTheWayYouLieft.Rihanna-uelHwf8o7_U-MP3.mp3",
        cover:"2.jpg"
    },{
        title: "Beyoce Avenue - Mirror",
        file: "BoyceAvenue-Mirrors-JustinTimberlake(Legendado Pt)(320 kbps).mp3",
        cover:"3.jpg"
    },
]


// - carpturar elementos del DOM - //
const lista = document.querySelector(".lista");
const audio = document.querySelector(".audio");
const titulo = document.querySelector(".title");
const cover = document.querySelector(".cover");
const play = document.querySelector(".play_img")
// - Mostrar y cargar el listado de canciones - //

function cargarsong(song1){    
    /*songlist.forEach((elem,indic) =>{
        
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = elem.title;
        a.href = "#";
        a.classList = "song";
        li.appendChild(a);  //<a> se agrega a <li>
        console.log(li);
        lista.appendChild(li); 
    })*/

    for(let i = 0;i<songlist.length;i++){
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = songlist[i].title;
        a.href = "#";
        li.appendChild(a);  //<a> se agrega a <li>//
        lista.appendChild(li); //<li> se agrega a <ul>//
        console.log(lista);
        a.addEventListener("click",()=>{
            cargardatos(i,a);
        }) 
    } 
}

// - Cargando datos de la canciones - //

function cargardatos(pos,a){
    audio.src = "./audio/" + songlist[pos].file;
    //audio.play();
    titulo.innerText = songlist[pos].title;
    //a.style.fontSize = "1.2rem";
    a.style.color = "green";
    cover.src = './imagenes/' + songlist[pos].cover;
    playsong();
    
}

// - play - // 

function controls(){
    if(audio.paused){
        play.src = "./imagenes/tocar.png";
    }else{
        play.src = "./imagenes/pausa.png";
    }
    
}

// - click del control play - //

play.addEventListener("click",()=>{
    if(audio.paused){
        playsong();
    }else{
        pausedsong();
    }
})

// - reproducir - //
function playsong(){
    audio.play();
    controls()
}
// - pausar - //
function pausedsong(){
    audio.pause();
    controls();
}
// - cargando funciones - //
cargarsong();

