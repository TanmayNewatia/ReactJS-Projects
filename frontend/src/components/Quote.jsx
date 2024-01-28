import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/quote.css';
import { FaQuoteLeft, FaTwitter } from 'react-icons/fa'

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const selectcol = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

const getquotes = async () => {
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url, { method: "GET" });
  const json = await response.json();
  return JSON.stringify(json);
}

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      text: "",
      author: "",
    };
    this.retrievequote();
    this.retrievequote = this.retrievequote.bind(this);
  }
  retrievequote = async () => {
    var all = await getquotes();
    all = JSON.parse(all);
    const quote = all[Math.floor(Math.random() * all.length)];
    console.log(quote.text);
    this.setState({
      color: selectcol(),
      text: quote.text,
      author: quote.author,
    });
    console.log(this.state);
  };
  render() {
    document.body.style.backgroundColor = this.state.color;
    return (
      <div className="madeby">
        <div id="quote-box">
          <p id="text" style={{ fontSize: 30, color: this.state.color }}>
            <FaQuoteLeft id="icon" />
            {this.state.text}
          </p>
          <p id="author" style={{ color: this.state.color }}>
            - {this.state.author}
          </p>
          <div className="Row">
            <a
              id="tweet-quote"
              href="twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter style={{ color: this.state.color, fontSize: 30 }} />
            </a>
            <button id="new-quote" onClick={this.retrievequote} style={{ backgroundColor: this.state.color }}>New Quote</button>
          </div>
        </div >
        <p className="textmadeby">By - Tanmay Newatia</p>
      </div>
    );
  }
}
