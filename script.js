/* =========================================
   GUNJAN'S BIRTHDAY WORLD 🎀
   First Interactive Version
========================================= */

const introScene = document.getElementById("introScene");
const letterScene = document.getElementById("letterScene");
const welcomeLetterScene = document.getElementById("welcomeLetterScene");
const birthdayScene = document.getElementById("birthdayScene");

const continueBtn = document.getElementById("continueBtn");
const openLetterBtn = document.getElementById("openLetterBtn");
const enterBtn = document.getElementById("enterBtn");
const journeyBtn = document.getElementById("journeyBtn");

const envelope = document.getElementById("envelope");
const catPeek = document.getElementById("catPeek");
const sparkleLayer = document.getElementById("sparkleLayer");


/* =========================================
   CHANGE SCENE
========================================= */

function showScene(scene) {

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(function(currentScene) {
        currentScene.classList.remove("active");
    });

    scene.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================
   INTRO → ENVELOPE
========================================= */

continueBtn.addEventListener("click", function() {

    createMagicBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );

    setTimeout(function() {

        showScene(letterScene);

    }, 450);

});


/* =========================================
   CAT REACTION 🐱
========================================= */

catPeek.addEventListener("click", function(event) {

    event.stopPropagation();

    const message =
        catPeek.querySelector(".cat-message");

    message.textContent =
        "Okay okay... keep going 😭🎀";

    catPeek.style.transform =
        "scale(1.08) rotate(2deg)";

    createMagicBurst(
        event.clientX,
        event.clientY
    );

    setTimeout(function() {

        catPeek.style.transform = "";

    }, 400);

});


/* =========================================
   OPEN ENVELOPE 💌
========================================= */

let envelopeOpened = false;

openLetterBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    if (envelopeOpened) {
        return;
    }

    envelopeOpened = true;

    envelope.classList.add("open");

    openLetterBtn.textContent =
        "Opening your letter... 🌸";

    createMagicBurst(
        window.innerWidth / 2,
        window.innerHeight / 2
    );


    setTimeout(function() {

        showScene(welcomeLetterScene);

    }, 1800);

});


/* =========================================
   ENTER BIRTHDAY WORLD 🌸
========================================= */

enterBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createPetalCelebration();

    createMagicBurst(
        event.clientX,
        event.clientY
    );


    setTimeout(function() {

        showScene(birthdayScene);

        birthdayCelebration();

    }, 850);

});


/* =========================================
   BIRTHDAY CELEBRATION 🎂
========================================= */

function birthdayCelebration() {

    const title =
        document.querySelector(".birthday-title");

    title.animate(

        [
            {
                transform: "scale(.75)",
                opacity: 0
            },

            {
                transform: "scale(1.08)",
                opacity: 1
            },

            {
                transform: "scale(1)",
                opacity: 1
            }
        ],

        {
            duration: 1100,
            easing: "cubic-bezier(.2,.8,.3,1.2)"
        }

    );


    for (let i = 0; i < 16; i++) {

        setTimeout(function() {

            createRandomSparkle();

        }, i * 90);

    }

}


/* =========================================
   TAP ANYWHERE → SPARKLES ✨
========================================= */

document.addEventListener("click", function(event) {

    const target = event.target;

    /*
       Buttons already have their own
       special effects, so don't create
       extra sparkles directly on them.
    */

    if (target.closest("button")) {
        return;
    }

    createTapSparkle(
        event.clientX,
        event.clientY
    );

});


function createTapSparkle(x, y) {

    const symbols = [
        "✨",
        "✦",
        "♡",
        "🌸"
    ];

    const sparkle =
        document.createElement("span");

    sparkle.className =
        "tap-sparkle";

    sparkle.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];

    sparkle.style.left =
        x + "px";

    sparkle.style.top =
        y + "px";

    sparkleLayer.appendChild(sparkle);


    setTimeout(function() {

        sparkle.remove();

    }, 850);

}


