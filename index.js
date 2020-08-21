//voiceDetector1
const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const btnPlayText = document.getElementById('btnPlayText');
const output = document.getElementById('output');
//voiceDetector2
// const SpeechRecognition2 = SpeechRecognition || webkitSpeechRecognition;
// const recognition2 = new SpeechRecognition();

//1
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-ES';
recognition.continuous = true;
recognition.interimResults = false;

recognition.onresult = (event) => {
	const results = event.results;
	const sentence = results [results.length -1][0].transcript;
	output.value += sentence;
}

recognition.onend = (event) => {
	console.log('the microphone is off');
}
recognition.onerror = (event) => {
	console.log(event.error);
}

btnStartRecord.addEventListener('click', () => {
recognition.start();
});

btnStopRecord.addEventListener('click', () => {
	recognition.abort();
});
btnPlayText.addEventListener('click', () => {
	console.log(output.value)
	readText(output.value);
})
//CLEAR TEXTAREA
let input = document.querySelector('#clear');
let textarea = document.querySelector('#output');

input.addEventListener('click', function () {
	textarea.value = '';
}, false);

//READ TEXT
function readText(output) {
	const speech = new SpeechSynthesisUtterance();
	speech.text = output;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech);
}

//2
// This runs when the speech recognition service starts
// recognition.onstart = function () {
// 	console.log("We are listening. Try speaking into the microphone.");
// };

// recognition.onspeechend = function () {
	// when user is done speaking
// 	recognition.stop();
// }

// This runs when the speech recognition service returns result
// recognition.onresult = function (event) {
// 	let transcript = event.results[0][0].transcript;
	// var confidence = event.results[0][0].confidence;
// };

// start recognition
// recognition.start();