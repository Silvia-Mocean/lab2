var recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';
recognition.continuous = true; // pentru a putea continua recunoașterea după ce un cuvânt a fost detectat
recognition.interimResults = false; // pentru a primi doar rezultatele finale

var recognition_started = false;

document.getElementById("startBtn").addEventListener("click", startRecognition);
document.getElementById("stopBtn").addEventListener("click", stopRecognition);

function startRecognition() {
    if (!recognition_started) {
        recognition.start();
        recognition_started = true;
        document.getElementById("text").innerHTML += "Microfonul este pornit...<br>";
    }
}

function stopRecognition() {
    if (recognition_started) {
        recognition.stop();
        recognition_started = false;
        document.getElementById("text").innerHTML += "Microfonul a fost oprit.<br>";
    }
}

recognition.onend = function() {
    recognition_started = false;
};

recognition.onresult = function(event) {
    for (var i = event.resultIndex; i < event.results.length; i++) {
        document.getElementById("text").innerHTML += "Ai rostit cuvântul: " +
            event.results[i][0].transcript + ", acuratețe: " + event.results[i][0].confidence + "<br>";
    }
};