/* =========================================
   MAGIC BURST ✨
========================================= */

function createMagicBurst(x, y) {

    const symbols = [
        "✨",
        "✦",
        "🌸",
        "♡",
        "🎀"
    ];


    for (let i = 0; i < 9; i++) {

        const sparkle =
            document.createElement("span");

        sparkle.className =
            "tap-sparkle";

        sparkle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        const randomX =
            x + (Math.random() * 130 - 65);

        const randomY =
            y + (Math.random() * 80 - 40);


        sparkle.style.left =
            randomX + "px";

        sparkle.style.top =
            randomY + "px";

        sparkle.style.fontSize =
            (15 + Math.random() * 12) +
            "px";


        sparkleLayer.appendChild(sparkle);


        setTimeout(function() {

            sparkle.remove();

        }, 850);

    }

}


/* =========================================
   RANDOM SPARKLE
========================================= */

function createRandomSparkle() {

    const x =
        Math.random() *
        window.innerWidth;

    const y =
        Math.random() *
        window.innerHeight;

    createTapSparkle(x, y);

}


/* =========================================
   PETAL CELEBRATION 🌸
========================================= */

function createPetalCelebration() {

    const petals = [
        "🌸",
        "🌷",
        "✨",
        "♡"
    ];


    for (let i = 0; i < 22; i++) {

        const petal =
            document.createElement("span");

        petal.textContent =
            petals[
                Math.floor(
                    Math.random() *
                    petals.length
                )
            ];


        petal.style.position =
            "fixed";

        petal.style.left =
            Math.random() * 100 +
            "vw";

        petal.style.top =
            "-40px";

        petal.style.zIndex =
            "998";

        petal.style.pointerEvents =
            "none";

        petal.style.fontSize =
            (16 + Math.random() * 18) +
            "px";


        document.body.appendChild(petal);


        const horizontalMove =
            Math.random() * 150 - 75;


        const animation =
            petal.animate(

                [
                    {
                        transform:
                            "translate(0,0) rotate(0deg)",

                        opacity: 1
                    },

                    {
                        transform:
                            "translate(" +
                            horizontalMove +
                            "px,110vh) rotate(420deg)",

                        opacity: .2
                    }
                ],

                {
                    duration:
                        2600 +
                        Math.random() * 1800,

                    easing: "linear"
                }

            );


        animation.onfinish =
            function() {

                petal.remove();

            };

    }

}


/* =========================================
   JOURNEY BUTTON

   Next time we'll connect this to the
   photo/memory section 📸
========================================= */

journeyBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createMagicBurst(
        event.clientX,
        event.clientY
    );

    journeyBtn.textContent =
        "Our little journey starts here... 📸🌸";

});


/* =========================================
   LITTLE BACKGROUND MAGIC

   Occasionally creates one tiny sparkle.
========================================= */

setInterval(function() {

    /*
       Keep this subtle.
       We don't want the screen looking
       like a sparkle explosion 😂
    */

    if (Math.random() > 0.55) {

        createRandomSparkle();

    }

}, 3500);

/* =========================================
   PHOTO JOURNEY NAVIGATION 📸🌸
========================================= */

const memoryOne = document.getElementById("memoryOne");
const memoryTwo = document.getElementById("memoryTwo");
const memoryThree = document.getElementById("memoryThree");
const memoryFour = document.getElementById("memoryFour");
const cakeBreakScene = document.getElementById("cakeBreakScene");

const memoryOneBtn = document.getElementById("memoryOneBtn");
const memoryTwoBtn = document.getElementById("memoryTwoBtn");
const memoryThreeBtn = document.getElementById("memoryThreeBtn");
const memoryFourBtn = document.getElementById("memoryFourBtn");
const cakeBtn = document.getElementById("cakeBtn");

const memoryCat = document.getElementById("memoryCat");


/* =========================================
   BIRTHDAY → MEMORY #1 🌷

   journeyBtn already exists in our
   original JavaScript.

   We replace its old click behavior safely
   by cloning the button.
========================================= */

