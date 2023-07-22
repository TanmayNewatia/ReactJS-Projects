/*import logo from './logo.svg';
import './App.css';
import voice1 from "./audio/Heater-1.mp3";
import voice2 from "./audio/Heater-2.mp3";
import voice3 from "./audio/Heater-3.mp3";
import voice4 from "./audio/Heater-4_1.mp3";
import voice5 from "./audio/Heater-6.mp3";
import voice6 from "./audio/Cev_H2.mp3";
import voice7 from "./audio/Dsc_Oh.mp3";
import voice8 from "./audio/Kick_n_Hat.mp3";
import voice9 from "./audio/RP4_KICK_1.mp3";

function App() {
    const dic = { "Q": [voice1, "Heater-1"], "W": [voice2, "Heater-2"], "E": [voice3, "Heater-3"], "A": [voice4, "Heater-4"], "S": [voice5, "Clap"], "D": [voice6, "Closed-HH"], "Z": [voice7, "Open-HH"], "X": [voice8, "Kick n' Hat"], "C": [voice9, "Kick"] }
    const playAudio = (e) => {
        new Audio(dic[e.target.value][0]).play();
        document.getElementById("display").innerHTML = dic[e.target.value][1];
    };
    document.addEventListener("keydown", (event) => {
        if (event.code[3] in dic) {
            new Audio(dic[event.code[3]][0]).play();
            document.getElementById("display").innerHTML = dic[event.code[3]][1];
        }
    });
    return (
        <div id="drum-machine">
            <button onClick={playAudio} value="Q" className="drum-pad"><audio src="./audio/Heater-1.mp3" id="Q" />Q</button>
            <button onClick={playAudio} value="W" className="drum-pad"><audio src="./audio/Heater-2.mp3" id="W" />W</button>
            <button onClick={playAudio} value="E" className="drum-pad"><audio src="./audio/Heater-3.mp3" id="E" />E</button>
            <button onClick={playAudio} value="A" className="drum-pad"><audio src="./audio/Heater-4_1.mp3" id="A" />A</button>
            <button onClick={playAudio} value="S" className="drum-pad"><audio src="./audio/Heater-6.mp3" id="S" />S</button>
            <button onClick={playAudio} value="D" className="drum-pad"><audio src="./audio/Kick_n_Hat.mp3" id="D" />D</button>
            <button onClick={playAudio} value="Z" className="drum-pad"><audio src="./audio/Dsc_Oh.mp3" id="Z" />Z</button>
            <button onClick={playAudio} value="X" className="drum-pad"><audio src="./audio/Cev_H2.mp3" id="X" />X</button>
            <button onClick={playAudio} value="C" className="drum-pad"><audio src="./audio/RP4_KICK_1.mp3" id="C" />C</button>
            <div id="display">

            </div>
        </div>
    );
}

export default App;*/