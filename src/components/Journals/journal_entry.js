import React, { Component } from "react";

export default function JournalEntry(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}. status: {props.status}</p>

        </div>
    );
};