const oldJourneyBtn = document.getElementById("journeyBtn");

const newJourneyBtn = oldJourneyBtn.cloneNode(true);

oldJourneyBtn.parentNode.replaceChild(
    newJourneyBtn,
    oldJourneyBtn
);


newJourneyBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createMagicBurst(
        event.clientX,
        event.clientY
    );

    setTimeout(function() {

        showScene(memoryOne);

    }, 450);

});


/* =========================================
   MEMORY #1 → MEMORY #2 🌸
========================================= */

memoryOneBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createMagicBurst(
        event.clientX,
        event.clientY
    );

    setTimeout(function() {

        showScene(memoryTwo);

    }, 450);

});


/* =========================================
   MEMORY #2 → MEMORY #3 📱
========================================= */

memoryTwoBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createMagicBurst(
        event.clientX,
        event.clientY
    );

    setTimeout(function() {

        showScene(memoryThree);

    }, 450);

});


/* =========================================
   LITTLE CAT REACTION 🐱
========================================= */

if (memoryCat) {

    memoryCat.addEventListener("click", function(event) {

        event.stopPropagation();

        const catText =
            memoryCat.querySelector(".memory-cat-text");

        catText.textContent =
            "SEE? I told you 😭🌸";

        createMagicBurst(
            event.clientX,
            event.clientY
        );


        memoryCat.animate(

            [
                {
                    transform:
                        "rotate(-2deg) scale(1)"
                },

                {
                    transform:
                        "rotate(4deg) scale(1.12)"
                },

                {
                    transform:
                        "rotate(-2deg) scale(1)"
                }
            ],

            {
                duration: 500,
                easing: "ease"
            }

        );

    });

}


/* =========================================
   MEMORY #3 → MEMORY #4 ✨
========================================= */

memoryThreeBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createPetalCelebration();

    createMagicBurst(
        event.clientX,
        event.clientY
    );


    setTimeout(function() {

        showScene(memoryFour);

    }, 700);

});


/* =========================================
   MEMORY #4 → FUNNY CAT BREAK 😂
========================================= */

memoryFourBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createMagicBurst(
        event.clientX,
        event.clientY
    );


    setTimeout(function() {

        showScene(cakeBreakScene);

    }, 500);

});


/* =========================================
   CAKE BUTTON 🎂

   Actual interactive cake scene will be
   created in our NEXT build.

   For now this confirms that the complete
   photo journey works.
========================================= */

const cakeScene = document.getElementById("cakeScene");
const flames = document.querySelectorAll(".flame");
const wishStatus = document.getElementById("wishStatus");

let candlesBlown = 0;

cakeBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    createMagicBurst(
        event.clientX,
        event.clientY
    );

    setTimeout(function() {

        showScene(cakeScene);

    }, 400);

});

function blowCandle(index) {

    if (flames[index].classList.contains("out")) {
        return;
    }

    flames[index].classList.add("out");

    candlesBlown++;

    wishStatus.textContent =
        candlesBlown + " / 3 candles blown 🕯";

    if (candlesBlown === 3) {

        wishStatus.textContent =
            "🎉 Wish complete! Happy Birthday Gunjan! 🎂✨";
document.getElementById("afterWishBtn").style.display = "inline-block";
        createPetalCelebration();

        for (let i = 0; i < 12; i++) {

            setTimeout(function() {

                createRandomSparkle();

            }, i * 120);

        }

    }

}

/* =========================================
   BACKGROUND MUSIC 🎵
========================================= */

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");

let musicPlaying = false;

backgroundMusic.volume = 0;


/* PLAY / PAUSE MUSIC */

