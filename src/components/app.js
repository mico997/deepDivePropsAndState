import React, { Component } from "react";
import JournalList from "./Journals/journal_list.js";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React, Propas, and State Deep Dive</h1>;
        <JournalList heading="List 1" />;

      </div>
    );
  }
}
