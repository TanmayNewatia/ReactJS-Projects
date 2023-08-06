import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exp: "",
            result: "0",
            ans: ""
        }
        this.operator();
        this.number();
        this.clear();
        this.result();
        this.point();
        this.operator = this.operator.bind(this);
        this.number = this.number.bind(this);
        this.result = this.result.bind(this);
        this.point = this.point.bind(this);
        this.clear = this.clear.bind(this);
    }
    operator(op) {
        let prevexp = this.state.exp;
        if (this.state.ans !== "") {
            this.setState((state) => ({
                exp: state.ans + op,
                result: op,
                ans: ""
            }));
        }
        else if ((prevexp[prevexp.length - 1] === "+" && op !== "-") || (prevexp[prevexp.length - 1] === "*" && op !== "-") || (prevexp[prevexp.length - 1] === "/" && op !== "-") || (prevexp[prevexp.length - 1] === "-" && op !== "-")) {
            let ind = prevexp.length - 1;
            while (prevexp[ind] === "+" || prevexp[ind] === "/" || prevexp[ind] === "*" || prevexp[ind] === "-") {
                ind--;
            }
            prevexp = prevexp.slice(0, ind + 1);
            this.setState((state) => ({
                exp: prevexp + op,
                result: prevexp + op
            }));
        }
        else if ((prevexp[prevexp.length - 1] !== op) || (prevexp[prevexp.length - 1] !== "-" && op === "-")) {
            this.setState((state) => ({
                exp: state.exp + op,
                result: state.exp + op
            }));
        }
    }
    number(num) {
        let prevexp = this.state.exp;
        if ((prevexp !== "0" && this.state.ans === "") || (num !== "0" && this.state.ans === "")) {
            this.setState((state) => ({
                exp: state.exp + num,
                result: state.exp + num,
                ans: ""
            }));
        }
        else {
            this.setState((state) => ({
                exp: num,
                result: num,
                ans: ""
            }));
        }
    }
    result() {
        try {
            let res = eval(this.state.exp);
            if (res !== undefined) {
                this.setState((state) => ({
                    result: res,
                    exp: state.exp + "=" + res,
                    ans: res
                }));
            }
            else {
                this.setState((state) => ({
                    res: "NAN",
                    exp: "=" + "NAN",
                    ans: ""
                }))
            }
        }
        catch (e) {
            this.setState((state) => ({
                res: "NAN",
                exp: "=" + "NAN",
                ans: ""
            }))
        }
    }
    point() {
        let prevexp = this.state.exp;
        let ind = prevexp.length - 1;
        while (prevexp[ind] !== "." && ind >= 0) {
            if (prevexp[ind] === "+" || prevexp[ind] === "/" || prevexp[ind] === "*" || prevexp[ind] === "-") {
                ind = -1;
                break;
            }
            ind--;
        }
        if (ind + 1 === 0) {
            if (prevexp[prevexp.length - 1] !== "." && this.state.ans === "" && prevexp !== "") {
                this.setState((state) => ({
                    exp: state.exp + ".",
                    result: state.exp + "."
                }));
            }
            else if (prevexp === "") {
                this.setState((state) => ({
                    exp: "0.",
                    result: "0."
                }));
            }
        }
        else if (this.state.ans !== "") {
            this.setState((state) => ({
                exp: "0.",
                result: "0."
            }));
        }
    }
    clear() {
        this.setState(() => ({
            exp: "",
            result: "0"
        }));
    }
    render() {
        return (
            <div className="Calculator">
                <div className="display">
                    <div className="formula">{this.state.exp}</div>
                    <div id="display">{this.state.result}</div>
                </div>
                <div className="btns">
                    <button onClick={this.clear} id="clear">AC</button>
                    <button onClick={() => { this.operator("/") }} id="divide">/</button>
                    <button onClick={() => { this.operator("*") }} id="multiply">x</button>
                    <button onClick={() => { this.number("7") }} id="seven">7</button>
                    <button onClick={() => { this.number("8") }} id="eight">8</button>
                    <button onClick={() => { this.number("9") }} id="nine">9</button>
                    <button onClick={() => { this.operator("-") }} id="subtract">-</button>
                    <button onClick={() => { this.number("4") }} id="four">4</button>
                    <button onClick={() => { this.number("5") }} id="five">5</button>
                    <button onClick={() => { this.number("6") }} id="six">6</button>
                    <button onClick={() => { this.operator("+") }} id="add">+</button>
                    <button onClick={() => { this.number("1") }} id="one">1</button>
                    <button onClick={() => { this.number("2") }} id="two">2</button>
                    <button onClick={() => { this.number("3") }} id="three">3</button>
                    <button onClick={this.result} id="equals">=</button>
                    <button onClick={() => { this.number("0") }} id="zero">0</button>
                    <button onClick={() => { this.point() }} id="decimal">.</button>
                </div>
                <p className="credits">Designed and Made by: Tanmay Newatia</p>
            </div >
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);