musicToggle.addEventListener("click", function(event) {

    event.stopPropagation();

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicToggle.textContent = "🔇";
        musicToggle.classList.remove("playing");

    } else {

        backgroundMusic.play()
            .then(function() {

                musicPlaying = true;
               /* Smooth music fade-in 🎵 */
let fadeVolume = 0;

const fadeIn = setInterval(function() {

    fadeVolume += 0.02;

    if (fadeVolume >= 0.35) {
        fadeVolume = 0.35;
        clearInterval(fadeIn);
    }

    backgroundMusic.volume = fadeVolume;

}, 100);

                musicToggle.textContent = "🎵";
                musicToggle.classList.add("playing");

            })
            .catch(function(error) {

                console.log("Music couldn't start:", error);

            });

    }

});
const afterWishBtn = document.getElementById("afterWishBtn");

afterWishBtn.addEventListener("click", function () {
    showScene(document.getElementById("pandaKittyScene"));
});

const openNextSurprise = document.getElementById("openNextSurprise");

openNextSurprise.addEventListener("click", function () {
    showScene(document.getElementById("secretFileScene"));
});

const openSecretFile = document.getElementById("openSecretFile");

openSecretFile.addEventListener("click", function () {
    showScene(document.getElementById("videoNoteScene"));
});

const playMessageBtn = document.getElementById("playMessageBtn");
const birthdayVideoWrap = document.getElementById("birthdayVideoWrap");
const birthdayVideo = document.getElementById("birthdayVideo");

playMessageBtn.addEventListener("click", function () {

    birthdayVideoWrap.classList.add("show");
    playMessageBtn.style.display = "none";
if (musicPlaying) {
    backgroundMusic.pause();
}
    birthdayVideo.play();

});

birthdayVideo.addEventListener("ended", function () {

    if (musicPlaying) {
        backgroundMusic.play();
    }
document
    .getElementById("afterVideoMessage")
    .classList.add("show");
});

/* =========================================
   NUMBER PASSCODE ENTRANCE 🔐
========================================= */

const lockScreen = document.getElementById("lockScreen");
const passcodeDots = document.querySelectorAll("#passcodeDots span");
const numberButtons = document.querySelectorAll("[data-number]");
const deletePasscode = document.getElementById("deletePasscode");
const submitPasscode = document.getElementById("submitPasscode");
const passcodeError = document.getElementById("passcodeError");

const birthdayPasscode = "0530";

let enteredPasscode = "";

function updatePasscodeDots() {
    passcodeDots.forEach(function (dot, index) {
        dot.classList.toggle("filled", index < enteredPasscode.length);
    });
}

numberButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        if (enteredPasscode.length < 4) {
            enteredPasscode += button.dataset.number;
            updatePasscodeDots();
            passcodeError.textContent = "";
        }

    });
});

deletePasscode.addEventListener("click", function () {

    enteredPasscode = enteredPasscode.slice(0, -1);
    updatePasscodeDots();
    passcodeError.textContent = "";

});

submitPasscode.addEventListener("click", function () {

    if (enteredPasscode === birthdayPasscode) {

        passcodeError.textContent = "Access granted ✨";

        setTimeout(function () {
            lockScreen.style.display = "none";
        }, 700);

    } else {

        document
            .getElementById("passcodeDots")
            .classList.add("wrong");

        passcodeError.textContent =
            "That passcode doesn't seem to be right. Try again. 🤍";

        setTimeout(function () {

            document
                .getElementById("passcodeDots")
                .classList.remove("wrong");

            enteredPasscode = "";
            updatePasscodeDots();

        }, 650);

    }

});

/* =========================================
   OPEN WHEN LETTERS 💌
========================================= */

const afterVideoBtn = document.getElementById("afterVideoBtn");
const openWhenScene = document.getElementById("openWhenScene");

const openWhenLetters =
    document.querySelectorAll(".open-when-letter");

const openWhenMessage =
    document.getElementById("openWhenMessage");

const openWhenText =
    document.getElementById("openWhenText");

const closeOpenWhen =
    document.getElementById("closeOpenWhen");

const openWhenProgress =
    document.getElementById("openWhenProgress");

