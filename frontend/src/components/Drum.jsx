import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/drum.css';
import voice1 from "../assets/audio/Heater-1.mp3";
import voice2 from "../assets/audio/Heater-2.mp3";
import voice3 from "../assets/audio/Heater-3.mp3";
import voice4 from "../assets/audio/Heater-4_1.mp3";
import voice5 from "../assets/audio/Heater-6.mp3";
import voice6 from "../assets/audio/Cev_H2.mp3";
import voice7 from "../assets/audio/Dsc_Oh.mp3";
import voice8 from "../assets/audio/Kick_n_Hat.mp3";
import voice9 from "../assets/audio/RP4_KICK_1.mp3";

export default function DrumApp() {
    const dic = { "Q": "Heater-1", "W": "Heater-2", "E": "Heater-3", "A": "Heater-4", "S": "Clap", "D": "Closed-HH", "Z": "Open-HH", "X": "Kick n' Hat", "C": "Kick" }
    const playAudio = (e) => {
        const p = document.getElementById(e.target.id);
        (p.children[0]).play();
        document.getElementById("display").innerHTML = dic[e.target.id];
    };

    document.addEventListener("keydown", (event) => {
        if (event.code[3] in dic) {
            const p = document.getElementById(event.code[3][0]);
            (p.children[0]).play();
            document.getElementById("display").innerHTML = dic[event.code[3]];
        }
    });
    return (
        <div className="App">
            <div id="drum-machine">
                <div id="drumdisplay">
                </div>
                <button onClick={playAudio} id="Q" className="drum-pad"><audio className="clip" src={voice1} id="Q" />Q</button>
                <button onClick={playAudio} id="W" className="drum-pad"><audio className="clip" src={voice2} id="W" />W</button>
                <button onClick={playAudio} id="E" className="drum-pad"><audio className="clip" src={voice3} id="E" />E</button>
                <button onClick={playAudio} id="A" className="drum-pad"><audio className="clip" src={voice4} id="A" />A</button>
                <button onClick={playAudio} id="S" className="drum-pad"><audio className="clip" src={voice5} id="S" />S</button>
                <button onClick={playAudio} id="D" className="drum-pad"><audio className="clip" src={voice6} id="D" />D</button>
                <button onClick={playAudio} id="Z" className="drum-pad"><audio className="clip" src={voice7} id="Z" />Z</button>
                <button onClick={playAudio} id="X" className="drum-pad"><audio className="clip" src={voice8} id="X" />X</button>
                <button onClick={playAudio} id="C" className="drum-pad"><audio className="clip" src={voice9} id="C" />C</button>
                <p className="drumcredits">Designed and Made by: Tanmay Newatia</p>
            </div>
        </div>
    );
}