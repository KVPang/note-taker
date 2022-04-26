const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.port || 3001;
const myNotes = require('./db/db.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function makeNote () {
    const newNote = 

}


// bonus 
function deleteNote() {


}