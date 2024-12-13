var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición
var lyricsData = [
  { text: "¿Es verdad?", start: 20, end: 21 },
  { text: "Te has estado sintiendo un poco triste", start: 24, end: 28 },
  { text: "Simplemente no tienes un lugar a donde ir", start: 29, end: 33 },
  { text: "Debe estar hundiéndote", start: 34, end: 37 },
  { text: "Si es así", start: 40, end: 42 },
  { text: "Entonces, vamos, dale una oportunidad a este chico", start: 44, end: 48 },
  { text: "Pondré el brillo devuelta en tus ojos", start: 49, end: 53 },
  { text: "¿Qué podrías perder?", start: 55, end: 58 },
  { text: "Bueno, su corazón pertenece a otro", start: 61, end: 70 },
  { text: "Y ningún otro corazón querrá", start: 71, end: 77 },
  { text: "¿Está mal? Pensar que mi amor podría ayudarte", start: 81, end: 88 },
  { text: "Es simplemente mi corazón obstinado, sin duda, divagando", start: 90, end: 98 },
  { text: "Si no lo es", start: 101, end: 103 },
  { text: "Entonces, vamos, dale una oportunidad a este chico", start: 105, end: 109 },
  { text: "Pondré el brillo devuelta en tus ojos", start: 110, end: 114 },
  { text: "¿Qué podrías perder?", start: 116, end: 119 },
  { text: "Bueno, su corazón pertenece a otro", start: 122, end: 131 },
  { text: "Y ningún otro corazón querrá", start: 132, end: 138 },
  { text: "Por un lado, su corazón pertenece a otro", start: 142, end: 151 },
  { text: "Y ningún otro corazón querrá", start: 152, end: 159 },
];

// Actualiza las letras en función del tiempo
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.start && time <= line.end
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);
