/* =========================================
   GUNJAN'S BIRTHDAY WORLD 🎀
   Full Clean Version
========================================= */

const introScene = document.getElementById("introScene");
const letterScene = document.getElementById("letterScene");
const welcomeLetterScene = document.getElementById("welcomeLetterScene");
const birthdayScene = document.getElementById("birthdayScene");
const memoryOne = document.getElementById("memoryOne");
const memoryTwo = document.getElementById("memoryTwo");
const memoryThree = document.getElementById("memoryThree");
const memoryFour = document.getElementById("memoryFour");
const cakeBreakScene = document.getElementById("cakeBreakScene");
const cakeScene = document.getElementById("cakeScene");
const pandaKittyScene = document.getElementById("pandaKittyScene");
const secretFileScene = document.getElementById("secretFileScene");
const videoNoteScene = document.getElementById("videoNoteScene");
const openWhenScene = document.getElementById("openWhenScene");
const analysisScene = document.getElementById("analysisScene");
const giftScene = document.getElementById("giftScene");
const endingScene = document.getElementById("endingScene");

const continueBtn = document.getElementById("continueBtn");
const openLetterBtn = document.getElementById("openLetterBtn");
const enterBtn = document.getElementById("enterBtn");
const journeyBtn = document.getElementById("journeyBtn");
const memoryOneBtn = document.getElementById("memoryOneBtn");
const memoryTwoBtn = document.getElementById("memoryTwoBtn");
const memoryThreeBtn = document.getElementById("memoryThreeBtn");
const memoryFourBtn = document.getElementById("memoryFourBtn");
const cakeBtn = document.getElementById("cakeBtn");
const afterWishBtn = document.getElementById("afterWishBtn");
const openNextSurprise = document.getElementById("openNextSurprise");
const openSecretFile = document.getElementById("openSecretFile");
const playMessageBtn = document.getElementById("playMessageBtn");
const afterVideoBtn = document.getElementById("afterVideoBtn");
const openWhenContinue = document.getElementById("openWhenContinue");
const claimRewardBtn = document.getElementById("claimRewardBtn");
const giftContinue = document.getElementById("giftContinue");

const envelope = document.getElementById("envelope");
const catPeek = document.getElementById("catPeek");
const memoryCat = document.getElementById("memoryCat");
const sparkleLayer = document.getElementById("sparkleLayer");
const birthdayVideoWrap = document.getElementById("birthdayVideoWrap");
const birthdayVideo = document.getElementById("birthdayVideo");
const afterVideoMessage = document.getElementById("afterVideoMessage");

/* =========================================
   CHANGE SCENE
========================================= */
function showScene(scene) {
    const scenes = document.querySelectorAll(".scene");
    scenes.forEach(function (currentScene) {
        currentScene.classList.remove("active");
    });
    scene.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================
   SPARKLES & EFFECTS
========================================= */
function createTapSparkle(x, y) {
    const symbols = ["✨", "✦", "♡", "🌸"];
    const sparkle = document.createElement("span");
    sparkle.className = "tap-sparkle";
    sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    sparkleLayer.appendChild(sparkle);
    setTimeout(function () {
        sparkle.remove();
    }, 850);
}

function createMagicBurst(x, y) {
    const symbols = ["✨", "✦", "🌸", "♡", "🎀"];
    for (let i = 0; i < 9; i++) {
        const sparkle = document.createElement("span");
        sparkle.className = "tap-sparkle";
        sparkle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        const randomX = x + (Math.random() * 130 - 65);
        const randomY = y + (Math.random() * 80 - 40);
        sparkle.style.left = randomX + "px";
        sparkle.style.top = randomY + "px";
        sparkle.style.fontSize = (15 + Math.random() * 12) + "px";
        sparkleLayer.appendChild(sparkle);
        setTimeout(function () {
            sparkle.remove();
        }, 850);
    }
}

function createRandomSparkle() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createTapSparkle(x, y);
}

function createPetalCelebration() {
    const petals = ["🌸", "🌷", "✨", "♡"];
    for (let i = 0; i < 22; i++) {
        const petal = document.createElement("span");
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.position = "fixed";
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.top = "-40px";
        petal.style.zIndex = "998";
        petal.style.pointerEvents = "none";
        petal.style.fontSize = (16 + Math.random() * 18) + "px";
        document.body.appendChild(petal);

        const horizontalMove = Math.random() * 150 - 75;
        const animation = petal.animate(
            [
                { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
                { transform: "translate(" + horizontalMove + "px,110vh) rotate(420deg)", opacity: 0.2 }
            ],
            {
                duration: 2600 + Math.random() * 1800,
                easing: "linear"
            }
        );
        animation.onfinish = function () {
            petal.remove();
        };
    }
}

/* Tap anywhere sparkles */
document.addEventListener("click", function (event) {
    if (event.target.closest("button") || event.target.closest(".gift-box") || event.target.closest(".candle")) {
        return;
    }
    createTapSparkle(event.clientX, event.clientY);
});

/* Occasional background sparkle */
setInterval(function () {
    if (Math.random() > 0.55) {
        createRandomSparkle();
    }
}, 3500);

/* =========================================
   INTRO → LETTER
========================================= */
continueBtn.addEventListener("click", function (event) {
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(letterScene);
    }, 450);
});

