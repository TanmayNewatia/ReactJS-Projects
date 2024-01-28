import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/clock.css';
import beep from "../assets/beep.wav";

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            break: 5,
            session: 25,
            second: 1500,
            result: "25:00",
            start: 0,
            sessionrunning: 1,
            breakrunning: 0,
            buzzplay: 0
        }
        this.reset = this.reset.bind(this);
        this.breakchange = this.breakchange.bind(this);
        this.sessionchange = this.sessionchange.bind(this);
        this.handless = this.handless.bind(this);
    }
    breakchange(val) {
        if (this.state.start) { }
        else {
            if ((this.state.break < 0 || this.state.break > 60)) {
                this.reset();
                return;
            }
            if ((this.state.break < 60 && val !== 1 && this.state.break > 1) || (this.state.break > 1 && val !== -1 && this.state.break < 60)) {
                this.setState((state) => ({
                    break: state.break + val,
                }));
            }
            else if (this.state.break === 60 && val !== 1) {
                this.setState((state) => ({
                    break: state.break + val,
                }));
            }
            else if (this.state.break === 1 && val !== -1) {
                this.setState((state) => ({
                    break: state.break + val,
                }));
            }
        }
    }
    sessionchange(val) {
        if (this.state.start) { }
        else {
            if ((this.state.session < 0 || this.state.session > 60)) {
                this.reset();
                return;
            }
            if ((this.state.session < 60 && val !== 1 && this.state.session > 1) || (this.state.session > 1 && val !== -1 && this.state.session < 60)) {
                this.setState((state) => ({
                    session: state.session + val,
                }));
            }
            if (this.state.session <= 10 && val === -1) {
                this.setState((state) => ({
                    result: "0" + (state.session).toString() + ":00",
                    second: state.session * 60,
                }));
            }
            else if (this.state.session < 9 && val === 1) {
                this.setState((state) => ({
                    result: "0" + (state.session).toString() + ":00",
                    second: state.session * 60,
                }));
            }
            else {
                this.setState((state) => ({
                    result: (state.session).toString() + ":00",
                    second: state.session * 60,
                }));
            }
            if (this.state.session === 60 && val !== 1) {
                this.setState((state) => ({
                    session: state.session + val,
                }));
                this.setState((state) => ({
                    result: (state.session).toString() + ":00",
                    second: state.session * 60,
                }));
            }
            else if (this.state.session === 1 && val !== -1) {
                this.setState((state) => ({
                    session: state.session + val,
                }));
                this.setState((state) => ({
                    result: "0" + (state.session).toString() + ":00",
                    second: state.session * 60,
                }));
            }
        }
    }

    handless = () => {
        if (this.state.start) {
            clearInterval(this.state.start);
            this.setState((state) => {
                return {
                    ...state,
                    start: 0
                };
            });
            return;
        }
        else if (this.state.start === 0) {
            const newIntervalId = setInterval(() => {
                if (this.state.session < 0 || this.state.break < 0 || this.state.session > 60 || this.state.break > 60) {
                    this.reset();
                }
                let s = this.state.second - 1;
                let m = Math.floor(s / 60);
                let sec = s - m * 60;
                let res = "";
                if (m === 0 && s === 0) {
                    let bepp = document.getElementById("beep");
                    bepp.play();
                }
                if (m === -1 && s === -5) {
                    if (this.state.sessionrunning) {
                        s = this.state.break * 60;
                        m = Math.floor(s / 60);
                        sec = s - m * 60;
                        res = "";
                        this.setState((state) => ({
                            second: s,
                            breakrunning: 1,
                            sessionrunning: 0,
                            buzzplay: 1
                        }));
                    }
                    else {
                        s = this.state.session * 60;
                        m = Math.floor(s / 60);
                        sec = s - m * 60;
                        res = "";
                        this.setState((state) => ({
                            second: s,
                            breakrunning: 0,
                            sessionrunning: 1,
                            buzzplay: 1
                        }));
                    }
                }
                if (sec < 10 && m < 10 && m >= 0 && sec >= 0) {
                    res = "0" + m.toString() + ":0" + sec;
                }
                else {
                    if (sec < 10 && m >= 10 && sec >= 0) {
                        res = m.toString() + ":0" + sec;
                    }
                    else if (m < 10 && sec >= 10 && m >= 0) {
                        res = "0" + m.toString() + ":" + sec;
                    }
                    else if (m < 0 || sec < 0) {
                        res = "00:00";
                    }
                    else {
                        res = m.toString() + ":" + sec;
                    }
                }
                this.setState((state) => {
                    return {
                        ...state,
                        second: s,
                        result: res,
                    };
                });
            }, 1000);
            this.setState((state) => {
                return {
                    ...state,
                    start: newIntervalId
                };
            });
        }
    }

    reset() {
        clearInterval(this.state.start);
        if (this.state.buzzplay == 1) {
            let bepp = document.getElementById("beep");
            bepp.pause();
            bepp.currentTime = 0;
        }
        this.setState((state) => ({
            session: 25,
            break: 5,
            result: "25:00",
            second: 1500,
            sessionrunning: 1,
            breakrunning: 0,
            start: 0
        }));
    }
    render() {
        document.body.style.backgroundColor = "#1E555C";
        return (
            <div className="ClockApp absolute top-2/4 left-2/4 text-white" >
                <div className="border-4 border-white p-3 rounded-2xl">
                    <h1 className="text-5xl text-center">25 + 5 Clock</h1>
                    <div className="flex justify-between text-3xl my-4">
                        <div className="flex flex-col align-cneter justify-center">
                            <h3 id="break-label" className="text-center">
                                Break Length
                            </h3>
                            <div className="flex justify-center text-2xl my-2">
                                <button id="break-decrement" onClick={() => { this.breakchange(-1) }}>Dec</button>
                                <p className="mx-4" id="break-length">{this.state.break}</p>
                                <button id="break-increment" onClick={() => { this.breakchange(1) }}>Inc</button>
                            </div>
                        </div>
                        <div className="flex flex-col align-cneter justify-center">
                            <h3 id="session-label" className="text-center">
                                Session Length
                            </h3>
                            <div className="flex justify-center text-2xl my-2">
                                <button id="session-decrement" onClick={() => { this.sessionchange(-1) }}>Dec</button>
                                <p className="mx-4" id="session-length">{this.state.session}</p>
                                <button id="session-increment" onClick={() => { this.sessionchange(1) }}>Inc</button>
                            </div>
                        </div>
                    </div>
                    <div className="timer border-4 w-6/12 mx-auto rounded-lg">
                        <h2 className="text-3xl text-center" id="timer-label">{(this.state.sessionrunning) ? "Session" : "Break"}</h2>
                        <h2 className="text-4xl text-center" id="time-left">{this.state.result}</h2>
                        <audio id="beep" src={beep}></audio>
                    </div>
                    <div className="flex justify-center my-4 text-xl">
                        <button id="start_stop" className="mx-4" onClick={() => { this.handless() }}>Start_Stop</button>
                        <button id="reset" className="mx-4" onClick={this.reset}>Reset</button>
                    </div>
                </div>
                <p className="clockcredits text-center">Designed and Made by: Tanmay Newatia</p>
            </div >
        )
    }
}