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
const play = document.querySelector(".play_img");
const ant = document.querySelector(".prev_img");
const sig = document.querySelector(".sig_img");
const prog = document.querySelector(".progreso");
const vol = document.querySelector(".volumen");
const barra = document.querySelector(".barra");
let cont = 0;

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
        
        a.addEventListener("click",()=>{
            cargardatos(i);
            //a.classList = "active";
        }) 
    } 
}

// - Cargando datos de la canciones - //

function cargardatos(pos){
    audio.src = "./audio/" + songlist[pos].file;
    titulo.innerText = songlist[pos].title;
    cover.src = './imagenes/' + songlist[pos].cover;
    playsong();
    //console.log(pos);
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


// - anterior -//
ant.addEventListener("click",()=>{ 
    cont--;
    if(cont >= 0){
        cargardatos(cont);
        //console.log(cont);    
    }else{
        cont = songlist.length - 1;
        cargardatos(cont);
        //console.log(cont);
    }
    
})
// - siguiente -//

sig.addEventListener("click",()=>{
    cont++;
    if(cont > songlist.length - 1){
        cont = 0;
        cargardatos(cont);
        //console.log(cont);
    }else{
        cargardatos(cont);
        //console.log(cont);
    }
})

// - barra de progreso - //
audio.addEventListener("timeupdate",barraprogres);

function barraprogres(evento){
    const {duration,currentTime} = evento.srcElement;
    const porcentaje = (currentTime*100) / duration;
    prog.style.width = porcentaje + "%";
    //console.log(evento);
    
}

// - Volumen - // 
vol.addEventListener("click",()=>{
    let volumen = this.value;
    audio.volume = volumen;
})


// - Click a la barra de progreso - //
barra.addEventListener("click",(x)=>{
    let areatotalbarra = barra.clientWidth; //toma el ancho total de la barra junto con su padding osea el relleno//
    let clickejex = x.offsetX;// devuelve la coordenada donde haga click el mouse. propiedad solo de lectura //
    let duracionsong = audio.duration; //duracion de la cancion//
    audio.currentTime = (clickejex * duracionsong)/areatotalbarra;
    //audio.currentTime = (clickejex/areatotalbarra)*duracionsong;
    //playMusic();
    /*  
        100% ---------> duracionsong
        ¿?% ----------> clickejex
        100% ---------> areatotalbarra

        areatotalbarra -------- duracionsong
            clickejex  -------- X
    */ 
})

// - cargando funciones - //
cargarsong();