/* Cat reaction */
if (catPeek) {
    catPeek.addEventListener("click", function (event) {
        event.stopPropagation();
        const message = catPeek.querySelector(".cat-message");
        message.textContent = "Okay okay... keep going 😭🎀";
        catPeek.style.transform = "scale(1.08) rotate(2deg)";
        createMagicBurst(event.clientX, event.clientY);
        setTimeout(function () {
            catPeek.style.transform = "";
        }, 400);
    });
}

/* =========================================
   OPEN ENVELOPE
========================================= */
let envelopeOpened = false;

openLetterBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    if (envelopeOpened) return;
    envelopeOpened = true;
    envelope.classList.add("open");
    openLetterBtn.textContent = "Opening your letter... 🌸";
    createMagicBurst(window.innerWidth / 2, window.innerHeight / 2);
    setTimeout(function () {
        showScene(welcomeLetterScene);
    }, 1800);
});

/* =========================================
   ENTER BIRTHDAY WORLD
========================================= */
enterBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createPetalCelebration();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(birthdayScene);
        birthdayCelebration();
    }, 850);
});

function birthdayCelebration() {
    const title = document.querySelector(".birthday-title");
    if (title) {
        title.animate(
            [
                { transform: "scale(.75)", opacity: 0 },
                { transform: "scale(1.08)", opacity: 1 },
                { transform: "scale(1)", opacity: 1 }
            ],
            { duration: 1100, easing: "cubic-bezier(.2,.8,.3,1.2)" }
        );
    }
    for (let i = 0; i < 16; i++) {
        setTimeout(function () {
            createRandomSparkle();
        }, i * 90);
    }
}

/* =========================================
   JOURNEY → MEMORIES
========================================= */
journeyBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(memoryOne);
    }, 450);
});

memoryOneBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(memoryTwo);
    }, 450);
});

memoryTwoBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(memoryThree);
    }, 450);
});

if (memoryCat) {
    memoryCat.addEventListener("click", function (event) {
        event.stopPropagation();
        const catText = memoryCat.querySelector(".memory-cat-text");
        catText.textContent = "SEE? I told you 😭🌸";
        createMagicBurst(event.clientX, event.clientY);
        memoryCat.animate(
            [
                { transform: "rotate(-2deg) scale(1)" },
                { transform: "rotate(4deg) scale(1.12)" },
                { transform: "rotate(-2deg) scale(1)" }
            ],
            { duration: 500, easing: "ease" }
        );
    });
}

memoryThreeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createPetalCelebration();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(memoryFour);
    }, 700);
});

memoryFourBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(cakeBreakScene);
    }, 500);
});

/* =========================================
   CAKE
========================================= */
const flames = document.querySelectorAll(".flame");
const wishStatus = document.getElementById("wishStatus");
let candlesBlown = 0;

cakeBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    createMagicBurst(event.clientX, event.clientY);
    setTimeout(function () {
        showScene(cakeScene);
    }, 400);
});

function blowCandle(index) {
    if (flames[index].classList.contains("out")) return;
    flames[index].classList.add("out");
    candlesBlown++;
    wishStatus.textContent = candlesBlown + " / 3 candles blown 🕯";

    if (candlesBlown === 3) {
        wishStatus.textContent = "🎉 Wish complete! Happy Birthday Gunjan! 🎂✨";
        afterWishBtn.style.display = "inline-block";
        createPetalCelebration();
        for (let i = 0; i < 12; i++) {
            setTimeout(function () {
                createRandomSparkle();
            }, i * 120);
        }
    }
}

afterWishBtn.addEventListener("click", function () {
    showScene(pandaKittyScene);
});

openNextSurprise.addEventListener("click", function () {
    showScene(secretFileScene);
});

openSecretFile.addEventListener("click", function () {
    showScene(videoNoteScene);
});

/* =========================================
   VIDEO MESSAGE
========================================= */
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
    afterVideoMessage.classList.add("show");
});

afterVideoBtn.addEventListener("click", function () {
    createPetalCelebration();
    setTimeout(function () {
        showScene(openWhenScene);
    }, 450);
});

/* =========================================
   OPEN WHEN LETTERS
========================================= */
const openWhenLetters = document.querySelectorAll(".open-when-letter");
const openWhenMessage = document.getElementById("openWhenMessage");
const openWhenText = document.getElementById("openWhenText");
const closeOpenWhen = document.getElementById("closeOpenWhen");
const openWhenProgress = document.getElementById("openWhenProgress");
let openedLetters = new Set();

const openWhenMessages = {
    badDay: "Hey, bad days happen. Don't let one difficult day make you forget all the good ones waiting for you. Take your time, do something that makes you feel a little lighter, and remember that tomorrow gets another chance. 🤍🌷",
    overthinking: "Okay, brain... enough 😭. Not every thought needs an answer right now. Some things make more sense with time, so don't put pressure on yourself to figure everything out at once. Take it easy, Gunjan. 🌸",
    smile: "Emergency smile delivery 🚨🌸. Here's your reminder that somewhere, someone probably remembers one of your random conversations and smiles because of it. And yes... I'm definitely included in that list 😂🤍"
};

