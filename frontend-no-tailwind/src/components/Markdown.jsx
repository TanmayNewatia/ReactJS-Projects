import React from 'react';
import ReactMarkdown from "marked-react";
import '../styles/markdown.css';
import { MdOpenInFull } from "react-icons/md";

export default class Markdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",
        }
        this.Change();
        this.Change = this.Change.bind(this);
        this.Resize();
        this.Resize = this.Resize.bind(this);
    }
    Change = async () => {
        const val = document.getElementById("editor");
        if (val) {
            this.setState({
                data: val.value,
            })
        }
    }

    Resize = (div) => {
        const preview = document.getElementById("preview");
        const editor = document.getElementById("editor");
        if (preview && editor) {
            if (div == "1") {
                console.log("Hello")
                preview.style.height = "auto";
                editor.style.height = "300px";
            }
            else {
                console.log("Hello")
                preview.style.height = "300px";
                editor.style.height = "1000px";
            }
        }
    }

    render() {
        document.body.style.backgroundColor = "#474747";
        return (
            <div className="markdownApp" >
                <div className="editor-header">
                    <div className="head-editor">
                        <p>Text Editor</p>
                        <button onClick={() => { this.Resize(0) }} className="btn-markdown"><MdOpenInFull /></button>
                    </div>
                    <textarea id="editor" value={this.state.data} onChange={this.Change}></textarea>
                </div>
                <div className="preview-header">
                    <div className="head-preview">
                        <p>Text Previewer</p>
                        <button onClick={() => { this.Resize(1) }} className="btn-markdown"><MdOpenInFull /></button>
                    </div>
                    <div id="preview"><ReactMarkdown>{this.state.data}</ReactMarkdown></div>
                </div>
                <p className="markdowncredits">Designed and Made By: Tanmay Newatia</p>
            </div>
        );
    }
}