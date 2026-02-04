const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const windowBox = document.querySelector(".letter-window");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const cat = document.getElementById("cat");
const finalText = document.getElementById("finalText");
const buttons = document.getElementById("buttons");

let yesScale = 1;

envelope.onclick = () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout(()=> windowBox.classList.add("open"),50);
};

noBtn.addEventListener("mouseover",()=>{
    const x = Math.random()*300-150;
    const y = Math.random()*200-100;
    noBtn.style.transform=`translate(${x}px,${y}px)`;

    yesScale += 0.3;
    yesBtn.style.transform=`scale(${yesScale})`;
});

yesBtn.onclick = () => {
    title.textContent="Yippeeeee 💗😭";
    cat.src="cat_dance.gif";
    buttons.style.display="none";
    finalText.style.display="block";
};