openWhenLetters.forEach(function (letter) {
    letter.addEventListener("click", function () {
        const letterName = letter.dataset.letter;
        openWhenText.textContent = openWhenMessages[letterName];
        openWhenMessage.classList.add("show");
        openedLetters.add(letterName);
        letter.classList.add("opened");
        openWhenProgress.textContent = openedLetters.size + " / 3 letters opened";
        if (openedLetters.size === 3) {
            openWhenContinue.style.display = "inline-block";
        }
    });
});

closeOpenWhen.addEventListener("click", function () {
    openWhenMessage.classList.remove("show");
});

openWhenContinue.addEventListener("click", function () {
    showScene(analysisScene);
    startAnalysis();
});

/* =========================================
   GUNJAN.EXE ANALYSIS
========================================= */
const scanFill = document.getElementById("scanFill");
const scanPercent = document.getElementById("scanPercent");
const analysisResult = document.getElementById("analysisResult");
const scanLines = [
    document.getElementById("scan1"),
    document.getElementById("scan2"),
    document.getElementById("scan3"),
    document.getElementById("scan4"),
    document.getElementById("scan5")
];

function startAnalysis() {
    let progress = 0;
    scanFill.style.width = "0%";
    scanPercent.textContent = "0%";
    scanLines.forEach(function (line) {
        line.classList.remove("show");
    });
    analysisResult.classList.remove("show");
    analysisResult.classList.add("hidden");

    const interval = setInterval(function () {
        progress += 2;
        scanFill.style.width = progress + "%";
        scanPercent.textContent = progress + "%";

        if (progress === 20) scanLines[0].classList.add("show");
        if (progress === 40) scanLines[1].classList.add("show");
        if (progress === 60) scanLines[2].classList.add("show");
        if (progress === 75) scanLines[3].classList.add("show");
        if (progress === 90) scanLines[4].classList.add("show");

        if (progress >= 100) {
            clearInterval(interval);
            analysisResult.classList.remove("hidden");
            analysisResult.classList.add("show");
            createPetalCelebration();
        }
    }, 60);
}

claimRewardBtn.addEventListener("click", function () {
    showScene(giftScene);
});

/* =========================================
   LITTLE GIFT SCENE
========================================= */
const giftBox = document.getElementById("giftBox");
const giftReveal = document.getElementById("giftReveal");
const giftInstruction = document.getElementById("giftInstruction");
const kittyImage = document.getElementById("kittyImage");

if (giftBox) {
    giftBox.addEventListener("click", function () {
        if (giftBox.classList.contains("open")) return;

        giftBox.classList.add("open");
        giftInstruction.style.display = "none";

        createMagicBurst(window.innerWidth / 2, window.innerHeight / 2);
        createPetalCelebration();

        setTimeout(function () {
            giftReveal.classList.add("show");
        }, 900);
    });
}

/* Kitty click hearts */
if (kittyImage) {
    kittyImage.addEventListener("click", function (e) {
        kittyImage.style.transform = "scale(1.12) rotate(-4deg)";
        setTimeout(function () {
            kittyImage.style.transform = "";
        }, 250);

        for (let i = 0; i < 6; i++) {
            const heart = document.createElement("div");
            heart.className = "floating-heart";
            heart.innerHTML = "❤️";
            heart.style.left = (e.clientX + (Math.random() * 60 - 30)) + "px";
            heart.style.top = (e.clientY + (Math.random() * 20 - 10)) + "px";
            document.body.appendChild(heart);
            setTimeout(function () {
                heart.remove();
            }, 1500);
        }
    });
}

giftContinue.addEventListener("click", function () {
    createPetalCelebration();
    setTimeout(function () {
        showScene(endingScene);
    }, 600);
});

/* =========================================
   PASSCODE
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
        document.getElementById("passcodeDots").classList.add("wrong");
        passcodeError.textContent = "That passcode doesn't seem to be right. Try again. 🤍";
        setTimeout(function () {
            document.getElementById("passcodeDots").classList.remove("wrong");
            enteredPasscode = "";
            updatePasscodeDots();
        }, 650);
    }
});

/* =========================================
   BACKGROUND MUSIC
========================================= */
const backgroundMusic = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
let musicPlaying = false;
backgroundMusic.volume = 0;

musicToggle.addEventListener("click", function (event) {
    event.stopPropagation();

    if (musicPlaying) {
        backgroundMusic.pause();
        musicPlaying = false;
        musicToggle.textContent = "🔇";
        musicToggle.classList.remove("playing");
    } else {
        backgroundMusic.play()
            .then(function () {
                musicPlaying = true;
                let fadeVolume = 0;
                const fadeIn = setInterval(function () {
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
            .catch(function (error) {
                console.log("Music couldn't start:", error);
            });
    }
});
