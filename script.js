// Taymer funksiyasi (20 daqiqa)
let totalTime = 20 * 60; // soniyalarda
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    timerElement.innerText = `${minutes}:${seconds}`;

    if (totalTime <= 0) {
        clearInterval(countdown);
        alert("Vaqt tugadi! Natijangiz hisoblanmoqda.");
        submitTest();
    }
    totalTime--;
}, 1000);

// Natijani tekshirish funksiyasi
function submitTest() {
    const correctAnswers = {
        q1: "B",
        q2: "C"
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let q in correctAnswers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        const qCard = document.getElementById(`${q}-card`);

        if (selected && selected.value === correctAnswers[q]) {
            score++;
            qCard.style.border = "2px solid #22c55e"; // To'g'ri bo'lsa yashil
        } else {
            qCard.style.border = "2px solid #ef4444"; // Noto'g'ri bo'lsa qizil
        }
    }

    const resultBox = document.getElementById("result");
    resultBox.style.display = "block";
    resultBox.innerHTML = `🎯 Sizing natijangiz: ${score} / ${totalQuestions}<br>To'g'rilik ko'rsatkichingiz: ${(score / totalQuestions) * 100}%`;
}