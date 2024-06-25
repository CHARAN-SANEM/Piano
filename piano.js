const pianokeys=document.querySelectorAll(".piano-keys .key");
volumeSlider=document.querySelector(".volume-slider input");
CheckBox=document.querySelector(".keys-checkbox input");
let allkeys=[],
audio=new Audio("tunes/a.wav")//default a.wav tune for every key
const playTune=(key) =>{
    audio.src = `tunes/${key}.wav`;
        audio.play();//plays audio
        const clickedKey = document.querySelector(`[data-key="${key}"]`)
clickedKey.classList.add("active");
setTimeout(()=>{
    clickedKey.classList.remove("active");
},150);
}





pianokeys.forEach(key =>{
    allkeys.push(key.dataset.key);
    //calling playtune function with passing data-key value as an arugemnt
    key.addEventListener("click", () => playTune(key.dataset.key))
    //console.log(key.dataset.key);
});


const handleVolume=(e)=>{
    audio.volume=e.target.value;//passing range slider value for volume
};
const showhidekey=(e)=>{
    //for hiding keys or showing keys
    pianokeys.forEach(key =>key.classList.toggle("hide"));
}
 const pressedkey=(e)=>{
    //if the pressed key is in allkeys array , only call the playtune
   if(allkeys.includes(e.key)) playTune(e.key);
 }
volumeSlider.addEventListener("input",handleVolume);
CheckBox.addEventListener("input",showhidekey);
document.addEventListener("keydown",pressedkey);

