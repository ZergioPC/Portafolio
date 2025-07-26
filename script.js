// MARK: Avatar Logic

let MOUSE_VECTOR = [0,0];
let PAGE_CENTER = [window.innerWidth/2, window.innerHeight/2];

const $Avatar0 = document.getElementById("avatarHead0");
const $Avatar1 = document.getElementById("avatarHead1");
const $Avatar2 = document.getElementById("avatarHead2");
const $Avatar3 = document.getElementById("avatarHead3");

document.addEventListener("mousemove", (e) => {
    MOUSE_VECTOR = [e.clientX, e.clientY];
});

window.addEventListener("resize", () => {
    PAGE_CENTER = [window.innerWidth/2, window.innerHeight/2];
});

setInterval(()=>{
    const pos = [(MOUSE_VECTOR[0]-PAGE_CENTER[0])/PAGE_CENTER[0], (MOUSE_VECTOR[1]-PAGE_CENTER[1])/PAGE_CENTER[1]];

    const scales = [1, 5, 10, 15];
    $Avatar0.style.transform = `translate(${pos[0]*scales[0]}px, ${pos[1]*scales[0]}px)`;
    $Avatar1.style.transform = `translate(${pos[0]*scales[1]}px, ${pos[1]*scales[1]}px)`;
    $Avatar2.style.transform = `translate(${pos[0]*scales[2]}px, ${pos[1]*scales[2]}px)`;
    $Avatar3.style.transform = `translate(${pos[0]*scales[3]}px, ${pos[1]*scales[3]}px)`;
}, 100);