const openWhenContinue =
    document.getElementById("openWhenContinue");

let openedLetters = new Set();


/* VIDEO → OPEN WHEN */

afterVideoBtn.addEventListener("click", function () {

    createPetalCelebration();

    setTimeout(function () {
        showScene(openWhenScene);
    }, 450);

});


/* PERSONAL MESSAGES */

const openWhenMessages = {

    badDay:
        "Hey, bad days happen. Don't let one difficult day make you forget all the good ones waiting for you. Take your time, do something that makes you feel a little lighter, and remember that tomorrow gets another chance. 🤍🌷",

    overthinking:
        "Okay, brain... enough 😭. Not every thought needs an answer right now. Some things make more sense with time, so don't put pressure on yourself to figure everything out at once. Take it easy, Gunjan. 🌸",

    smile:
        "Emergency smile delivery 🚨🌸. Here's your reminder that somewhere, someone probably remembers one of your random conversations and smiles because of it. And yes... I'm definitely included in that list 😂🤍"

};


/* OPEN A LETTER */

openWhenLetters.forEach(function (letter) {

    letter.addEventListener("click", function () {

        const letterName = letter.dataset.letter;

        openWhenText.textContent =
            openWhenMessages[letterName];

        openWhenMessage.classList.add("show");

        openedLetters.add(letterName);
        letter.classList.add("opened");

        openWhenProgress.textContent =
            openedLetters.size + " / 3 letters opened";

        if (openedLetters.size === 3) {
            openWhenContinue.style.display = "inline-block";
        }

    });

});


/* CLOSE CURRENT MESSAGE */

closeOpenWhen.addEventListener("click", function () {

    openWhenMessage.classList.remove("show");

});

/* =========================================
   GUNJAN.EXE ANALYSIS 🤖
========================================= */

const analysisScene =
    document.getElementById("analysisScene");

const scanFill =
    document.getElementById("scanFill");

const scanPercent =
    document.getElementById("scanPercent");

const analysisResult =
    document.getElementById("analysisResult");

const claimRewardBtn =
    document.getElementById("claimRewardBtn");

const scanLines = [
    document.getElementById("scan1"),
    document.getElementById("scan2"),
    document.getElementById("scan3"),
    document.getElementById("scan4"),
    document.getElementById("scan5")
];


/* OPEN WHEN → ANALYSIS */

openWhenContinue.addEventListener("click", function () {

    showScene(analysisScene);

    startAnalysis();

});


function startAnalysis() {

    let progress = 0;

    scanFill.style.width = "0%";
    scanPercent.textContent = "0%";

    scanLines.forEach(function(line){

        line.classList.remove("show");

    });

    analysisResult.classList.remove("show");


    const interval = setInterval(function(){

        progress += 2;

        scanFill.style.width =
            progress + "%";

        scanPercent.textContent =
            progress + "%";

        if(progress === 20){
            scanLines[0].classList.add("show");
        }

        if(progress === 40){
            scanLines[1].classList.add("show");
        }

        if(progress === 60){
            scanLines[2].classList.add("show");
        }

        if(progress === 75){
            scanLines[3].classList.add("show");
        }

        if(progress === 90){
            scanLines[4].classList.add("show");
        }

        if(progress >= 100){

            clearInterval(interval);

            analysisResult.classList.add("show");

            createPetalCelebration();

        }

    },60);

}

/* =========================================
   🎁 GIFT SCENE
========================================= */

const giftScene = document.getElementById("giftScene");
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const giftContinue = document.getElementById("giftContinue");

claimRewardBtn.addEventListener("click", function () {

    showScene(giftScene);

});

giftBox.addEventListener("click", function () {

    giftBox.style.transform = "scale(1.2) rotate(12deg)";
    giftBox.textContent = "🎉";

    giftMessage.classList.remove("hidden");
    giftMessage.classList.add("show");

});

giftContinue.addEventListener("click", function () {

    alert("Next surprise coming soon... 🌸✨");

});
