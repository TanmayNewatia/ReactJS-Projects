/*import './App.css';
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

var currentcolor = "";
const selectcol = () => {
  currentcolor = colors[Math.floor(Math.random() * colors.length)];
}

var currentquote = "", currentauthor = "";

const getquotes = async () => {
  var url = "https://type.fit/api/quotes";
  const response = await fetch(url, {method: "GET"});
  const json = await response.json();
  return JSON.stringify(json);
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      color: "",
      text: "",
      author: "",
    };
    this.retrievequote = this.retrievequote.bind(this);
  }
  retrievequote = async () => {
    var all=await getquotes();
    all=JSON.parse(all);
    const quote=all[Math.floor(Math.random()*all.length)];
    console.log(quote); 
  }
  render(){
  return (
    <div id="quote-box">
      <p id="text">
        <FaQuoteLeft style={{ color: currentcolor, fontSize: 40 }} />
        {currentquote}
      </p>
      <p id="author">
        {currentauthor}
      </p>
      <a
        id="tweet-quote"
        href="twitter.com/intent/tweet"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter style={{ color: currentcolor, fontSize: 30 }} />
      </a>
      <button id="new-quote">New Quote</button>
    </div >
  );
}}

export default App;*/
