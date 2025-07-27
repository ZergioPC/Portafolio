// MARK: Avatar Logic

let MOUSE_VECTOR = [0,0];       // Posición del mouse con origen en esquina sup-izq
let PAGE_CENTER = [             // Centro de la página
    window.innerWidth/2,
    window.innerHeight/2
];

const $Avatar0 = document.getElementById("avatarHead0");
const $Avatar1 = document.getElementById("avatarHead1");
const $Avatar2 = document.getElementById("avatarHead2");
const $Avatar3 = document.getElementById("avatarHead3");
const $Avatar4 = document.getElementById("avatarHead4");

const $AvatarEyeList = [new Image(), new Image(), new Image(), new Image()];
const $AvatarMouthList = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];

$AvatarEyeList[0].src = "./img/present_section/3_eyes1.png"
$AvatarEyeList[1].src = "./img/present_section/3_eyes1.png"
$AvatarEyeList[2].src = "./img/present_section/3_eyes2.png"
$AvatarEyeList[3].src = "./img/present_section/3_eyes2.png"

$AvatarMouthList[0].src = "./img/present_section/3_mouth1.png"
$AvatarMouthList[1].src = "./img/present_section/3_mouth1.png"
$AvatarMouthList[2].src = "./img/present_section/3_mouth2.png"
$AvatarMouthList[3].src = "./img/present_section/3_mouth2.png"
$AvatarMouthList[4].src = "./img/present_section/3_mouth3.png"
$AvatarMouthList[5].src = "./img/present_section/3_mouth3.png"

document.addEventListener("mousemove", (e) => {
    MOUSE_VECTOR = [e.clientX, e.clientY];
});

window.addEventListener("resize", () => {
    PAGE_CENTER = [window.innerWidth/2, window.innerHeight/2];
});

// Cambio de cara
function auxRandNumber(start, end){
    return Math.floor(Math.random()*end) + start;
}

function $AvatarEyeChange(){
    $Avatar3.innerHTML = "";
    $Avatar3.appendChild($AvatarEyeList[auxRandNumber(0,3)]);
    setTimeout($AvatarEyeChange, auxRandNumber(1,4)*900);
}

function $AvatarMouthChange(){
    $Avatar4.innerHTML = "";
    $Avatar4.appendChild($AvatarMouthList[auxRandNumber(0,5)]);
    setTimeout($AvatarMouthChange, auxRandNumber(1,4)*1000);
}


// Start animation
setTimeout(()=>{
    setInterval(()=>{
        const pos = [
            (MOUSE_VECTOR[0]-PAGE_CENTER[0])/PAGE_CENTER[0],
            (MOUSE_VECTOR[1]-PAGE_CENTER[1])/PAGE_CENTER[1]
        ];
        
        const scales = [1, 5, 10, 15];
        $Avatar0.style.transform = `translate(${pos[0]*scales[0]}px, ${pos[1]*scales[0]}px)`;
        $Avatar1.style.transform = `translate(${pos[0]*scales[1]}px, ${pos[1]*scales[1]}px)`;
        $Avatar2.style.transform = `translate(${pos[0]*scales[2]}px, ${pos[1]*scales[2]}px)`;
        $Avatar3.style.transform = `translate(${pos[0]*scales[3]}px, ${pos[1]*scales[3]}px)`;
        $Avatar4.style.transform = `translate(${pos[0]*scales[3]}px, ${pos[1]*scales[3]}px)`;
    }, 100);
    
    $AvatarEyeChange();
    $AvatarMouthChange();
},3000);