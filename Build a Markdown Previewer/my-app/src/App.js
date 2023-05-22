/*import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactMarkdown from "marked-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "# Welcome to my React Markdown Previewer!\n ## This is a sub-heading...\n ### And here's some other cool stuff:\n Heres some code, `<div></div>`, between 2 backticks.\n\n ```// this is multi-line code: function anotherExample(firstLine, lastLine) {if (firstLine == '```' && lastLine == '```') {return multiLineCode;}}```\n\n You can also make text **bold**... whoa! Or _italic_. Or... wait for it... **_both!_** And feel free to go crazy ~~crossing stuff out~~.\n\n There's also [links](https://www.freecodecamp.org), and\n\n > Block Quotes!\n\n And if you want to get really crazy, even tables:\n\n Wild Header | Crazy Header | Another Header?\n\n ------------ | ------------- | -------------\n\n Your content can | be here, and it | can be here....\n\n And here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n      - With different indentation levels.\n- That look like this.\n 1. And there are numbered lists too.\n 1. Use just 1s if you want!\n 1. And last but not least, let's not forget embedded images: ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    }
    this.Change();
    this.Change = this.Change.bind(this);
  }
  Change = async (event) => {
    this.setState({
      data: event.target.value,
    })
  }
  render() {
    return (
      <div className="App" >
        <div className="editor-header">
          <textarea id="editor" value={this.state.data} onChange={this.Change} id="editor"></textarea>
        </div>
        <div className="preview-header">
          <div id="preview"><ReactMarkdown>{this.state.data}</ReactMarkdown></div>
        </div>
      </div>
    );
  }
}

export default App;*/
