import React, { Component } from "react";
import JournalEntry from "./journal_entry.js";

const rawJournalData = [
    { title: "Post one", content: "Post content", status: "draft" },
    { title: "Post two", content: "Post content", status: "published" },
    { title: "Post three", content: "Post content", status: "published" },
    { title: "Post four", content: "Post content", status: "published" }
];



// Class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            greeting: "Hi there",
            isOpen: true
        };
    }

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false });
    };
    showAllEntries = () => {
        this.setState({ journalData: [], isOpen: false });
    };

    toggleStatus = () => {
        if (this.state.isOpen) {
            this.setState({ journalData: [], isOpen: false });
        } else {
            this.setState({ journalData: rawJournalData, isOpen: true });
        }
    };
    render() {
        const JournalEntries = this.state.journalData.map(journalEntry => {
            return (
                <div key={journalEntry.title}>
                    <JournalEntry
                        title={journalEntry.title}
                        content={journalEntry.content}
                        status={journalEntry.status}
                    />
                </div>
            );
        });

        return <div>
            <h2>{this.props.heading}</h2>
            {JournalEntries}

            <button onClick={this.clearEntries}>Clear Journal Entries</button>
            <button onClick={this.showAllEntries}>Show All Entries</button>
            <button onClick={this.toggleStatus}>Toggle Status</button>
        </div>

    }
}
